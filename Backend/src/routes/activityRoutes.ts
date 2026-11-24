import { Router } from 'express';
import protect, { optionalAuth } from '../middleware/authMiddleware';
import {
  getActivities,
  getMockTestHistory,
  getStudyHistory,
  getAiHistory,
  getSavedExams,
  toggleSaveExam,
  getAchievements
} from '../controllers/activityController';

const router = Router();

// Activities allow optional auth so demo/guest users can view populated starter data cleanly
router.get('/', optionalAuth, getActivities);
router.get('/mock-tests', optionalAuth, getMockTestHistory);
router.get('/study-history', optionalAuth, getStudyHistory);
router.get('/ai-history', optionalAuth, getAiHistory);
router.get('/saved-exams', optionalAuth, getSavedExams);
router.post('/saved-exams/toggle', protect, toggleSaveExam);
router.get('/achievements', optionalAuth, getAchievements);

export default router;
