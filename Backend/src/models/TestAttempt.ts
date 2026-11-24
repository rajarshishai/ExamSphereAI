import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestionAnswer {
  questionIndex: number;
  selectedOptionIndex: number;
  isCorrect: boolean;
  marksAwarded: number;
  subject: string;
}

export interface ITestAttempt extends Document {
  userId: mongoose.Types.ObjectId;
  mockTestId: mongoose.Types.ObjectId;
  examId: mongoose.Types.ObjectId;
  examName: string;
  testTitle: string;
  answers: IQuestionAnswer[];
  totalQuestions: number;
  attemptedCount: number;
  correctCount: number;
  wrongCount: number;
  score: number;
  maxScore: number;
  accuracyPercentage: number;
  timeSpentSeconds: number;
  completedAt: Date;
}

const QuestionAnswerSchema = new Schema<IQuestionAnswer>(
  {
    questionIndex: { type: Number, required: true },
    selectedOptionIndex: { type: Number, required: true },
    isCorrect: { type: Boolean, required: true },
    marksAwarded: { type: Number, default: 0 },
    subject: { type: String, default: 'General' }
  },
  { _id: false }
);

const TestAttemptSchema = new Schema<ITestAttempt>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    mockTestId: { type: Schema.Types.ObjectId, ref: 'MockTest', required: true },
    examId: { type: Schema.Types.ObjectId, ref: 'Exam', required: true },
    examName: { type: String, required: true },
    testTitle: { type: String, required: true },
    answers: { type: [QuestionAnswerSchema], default: [] },
    totalQuestions: { type: Number, required: true },
    attemptedCount: { type: Number, default: 0 },
    correctCount: { type: Number, default: 0 },
    wrongCount: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
    maxScore: { type: Number, default: 100 },
    accuracyPercentage: { type: Number, default: 0 },
    timeSpentSeconds: { type: Number, default: 0 },
    completedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

TestAttemptSchema.index({ userId: 1, examId: 1, createdAt: -1 });

export default mongoose.model<ITestAttempt>('TestAttempt', TestAttemptSchema);
