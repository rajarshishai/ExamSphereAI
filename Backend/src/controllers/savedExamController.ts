import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import SavedExam, { IDailyTask, ISavedExam } from '../models/SavedExam';
import UserActivity from '../models/UserActivity';

// Generate tailored daily tasks based on exam name and stream
export const generateDailyTasksForToday = (examName: string, category: string, dateStr: string): IDailyTask[] => {
  const ts = Date.now();
  const cat = (category || '').toLowerCase();

  let subjectFocus = 'Key Subject Modules';
  if (cat.includes('engineer') || cat.includes('gate') || cat.includes('jee')) {
    subjectFocus = 'Engineering Mathematics & Core Technicals';
  } else if (cat.includes('medical') || cat.includes('neet')) {
    subjectFocus = 'High-Yield Biology & Organic Chemistry';
  } else if (cat.includes('civil') || cat.includes('upsc') || cat.includes('psc')) {
    subjectFocus = 'Daily Current Affairs & General Studies';
  } else if (cat.includes('bank') || cat.includes('sbi') || cat.includes('ibps')) {
    subjectFocus = 'Quantitative Aptitude & Reasoning Puzzles';
  } else if (cat.includes('manage') || cat.includes('cat')) {
    subjectFocus = 'Data Interpretation & Verbal Ability';
  } else if (cat.includes('law') || cat.includes('clat')) {
    subjectFocus = 'Legal Reasoning & Constitutional Principles';
  }

  return [
    {
      id: `task-${ts}-1`,
      title: `Revise: ${subjectFocus} (${examName})`,
      category: 'concept',
      estimatedMinutes: 45,
      isCompleted: false,
      date: dateStr
    },
    {
      id: `task-${ts}-2`,
      title: `Solve 10 Previous Year Questions with error audit`,
      category: 'pyq',
      estimatedMinutes: 30,
      isCompleted: false,
      date: dateStr
    },
    {
      id: `task-${ts}-3`,
      title: `Attempt 1 Timed Sectional Mock Test / Quiz`,
      category: 'mock',
      estimatedMinutes: 25,
      isCompleted: false,
      date: dateStr
    },
    {
      id: `task-${ts}-4`,
      title: `Formula sheet review & quick memory retention check`,
      category: 'revision',
      estimatedMinutes: 15,
      isCompleted: false,
      date: dateStr
    }
  ];
};

// Helper to ensure today's tasks exist for a saved exam document
export const ensureTodayTasks = async (savedDoc: ISavedExam, todayStr: string): Promise<boolean> => {
  let changed = false;
  const hasTodayTasks = (savedDoc.dailyTasks || []).some(t => t.date === todayStr);

  if (!hasTodayTasks) {
    const existing = savedDoc.dailyTasks || [];
    // Keep past 7 days to avoid unbounded growth
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 7);
    const recentTasks = existing.filter(t => {
      try {
        return new Date(t.date) >= cutoffDate;
      } catch {
        return true;
      }
    });

    const newTasks = generateDailyTasksForToday(savedDoc.examName, savedDoc.category, todayStr);
    savedDoc.dailyTasks = [...recentTasks, ...newTasks];
    changed = true;
  }

  return changed;
};

// GET ALL SAVED EXAMS FOR LOGGED IN / GUEST USER
export const getSavedExams = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(200).json({
        success: true,
        message: 'Guest session. Provide authentication token or use local state.',
        data: []
      });
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    const savedExams = await SavedExam.find({ userId }).sort({ savedAt: -1 });

    // Ensure every saved exam has today's tasks
    let anyUpdated = false;
    for (const doc of savedExams) {
      const updated = await ensureTodayTasks(doc, todayStr);
      if (updated) {
        await doc.save();
        anyUpdated = true;
      }
    }

    // Refresh if any were updated
    const finalDocs = anyUpdated ? await SavedExam.find({ userId }).sort({ savedAt: -1 }) : savedExams;

    res.status(200).json({
      success: true,
      message: 'Saved exams retrieved successfully.',
      todayDate: todayStr,
      data: finalDocs
    });
  } catch (error) {
    console.error('getSavedExams error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve saved exams.'
    });
  }
};

// TOGGLE SAVE / BOOKMARK AN EXAM
export const toggleSaveExam = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Please sign in to save examinations to your dashboard.'
      });
      return;
    }

    const { examId, examSlug, examName, category, conductingBody, targetYear, examDate, notes } = req.body;

    if (!examId || !examName) {
      res.status(400).json({
        success: false,
        message: 'Exam ID and name are required.'
      });
      return;
    }

    const existing = await SavedExam.findOne({
      userId,
      $or: [{ examId }, ...(examSlug ? [{ examSlug }] : [])]
    });

    if (existing) {
      await SavedExam.deleteOne({ _id: existing._id });
      res.status(200).json({
        success: true,
        message: `${examName} removed from saved exams.`,
        saved: false,
        examId
      });
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    const initialTasks = generateDailyTasksForToday(examName, category || 'National', todayStr);

    const newSaved = await SavedExam.create({
      userId,
      examId,
      examSlug: examSlug || examId,
      examName,
      category: category || 'National',
      conductingBody: conductingBody || '',
      targetYear: targetYear || new Date().getFullYear() + 1,
      examDate: examDate || 'Upcoming Cycle',
      notes: notes || '',
      dailyTasks: initialTasks,
      streakDays: 0,
      totalCompletedTasks: 0,
      lastActiveDate: todayStr
    });

    // Log Activity
    try {
      await UserActivity.create({
        userId,
        activityType: 'saved_exam',
        title: `Bookmarked: ${examName}`,
        description: `Saved ${examName} with daily tasks to track preparation schedule.`,
        metadata: { examId, examSlug, category }
      });
    } catch (actErr) {
      console.warn('Could not log UserActivity for saved exam:', actErr);
    }

    res.status(201).json({
      success: true,
      message: `${examName} saved successfully! Today's daily tasks are activated.`,
      saved: true,
      data: newSaved
    });
  } catch (error: any) {
    console.error('toggleSaveExam error:', error);
    res.status(500).json({
      success: false,
      message: error?.message || 'Failed to toggle saved exam.'
    });
  }
};

// TOGGLE COMPLETION OF A DAILY TASK
export const toggleTaskCompletion = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Authentication required to update daily task status.'
      });
      return;
    }

    const { savedExamId, taskId } = req.params;

    const savedDoc = await SavedExam.findOne({ _id: savedExamId, userId });
    if (!savedDoc) {
      res.status(404).json({
        success: false,
        message: 'Saved exam record not found.'
      });
      return;
    }

    const taskIndex = savedDoc.dailyTasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
      res.status(404).json({
        success: false,
        message: 'Daily task not found.'
      });
      return;
    }

    const task = savedDoc.dailyTasks[taskIndex];
    task.isCompleted = !task.isCompleted;
    task.completedAt = task.isCompleted ? new Date() : undefined;

    const todayStr = new Date().toISOString().split('T')[0];

    if (task.isCompleted) {
      savedDoc.totalCompletedTasks = (savedDoc.totalCompletedTasks || 0) + 1;
      savedDoc.lastActiveDate = todayStr;

      // Log UserActivity for completing task
      try {
        await UserActivity.create({
          userId,
          activityType: 'daily_task',
          title: `Daily Task Done: ${task.title}`,
          description: `Completed preparation task for ${savedDoc.examName}.`,
          metadata: {
            examName: savedDoc.examName,
            taskId: task.id,
            category: task.category
          }
        });
      } catch (actErr) {
        console.warn('Could not log UserActivity for daily task:', actErr);
      }
    } else {
      savedDoc.totalCompletedTasks = Math.max(0, (savedDoc.totalCompletedTasks || 1) - 1);
    }

    // Recalculate streak if all tasks for today are completed
    const todayTasks = savedDoc.dailyTasks.filter(t => t.date === todayStr);
    const allTodayDone = todayTasks.length > 0 && todayTasks.every(t => t.isCompleted);
    if (allTodayDone) {
      savedDoc.streakDays = (savedDoc.streakDays || 0) + 1;
    }

    savedDoc.markModified('dailyTasks');
    await savedDoc.save();

    res.status(200).json({
      success: true,
      message: task.isCompleted ? 'Task marked as completed! Great progress! 🎉' : 'Task marked as pending.',
      task,
      savedExam: savedDoc
    });
  } catch (error) {
    console.error('toggleTaskCompletion error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update daily task status.'
    });
  }
};

// GET TODAY'S REMAINING TASKS NOTIFICATIONS FOR ALL SAVED EXAMS
export const getTodayNotifications = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(200).json({
        success: true,
        totalRemaining: 0,
        totalToday: 0,
        completedToday: 0,
        date: new Date().toISOString().split('T')[0],
        remainingTasks: [],
        exams: []
      });
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    const savedExams = await SavedExam.find({ userId });

    let anyUpdated = false;
    for (const doc of savedExams) {
      const updated = await ensureTodayTasks(doc, todayStr);
      if (updated) {
        await doc.save();
        anyUpdated = true;
      }
    }

    const activeDocs = anyUpdated ? await SavedExam.find({ userId }) : savedExams;

    let totalToday = 0;
    let completedToday = 0;
    const remainingTasks: Array<{
      savedExamId: string;
      examName: string;
      examSlug: string;
      category: string;
      taskId: string;
      title: string;
      taskCategory: string;
      estimatedMinutes: number;
      isCompleted: boolean;
      date: string;
    }> = [];

    const examSummaries = activeDocs.map(doc => {
      const todayTasks = (doc.dailyTasks || []).filter(t => t.date === todayStr);
      totalToday += todayTasks.length;

      const remaining = todayTasks.filter(t => !t.isCompleted);
      const completed = todayTasks.filter(t => t.isCompleted);
      completedToday += completed.length;

      remaining.forEach(t => {
        remainingTasks.push({
          savedExamId: (doc._id as any).toString(),
          examName: doc.examName,
          examSlug: doc.examSlug || doc.examId,
          category: doc.category,
          taskId: t.id,
          title: t.title,
          taskCategory: t.category,
          estimatedMinutes: t.estimatedMinutes,
          isCompleted: false,
          date: t.date
        });
      });

      return {
        savedExamId: (doc._id as any).toString(),
        examId: doc.examId,
        examSlug: doc.examSlug || doc.examId,
        examName: doc.examName,
        category: doc.category,
        totalTodayCount: todayTasks.length,
        remainingCount: remaining.length,
        completedCount: completed.length,
        streakDays: doc.streakDays || 0,
        remainingTasks: remaining
      };
    });

    res.status(200).json({
      success: true,
      date: todayStr,
      totalRemaining: remainingTasks.length,
      totalToday,
      completedToday,
      remainingTasks,
      exams: examSummaries
    });
  } catch (error) {
    console.error('getTodayNotifications error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve today\'s task notifications.'
    });
  }
};
