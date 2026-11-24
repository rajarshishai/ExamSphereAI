import { Router } from 'express';
import {
  getAllResources,
  getResourceBySlug,
  getExamWorkspace
} from '../controllers/resourceController';

const router = Router();

// GET /api/resources/workspace/:examSlug - Generate dynamic exam workspace from database
router.get('/workspace/:examSlug', getExamWorkspace);

// GET /api/resources - Get all study resources with search, filter & pagination
router.get('/', getAllResources);

// GET /api/resources/:slug - Get single resource by slug or ID
router.get('/:slug', getResourceBySlug);

export default router;
