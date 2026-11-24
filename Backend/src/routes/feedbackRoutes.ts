import { Router } from 'express';
import {
  submitFeedback,
  getLatestFeedback,
  getAllFeedback
} from '../controllers/feedbackController';

const router = Router();

// GET /api/feedback/latest - Fetch latest 3 (or specified limit) feedbacks for Dashboard
router.get('/latest', getLatestFeedback);

// GET /api/feedback - Fetch all feedbacks with filters & pagination for About page
router.get('/', getAllFeedback);

// POST /api/feedback - Submit new student feedback
router.post('/', submitFeedback);

export default router;
