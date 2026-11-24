import { Router } from 'express';
import protect from '../middleware/authMiddleware';
import {
  getProfile,
  updatePersonal,
  updateAcademic,
  updateExamPreferences,
  updateLearningPreferences,
  changePassword,
  toggleTwoFactor,
  terminateSession
} from '../controllers/profileController';

const router = Router();

// All profile endpoints require authentication
router.get('/', protect, getProfile);
router.put('/personal', protect, updatePersonal);
router.put('/academic', protect, updateAcademic);
router.put('/exam-preferences', protect, updateExamPreferences);
router.put('/learning-preferences', protect, updateLearningPreferences);
router.post('/change-password', protect, changePassword);
router.post('/toggle-2fa', protect, toggleTwoFactor);
router.post('/terminate-session', protect, terminateSession);

export default router;
