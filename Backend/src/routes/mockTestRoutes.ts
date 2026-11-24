import { Router } from 'express';
import {
  getMockTests,
  getExamsForMockTests,
  createCustomMockTest,
  getMockTestById,
  submitMockTest,
  generateAIMockTest,
  getUserTestAttempts
} from '../controllers/mockTestController';
import protect, { optionalAuth } from '../middleware/authMiddleware';
import { aiRateLimit } from '../middleware/aiRateLimit';

const router = Router();

// Public / Aspirant endpoints
router.get('/', getMockTests);
router.get('/exams-catalog', getExamsForMockTests);
router.get('/attempts/my-history', protect, getUserTestAttempts);
router.post('/custom', optionalAuth, createCustomMockTest);
router.get('/:id', getMockTestById);

// Submissions (supports both authenticated accounts and guest evaluations)
router.post('/:id/submit', optionalAuth, submitMockTest);
router.post('/generate-ai', protect, aiRateLimit, generateAIMockTest);

export default router;
