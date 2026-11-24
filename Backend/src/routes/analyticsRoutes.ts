import { Router } from 'express';
import { getStudentDashboardAnalytics } from '../controllers/analyticsController';
import protect from '../middleware/authMiddleware';

const router = Router();

router.get('/dashboard', protect, getStudentDashboardAnalytics);

export default router;
