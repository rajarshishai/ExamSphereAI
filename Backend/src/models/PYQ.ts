import mongoose, { Schema, Document } from 'mongoose';

export interface IPYQ extends Document {
  examId: mongoose.Types.ObjectId;
  examName: string;
  year: number;
  session?: string;
  subject: string;
  topic?: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  marks: number;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PYQSchema = new Schema<IPYQ>(
  {
    examId: { type: Schema.Types.ObjectId, ref: 'Exam', required: true },
    examName: { type: String, required: true },
    year: { type: Number, required: true },
    session: { type: String, default: 'General' },
    subject: { type: String, required: true },
    topic: { type: String, default: 'Core' },
    questionText: { type: String, required: true },
    options: { type: [String], required: true },
    correctOptionIndex: { type: Number, required: true },
    explanation: { type: String, required: true },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
    marks: { type: Number, default: 2 },
    isVerified: { type: Boolean, default: true }
  },
  { timestamps: true }
);

PYQSchema.index({ examId: 1, year: 1, subject: 1 });
PYQSchema.index({ questionText: 'text', topic: 'text' });

export default mongoose.model<IPYQ>('PYQ', PYQSchema);
