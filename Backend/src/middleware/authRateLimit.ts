import rateLimit from 'express-rate-limit';

export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  limit: 15, // max 15 login/registration attempts per IP per 15 minutes
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many authentication attempts from this IP address. Please try again after 15 minutes for security.'
  }
});
