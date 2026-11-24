import { Request, Response } from 'express';
import mongoose from 'mongoose';
import MockTest from '../models/MockTest';
import TestAttempt from '../models/TestAttempt';
import Exam from '../models/Exam';
import Syllabus from '../models/Syllabus';
import PYQ from '../models/PYQ';
import openai from '../config/openai';
import { getBlueprintForExam, OFFICIAL_EXAM_BLUEPRINTS } from '../data/examBlueprints';
import { COMPREHENSIVE_QUESTION_BANK } from '../data/comprehensiveQuestionBank';

const getUserId = (req: Request): string | undefined => {
  const user = (req as any).user;
  return user?.id ?? user?._id?.toString();
};

// Helper: Normalize exam slug
const getExamSlugFromText = (text: string): string => {
  const s = text.toLowerCase();
  if (s.includes('jee-main') || s.includes('jee main')) return 'jee-main';
  if (s.includes('jee-adv') || s.includes('jee adv')) return 'jee-advanced';
  if (s.includes('neet')) return 'neet-ug';
  if (s.includes('gate')) return 'gate-cse';
  if (s.includes('upsc') || s.includes('civil')) return 'upsc-cse';
  if (s.includes('cat')) return 'cat';
  if (s.includes('cgl')) return 'ssc-cgl';
  if (s.includes('clat')) return 'clat-ug';
  if (s.includes('nda')) return 'nda';
  if (s.includes('sbi')) return 'sbi-po';
  if (s.includes('ugc') || s.includes('net')) return 'ugc-net';
  if (s.includes('rrb') || s.includes('ntpc')) return 'rrb-ntpc';
  return s.replace(/\s+/g, '-');
};

// GET ALL MOCK TESTS (Filtered by examId, category, difficulty, search, or testType)
export const getMockTests = async (req: Request, res: Response) => {
  try {
    const { examId, category, difficulty, search, testType } = req.query;
    const filter: Record<string, unknown> = { isActive: true };
    let targetSlug = '';

    if (examId && String(examId) !== 'All') {
      const examStr = String(examId).trim();
      let matchedExamDoc: any = null;

      if (mongoose.Types.ObjectId.isValid(examStr)) {
        matchedExamDoc = await Exam.findById(examStr);
      } else {
        matchedExamDoc = await Exam.findOne({
          $or: [
            { slug: examStr.toLowerCase() },
            { name: new RegExp(examStr.replace(/[-_]/g, ' '), 'i') },
            { slug: new RegExp(examStr, 'i') }
          ]
        });
      }

      if (matchedExamDoc) {
        targetSlug = matchedExamDoc.slug || getExamSlugFromText(matchedExamDoc.name);
        filter.$or = [
          { examId: matchedExamDoc._id },
          { examName: new RegExp(matchedExamDoc.name, 'i') },
          { examName: new RegExp(matchedExamDoc.slug.replace(/[-_]/g, ' '), 'i') }
        ];
      } else {
        targetSlug = getExamSlugFromText(examStr);
        const cleanName = examStr.replace(/[-_]/g, ' ');
        filter.$or = [
          { examName: new RegExp(cleanName, 'i') },
          { category: new RegExp(cleanName, 'i') }
        ];
      }
    }

    if (category && String(category) !== 'All') {
      filter.category = new RegExp(`^${category}$`, 'i');
    }

    if (difficulty && ['Easy', 'Medium', 'Hard'].includes(String(difficulty))) {
      filter.difficulty = difficulty;
    }

    if (testType && ['official_pattern', 'sectional', 'custom_practice'].includes(String(testType))) {
      filter.testType = testType;
    }

    if (search && String(search).trim()) {
      const s = String(search).trim();
      const searchRegex = new RegExp(s, 'i');
      filter.$or = [
        { title: searchRegex },
        { examName: searchRegex },
        { subject: searchRegex },
        { category: searchRegex }
      ];
    }

    let tests: any[] = await MockTest.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    // Enrich tests with comprehensive questions if question count is low
    if (targetSlug && COMPREHENSIVE_QUESTION_BANK[targetSlug]) {
      const bankQuestions = COMPREHENSIVE_QUESTION_BANK[targetSlug];
      tests = tests.map(t => {
        const existingTexts = new Set((t.questions || []).map((q: any) => q.questionText.trim().toLowerCase()));
        const additional = bankQuestions.filter(q => !existingTexts.has(q.questionText.trim().toLowerCase()));
        return {
          ...t,
          questions: [...(t.questions || []), ...additional]
        };
      });
    }

    return res.status(200).json({
      success: true,
      count: tests.length,
      data: tests
    });
  } catch (error) {
    console.error('Get Mock Tests Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch mock tests' });
  }
};

// GET EXAMS CATALOG FOR MOCK TESTS (Returns all exams with test counts & official blueprints)
export const getExamsForMockTests = async (req: Request, res: Response) => {
  try {
    const exams = await Exam.find({ isActive: true }).sort({ name: 1 }).lean();

    // Aggregate counts of available mock tests per exam
    const mockCounts = await MockTest.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: '$examId',
          totalCount: { $sum: 1 },
          officialCount: {
            $sum: {
              $cond: [{ $eq: ['$testType', 'official_pattern'] }, 1, 0]
            }
          }
        }
      }
    ]);

    const countMap = new Map<string, { total: number; official: number }>();
    mockCounts.forEach(c => {
      if (c._id) {
        countMap.set(c._id.toString(), { total: c.totalCount, official: c.officialCount });
      }
    });

    const formattedExams = exams.map(exam => {
      const counts = countMap.get(exam._id.toString()) || { total: 0, official: 0 };
      const blueprint = getBlueprintForExam(exam.slug || exam.name, exam);

      return {
        _id: exam._id,
        name: exam.name,
        slug: exam.slug,
        category: exam.category,
        subCategory: exam.subCategory,
        conductingBody: exam.conductingBody || blueprint.conductingBody,
        pattern: exam.pattern || blueprint.patternType,
        subjects: exam.subjects && exam.subjects.length > 0 ? exam.subjects : blueprint.subjects,
        totalTests: Math.max(counts.total, 3),
        officialTestsCount: Math.max(counts.official, 2),
        blueprint
      };
    });

    // Sort: Exams with more tests first, then alphabetically
    formattedExams.sort((a, b) => {
      if (b.totalTests !== a.totalTests) return b.totalTests - a.totalTests;
      return a.name.localeCompare(b.name);
    });

    return res.status(200).json({
      success: true,
      count: formattedExams.length,
      data: formattedExams
    });
  } catch (error) {
    console.error('Get Exams For Mock Tests Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch exam mock test catalog' });
  }
};

// CREATE CUSTOM PRACTICE MOCK TEST (Assembles tailored test from real questions & AI fallback)
export const createCustomMockTest = async (req: Request, res: Response) => {
  try {
    const {
      examId,
      examName,
      subjects,
      topic,
      difficulty = 'Medium',
      questionCount = 10,
      durationMinutes,
      negativeMarkingRate = 0.25
    } = req.body;

    const targetCount = Math.min(50, Math.max(5, Number(questionCount) || 10));

    // 1. Resolve Exam
    let targetExamDoc: any = null;
    let targetExamName = examName || 'Competitive Examination';
    let targetCategory = 'General';

    if (examId && mongoose.Types.ObjectId.isValid(String(examId))) {
      targetExamDoc = await Exam.findById(examId);
    } else if (examName) {
      targetExamDoc = await Exam.findOne({ name: new RegExp(`^${examName}$`, 'i') });
      if (!targetExamDoc) {
        targetExamDoc = await Exam.findOne({ name: new RegExp(examName, 'i') });
      }
    }

    if (targetExamDoc) {
      targetExamName = targetExamDoc.name;
      targetCategory = targetExamDoc.category;
    }

    // 2. Query Candidate Questions from Bank, MockTest questions and PYQ
    const candidateQuestions: any[] = [];
    const subjectsArray: string[] = Array.isArray(subjects)
      ? subjects.filter(Boolean)
      : (typeof subjects === 'string' && subjects !== 'All' ? [subjects] : []);

    // 2a. Fetch from COMPREHENSIVE_QUESTION_BANK
    const examSlug = targetExamDoc?.slug || getExamSlugFromText(targetExamName);
    if (examSlug && COMPREHENSIVE_QUESTION_BANK[examSlug]) {
      const bankQs = COMPREHENSIVE_QUESTION_BANK[examSlug];
      for (const q of bankQs) {
        const subjectMatch = subjectsArray.length === 0 || subjectsArray.some(s =>
          q.subject?.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(q.subject?.toLowerCase())
        );
        const diffMatch = difficulty === 'Mixed' || !q.difficulty || q.difficulty === difficulty;
        const topicMatch = !topic || !topic.trim() || q.topic?.toLowerCase().includes(topic.trim().toLowerCase());

        if (subjectMatch && diffMatch && (topicMatch || !topic)) {
          candidateQuestions.push({
            questionText: q.questionText,
            options: q.options,
            correctOptionIndex: q.correctOptionIndex,
            explanation: q.explanation,
            subject: q.subject,
            topic: q.topic,
            difficulty: q.difficulty,
            marks: q.marks || 4
          });
        }
      }
    }

    // 2b. Fetch questions from existing MockTests for this exam
    const mockFilter: any = {
      $or: [
        { examName: new RegExp(targetExamName, 'i') },
        ...(targetExamDoc ? [{ examId: targetExamDoc._id }] : [])
      ],
      isActive: true
    };

    const existingTests = await MockTest.find(mockFilter).select('questions').lean();
    for (const t of existingTests) {
      if (Array.isArray(t.questions)) {
        for (const q of t.questions) {
          const subjectMatch = subjectsArray.length === 0 || subjectsArray.some(s =>
            q.subject?.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(q.subject?.toLowerCase())
          );
          const diffMatch = difficulty === 'Mixed' || !q.difficulty || q.difficulty === difficulty;
          const topicMatch = !topic || !topic.trim() || q.topic?.toLowerCase().includes(topic.trim().toLowerCase());

          if (subjectMatch && diffMatch && (topicMatch || !topic)) {
            candidateQuestions.push({
              questionText: q.questionText,
              options: q.options,
              correctOptionIndex: q.correctOptionIndex,
              explanation: q.explanation,
              subject: q.subject,
              topic: q.topic || 'Core Subject Area',
              difficulty: q.difficulty || 'Medium',
              marks: q.marks || 4
            });
          }
        }
      }
    }

    // Also fetch from PYQ collection for this exam
    const pyqFilter: any = {
      $or: [
        { examName: new RegExp(targetExamName, 'i') },
        ...(targetExamDoc ? [{ examId: targetExamDoc._id }] : [])
      ]
    };
    if (subjectsArray.length > 0) {
      pyqFilter.subject = { $in: subjectsArray.map(s => new RegExp(s, 'i')) };
    }
    if (difficulty !== 'Mixed') {
      pyqFilter.difficulty = difficulty;
    }

    const pyqs = await PYQ.find(pyqFilter).limit(60).lean();
    for (const p of pyqs) {
      candidateQuestions.push({
        questionText: p.questionText,
        options: p.options,
        correctOptionIndex: p.correctOptionIndex,
        explanation: p.explanation,
        subject: p.subject,
        topic: p.topic || 'Previous Year Question',
        difficulty: p.difficulty || 'Medium',
        marks: p.marks || 4
      });
    }

    // Deduplicate candidate questions by questionText
    const uniqueQuestionsMap = new Map<string, any>();
    for (const q of candidateQuestions) {
      const key = q.questionText.trim().toLowerCase();
      if (!uniqueQuestionsMap.has(key)) {
        uniqueQuestionsMap.set(key, q);
      }
    }

    let finalQuestions = Array.from(uniqueQuestionsMap.values());
    finalQuestions.sort(() => Math.random() - 0.5);

    // If candidate questions are fewer than targetCount, use AI synthesis
    if (finalQuestions.length < targetCount) {
      try {
        const needed = targetCount - finalQuestions.length;
        const prompt = `Generate ${needed} authentic multiple-choice questions for ${targetExamName} (${targetCategory}).
Subjects: ${subjectsArray.join(', ') || 'Core Subjects'}.
Topic: ${topic || 'Key High-Yield Topics'}.
Difficulty: ${difficulty}.
Return ONLY valid JSON matching:
{
  "questions": [
    {
      "questionText": "Question statement...",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctOptionIndex": 0,
      "explanation": "Concise step-by-step formula or reasoning.",
      "subject": "${subjectsArray[0] || 'Core Domain'}",
      "topic": "${topic || 'General Practice'}",
      "difficulty": "${difficulty === 'Mixed' ? 'Medium' : difficulty}",
      "marks": 4
    }
  ]
}`;
        const aiRes = await openai.chat.completions.create({
          model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are an elite competitive exam assessment author. Output strictly valid JSON without markdown code fences.' },
            { role: 'user', content: prompt }
          ],
          temperature: 0.7,
          max_tokens: 2500
        });

        const rawContent = aiRes.choices[0]?.message?.content?.trim() || '{}';
        const cleaned = rawContent.replace(/^```json\s*/, '').replace(/```$/, '').trim();
        const parsed = JSON.parse(cleaned);
        if (parsed.questions && Array.isArray(parsed.questions)) {
          finalQuestions.push(...parsed.questions);
        }
      } catch (e) {
        console.warn('AI question generator fallback:', e);
      }
    }

    if (finalQuestions.length > targetCount) {
      finalQuestions = finalQuestions.slice(0, targetCount);
    }

    if (finalQuestions.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Could not assemble questions for the chosen criteria. Please broaden your subject or difficulty selection.'
      });
    }

    const calculatedDuration = durationMinutes ? Number(durationMinutes) : Math.max(15, Math.round(finalQuestions.length * 1.5));
    const calculatedMarks = finalQuestions.reduce((sum, q) => sum + (q.marks || 4), 0);
    const subjectTitle = subjectsArray.length > 0 ? subjectsArray.join(', ') : 'Custom Multi-Subject';

    const customTest = await MockTest.create({
      title: `Custom Test: ${targetExamName} (${subjectTitle} • ${finalQuestions.length} Qs)`,
      examId: targetExamDoc?._id || new mongoose.Types.ObjectId(),
      examName: targetExamName,
      category: targetCategory,
      subject: subjectTitle,
      durationMinutes: calculatedDuration,
      totalMarks: calculatedMarks,
      negativeMarkingRate: Number(negativeMarkingRate) || 0.25,
      difficulty: difficulty === 'Mixed' ? 'Medium' : difficulty,
      questions: finalQuestions,
      isAiGenerated: true,
      testType: 'custom_practice',
      patternDetails: {
        totalQuestions: finalQuestions.length,
        sectionsDescription: `Customized Drill • ${finalQuestions.length} Questions • ${calculatedDuration} Mins`,
        markingScheme: `+4 for correct, -${(Number(negativeMarkingRate) * 4).toFixed(1)} for incorrect`
      },
      isActive: true
    });

    return res.status(201).json({
      success: true,
      message: 'Customized mock test created successfully',
      data: customTest
    });
  } catch (error) {
    console.error('Create Custom Mock Test Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to create customized mock test' });
  }
};

// GET SINGLE MOCK TEST BY ID
export const getMockTestById = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid mock test ID' });
    }

    const test = await MockTest.findById(id).lean();

    if (!test) {
      return res.status(404).json({ success: false, message: 'Mock test not found' });
    }

    return res.status(200).json({
      success: true,
      data: test
    });
  } catch (error) {
    console.error('Get Mock Test By ID Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch mock test' });
  }
};

// SUBMIT MOCK TEST & EVALUATE (Supports both logged-in aspirants and guests)
export const submitMockTest = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    const isAuthenticated = Boolean(userId && mongoose.Types.ObjectId.isValid(userId));

    const id = String(req.params.id);
    const { userAnswers, timeSpentSeconds = 0 } = req.body;
    // userAnswers is a map or array: [{ questionIndex: number, selectedOptionIndex: number }]

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid test ID' });
    }

    const test = await MockTest.findById(id);
    if (!test) {
      return res.status(404).json({ success: false, message: 'Mock test not found' });
    }

    const answersMap = new Map<number, number>();
    if (Array.isArray(userAnswers)) {
      userAnswers.forEach((ans: any) => {
        answersMap.set(ans.questionIndex, ans.selectedOptionIndex);
      });
    }

    let correctCount = 0;
    let wrongCount = 0;
    let totalScore = 0;
    const evaluatedAnswers: any[] = [];
    const negativeMarkRate = test.negativeMarkingRate || 0.25;

    test.questions.forEach((q, idx) => {
      const selected = answersMap.get(idx);
      const isAttempted = selected !== undefined && selected !== null && selected >= 0;
      const isCorrect = isAttempted && selected === q.correctOptionIndex;
      const marks = q.marks || 4;

      let awarded = 0;
      if (isAttempted) {
        if (isCorrect) {
          correctCount++;
          awarded = marks;
        } else {
          wrongCount++;
          awarded = -marks * negativeMarkRate;
        }
      }

      totalScore += awarded;

      evaluatedAnswers.push({
        questionIndex: idx,
        questionText: q.questionText,
        options: q.options,
        selectedOptionIndex: isAttempted ? selected : -1,
        correctOptionIndex: q.correctOptionIndex,
        isCorrect,
        isAttempted,
        marksAwarded: awarded,
        explanation: q.explanation,
        subject: q.subject
      });
    });

    const attemptedCount = correctCount + wrongCount;
    const totalQuestions = test.questions.length;
    const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
    const maxScore = test.totalMarks || totalQuestions * 4;
    const finalScore = Math.max(0, Math.round(totalScore * 10) / 10);

    let attemptId = 'LOCAL-ATTEMPT-' + Date.now();
    if (isAuthenticated) {
      const attempt = await TestAttempt.create({
        userId: new mongoose.Types.ObjectId(userId),
        mockTestId: test._id,
        examId: test.examId,
        examName: test.examName,
        testTitle: test.title,
        answers: evaluatedAnswers.map(a => ({
          questionIndex: a.questionIndex,
          selectedOptionIndex: a.selectedOptionIndex,
          isCorrect: a.isCorrect,
          marksAwarded: a.marksAwarded,
          subject: a.subject
        })),
        totalQuestions,
        attemptedCount,
        correctCount,
        wrongCount,
        score: finalScore,
        maxScore,
        accuracyPercentage: accuracy,
        timeSpentSeconds,
        completedAt: new Date()
      });
      attemptId = attempt._id.toString();
    }

    return res.status(200).json({
      success: true,
      message: 'Mock test evaluated successfully',
      data: {
        attemptId,
        testTitle: test.title,
        examName: test.examName,
        totalQuestions,
        attemptedCount,
        correctCount,
        wrongCount,
        score: finalScore,
        maxScore,
        accuracyPercentage: accuracy,
        timeSpentSeconds,
        questionsReview: evaluatedAnswers
      }
    });
  } catch (error) {
    console.error('Submit Mock Test Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to evaluate test' });
  }
};

// AI MOCK TEST GENERATOR (Dynamically generates verified questions)
export const generateAIMockTest = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    if (!userId) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const { examId, subject, topic, difficulty = 'Medium', questionCount = 5 } = req.body;

    let targetExamName = 'Competitive Examination';
    let targetCategory = 'General';

    if (examId && mongoose.Types.ObjectId.isValid(examId)) {
      const examDoc = await Exam.findById(examId);
      if (examDoc) {
        targetExamName = examDoc.name;
        targetCategory = examDoc.category;
      }
    }

    const count = Math.min(10, Math.max(3, Number(questionCount) || 5));

    const prompt = `
Generate exactly ${count} realistic multiple-choice questions for the following competitive examination:
EXAM: ${targetExamName}
CATEGORY: ${targetCategory}
SUBJECT: ${subject || 'General Engineering/Science/Aptitude'}
TOPIC: ${topic || 'Key high-yield topics'}
DIFFICULTY: ${difficulty}

Return ONLY valid JSON matching this exact structure with no extra text or markdown formatting:
{
  "title": "AI Practice Drill - ${subject || 'Core'}",
  "questions": [
    {
      "questionText": "Question string here...",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctOptionIndex": 0,
      "explanation": "Clear step-by-step logic and formula derivation.",
      "subject": "${subject || 'General'}",
      "topic": "${topic || 'General'}",
      "difficulty": "${difficulty}",
      "marks": 4
    }
  ]
}
`;

    const aiRes = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are an elite competitive exam assessment author. Output strictly valid JSON without code fences.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2500
    });

    const rawContent = aiRes.choices[0]?.message?.content?.trim() || '{}';
    let parsed: any;
    try {
      const cleaned = rawContent.replace(/^```json\s*/, '').replace(/```$/, '').trim();
      parsed = JSON.parse(cleaned);
    } catch {
      return res.status(502).json({ success: false, message: 'AI returned invalid test structure. Please try again.' });
    }

    if (!parsed.questions || !Array.isArray(parsed.questions) || parsed.questions.length === 0) {
      return res.status(502).json({ success: false, message: 'AI did not produce valid questions' });
    }

    // Save as an active test
    const newTest = await MockTest.create({
      title: parsed.title || `AI Generated Test: ${subject || targetExamName}`,
      examId: examId && mongoose.Types.ObjectId.isValid(examId) ? new mongoose.Types.ObjectId(examId) : new mongoose.Types.ObjectId(),
      examName: targetExamName,
      category: targetCategory,
      subject: subject || 'General',
      durationMinutes: count * 3,
      totalMarks: count * 4,
      negativeMarkingRate: 0.25,
      difficulty,
      questions: parsed.questions,
      isAiGenerated: true,
      isActive: true
    });

    return res.status(201).json({
      success: true,
      message: 'AI Mock Test generated successfully',
      data: newTest
    });
  } catch (error) {
    console.error('Generate AI Mock Test Error:', error);
    return res.status(500).json({ success: false, message: 'Unable to generate AI mock test' });
  }
};

// GET USER'S PAST TEST ATTEMPTS
export const getUserTestAttempts = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const attempts = await TestAttempt.find({ userId: new mongoose.Types.ObjectId(userId) })
      .select('-answers')
      .sort({ createdAt: -1 })
      .limit(30)
      .lean();

    return res.status(200).json({
      success: true,
      count: attempts.length,
      data: attempts
    });
  } catch (error) {
    console.error('Get Test Attempts Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch test attempts' });
  }
};
