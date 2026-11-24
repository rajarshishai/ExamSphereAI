
import mongoose, { Schema, Document } from 'mongoose';

export type ExamCategory =
  | 'Government'
  | 'Engineering'
  | 'Medical'
  | 'Management'
  | 'University'
  | 'School'
  | 'Defence'
  | 'Banking'
  | 'Railway'
  | 'Railways'
  | 'Civil Services'
  | 'Law'
  | 'Teaching'
  | 'State PSC'
  | 'Science'
  | 'Professional'
  | 'International'
  | 'Other';

export interface IExam extends Document {
  name: string;
  slug: string;
  category: ExamCategory;
  subCategory?: string;
  conductingBody: string;
  overview: string;
  eligibility: string;
  qualification: string;
  pattern: string;
  mode: string;
  frequency: string;
  stages: string[];
  subjects: string[];
  applicationStartDate?: Date;
  applicationEndDate?: Date;
  examDate?: Date;
  resultDate?: Date;
  officialWebsite?: string;
  applicationLink?: string;
  syllabus: string[];
  isActive: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const examSchema = new Schema<IExam>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    category: {
      type: String,
      enum: [
        'Government',
        'Engineering',
        'Medical',
        'Management',
        'University',
        'School',
        'Defence',
        'Banking',
        'Railway',
        'Railways',
        'Civil Services',
        'Law',
        'Teaching',
        'State PSC',
        'Science',
        'Professional',
        'International',
        'Other'
      ],
      required: true
    },

    subCategory: {
      type: String,
      trim: true
    },

    conductingBody: {
      type: String,
      required: true,
      trim: true
    },

    overview: {
      type: String,
      required: true
    },

    eligibility: {
      type: String,
      required: true
    },

    qualification: {
      type: String,
      default: 'Not specified'
    },

    pattern: {
      type: String,
      required: true
    },

    mode: {
      type: String,
      default: 'Online'
    },

    frequency: {
      type: String,
      default: 'Annual'
    },

    stages: {
      type: [String],
      default: []
    },

    subjects: {
      type: [String],
      default: []
    },

    applicationStartDate: Date,
    applicationEndDate: Date,
    examDate: Date,
    resultDate: Date,

    officialWebsite: String,
    applicationLink: String,

    syllabus: {
      type: [String],
      default: []
    },

    isActive: {
      type: Boolean,
      default: true
    },

    isFeatured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

// Search index
examSchema.index({
  name: 'text',
  conductingBody: 'text',
  overview: 'text'
});

// Category filtering
examSchema.index({
  category: 1,
  isActive: 1
});

// Upcoming examination sorting
examSchema.index({
  examDate: 1
});

const Exam = mongoose.model<IExam>('Exam', examSchema);

export default Exam;
