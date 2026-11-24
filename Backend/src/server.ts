
import 'dotenv/config';
import dns from 'node:dns';
import express, {
  Application,
  Request,
  Response,
  NextFunction
} from 'express';

import cors from 'cors';

import examRoutes from './routes/examRoutes';
import syllabusRoutes from './routes/syllabusRoutes';
import connectDB from './config/database';
import authRoutes from './routes/authRoutes';
import syllabusProgressRoutes from './routes/syllabusProgressRoutes';
import aiTutorRoutes from './routes/aiTutorRoutes';
import mockTestRoutes from './routes/mockTestRoutes';
import pyqRoutes from './routes/pyqRoutes';
import studyPlanRoutes from './routes/studyPlanRoutes';
import analyticsRoutes from './routes/analyticsRoutes';
import profileRoutes from './routes/profileRoutes';
import activityRoutes from './routes/activityRoutes';
import resourceRoutes from './routes/resourceRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import savedExamRoutes from './routes/savedExamRoutes';

// =====================================
// ENVIRONMENT CONFIGURATION
// =====================================

const PORT = Number(process.env.PORT) || 5000;

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Check AI configuration without exposing secret keys
console.log('======================================');
console.log('       AI PROVIDER CONFIGURATION');
console.log('======================================');

console.log(
  `OpenAI: ${OPENAI_API_KEY ? 'Configured' : 'Not configured'}`
);

console.log(`OpenAI Model: ${OPENAI_MODEL}`);

console.log(
  `Gemini: ${GEMINI_API_KEY ? 'Configured' : 'Not configured'}`
);

console.log('======================================');

// =====================================
// DNS CONFIGURATION
// =====================================

dns.setServers(['8.8.8.8', '8.8.4.4']);

// =====================================
// EXPRESS APPLICATION
// =====================================

const app: Application = express();

// =====================================
// MIDDLEWARE
// =====================================

const allowedOrigins = [
  'http://localhost:4200',
  'http://127.0.0.1:4200',
  'http://localhost:5000',
  'http://127.0.0.1:5000'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// =====================================
// ROOT ROUTE
// =====================================

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to ExamSphere AI Backend!',
    status: 'Running',
    version: '1.0.0'
  });
});

// =====================================
// HEALTH CHECK ROUTE
// =====================================

app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'ExamSphere AI API is working!',
    status: 'Healthy',
    timestamp: new Date().toISOString()
  });
});

// =====================================
// AI CONFIGURATION HEALTH CHECK
// =====================================

app.get('/api/ai-tutor/status', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    providers: {
      openai: {
        configured: Boolean(OPENAI_API_KEY),
        model: OPENAI_MODEL
      },
      gemini: {
        configured: Boolean(GEMINI_API_KEY)
      }
    }
  });
});

// =====================================
// API ROUTES
// =====================================

app.use('/api/auth', authRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/syllabuses', syllabusRoutes);
app.use('/api/syllabus-progress', syllabusProgressRoutes);
app.use('/api/ai-tutor', aiTutorRoutes);
app.use('/api/mock-tests', mockTestRoutes);
app.use('/api/pyqs', pyqRoutes);
app.use('/api/study-plans', studyPlanRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/saved-exams', savedExamRoutes);

// =====================================
// 404 ROUTE HANDLER
// =====================================

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`
  });
});

// =====================================
// GLOBAL ERROR HANDLER
// =====================================

app.use((
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Server Error:', error);

  res.status(500).json({
    success: false,
    message: 'Internal Server Error'
  });
});

// =====================================
// START SERVER
// =====================================

const startServer = async (): Promise<void> => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log('======================================');
      console.log('       ExamSphere AI Backend');
      console.log('======================================');
      console.log(`Server: http://localhost:${PORT}`);
      console.log(`Health: http://localhost:${PORT}/api/health`);
      console.log(`Auth:   http://localhost:${PORT}/api/auth`);
      console.log(`AI:     http://localhost:${PORT}/api/ai-tutor/status`);
      console.log('======================================');
    });

  } catch (error) {
    console.error('Server startup failed:', error);
    process.exit(1);
  }
};

startServer();
