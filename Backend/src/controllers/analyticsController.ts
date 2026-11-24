import { Request, Response } from 'express';
import mongoose from 'mongoose';
import TestAttempt from '../models/TestAttempt';
import SyllabusProgress from '../models/SyllabusProgress';
import Exam from '../models/Exam';

const getUserId = (req: Request): string | undefined => {
  const user = (req as any).user;
  return user?.id ?? user?._id?.toString();
};

export const getStudentDashboardAnalytics = async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req);
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const userObjectId = new mongoose.Types.ObjectId(userId);

    // 1. Fetch all test attempts
    const attempts = await TestAttempt.find({ userId: userObjectId }).sort({ createdAt: -1 });

    const totalTests = attempts.length;
    let totalQuestionsAttempted = 0;
    let totalCorrect = 0;
    let totalScoreSum = 0;
    let maxScoreSum = 0;

    const subjectStatsMap: Record<string, { attempted: number; correct: number }> = {};

    attempts.forEach(att => {
      totalQuestionsAttempted += att.attemptedCount;
      totalCorrect += att.correctCount;
      totalScoreSum += att.score;
      maxScoreSum += att.maxScore;

      att.answers.forEach(ans => {
        const subj = ans.subject || 'General';
        if (!subjectStatsMap[subj]) {
          subjectStatsMap[subj] = { attempted: 0, correct: 0 };
        }
        subjectStatsMap[subj].attempted++;
        if (ans.isCorrect) {
          subjectStatsMap[subj].correct++;
        }
      });
    });

    const averageAccuracy = totalQuestionsAttempted > 0
      ? Math.round((totalCorrect / totalQuestionsAttempted) * 100)
      : 0;

    // 2. Fetch Syllabus Progress
    const progressDocs = await SyllabusProgress.find({ userId: userObjectId });
    let totalTopicsCount = 0;
    let completedTopicsCount = 0;

    progressDocs.forEach(p => {
      totalTopicsCount += p.topics.length;
      completedTopicsCount += p.topics.filter(t => t.completed).length;
    });

    const syllabusCoverage = totalTopicsCount > 0
      ? Math.round((completedTopicsCount / totalTopicsCount) * 100)
      : 0;

    // 3. Subject-wise performance breakdown
    const subjectBreakdown = Object.keys(subjectStatsMap).map(subj => {
      const s = subjectStatsMap[subj];
      const acc = s.attempted > 0 ? Math.round((s.correct / s.attempted) * 100) : 0;
      return {
        subject: subj,
        accuracy: acc,
        questionsAttempted: s.attempted,
        status: acc >= 75 ? 'Strong' : acc >= 55 ? 'Moderate' : 'Needs Practice'
      };
    });

    // 4. Exam Readiness Index (Formula: 0.5 * accuracy + 0.5 * syllabusCoverage)
    const readinessIndex = Math.min(
      98,
      Math.max(
        15,
        Math.round(averageAccuracy * 0.55 + syllabusCoverage * 0.45)
      )
    );

    return res.status(200).json({
      success: true,
      data: {
        totalTestsAttempted: totalTests,
        totalQuestionsSolved: totalQuestionsAttempted,
        averageAccuracy,
        syllabusCoverage,
        readinessIndex,
        subjectBreakdown,
        recentAttempts: attempts.slice(0, 5).map(a => ({
          id: a._id,
          testTitle: a.testTitle,
          examName: a.examName,
          score: a.score,
          maxScore: a.maxScore,
          accuracy: a.accuracyPercentage,
          completedAt: a.completedAt
        }))
      }
    });
  } catch (error) {
    console.error('Analytics Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch student analytics' });
  }
};
