
import mongoose, { Schema, Document } from 'mongoose';

export interface IChatMessage {
  role: 'user' | 'assistant';
  content: string;
  mode?: string;
  language?: string;
  mcqs?: Array<{
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }>;
  flashcards?: Array<{
    front: string;
    back: string;
  }>;
  createdAt: Date;
}

export interface IAIConversation extends Document {
  userId: mongoose.Types.ObjectId;
  examId?: mongoose.Types.ObjectId;
  title: string;
  subject?: string;
  topic?: string;
  mode?: string;
  messages: IChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IChatMessage>({
  role: {
    type: String,
    enum: ['user', 'assistant'],
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 25000
  },
  mode: {
    type: String,
    default: 'academic_doubt'
  },
  language: {
    type: String,
    default: 'en'
  },
  mcqs: [
    {
      question: String,
      options: [String],
      correctIndex: Number,
      explanation: String
    }
  ],
  flashcards: [
    {
      front: String,
      back: String
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const AIConversationSchema = new Schema<IAIConversation>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    examId: {
      type: Schema.Types.ObjectId,
      ref: 'Exam',
      required: false
    },
    title: {
      type: String,
      default: 'New AI Tutor Conversation'
    },
    subject: String,
    topic: String,
    messages: {
      type: [MessageSchema],
      default: []
    }
  },
  { timestamps: true }
);

AIConversationSchema.index({ userId: 1, examId: 1, updatedAt: -1 });

export default mongoose.model<IAIConversation>(
  'AIConversation',
  AIConversationSchema
);
