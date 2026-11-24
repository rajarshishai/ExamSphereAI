import { Router } from 'express';
import { getPYQs, getPYQYears, createPYQ } from '../controllers/pyqController';
import protect from '../middleware/authMiddleware';

const router = Router();

// Public discovery
router.get('/', getPYQs);
router.get('/years/:examId', getPYQYears);

// Admin creation
router.post('/', protect, createPYQ);

export default router;
