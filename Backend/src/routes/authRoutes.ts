import { Router } from 'express';
import {
  registerUser,
  loginUser,
  getProfile,
  sendOtp,
  verifyOtp,
  googleLogin,
  githubLogin,
  linkedinLogin,
  resetPassword,
  completeOnboarding
} from '../controllers/authController';
import protect from '../middleware/authMiddleware';
import { authRateLimit } from '../middleware/authRateLimit';

const router = Router();

// =========================================================================
// PASSWORDLESS OTP AUTHENTICATION (EMAIL / MOBILE)
// =========================================================================
router.post('/otp/send', authRateLimit, sendOtp);
router.post('/otp/verify', authRateLimit, verifyOtp);
router.post('/send-otp', authRateLimit, sendOtp);
router.post('/verify-otp', authRateLimit, verifyOtp);

// =========================================================================
// SOCIAL 1-CLICK AUTHENTICATION (GOOGLE, GITHUB & LINKEDIN)
// =========================================================================
router.post('/google', authRateLimit, googleLogin);
router.post('/github', authRateLimit, githubLogin);
router.post('/linkedin', authRateLimit, linkedinLogin);

// =========================================================================
// PASSWORD RECOVERY / RESET
// =========================================================================
router.post('/reset-password', authRateLimit, resetPassword);

// =========================================================================
// ONBOARDING PROFILE SETUP (PROTECTED)
// =========================================================================
router.post('/onboarding', protect, completeOnboarding);

// =========================================================================
// TRADITIONAL CREDENTIAL AUTHENTICATION
// =========================================================================
router.post('/register', authRateLimit, registerUser);
router.post('/login', authRateLimit, loginUser);

// =========================================================================
// CURRENT USER PROFILE
// =========================================================================
router.get('/profile', protect, getProfile);

export default router;
