import { Router } from 'express';
import protect, { optionalAuth } from '../middleware/authMiddleware';
import {
  getSavedExams,
  toggleSaveExam,
  toggleTaskCompletion,
  getTodayNotifications
} from '../controllers/savedExamController';

const router = Router();

// Retrieve saved exams (with optional auth so guests can fetch empty gracefully)
router.get('/', optionalAuth, getSavedExams);

// Save or unsave an exam
router.post('/toggle', protect, toggleSaveExam);

// Toggle completion of a daily task
router.patch('/:savedExamId/tasks/:taskId', protect, toggleTaskCompletion);

// Retrieve today's remaining tasks notification summary
router.get('/notifications/today', optionalAuth, getTodayNotifications);

export default router;
