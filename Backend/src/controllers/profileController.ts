import { Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user';
import UserProfile, { IUserProfile } from '../models/UserProfile';
import { AuthRequest } from '../middleware/authMiddleware';

/**
 * Helper to ensure a profile document exists for a user with genuine details.
 */
const getOrCreateProfile = async (userId: string, userName: string, userEmail?: string): Promise<IUserProfile> => {
  let profile = await UserProfile.findOne({ userId });
  if (!profile) {
    const userDoc = await User.findById(userId);
    const targetExams = userDoc?.targetExams || [];
    profile = await UserProfile.create({
      userId,
      fullName: userName || userDoc?.name || '',
      avatar: '',
      phone: userDoc?.phone || '',
      dateOfBirth: '',
      gender: 'Not Specified',
      country: 'India',
      cityState: '',
      bio: '',
      academic: {
        educationLevel: 'Undergraduate',
        institution: '',
        course: '',
        stream: '',
        currentSemester: '',
        graduationYear: new Date().getFullYear() + 2,
        preferredLanguage: 'English'
      },
      examPreferences: {
        targetExams,
        category: 'National',
        targetYear: new Date().getFullYear() + 1,
        preparationLevel: 'Intermediate',
        preferredSubjects: [],
        dailyStudyTargetHours: 4,
        preferredSchedule: 'Evening Focus'
      },
      security: {
        emailVerified: userDoc?.isEmailVerified || false,
        twoFactorEnabled: false,
        loginHistory: [],
        activeSessions: [
          {
            sessionId: `sess_${userId.slice(-6)}`,
            device: 'Current Browser Session',
            ip: 'Local Session',
            lastActive: new Date(),
            current: true
          }
        ]
      },
      learningPreferences: {
        preferredLanguage: 'English',
        dailyStudyReminder: true,
        reminderTime: '19:00',
        notificationPreferences: {
          examAlerts: true,
          mockTestReminders: true,
          aiRecommendations: true,
          emailDigest: false
        },
        aiResponseStyle: 'Step-by-Step with Detailed Solutions',
        theme: 'light'
      },
      account: {
        status: 'Active Student',
        membershipTier: 'ExamSphere Student',
        referralCode: `EXAM-${userId.slice(-6).toUpperCase()}`,
        lastLogin: new Date()
      }
    });
  } else {
    // If existing document has residual placeholder values from previous mock data, clean them out
    let modified = false;
    if (profile.phone === '+91 98765 43210') {
      const userDoc = await User.findById(userId);
      profile.phone = userDoc?.phone || '';
      modified = true;
    }
    if (profile.dateOfBirth === '2002-08-15') {
      profile.dateOfBirth = '';
      modified = true;
    }
    if (profile.cityState === 'Kolkata, West Bengal') {
      profile.cityState = '';
      modified = true;
    }
    if (profile.academic?.institution === 'National Institute of Technology') {
      profile.academic.institution = '';
      modified = true;
    }
    if (profile.academic?.course === 'B.Tech' && profile.academic?.stream === 'Computer Science & Engineering') {
      profile.academic.course = '';
      profile.academic.stream = '';
      profile.academic.currentSemester = '';
      modified = true;
    }
    if (profile.security?.activeSessions?.some(s => s.ip === '103.21.244.18' || s.device.includes('OnePlus'))) {
      profile.security.activeSessions = [
        {
          sessionId: `sess_${userId.slice(-6)}`,
          device: 'Current Device (Web Browser)',
          ip: 'Current Session',
          lastActive: new Date(),
          current: true
        }
      ];
      profile.security.loginHistory = [];
      modified = true;
    }
    if (modified) {
      await profile.save();
    }
  }
  return profile;
};

// GET COMPLETE PROFILE
export const getProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Authentication required.' });
      return;
    }

    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found.' });
      return;
    }

    const profile = await getOrCreateProfile(req.user.id, user.name, user.email || '');

    res.status(200).json({
      success: true,
      message: 'Profile retrieved successfully.',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt
        },
        profile
      }
    });
  } catch (error) {
    console.error('getProfile Error:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve profile.' });
  }
};

// UPDATE PERSONAL INFO
export const updatePersonal = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Authentication required.' });
      return;
    }

    const { fullName, phone, dateOfBirth, gender, country, cityState, bio, avatar } = req.body;

    const profile = await getOrCreateProfile(req.user.id, req.user.name, req.user.email);

    if (fullName !== undefined) {
      profile.fullName = fullName;
      await User.findByIdAndUpdate(req.user.id, { name: fullName });
    }
    if (phone !== undefined) profile.phone = phone;
    if (dateOfBirth !== undefined) profile.dateOfBirth = dateOfBirth;
    if (gender !== undefined) profile.gender = gender;
    if (country !== undefined) profile.country = country;
    if (cityState !== undefined) profile.cityState = cityState;
    if (bio !== undefined) profile.bio = bio;
    if (avatar !== undefined) profile.avatar = avatar;

    await profile.save();

    res.status(200).json({
      success: true,
      message: 'Personal information updated successfully.',
      data: profile
    });
  } catch (error) {
    console.error('updatePersonal Error:', error);
    res.status(500).json({ success: false, message: 'Failed to update personal info.' });
  }
};

// UPDATE ACADEMIC INFO
export const updateAcademic = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Authentication required.' });
      return;
    }

    const { educationLevel, institution, course, stream, currentSemester, graduationYear, preferredLanguage } = req.body;

    const profile = await getOrCreateProfile(req.user.id, req.user.name, req.user.email);

    profile.academic = {
      educationLevel: educationLevel ?? profile.academic.educationLevel,
      institution: institution ?? profile.academic.institution,
      course: course ?? profile.academic.course,
      stream: stream ?? profile.academic.stream,
      currentSemester: currentSemester ?? profile.academic.currentSemester,
      graduationYear: graduationYear ? Number(graduationYear) : profile.academic.graduationYear,
      preferredLanguage: preferredLanguage ?? profile.academic.preferredLanguage
    };

    await profile.save();

    res.status(200).json({
      success: true,
      message: 'Academic information updated successfully.',
      data: profile.academic
    });
  } catch (error) {
    console.error('updateAcademic Error:', error);
    res.status(500).json({ success: false, message: 'Failed to update academic info.' });
  }
};

// UPDATE EXAM PREFERENCES
export const updateExamPreferences = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Authentication required.' });
      return;
    }

    const { targetExams, category, targetYear, preparationLevel, preferredSubjects, dailyStudyTargetHours, preferredSchedule } = req.body;

    const profile = await getOrCreateProfile(req.user.id, req.user.name, req.user.email);

    if (Array.isArray(targetExams)) {
      profile.examPreferences.targetExams = targetExams;
      await User.findByIdAndUpdate(req.user.id, { targetExams });
    }
    if (category !== undefined) profile.examPreferences.category = category;
    if (targetYear !== undefined) profile.examPreferences.targetYear = Number(targetYear);
    if (preparationLevel !== undefined) profile.examPreferences.preparationLevel = preparationLevel;
    if (Array.isArray(preferredSubjects)) profile.examPreferences.preferredSubjects = preferredSubjects;
    if (dailyStudyTargetHours !== undefined) profile.examPreferences.dailyStudyTargetHours = Number(dailyStudyTargetHours);
    if (preferredSchedule !== undefined) profile.examPreferences.preferredSchedule = preferredSchedule;

    await profile.save();

    res.status(200).json({
      success: true,
      message: 'Examination preferences updated successfully.',
      data: profile.examPreferences
    });
  } catch (error) {
    console.error('updateExamPreferences Error:', error);
    res.status(500).json({ success: false, message: 'Failed to update examination preferences.' });
  }
};

// UPDATE LEARNING PREFERENCES
export const updateLearningPreferences = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Authentication required.' });
      return;
    }

    const { preferredLanguage, dailyStudyReminder, reminderTime, notificationPreferences, aiResponseStyle, theme } = req.body;

    const profile = await getOrCreateProfile(req.user.id, req.user.name, req.user.email);

    if (preferredLanguage !== undefined) profile.learningPreferences.preferredLanguage = preferredLanguage;
    if (dailyStudyReminder !== undefined) profile.learningPreferences.dailyStudyReminder = Boolean(dailyStudyReminder);
    if (reminderTime !== undefined) profile.learningPreferences.reminderTime = reminderTime;
    if (notificationPreferences !== undefined) {
      profile.learningPreferences.notificationPreferences = {
        ...profile.learningPreferences.notificationPreferences,
        ...notificationPreferences
      };
    }
    if (aiResponseStyle !== undefined) profile.learningPreferences.aiResponseStyle = aiResponseStyle;
    if (theme !== undefined) profile.learningPreferences.theme = theme;

    await profile.save();

    res.status(200).json({
      success: true,
      message: 'Learning preferences updated successfully.',
      data: profile.learningPreferences
    });
  } catch (error) {
    console.error('updateLearningPreferences Error:', error);
    res.status(500).json({ success: false, message: 'Failed to update learning preferences.' });
  }
};

// CHANGE PASSWORD
export const changePassword = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Authentication required.' });
      return;
    }

    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      res.status(400).json({ success: false, message: 'Current password and new password are required.' });
      return;
    }

    if (newPassword.length < 6) {
      res.status(400).json({ success: false, message: 'New password must be at least 6 characters.' });
      return;
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found.' });
      return;
    }

    if (!user.password) {
      // User created via OTP/Google who wants to set their first password
      user.password = await bcrypt.hash(newPassword, 12);
      await user.save();
      res.status(200).json({ success: true, message: 'Password established successfully.' });
      return;
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      res.status(400).json({ success: false, message: 'Incorrect current password.' });
      return;
    }

    user.password = await bcrypt.hash(newPassword, 12);
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Password changed successfully.'
    });
  } catch (error) {
    console.error('changePassword Error:', error);
    res.status(500).json({ success: false, message: 'Failed to change password.' });
  }
};

// TOGGLE 2FA
export const toggleTwoFactor = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Authentication required.' });
      return;
    }

    const profile = await getOrCreateProfile(req.user.id, req.user.name, req.user.email);
    profile.security.twoFactorEnabled = !profile.security.twoFactorEnabled;
    await profile.save();

    res.status(200).json({
      success: true,
      message: `Two-Factor Authentication ${profile.security.twoFactorEnabled ? 'enabled' : 'disabled'}.`,
      twoFactorEnabled: profile.security.twoFactorEnabled
    });
  } catch (error) {
    console.error('toggleTwoFactor Error:', error);
    res.status(500).json({ success: false, message: 'Failed to toggle 2FA.' });
  }
};

// TERMINATE SESSION
export const terminateSession = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Authentication required.' });
      return;
    }

    const { sessionId } = req.body;
    const profile = await getOrCreateProfile(req.user.id, req.user.name, req.user.email);

    profile.security.activeSessions = profile.security.activeSessions.filter(
      s => s.sessionId !== sessionId || s.current
    );
    await profile.save();

    res.status(200).json({
      success: true,
      message: 'Session terminated.',
      data: profile.security.activeSessions
    });
  } catch (error) {
    console.error('terminateSession Error:', error);
    res.status(500).json({ success: false, message: 'Failed to terminate session.' });
  }
};
