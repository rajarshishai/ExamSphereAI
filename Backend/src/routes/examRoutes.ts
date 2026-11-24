
import { Router } from 'express';

import {
  getAllExams,
  getExamBySlug,
  createExam
} from '../controllers/examController';

import protect, { requireAdmin } from '../middleware/authMiddleware';

const router = Router();

// Public routes
router.get('/', getAllExams);
router.get('/:slug', getExamBySlug);

// Admin-only creation
router.post('/', protect, requireAdmin, createExam);

export default router;
