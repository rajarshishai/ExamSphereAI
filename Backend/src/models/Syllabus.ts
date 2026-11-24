
import mongoose, { Schema, Document } from 'mongoose';

export interface ITopic {
  title: string;
  description?: string;
  importance: 'High' | 'Medium' | 'Low';
  estimatedHours: number;
}

export interface ISubject {
  name: string;
  topics: ITopic[];
}

export interface ISyllabus extends Document {
  examId: mongoose.Types.ObjectId;
  examName: string;
  category: string;
  subjects: ISubject[];
  createdAt: Date;
  updatedAt: Date;
}

const TopicSchema = new Schema<ITopic>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  importance: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Medium'
  },
  estimatedHours: {
    type: Number,
    default: 1,
    min: 0
  }
});

const SubjectSchema = new Schema<ISubject>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  topics: {
    type: [TopicSchema],
    default: []
  }
});

const SyllabusSchema = new Schema<ISyllabus>(
  {
    examId: {
      type: Schema.Types.ObjectId,
      ref: 'Exam',
      required: true
    },
    examName: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true
    },
    subjects: {
      type: [SubjectSchema],
      default: []
    }
  },
  { timestamps: true }
);

SyllabusSchema.index({ examId: 1 }, { unique: true });

export default mongoose.model<ISyllabus>(
  'Syllabus',
  SyllabusSchema
);
