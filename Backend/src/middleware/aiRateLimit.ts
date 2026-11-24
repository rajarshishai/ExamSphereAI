
import rateLimit from 'express-rate-limit';

export const aiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 120, // generous allowance for interactive student doubt solving
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many AI requests. Please try again later.'
  }
});
