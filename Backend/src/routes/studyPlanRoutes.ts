import { Router } from 'express';
import {
  getStudyPlan,
  generateStudyPlan,
  toggleTaskCompletion,
  addCustomTask,
  deleteTaskFromPlan
} from '../controllers/studyPlanController';
import protect from '../middleware/authMiddleware';

const router = Router();

router.use(protect);

router.get('/:examId', getStudyPlan);
router.post('/generate', generateStudyPlan);
router.patch('/:planId/tasks/:taskId', toggleTaskCompletion);
router.post('/:planId/tasks', addCustomTask);
router.delete('/:planId/tasks/:taskId', deleteTaskFromPlan);

export default router;
