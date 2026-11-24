import { Request, Response } from 'express';
import Feedback from '../models/Feedback';
import { AuthRequest } from '../middleware/authMiddleware';

function getInitials(name: string): string {
  if (!name) return 'ST';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// =========================================================================
// SUBMIT FEEDBACK (Open to all students, attaches user if logged in)
// =========================================================================
export const submitFeedback = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      email,
      exam,
      rankOrScore,
      rating,
      category,
      comment
    } = req.body;

    if (!name || !name.trim()) {
      res.status(400).json({
        success: false,
        message: 'Name is required to submit feedback.'
      });
      return;
    }

    if (!comment || !comment.trim()) {
      res.status(400).json({
        success: false,
        message: 'Please provide a comment or review message.'
      });
      return;
    }

    const numRating = Number(rating);
    const validRating = !isNaN(numRating) && numRating >= 1 && numRating <= 5 ? numRating : 5;

    const feedback = await Feedback.create({
      name: name.trim(),
      email: email ? String(email).trim().toLowerCase() : undefined,
      exam: exam && exam.trim() ? exam.trim() : 'General Competitive Exam',
      rankOrScore: rankOrScore && rankOrScore.trim() ? rankOrScore.trim() : 'Aspirant',
      rating: validRating,
      category: category || 'Testimonial',
      comment: comment.trim(),
      avatar: getInitials(name),
      isApproved: true,
      userId: req.user ? req.user.id : undefined
    });

    res.status(201).json({
      success: true,
      message: 'Thank you! Your feedback has been received.',
      data: feedback
    });
  } catch (error) {
    console.error('Submit Feedback Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit feedback. Please try again later.'
    });
  }
};

// =========================================================================
// GET LATEST FEEDBACK (Default 3 items for Dashboard)
// =========================================================================
export const getLatestFeedback = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const limit = Math.min(20, Math.max(1, Number(req.query.limit) || 3));

    const feedbacks = await Feedback.find({ isApproved: true })
      .sort({ isFeatured: -1, createdAt: -1 })
      .limit(limit)
      .lean();

    res.status(200).json({
      success: true,
      message: 'Latest feedbacks fetched successfully',
      count: feedbacks.length,
      data: feedbacks
    });
  } catch (error) {
    console.error('Get Latest Feedback Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to load latest feedback.'
    });
  }
};

// =========================================================================
// GET ALL FEEDBACK WITH FILTERS & PAGINATION (For About Page & Community)
// =========================================================================
export const getAllFeedback = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      category,
      exam,
      minRating,
      page = '1',
      limit = '12'
    } = req.query;

    const currentPage = Math.max(1, Number(page) || 1);
    const pageSize = Math.min(50, Math.max(1, Number(limit) || 12));

    const filter: Record<string, unknown> = {
      isApproved: true
    };

    if (category && category !== 'All') {
      filter.category = category;
    }

    if (exam && exam !== 'All') {
      filter.exam = { $regex: new RegExp(String(exam).trim(), 'i') };
    }

    if (minRating) {
      filter.rating = { $gte: Number(minRating) };
    }

    const totalFeedbacks = await Feedback.countDocuments(filter);

    const feedbacks = await Feedback.find(filter)
      .sort({ isFeatured: -1, createdAt: -1 })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize)
      .lean();

    res.status(200).json({
      success: true,
      message: 'Feedbacks fetched successfully',
      pagination: {
        currentPage,
        pageSize,
        totalFeedbacks,
        totalPages: Math.ceil(totalFeedbacks / pageSize),
        hasNextPage: currentPage * pageSize < totalFeedbacks,
        hasPreviousPage: currentPage > 1
      },
      data: feedbacks
    });
  } catch (error) {
    console.error('Get All Feedback Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to load feedbacks.'
    });
  }
};
