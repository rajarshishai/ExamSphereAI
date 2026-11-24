import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';

interface JwtPayload {
  id: string;
}

export interface AuthRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'admin';
  };
}

const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        success: false,
        message: 'Access denied. Authentication token required.'
      });
      return;
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET;

    if (!token || !secret) {
      res.status(401).json({
        success: false,
        message: 'Invalid authentication configuration.'
      });
      return;
    }

    const decoded = jwt.verify(token, secret) as JwtPayload;

    const user = await User.findById(decoded.id).select(
      '-password'
    );

    if (!user) {
      res.status(401).json({
        success: false,
        message: 'User no longer exists.'
      });
      return;
    }

    req.user = {
      id: user._id.toString(),
      name: user.name,
      email: user.email || '',
      role: user.role
    };

    next();

  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid or expired authentication token.'
    });
  }
};

export const optionalAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      const secret = process.env.JWT_SECRET;

      if (token && secret) {
        const decoded = jwt.verify(token, secret) as JwtPayload;
        const user = await User.findById(decoded.id).select('-password');

        if (user) {
          req.user = {
            id: user._id.toString(),
            name: user.name,
            email: user.email || '',
            role: user.role
          };
        }
      }
    }
  } catch {
    // Continue as guest
  }
  next();
};

export const requireAdmin = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.user || req.user.role !== 'admin') {
    res.status(403).json({
      success: false,
      message: 'Access denied. Administrator privileges required.'
    });
    return;
  }
  next();
};

export default protect;
