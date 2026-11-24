
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Syllabus from '../models/Syllabus';
import Exam from '../models/Exam';

// ==========================================
// GET ALL SYLLABUSES
// ==========================================

export const getAllSyllabuses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const syllabuses = await Syllabus.find()
      .select('examId examName category subjects');

    res.status(200).json({
      success: true,
      count: syllabuses.length,
      data: syllabuses
    });

  } catch (error) {
    console.error('Get All Syllabuses Error:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to fetch syllabuses'
    });
  }
};


// ==========================================
// GET SYLLABUS BY EXAM ID OR SLUG
// ==========================================

export const getSyllabusByExam = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const examParam = String(req.params.examId || '').trim();

    if (!examParam) {
      res.status(400).json({
        success: false,
        message: 'Invalid exam identifier'
      });
      return;
    }

    let syllabus: any = null;

    if (mongoose.Types.ObjectId.isValid(examParam)) {
      syllabus = await Syllabus.findOne({
        examId: new mongoose.Types.ObjectId(examParam)
      });
    }

    if (!syllabus) {
      // Try finding by exam slug or exam name
      const exam = await Exam.findOne({
        $or: [{ slug: examParam.toLowerCase() }, { name: new RegExp(examParam, 'i') }]
      });
      if (exam) {
        syllabus = await Syllabus.findOne({ examId: exam._id });
      }
    }

    if (!syllabus) {
      res.status(404).json({
        success: false,
        message: 'Syllabus not found in database'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: syllabus
    });

  } catch (error) {
    console.error('Get Syllabus Error:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to fetch syllabus'
    });
  }
};


// ==========================================
// CREATE OR UPDATE SYLLABUS
// ==========================================

export const createSyllabus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      examId,
      examName,
      category,
      subjects
    } = req.body;

    // Validate required fields.
    if (
      !examId ||
      typeof examName !== 'string' ||
      !examName.trim() ||
      typeof category !== 'string' ||
      !category.trim() ||
      !Array.isArray(subjects)
    ) {
      res.status(400).json({
        success: false,
        message: 'Please provide valid syllabus details'
      });
      return;
    }

    // Validate exam ID.
    if (
      typeof examId !== 'string' ||
      !mongoose.Types.ObjectId.isValid(examId)
    ) {
      res.status(400).json({
        success: false,
        message: 'Invalid exam ID'
      });
      return;
    }

    const examObjectId = new mongoose.Types.ObjectId(examId);

    // Create or update syllabus.
    const syllabus = await Syllabus.findOneAndUpdate(
      { examId: examObjectId },
      {
        examId: examObjectId,
        examName: examName.trim(),
        category: category.trim(),
        subjects
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true
      }
    );

    res.status(200).json({
      success: true,
      message: 'Syllabus saved successfully',
      data: syllabus
    });

  } catch (error) {
    console.error('Create Syllabus Error:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to save syllabus'
    });
  }
};
