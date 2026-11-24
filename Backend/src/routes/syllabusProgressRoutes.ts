
import { Router } from 'express';

import {
  getStudentProgress,
  updateTopicProgress
} from '../controllers/syllabusProgressController';

import  protect  from '../middleware/authMiddleware';

const router = Router();

// All progress operations require authentication.
router.get('/:examId', protect, getStudentProgress);

router.patch(
  '/:examId/topic/:topicId',
  protect,
  updateTopicProgress
);

export default router;
