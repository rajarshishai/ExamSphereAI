
import mongoose, { Schema, Document } from 'mongoose';

export interface ITopicProgress {
  topicId: string;
  completed: boolean;
  completedAt?: Date;
}

export interface ISyllabusProgress extends Document {
  userId: mongoose.Types.ObjectId;
  examId: mongoose.Types.ObjectId;
  topics: ITopicProgress[];
  createdAt: Date;
  updatedAt: Date;
}

const TopicProgressSchema = new Schema<ITopicProgress>({
  topicId: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date,
    default: null
  }
}, { _id: false });

const SyllabusProgressSchema = new Schema<ISyllabusProgress>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    examId: {
      type: Schema.Types.ObjectId,
      ref: 'Exam',
      required: true
    },
    topics: {
      type: [TopicProgressSchema],
      default: []
    }
  },
  { timestamps: true }
);

// One progress document per student per exam.
SyllabusProgressSchema.index(
  { userId: 1, examId: 1 },
  { unique: true }
);

export default mongoose.model<ISyllabusProgress>(
  'SyllabusProgress',
  SyllabusProgressSchema
);
