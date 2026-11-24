import mongoose, { Schema, Document } from 'mongoose';

export type ResourceCategory =
  | 'Syllabus'
  | 'Notes'
  | 'Formula Sheet'
  | 'Standard Textbook'
  | 'Previous Papers'
  | 'Video Lessons'
  | 'Flashcards'
  | 'Practice Questions'
  | 'Revision Materials'
  | 'Mind Maps';

export type SourceType =
  | 'Official Verified'
  | 'Standard Academic'
  | 'Expert Curated'
  | 'AI Generated';

export type FileFormat = 'PDF' | 'Video' | 'Interactive' | 'Flashcard Deck' | 'Article';

export interface IResource extends Document {
  title: string;
  slug: string;
  examSlug: string;
  examName: string;
  category: string;
  resourceType: ResourceCategory;
  subject: string;
  chapter: string;
  topics: string[];
  sourceType: SourceType;
  authorOrPublisher: string;
  description: string;
  fileFormat: FileFormat;
  fileSizeOrDuration: string;
  downloadUrl?: string;
  externalUrl?: string;
  rating: number;
  downloadsCount: number;
  isFeatured: boolean;
  isActive: boolean;
  verifiedYear: string;
  createdAt: Date;
  updatedAt: Date;
}

const ResourceSchema = new Schema<IResource>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    examSlug: { type: String, required: true, lowercase: true, trim: true, index: true },
    examName: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true, index: true },
    resourceType: {
      type: String,
      required: true,
      enum: [
        'Syllabus',
        'Notes',
        'Formula Sheet',
        'Standard Textbook',
        'Previous Papers',
        'Video Lessons',
        'Flashcards',
        'Practice Questions',
        'Revision Materials',
        'Mind Maps'
      ],
      index: true
    },
    subject: { type: String, required: true, trim: true },
    chapter: { type: String, required: true, trim: true },
    topics: { type: [String], default: [] },
    sourceType: {
      type: String,
      enum: ['Official Verified', 'Standard Academic', 'Expert Curated', 'AI Generated'],
      default: 'Official Verified'
    },
    authorOrPublisher: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    fileFormat: {
      type: String,
      enum: ['PDF', 'Video', 'Interactive', 'Flashcard Deck', 'Article'],
      default: 'PDF'
    },
    fileSizeOrDuration: { type: String, default: 'PDF Document' },
    downloadUrl: { type: String },
    externalUrl: { type: String },
    rating: { type: Number, default: 4.8, min: 1, max: 5 },
    downloadsCount: { type: Number, default: 1250 },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    verifiedYear: { type: String, default: '2026 Edition' }
  },
  {
    timestamps: true
  }
);

// Search indexes
ResourceSchema.index({
  title: 'text',
  subject: 'text',
  chapter: 'text',
  authorOrPublisher: 'text',
  examName: 'text'
});

const Resource = mongoose.model<IResource>('Resource', ResourceSchema);

export default Resource;
