import { Router } from 'express';
import { aiRateLimit } from '../middleware/aiRateLimit';
import {
  askAITutor,
  getAIHistory,
  deleteAIConversation,
  clearAIHistory
} from '../controllers/aiTutorController';
import protect, { optionalAuth } from '../middleware/authMiddleware';

const router = Router();

// Ask a question (accessible to authenticated students & guests, with rate limiting)
router.post('/chat', optionalAuth, aiRateLimit, askAITutor);

// Retrieve conversation history (authenticated)
router.get('/history/:examId', protect, getAIHistory);

// Delete specific conversation (authenticated)
router.delete('/conversations/:id', protect, deleteAIConversation);

// Clear all conversations (authenticated)
router.delete('/conversations', protect, clearAIHistory);

export default router;
