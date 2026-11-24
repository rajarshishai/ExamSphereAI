
import { Router } from 'express';

import {
  getAllSyllabuses,
  getSyllabusByExam,
  createSyllabus
} from '../controllers/syllabusController';

const router = Router();

// GET: All syllabuses
router.get('/', getAllSyllabuses);

// GET: Syllabus by exam ID
router.get('/:examId', getSyllabusByExam);

// POST: Create or update syllabus
router.post('/', createSyllabus);

export default router;
