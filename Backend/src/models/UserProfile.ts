import mongoose, { Schema, Document } from 'mongoose';

export interface ILoginHistoryItem {
  device: string;
  browser: string;
  ip: string;
  location: string;
  loggedAt: Date;
}

export interface IActiveSessionItem {
  sessionId: string;
  device: string;
  ip: string;
  lastActive: Date;
  current: boolean;
}

export interface IUserProfile extends Document {
  userId: mongoose.Types.ObjectId;
  avatar: string;
  fullName: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  country: string;
  cityState: string;
  bio: string;
  
  academic: {
    educationLevel: string;
    institution: string;
    course: string;
    stream: string;
    currentSemester: string;
    graduationYear: number;
    preferredLanguage: string;
  };
  
  examPreferences: {
    targetExams: string[];
    category: string;
    targetYear: number;
    preparationLevel: 'Beginner' | 'Intermediate' | 'Advanced';
    preferredSubjects: string[];
    dailyStudyTargetHours: number;
    preferredSchedule: string;
  };
  
  security: {
    emailVerified: boolean;
    twoFactorEnabled: boolean;
    loginHistory: ILoginHistoryItem[];
    activeSessions: IActiveSessionItem[];
  };
  
  learningPreferences: {
    preferredLanguage: string;
    dailyStudyReminder: boolean;
    reminderTime: string;
    notificationPreferences: {
      examAlerts: boolean;
      mockTestReminders: boolean;
      aiRecommendations: boolean;
      emailDigest: boolean;
    };
    aiResponseStyle: string;
    theme: 'light' | 'dark' | 'system';
  };
  
  account: {
    status: string;
    membershipTier: string;
    referralCode: string;
    lastLogin: Date;
  };

  createdAt: Date;
  updatedAt: Date;
}

const LoginHistorySchema = new Schema<ILoginHistoryItem>({
  device: { type: String, default: 'Desktop' },
  browser: { type: String, default: 'Web Browser' },
  ip: { type: String, default: '127.0.0.1' },
  location: { type: String, default: 'Unknown Location' },
  loggedAt: { type: Date, default: Date.now }
}, { _id: false });

const ActiveSessionSchema = new Schema<IActiveSessionItem>({
  sessionId: { type: String, required: true },
  device: { type: String, default: 'Current Device' },
  ip: { type: String, default: '127.0.0.1' },
  lastActive: { type: Date, default: Date.now },
  current: { type: Boolean, default: false }
}, { _id: false });

const UserProfileSchema = new Schema<IUserProfile>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true
    },
    avatar: {
      type: String,
      default: ''
    },
    fullName: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    dateOfBirth: {
      type: String,
      default: ''
    },
    gender: {
      type: String,
      default: 'Not Specified'
    },
    country: {
      type: String,
      default: 'India'
    },
    cityState: {
      type: String,
      default: ''
    },
    bio: {
      type: String,
      default: ''
    },
    academic: {
      educationLevel: { type: String, default: 'Undergraduate' },
      institution: { type: String, default: '' },
      course: { type: String, default: '' },
      stream: { type: String, default: '' },
      currentSemester: { type: String, default: '' },
      graduationYear: { type: Number, default: new Date().getFullYear() + 2 },
      preferredLanguage: { type: String, default: 'English' }
    },
    examPreferences: {
      targetExams: {
        type: [String],
        default: []
      },
      category: { type: String, default: 'National' },
      targetYear: { type: Number, default: new Date().getFullYear() + 1 },
      preparationLevel: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        default: 'Intermediate'
      },
      preferredSubjects: {
        type: [String],
        default: []
      },
      dailyStudyTargetHours: { type: Number, default: 4 },
      preferredSchedule: { type: String, default: 'Flexible' }
    },
    security: {
      emailVerified: { type: Boolean, default: true },
      twoFactorEnabled: { type: Boolean, default: false },
      loginHistory: { type: [LoginHistorySchema], default: [] },
      activeSessions: { type: [ActiveSessionSchema], default: [] }
    },
    learningPreferences: {
      preferredLanguage: { type: String, default: 'English' },
      dailyStudyReminder: { type: Boolean, default: true },
      reminderTime: { type: String, default: '19:00' },
      notificationPreferences: {
        examAlerts: { type: Boolean, default: true },
        mockTestReminders: { type: Boolean, default: true },
        aiRecommendations: { type: Boolean, default: true },
        emailDigest: { type: Boolean, default: false }
      },
      aiResponseStyle: { type: String, default: 'Step-by-Step with Detailed Solutions' },
      theme: { type: String, enum: ['light', 'dark', 'system'], default: 'light' }
    },
    account: {
      status: { type: String, default: 'Active Student' },
      membershipTier: { type: String, default: 'ExamSphere Pro Student' },
      referralCode: { type: String, default: 'EXAM-2026-PRO' },
      lastLogin: { type: Date, default: Date.now }
    }
  },
  { timestamps: true }
);

export default mongoose.model<IUserProfile>('UserProfile', UserProfileSchema);
