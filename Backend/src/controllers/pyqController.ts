import { Request, Response } from 'express';
import mongoose from 'mongoose';
import PYQ from '../models/PYQ';

// GET PYQS WITH SEARCH, FILTER & PAGINATION
export const getPYQs = async (req: Request, res: Response) => {
  try {
    const { examId, year, subject, search, difficulty, category, page = 1, limit = 20 } = req.query;
    const filter: Record<string, unknown> = { isVerified: true };

    if (examId && String(examId) !== 'All' && String(examId).trim()) {
      if (mongoose.Types.ObjectId.isValid(String(examId))) {
        filter.examId = new mongoose.Types.ObjectId(String(examId));
      } else {
        filter.examName = new RegExp(String(examId), 'i');
      }
    }
    if (year && !isNaN(Number(year)) && Number(year) > 1900) {
      filter.year = Number(year);
    }
    if (subject && String(subject) !== 'All' && String(subject).trim()) {
      filter.subject = new RegExp(String(subject), 'i');
    }
    if (difficulty && ['Easy', 'Medium', 'Hard'].includes(String(difficulty))) {
      filter.difficulty = difficulty;
    }
    if (search && String(search).trim()) {
      const s = String(search).trim();
      const searchRegex = new RegExp(s, 'i');
      filter.$or = [
        { questionText: searchRegex },
        { topic: searchRegex },
        { subject: searchRegex },
        { examName: searchRegex }
      ];
    }

    const currentPage = Math.max(1, Number(page));
    const pageSize = Math.min(100, Math.max(1, Number(limit)));

    const totalCount = await PYQ.countDocuments(filter);
    const questions = await PYQ.find(filter)
      .sort({ year: -1, _id: 1 })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize)
      .lean();

    return res.status(200).json({
      success: true,
      count: questions.length,
      pagination: {
        currentPage,
        pageSize,
        totalCount,
        totalPages: Math.ceil(totalCount / pageSize) || 1
      },
      data: questions
    });
  } catch (error) {
    console.error('Get PYQ Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch PYQs' });
  }
};

// GET AVAILABLE YEARS FOR AN EXAM (OR ALL EXAMS)
export const getPYQYears = async (req: Request, res: Response) => {
  try {
    const examId = String(req.params.examId || '');
    const filter: Record<string, unknown> = { isVerified: true };

    if (examId && examId !== 'All' && examId !== 'undefined' && mongoose.Types.ObjectId.isValid(examId)) {
      filter.examId = new mongoose.Types.ObjectId(examId);
    } else if (examId && examId !== 'All' && examId !== 'undefined') {
      filter.examName = new RegExp(examId, 'i');
    }

    let years = await PYQ.distinct('year', filter);
    if (!years || years.length === 0) {
      years = [2025, 2024, 2023, 2022, 2021, 2020];
    }
    years.sort((a, b) => b - a);

    return res.status(200).json({
      success: true,
      data: years
    });
  } catch (error) {
    console.error('Get PYQ Years Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch PYQ years' });
  }
};

// CREATE PYQ (ADMIN)
export const createPYQ = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    if (user?.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Admin access required' });
    }

    const pyq = await PYQ.create(req.body);
    return res.status(201).json({
      success: true,
      message: 'PYQ added successfully',
      data: pyq
    });
  } catch (error) {
    console.error('Create PYQ Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to create PYQ' });
  }
};
