
import { Request, Response } from 'express';
import Exam from '../models/Exam';
import { AuthRequest } from '../middleware/authMiddleware';

// GET ALL EXAMS WITH SEARCH, FILTER AND PAGINATION
export const getAllExams = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      search,
      category,
      mode,
      page = '1',
      limit = '12',
      sort = 'newest'
    } = req.query;

    const currentPage = Math.max(1, Number(page) || 1);
    const pageSize = Math.min(500, Math.max(1, Number(limit) || 12));

    const filter: Record<string, unknown> = {
      isActive: true
    };

    if (category && category !== 'All' && category !== 'All Categories') {
      const catStr = String(category).trim();
      if (catStr === 'Government' || catStr === 'Government & Civil Services') {
        filter.category = { $in: ['Government', 'Civil Services', 'State PSC'] };
      } else if (catStr === 'Railway' || catStr === 'Railways') {
        filter.category = { $in: ['Railway', 'Railways'] };
      } else if (catStr === 'Banking' || catStr === 'Banking & Finance') {
        filter.category = { $in: ['Banking'] };
      } else if (catStr === 'Engineering' || catStr === 'Engineering Entrance') {
        filter.category = { $in: ['Engineering'] };
      } else if (catStr === 'Medical' || catStr === 'Medical Entrance') {
        filter.category = { $in: ['Medical'] };
      } else if (catStr === 'Management' || catStr === 'Management Entrance') {
        filter.category = { $in: ['Management'] };
      } else if (catStr === 'Defence' || catStr === 'Defence & Military') {
        filter.category = { $in: ['Defence'] };
      } else {
        filter.category = { $regex: new RegExp(`^${catStr}$`, 'i') };
      }
    }

    if (mode && mode !== 'All') {
      filter.mode = { $regex: new RegExp(String(mode).trim(), 'i') };
    }

    if (search && String(search).trim()) {
      const term = String(search).trim();
      const regex = new RegExp(term, 'i');
      filter.$or = [
        { name: regex },
        { slug: regex },
        { conductingBody: regex },
        { category: regex },
        { subCategory: regex },
        { overview: regex },
        { subjects: { $in: [regex] } }
      ];
    }

    let sortOption: Record<string, 1 | -1> = {
      createdAt: -1
    };

    if (sort === 'upcoming') {
      sortOption = { examDate: 1 };
    } else if (sort === 'oldest') {
      sortOption = { createdAt: 1 };
    } else if (sort === 'name') {
      sortOption = { name: 1 };
    }

    const totalExams = await Exam.countDocuments(filter);

    const exams = await Exam.find(filter)
      .sort(sortOption)
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize)
      .lean();

    res.status(200).json({
      success: true,
      message: 'Exams fetched successfully',
      pagination: {
        currentPage,
        pageSize,
        totalExams,
        totalPages: Math.ceil(totalExams / pageSize),
        hasNextPage: currentPage * pageSize < totalExams,
        hasPreviousPage: currentPage > 1
      },
      data: exams
    });

  } catch (error) {
    console.error('Get Exams Error:', error);

    res.status(500).json({
      success: false,
      message: 'Unable to fetch examinations.'
    });
  }
};

// GET SINGLE EXAM BY SLUG OR ID
export const getExamBySlug = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const param = String(req.params.slug || '').trim();
    let exam = null;

    // 1. Try finding by slug
    exam = await Exam.findOne({
      slug: param.toLowerCase(),
      isActive: true
    }).lean();

    // 2. If not found and param looks like ObjectId, try by _id
    if (!exam && param.match(/^[0-9a-fA-F]{24}$/)) {
      exam = await Exam.findOne({
        _id: param,
        isActive: true
      }).lean();
    }

    // 3. If still not found, try finding by name case-insensitively
    if (!exam) {
      exam = await Exam.findOne({
        name: { $regex: new RegExp(`^${param}$`, 'i') },
        isActive: true
      }).lean();
    }

    if (!exam) {
      res.status(404).json({
        success: false,
        message: 'Examination not found.'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Exam details fetched successfully',
      data: exam
    });

  } catch (error) {
    console.error('Get Exam Details Error:', error);

    res.status(500).json({
      success: false,
      message: 'Unable to fetch exam details.'
    });
  }
};

// CREATE NEW EXAM - ADMIN ONLY
export const createExam = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    if (req.user?.role !== 'admin') {
      res.status(403).json({
        success: false,
        message: 'Only administrators can create examinations.'
      });
      return;
    }

    const {
      name,
      category,
      conductingBody,
      overview,
      eligibility,
      pattern
    } = req.body;

    if (
      !name ||
      !category ||
      !conductingBody ||
      !overview ||
      !eligibility ||
      !pattern
    ) {
      res.status(400).json({
        success: false,
        message: 'Please provide all required exam details.'
      });
      return;
    }

    const slug = String(name)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const existingExam = await Exam.findOne({ slug });

    if (existingExam) {
      res.status(409).json({
        success: false,
        message: 'This examination already exists.'
      });
      return;
    }

    const exam = await Exam.create({
      ...req.body,
      name: String(name).trim(),
      slug
    });

    res.status(201).json({
      success: true,
      message: 'Examination created successfully!',
      data: exam
    });

  } catch (error) {
    console.error('Create Exam Error:', error);

    res.status(500).json({
      success: false,
      message: 'Unable to create examination.'
    });
  }
};
