import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import UserActivity from '../models/UserActivity';
import SavedExam from '../models/SavedExam';
import TestAttempt from '../models/TestAttempt';
import AIConversation from '../models/AIConversation';
import SyllabusProgress from '../models/SyllabusProgress';

// GET RECENT TIMELINE ACTIVITIES (GENUINE LOGGED RECORDS ONLY)
export const getActivities = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    let activities: any[] = [];

    if (userId) {
      activities = await UserActivity.find({ userId }).sort({ createdAt: -1 }).limit(25);
    }

    res.status(200).json({
      success: true,
      message: 'Activities retrieved.',
      data: activities
    });
  } catch (error) {
    console.error('getActivities Error:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve activities.' });
  }
};

// GET MOCK TEST HISTORY (ACTUAL STUDENT ATTEMPTS ONLY)
export const getMockTestHistory = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    let history: any[] = [];

    if (userId) {
      const attempts = await TestAttempt.find({ userId }).sort({ completedAt: -1 }).limit(30);
      if (attempts.length) {
        history = attempts.map(a => ({
          testTitle: a.testTitle,
          examName: a.examName,
          score: a.score,
          maxScore: a.maxScore,
          accuracyPercentage: a.accuracyPercentage,
          attemptedCount: a.attemptedCount,
          totalQuestions: a.totalQuestions,
          timeSpentSeconds: a.timeSpentSeconds,
          completedAt: a.completedAt,
          status: a.accuracyPercentage >= 80 ? 'Master' : a.accuracyPercentage >= 60 ? 'Good' : 'Needs Practice'
        }));
      }
    }

    res.status(200).json({
      success: true,
      message: 'Mock test history retrieved.',
      data: history
    });
  } catch (error) {
    console.error('getMockTestHistory Error:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve mock test history.' });
  }
};

// GET STUDY HISTORY (GENUINE SYLLABUS TOPIC PROGRESS)
export const getStudyHistory = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    let studyHistory: any[] = [];

    if (userId) {
      const progresses = await SyllabusProgress.find({ userId }).populate('examId', 'name subjects').sort({ updatedAt: -1 }).limit(20);
      if (progresses.length) {
        progresses.forEach((p: any) => {
          const examDoc = p.examId as any;
          const examName = examDoc?.name || 'Competitive Exam';
          const completedCount = p.topics?.filter((t: any) => t.completed).length || 0;
          const totalCount = p.topics?.length || 0;
          studyHistory.push({
            subject: examDoc?.subjects?.[0] || examName,
            exam: examName,
            topicsCompleted: completedCount,
            totalTopics: totalCount,
            masteryPercentage: totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0,
            hoursSpent: Math.round(completedCount * 1.5 * 10) / 10,
            lastStudied: p.updatedAt
          });
        });
      }
    }

    res.status(200).json({
      success: true,
      message: 'Study history retrieved.',
      data: studyHistory
    });
  } catch (error) {
    console.error('getStudyHistory Error:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve study history.' });
  }
};

// GET AI MENTOR HISTORY (ACTUAL SAVED SESSIONS)
export const getAiHistory = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    let queries: any[] = [];

    if (userId) {
      const conversations = await AIConversation.find({ userId }).sort({ updatedAt: -1 }).limit(15);
      if (conversations.length) {
        queries = conversations.map(c => ({
          id: c._id,
          title: c.title,
          subject: c.subject || 'General Academic',
          messageCount: c.messages.length,
          lastQuestion: c.messages[c.messages.length - 2]?.content || c.messages[0]?.content || 'Doubt answered',
          updatedAt: c.updatedAt
        }));
      }
    }

    res.status(200).json({
      success: true,
      message: 'AI query history retrieved.',
      data: queries
    });
  } catch (error) {
    console.error('getAiHistory Error:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve AI history.' });
  }
};

// GET SAVED EXAMS (ACTUAL BOOKMARKED EXAMS)
export const getSavedExams = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    let saved: any[] = [];

    if (userId) {
      saved = await SavedExam.find({ userId }).sort({ savedAt: -1 });
    }

    res.status(200).json({
      success: true,
      message: 'Saved exams retrieved.',
      data: saved
    });
  } catch (error) {
    console.error('getSavedExams Error:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve saved exams.' });
  }
};

// TOGGLE SAVE EXAM
export const toggleSaveExam = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Authentication required.' });
      return;
    }

    const { examId, examName, category, targetYear, examDate, notes } = req.body;
    if (!examId || !examName) {
      res.status(400).json({ success: false, message: 'Exam ID and name are required.' });
      return;
    }

    const existing = await SavedExam.findOne({ userId: req.user.id, examId });
    if (existing) {
      await SavedExam.deleteOne({ _id: existing._id });
      res.status(200).json({
        success: true,
        message: 'Exam removed from bookmarks.',
        saved: false
      });
      return;
    }

    const newSaved = await SavedExam.create({
      userId: req.user.id,
      examId,
      examName,
      category: category || 'National',
      targetYear: targetYear || new Date().getFullYear() + 1,
      examDate: examDate || 'Upcoming',
      notes: notes || ''
    });

    // Also log activity
    await UserActivity.create({
      userId: req.user.id,
      activityType: 'saved_exam',
      title: `Bookmarked: ${examName}`,
      description: `Saved examination to your dashboard for tracking syllabus and deadlines.`,
      metadata: { examId, category }
    });

    res.status(201).json({
      success: true,
      message: 'Exam bookmarked successfully.',
      saved: true,
      data: newSaved
    });
  } catch (error) {
    console.error('toggleSaveExam Error:', error);
    res.status(500).json({ success: false, message: 'Failed to toggle exam bookmark.' });
  }
};

// GET ACHIEVEMENTS (CALCULATED GENUINELY FROM STUDENT DATABASE STATS)
export const getAchievements = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    let attemptsCount = 0;
    let totalQuestions = 0;
    let aiCount = 0;
    let savedCount = 0;
    let completedTopicsCount = 0;
    let latestAttemptDate: string | undefined = undefined;

    if (userId) {
      const attempts = await TestAttempt.find({ userId }).select('attemptedCount completedAt');
      attemptsCount = attempts.length;
      totalQuestions = attempts.reduce((acc, a) => acc + (a.attemptedCount || 0), 0);
      if (attempts.length > 0) {
        latestAttemptDate = new Date(attempts[attempts.length - 1].completedAt).toLocaleDateString();
      }

      aiCount = await AIConversation.countDocuments({ userId });
      savedCount = await SavedExam.countDocuments({ userId });
      const userProgressDocs = await SyllabusProgress.find({ userId });
      completedTopicsCount = userProgressDocs.reduce((acc, doc) => acc + (doc.topics?.filter(t => t.completed).length || 0), 0);
    }

    const dynamicAchievements = [
      {
        id: 'first_mock',
        title: 'First Step',
        description: 'Complete your first full-length or sectional mock test on ExamSphere AI.',
        badgeIcon: '🎯',
        category: 'Testing',
        unlocked: attemptsCount >= 1,
        unlockedAt: latestAttemptDate || undefined,
        progress: attemptsCount >= 1 ? 100 : 0
      },
      {
        id: 'ai_curious',
        title: 'Curious Scholar',
        description: 'Ask and resolve 5+ academic doubts with the AI Examination Mentor.',
        badgeIcon: '💡',
        category: 'AI Learning',
        unlocked: aiCount >= 5,
        unlockedAt: aiCount >= 5 ? 'Earned' : undefined,
        progress: Math.min(100, Math.round((aiCount / 5) * 100))
      },
      {
        id: 'century_club',
        title: 'Century Club',
        description: 'Solve over 100 verified questions across mock tests and practice arenas.',
        badgeIcon: '🏆',
        category: 'Problem Solving',
        unlocked: totalQuestions >= 100,
        unlockedAt: totalQuestions >= 100 ? 'Earned' : undefined,
        progress: Math.min(100, Math.round((totalQuestions / 100) * 100))
      },
      {
        id: 'saved_goals',
        title: 'Goal Setter',
        description: 'Bookmark at least 1 target examination to My Saved Exams.',
        badgeIcon: '🔖',
        category: 'Planning',
        unlocked: savedCount >= 1,
        unlockedAt: savedCount >= 1 ? 'Earned' : undefined,
        progress: savedCount >= 1 ? 100 : 0
      },
      {
        id: 'syllabus_hero',
        title: 'Syllabus Navigator',
        description: 'Master at least 5 syllabus topics in your target examination.',
        badgeIcon: '📚',
        category: 'Curriculum',
        unlocked: completedTopicsCount >= 5,
        unlockedAt: completedTopicsCount >= 5 ? 'Earned' : undefined,
        progress: Math.min(100, Math.round((completedTopicsCount / 5) * 100))
      },
      {
        id: 'speed_demon',
        title: 'Speed Demon',
        description: 'Complete a full mock test with >85% accuracy in under 45 minutes.',
        badgeIcon: '⚡',
        category: 'Speed & Precision',
        unlocked: false,
        progress: 0
      }
    ];

    res.status(200).json({
      success: true,
      message: 'Achievements retrieved.',
      data: dynamicAchievements
    });
  } catch (error) {
    console.error('getAchievements Error:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve achievements.' });
  }
};
