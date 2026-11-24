import { Request, Response } from 'express';
import mongoose from 'mongoose';
import openai, { isOpenAIConfigured } from '../config/openai';
import AIConversation from '../models/AIConversation';
import Syllabus from '../models/Syllabus';
import Exam from '../models/Exam';
import TestAttempt from '../models/TestAttempt';
import { AIMentorKnowledgeBase, AIMentorRequest, AIMentorResponse } from '../services/aiMentorKnowledgeBase';

// Helper: Query external LLM (Gemini or OpenAI) with graceful fallback
async function fetchLLMAnswer(systemPrompt: string, userQuery: string, historyContext?: string): Promise<string | null> {
  // 1. Try Google Gemini API if configured
  const geminiKey = process.env.GEMINI_API_KEY;
  if (geminiKey && !geminiKey.includes('your_') && geminiKey.length > 15) {
    const candidateModels = [
      process.env.GEMINI_MODEL || 'gemini-flash-lite-latest',
      'gemini-3.5-flash-lite',
      'gemini-flash-latest',
      'gemini-3.8-flash'
    ];

    const fullPrompt = `${systemPrompt}${historyContext ? `\n\n${historyContext}` : ''}\n\nStudent Question:\n${userQuery}`;

    for (const model of candidateModels) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: fullPrompt }]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2500
            }
          }),
          signal: AbortSignal.timeout(10000)
        });

        if (response.ok) {
          const data: any = await response.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text && text.trim()) return text.trim();
        } else {
          const errData: any = await response.json().catch(() => null);
          console.warn(`[AI Tutor] Gemini (${model}) HTTP ${response.status}:`, errData?.error?.message || response.statusText);
        }
      } catch (err) {
        console.warn(`[AI Tutor] Gemini (${model}) call error:`, (err as any)?.message);
      }
    }
  }

  // 2. Try OpenAI Chat Completions API if configured
  if (isOpenAIConfigured()) {
    try {
      const model = (process.env.OPENAI_MODEL && !process.env.OPENAI_MODEL.includes('gpt-6')) 
        ? process.env.OPENAI_MODEL 
        : 'gpt-4o-mini';

      const messages: any[] = [{ role: 'system', content: systemPrompt }];
      if (historyContext) {
        messages.push({ role: 'system', content: `Context from earlier in this session:\n${historyContext}` });
      }
      messages.push({ role: 'user', content: userQuery });

      const completion = await openai.chat.completions.create({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 1800
      });

      const text = completion.choices[0]?.message?.content?.trim();
      if (text) return text;
    } catch (err) {
      console.warn('OpenAI API call warning:', (err as any)?.message);
    }
  }

  return null;
}

// Helper: Get authenticated user ID
const getUserId = (req: Request): string | undefined => {
  const user = (req as any).user;
  const id = user?.id ?? user?._id;
  if (typeof id === 'string') return id;
  if (id instanceof mongoose.Types.ObjectId) return id.toString();
  return undefined;
};

const isValidObjectId = (value: unknown): value is string => {
  return typeof value === 'string' && mongoose.Types.ObjectId.isValid(value);
};

// ==========================================
// POST: ASK AI TUTOR / CHATBOT
// ==========================================
export const askAITutor = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    const {
      question,
      mode = 'academic_doubt',
      examId,
      subject,
      topic,
      difficulty = 'intermediate',
      language = 'en',
      documentText,
      documentName,
      conversationId
    } = req.body;

    // 1. Question validation
    if (typeof question !== 'string' || !question.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Question must be a valid non-empty string.'
      });
    }

    // 2. Fetch Exam & Syllabus context if examId provided
    let examObjectId: mongoose.Types.ObjectId | undefined;
    let examName = 'Competitive Examination';
    let examCategory = 'General Education';

    if (examId && isValidObjectId(examId)) {
      examObjectId = new mongoose.Types.ObjectId(examId);
      const foundExam = await Exam.findById(examObjectId).select('name category');
      if (foundExam) {
        examName = foundExam.name;
        examCategory = foundExam.category;
      }
    }

    // 3. Gather Student Performance Context if logged in
    let userContext: AIMentorRequest['userContext'] = undefined;
    if (userId && isValidObjectId(userId)) {
      const userObjectId = new mongoose.Types.ObjectId(userId);
      const attempts = await TestAttempt.find({ userId: userObjectId }).select('score maxScore accuracyPercentage testId');
      if (attempts.length > 0) {
        const totalAcc = attempts.reduce((acc, a) => acc + (a.accuracyPercentage || 0), 0);
        userContext = {
          name: (req as any).user?.name,
          testsAttempted: attempts.length,
          averageAccuracy: Math.round(totalAcc / attempts.length)
        };
      }
    }

    // 4. Prepare Mentor Request payload
    const mentorReq: AIMentorRequest = {
      question: question.trim(),
      mode,
      examId,
      examName,
      subject: subject || 'General Academic',
      topic: topic || '',
      difficulty,
      language,
      documentText,
      documentName,
      userContext
    };

    // 5. Query external LLM (Gemini / OpenAI) if configured, with graceful fallback to built-in knowledge base
    let mentorResponse: AIMentorResponse;

    const systemPrompt = `You are ExamSphere AI, a world-class 24/7 AI Examination Mentor and Search Engine for competitive examinations (such as GATE, JEE, NEET, UPSC, SSC, CAT) and universal academic doubt solving.
Target Exam: ${examName} (${examCategory})
Subject: ${subject || 'General'}
Topic: ${topic || 'General'}
Difficulty: ${difficulty}
Language Preference: ${language}
Mode: ${mode}

Instructions:
1. Provide a direct, authoritative, and genuine answer to the student's question immediately in the first paragraph.
2. Structure your explanation cleanly with markdown headers (###), bullet points, and code blocks with language tags (\`\`\`python, \`\`\`cpp, etc.) where programming is involved.
3. Use mathematical formulas ($...$ for inline, $$...$$ for equations) where relevant.
4. Include a concrete example, worked derivation, or step-by-step problem solution.
5. Provide high-yield exam insights or common student mistakes to watch out for.
${documentText ? `Ground your response in this document excerpt when answering:\nDocument: ${documentText.slice(0, 3000)}` : ''}`;

    // Check if continuing an existing conversation and extract recent turns
    let existingConversation: any = null;
    let historyContext = '';
    if (userId && isValidObjectId(userId)) {
      const userObjectId = new mongoose.Types.ObjectId(userId);
      if (conversationId && isValidObjectId(conversationId)) {
        existingConversation = await AIConversation.findOne({
          _id: new mongoose.Types.ObjectId(conversationId),
          userId: userObjectId
        });
        if (existingConversation && existingConversation.messages && existingConversation.messages.length > 0) {
          const recentMsgs = existingConversation.messages.slice(-6);
          historyContext = 'Recent conversation context:\n' + 
            recentMsgs.map((m: any) => `${m.role === 'user' ? 'Student' : 'Mentor'}: ${m.content.slice(0, 300)}`).join('\n');
        }
      }
    }

    const llmAnswer = await fetchLLMAnswer(systemPrompt, question.trim(), historyContext);

    if (llmAnswer) {
      const localFallback = await AIMentorKnowledgeBase.generateMentorResponse(mentorReq);
      mentorResponse = {
        answer: llmAnswer,
        mode,
        language,
        examName,
        subject,
        topic,
        mcqs: localFallback.mcqs,
        flashcards: localFallback.flashcards,
        citations: localFallback.citations || ['Official Examination Syllabus', 'ExamSphere AI Intelligence Repository'],
        suggestedPrompts: localFallback.suggestedPrompts
      };
    } else {
      // Use built-in high-accuracy Domain Knowledge Base & Universal Problem-Solving Synthesizer
      mentorResponse = await AIMentorKnowledgeBase.generateMentorResponse(mentorReq);
    }

    // 6. Save conversation to MongoDB if user is authenticated
    let savedConversationId: string | undefined = undefined;

    if (userId && isValidObjectId(userId)) {
      const userObjectId = new mongoose.Types.ObjectId(userId);

      let conversation = existingConversation;
      if (!conversation && conversationId && isValidObjectId(conversationId)) {
        conversation = await AIConversation.findOne({
          _id: new mongoose.Types.ObjectId(conversationId),
          userId: userObjectId
        });
      }

      if (!conversation) {
        conversation = new AIConversation({
          userId: userObjectId,
          ...(examObjectId ? { examId: examObjectId } : {}),
          subject: subject || 'General Academic',
          topic: topic || '',
          mode,
          title: question.trim().slice(0, 60)
        });
      }

      conversation.messages.push(
        {
          role: 'user',
          content: question.trim(),
          mode,
          language,
          createdAt: new Date()
        },
        {
          role: 'assistant',
          content: mentorResponse.answer,
          mode,
          language,
          mcqs: mentorResponse.mcqs,
          flashcards: mentorResponse.flashcards,
          createdAt: new Date()
        }
      );

      await conversation.save();
      savedConversationId = conversation._id.toString();
    }

    // 7. Return complete intelligent response
    return res.status(200).json({
      success: true,
      message: 'AI Mentor response generated successfully',
      data: {
        conversationId: savedConversationId || conversationId,
        examName: mentorResponse.examName || examName,
        subject: mentorResponse.subject || subject,
        topic: mentorResponse.topic || topic,
        mode: mentorResponse.mode || mode,
        language: mentorResponse.language || language,
        answer: mentorResponse.answer,
        mcqs: mentorResponse.mcqs,
        flashcards: mentorResponse.flashcards,
        citations: mentorResponse.citations,
        suggestedPrompts: mentorResponse.suggestedPrompts
      }
    });

  } catch (error: any) {
    console.error('AI Tutor Controller Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to generate AI Mentor response. Please try again.'
    });
  }
};

// ==========================================
// GET: CONVERSATION SESSIONS FOR USER
// ==========================================
export const getAIHistory = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    if (!isValidObjectId(userId)) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required to view saved chat sessions'
      });
    }

    const examId = req.params.examId;
    const userObjectId = new mongoose.Types.ObjectId(userId);

    const filter: Record<string, unknown> = { userId: userObjectId };
    if (examId && examId !== 'all' && isValidObjectId(examId)) {
      filter.examId = new mongoose.Types.ObjectId(examId);
    }

    const conversations = await AIConversation.find(filter)
      .select('title subject topic mode messages createdAt updatedAt')
      .sort({ updatedAt: -1 })
      .limit(30);

    return res.status(200).json({
      success: true,
      count: conversations.length,
      data: conversations
    });
  } catch (error) {
    console.error('AI History Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to fetch chat history'
    });
  }
};

// ==========================================
// DELETE: REMOVE A CONVERSATION SESSION
// ==========================================
export const deleteAIConversation = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    const { id } = req.params;

    if (!isValidObjectId(userId)) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    if (!isValidObjectId(id)) {
      return res.status(400).json({ success: false, message: 'Invalid conversation ID' });
    }

    await AIConversation.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id),
      userId: new mongoose.Types.ObjectId(userId)
    });

    return res.status(200).json({
      success: true,
      message: 'Conversation deleted successfully'
    });
  } catch (error) {
    console.error('Delete Conversation Error:', error);
    return res.status(500).json({ success: false, message: 'Unable to delete conversation' });
  }
};

// ==========================================
// DELETE: CLEAR ALL CONVERSATIONS
// ==========================================
export const clearAIHistory = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    if (!isValidObjectId(userId)) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    await AIConversation.deleteMany({
      userId: new mongoose.Types.ObjectId(userId)
    });

    return res.status(200).json({
      success: true,
      message: 'All conversations cleared successfully'
    });
  } catch (error) {
    console.error('Clear AI History Error:', error);
    return res.status(500).json({ success: false, message: 'Unable to clear history' });
  }
};
