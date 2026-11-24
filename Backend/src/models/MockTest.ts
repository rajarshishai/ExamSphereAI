import mongoose, { Schema, Document } from 'mongoose';

export interface ITestQuestion {
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  subject: string;
  topic?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  marks: number;
}

export interface IMockTest extends Document {
  title: string;
  examId: mongoose.Types.ObjectId;
  examName: string;
  category: string;
  subject: string;
  durationMinutes: number;
  totalMarks: number;
  negativeMarkingRate: number; // e.g. 0.25, 0.33, 1
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questions: ITestQuestion[];
  isAiGenerated: boolean;
  testType: 'official_pattern' | 'sectional' | 'custom_practice';
  patternDetails?: {
    totalQuestions?: number;
    sectionsDescription?: string;
    markingScheme?: string;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TestQuestionSchema = new Schema<ITestQuestion>(
  {
    questionText: { type: String, required: true },
    options: { type: [String], required: true },
    correctOptionIndex: { type: Number, required: true },
    explanation: { type: String, required: true },
    subject: { type: String, required: true },
    topic: { type: String },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
    marks: { type: Number, default: 4 }
  },
  { _id: true }
);

const MockTestSchema = new Schema<IMockTest>(
  {
    title: { type: String, required: true, trim: true },
    examId: { type: Schema.Types.ObjectId, ref: 'Exam', required: true },
    examName: { type: String, required: true },
    category: { type: String, required: true },
    subject: { type: String, default: 'Full Syllabus' },
    durationMinutes: { type: Number, default: 60 },
    totalMarks: { type: Number, default: 100 },
    negativeMarkingRate: { type: Number, default: 0.25 },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
    questions: { type: [TestQuestionSchema], default: [] },
    isAiGenerated: { type: Boolean, default: false },
    testType: {
      type: String,
      enum: ['official_pattern', 'sectional', 'custom_practice'],
      default: 'official_pattern'
    },
    patternDetails: {
      totalQuestions: { type: Number },
      sectionsDescription: { type: String },
      markingScheme: { type: String }
    },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

MockTestSchema.index({ examId: 1, difficulty: 1 });
MockTestSchema.index({ isAiGenerated: 1 });

export default mongoose.model<IMockTest>('MockTest', MockTestSchema);
