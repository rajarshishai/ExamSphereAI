import mongoose, { Schema, Document } from 'mongoose';

export interface IDailyTask {
  id: string;
  title: string;
  category: 'pyq' | 'concept' | 'mock' | 'revision' | 'general';
  estimatedMinutes: number;
  isCompleted: boolean;
  completedAt?: Date;
  date: string; // Format: YYYY-MM-DD
}

export interface ISavedExam extends Document {
  userId: mongoose.Types.ObjectId;
  examId: string;
  examSlug?: string;
  examName: string;
  category: string;
  conductingBody?: string;
  targetYear?: number;
  examDate?: string;
  syllabusCoverage?: number;
  notes?: string;
  dailyTasks: IDailyTask[];
  streakDays: number;
  totalCompletedTasks: number;
  lastActiveDate?: string;
  savedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const DailyTaskSchema = new Schema<IDailyTask>(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ['pyq', 'concept', 'mock', 'revision', 'general'],
      default: 'concept'
    },
    estimatedMinutes: { type: Number, default: 30 },
    isCompleted: { type: Boolean, default: false },
    completedAt: { type: Date },
    date: { type: String, required: true, index: true }
  },
  { _id: false }
);

const SavedExamSchema = new Schema<ISavedExam>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    examId: {
      type: String,
      required: true,
      index: true
    },
    examSlug: {
      type: String,
      default: ''
    },
    examName: {
      type: String,
      required: true
    },
    category: {
      type: String,
      default: 'National'
    },
    conductingBody: {
      type: String,
      default: ''
    },
    targetYear: {
      type: Number,
      default: () => new Date().getFullYear() + 1
    },
    examDate: {
      type: String,
      default: 'Upcoming'
    },
    syllabusCoverage: {
      type: Number,
      default: 0
    },
    notes: {
      type: String,
      default: ''
    },
    dailyTasks: {
      type: [DailyTaskSchema],
      default: []
    },
    streakDays: {
      type: Number,
      default: 0
    },
    totalCompletedTasks: {
      type: Number,
      default: 0
    },
    lastActiveDate: {
      type: String,
      default: ''
    },
    savedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

SavedExamSchema.index({ userId: 1, examId: 1 }, { unique: true });
SavedExamSchema.index({ userId: 1, examSlug: 1 });

export default mongoose.model<ISavedExam>('SavedExam', SavedExamSchema);
