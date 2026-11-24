import mongoose, { Schema, Document } from 'mongoose';

export type FeedbackCategory =
  | 'Testimonial'
  | 'Feature Request'
  | 'Academic Review'
  | 'General';

export interface IFeedback extends Document {
  name: string;
  email?: string;
  exam: string;
  rankOrScore?: string;
  rating: number;
  category: FeedbackCategory;
  comment: string;
  avatar: string;
  isApproved: boolean;
  isFeatured: boolean;
  userId?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const FeedbackSchema = new Schema<IFeedback>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true
    },
    exam: {
      type: String,
      required: true,
      trim: true,
      default: 'General Competitive Exam'
    },
    rankOrScore: {
      type: String,
      trim: true,
      default: 'Aspirant'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 5
    },
    category: {
      type: String,
      enum: ['Testimonial', 'Feature Request', 'Academic Review', 'General'],
      default: 'Testimonial'
    },
    comment: {
      type: String,
      required: true,
      trim: true
    },
    avatar: {
      type: String,
      default: 'ST'
    },
    isApproved: {
      type: Boolean,
      default: true
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

// Indexes for rapid sorting and filtering
FeedbackSchema.index({ createdAt: -1 });
FeedbackSchema.index({ isApproved: 1, isFeatured: -1, createdAt: -1 });
FeedbackSchema.index({ exam: 1 });

const Feedback = mongoose.model<IFeedback>('Feedback', FeedbackSchema);

export default Feedback;
