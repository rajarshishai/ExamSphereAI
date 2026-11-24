import mongoose, { Schema, Document } from 'mongoose';

export interface IOtpVerification extends Document {
  contact: string; // normalized email or international phone (+919876543210)
  type: 'email' | 'mobile';
  otpHash: string;
  expiresAt: Date;
  attempts: number;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const otpVerificationSchema = new Schema<IOtpVerification>(
  {
    contact: {
      type: String,
      required: true,
      index: true,
      trim: true,
      lowercase: true
    },
    type: {
      type: String,
      enum: ['email', 'mobile'],
      required: true
    },
    otpHash: {
      type: String,
      required: true
    },
    expiresAt: {
      type: Date,
      required: true,
      index: { expires: 0 } // TTL index automatically cleans expired records
    },
    attempts: {
      type: Number,
      default: 0
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const OtpVerification = mongoose.model<IOtpVerification>('OtpVerification', otpVerificationSchema);

export default OtpVerification;
