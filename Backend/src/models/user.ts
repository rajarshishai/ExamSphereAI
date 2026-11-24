import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email?: string;
  phone?: string;
  password?: string;
  role: 'student' | 'admin';
  targetExams: string[];
  googleId?: string;
  githubId?: string;
  linkedinId?: string;
  avatar?: string;
  dob?: string;
  institution?: string;
  state?: string;
  educationLevel?: string;
  preferredLanguage?: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isOnboardingCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      default: 'Student Aspirant'
    },

    email: {
      type: String,
      sparse: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    phone: {
      type: String,
      sparse: true,
      unique: true,
      trim: true
    },

    password: {
      type: String,
      required: false,
      minlength: 6
    },

    role: {
      type: String,
      enum: ['student', 'admin'],
      default: 'student'
    },

    targetExams: {
      type: [String],
      default: []
    },

    googleId: {
      type: String,
      sparse: true
    },

    githubId: {
      type: String,
      sparse: true
    },

    linkedinId: {
      type: String,
      sparse: true
    },

    avatar: {
      type: String,
      default: ''
    },

    dob: {
      type: String,
      default: ''
    },

    institution: {
      type: String,
      default: ''
    },

    state: {
      type: String,
      default: ''
    },

    educationLevel: {
      type: String,
      default: 'Undergraduate'
    },

    preferredLanguage: {
      type: String,
      default: 'English'
    },

    isEmailVerified: {
      type: Boolean,
      default: false
    },

    isPhoneVerified: {
      type: Boolean,
      default: false
    },

    isOnboardingCompleted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;
