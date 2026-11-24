import mongoose, { Schema, Document } from 'mongoose';

export interface IUserActivity extends Document {
  userId: mongoose.Types.ObjectId;
  activityType: 'mock_test' | 'study_topic' | 'ai_question' | 'saved_exam' | 'achievement' | 'schedule_update' | 'daily_task';
  title: string;
  description: string;
  metadata?: Record<string, any>;
  createdAt: Date;
}

const UserActivitySchema = new Schema<IUserActivity>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    activityType: {
      type: String,
      enum: ['mock_test', 'study_topic', 'ai_question', 'saved_exam', 'achievement', 'schedule_update', 'daily_task'],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    metadata: {
      type: Schema.Types.Mixed,
      default: {}
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<IUserActivity>('UserActivity', UserActivitySchema);
