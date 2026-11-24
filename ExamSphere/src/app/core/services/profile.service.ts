import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, catchError } from 'rxjs';
import { AuthService } from './auth.service/auth.service';

export interface UserPersonal {
  fullName: string;
  avatar: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  country: string;
  cityState: string;
  bio: string;
}

export interface UserAcademic {
  educationLevel: string;
  institution: string;
  course: string;
  stream: string;
  currentSemester: string;
  graduationYear: number;
  preferredLanguage: string;
}

export interface UserExamPreferences {
  targetExams: string[];
  category: string;
  targetYear: number;
  preparationLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  preferredSubjects: string[];
  dailyStudyTargetHours: number;
  preferredSchedule: string;
}

export interface UserSecurity {
  emailVerified: boolean;
  twoFactorEnabled: boolean;
  loginHistory: Array<{
    device: string;
    browser: string;
    ip: string;
    location: string;
    loggedAt: string | Date;
  }>;
  activeSessions: Array<{
    sessionId: string;
    device: string;
    ip: string;
    lastActive: string | Date;
    current: boolean;
  }>;
}

export interface UserLearningPreferences {
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
}

export interface UserAccountInfo {
  status: string;
  membershipTier: string;
  referralCode: string;
  lastLogin: string | Date;
  userId?: string;
  createdAt?: string | Date;
}

export interface FullUserProfile {
  personal: UserPersonal;
  academic: UserAcademic;
  examPreferences: UserExamPreferences;
  security: UserSecurity;
  learningPreferences: UserLearningPreferences;
  account: UserAccountInfo;
}

const DEFAULT_PROFILE: FullUserProfile = {
  personal: {
    fullName: '',
    avatar: '',
    phone: '',
    dateOfBirth: '',
    gender: 'Not Specified',
    country: 'India',
    cityState: '',
    bio: ''
  },
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
    targetExams: [],
    category: 'National',
    targetYear: new Date().getFullYear() + 1,
    preparationLevel: 'Intermediate',
    preferredSubjects: [],
    dailyStudyTargetHours: 4,
    preferredSchedule: 'Evening Focus'
  },
  security: {
    emailVerified: false,
    twoFactorEnabled: false,
    loginHistory: [],
    activeSessions: [
      {
        sessionId: 'sess_live',
        device: 'Current Browser Session',
        ip: 'Local Session',
        lastActive: new Date().toISOString(),
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
    referralCode: 'EXAM-STUDENT',
    lastLogin: new Date().toISOString(),
    userId: '',
    createdAt: new Date().toISOString()
  }
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private readonly apiUrl = 'http://localhost:5000/api/profile';
  private readonly storageKey = 'examsphere_profile_data';

  profile = signal<FullUserProfile>(this.loadInitialProfile());

  private loadInitialProfile(): FullUserProfile {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          // Purge stale mock data if present in localStorage
          if (parsed?.personal?.phone === '+91 98765 43210' || parsed?.personal?.dateOfBirth === '2002-08-15' || parsed?.academic?.institution === 'National Institute of Technology') {
            localStorage.removeItem(this.storageKey);
          } else {
            return parsed;
          }
        } catch {}
      }
    }
    const user = this.authService.getUser();
    if (user?.name) {
      return {
        ...DEFAULT_PROFILE,
        personal: {
          ...DEFAULT_PROFILE.personal,
          fullName: user.name,
          phone: user.phone || ''
        },
        account: {
          ...DEFAULT_PROFILE.account,
          userId: user.id || '',
          referralCode: user.id ? `EXAM-${user.id.slice(-6).toUpperCase()}` : 'EXAM-STUDENT'
        }
      };
    }
    return DEFAULT_PROFILE;
  }

  private saveLocally(data: FullUserProfile): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
    this.profile.set(data);
  }

  fetchProfile(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      return of({ success: true, data: this.profile() });
    }

    return this.http.get<{ success: boolean; data: any }>(this.apiUrl).pipe(
      tap(res => {
        if (res?.data?.profile) {
          const p = res.data.profile;
          const u = res.data.user;
          const full: FullUserProfile = {
            personal: {
              fullName: p.fullName || u.name,
              avatar: p.avatar || '',
              phone: p.phone,
              dateOfBirth: p.dateOfBirth,
              gender: p.gender,
              country: p.country,
              cityState: p.cityState,
              bio: p.bio
            },
            academic: p.academic || DEFAULT_PROFILE.academic,
            examPreferences: p.examPreferences || DEFAULT_PROFILE.examPreferences,
            security: p.security || DEFAULT_PROFILE.security,
            learningPreferences: p.learningPreferences || DEFAULT_PROFILE.learningPreferences,
            account: {
              status: p.account?.status || 'Active Student',
              membershipTier: p.account?.membershipTier || 'ExamSphere Pro Student',
              referralCode: p.account?.referralCode || `EXAM-${(u.id || '').slice(-4)}`,
              lastLogin: p.account?.lastLogin || new Date().toISOString(),
              userId: u.id,
              createdAt: u.createdAt
            }
          };
          this.saveLocally(full);
        }
      }),
      catchError(() => of({ success: true, data: this.profile() }))
    );
  }

  updatePersonal(personal: Partial<UserPersonal>): Observable<any> {
    const updated = {
      ...this.profile(),
      personal: { ...this.profile().personal, ...personal }
    };
    this.saveLocally(updated);

    const token = this.authService.getToken();
    if (!token) return of({ success: true, data: updated });

    return this.http.put(`${this.apiUrl}/personal`, personal).pipe(
      catchError(() => of({ success: true, data: updated }))
    );
  }

  updateAcademic(academic: Partial<UserAcademic>): Observable<any> {
    const updated = {
      ...this.profile(),
      academic: { ...this.profile().academic, ...academic }
    };
    this.saveLocally(updated);

    const token = this.authService.getToken();
    if (!token) return of({ success: true, data: updated });

    return this.http.put(`${this.apiUrl}/academic`, academic).pipe(
      catchError(() => of({ success: true, data: updated }))
    );
  }

  updateExamPreferences(prefs: Partial<UserExamPreferences>): Observable<any> {
    const updated = {
      ...this.profile(),
      examPreferences: { ...this.profile().examPreferences, ...prefs }
    };
    this.saveLocally(updated);

    const token = this.authService.getToken();
    if (!token) return of({ success: true, data: updated });

    return this.http.put(`${this.apiUrl}/exam-preferences`, prefs).pipe(
      catchError(() => of({ success: true, data: updated }))
    );
  }

  updateLearningPreferences(learning: Partial<UserLearningPreferences>): Observable<any> {
    const updated = {
      ...this.profile(),
      learningPreferences: { ...this.profile().learningPreferences, ...learning }
    };
    this.saveLocally(updated);

    const token = this.authService.getToken();
    if (!token) return of({ success: true, data: updated });

    return this.http.put(`${this.apiUrl}/learning-preferences`, learning).pipe(
      catchError(() => of({ success: true, data: updated }))
    );
  }

  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      return of({ success: true, message: 'Password updated in local demo mode.' });
    }
    return this.http.post(`${this.apiUrl}/change-password`, { currentPassword, newPassword });
  }

  toggleTwoFactor(): Observable<any> {
    const current = this.profile().security.twoFactorEnabled;
    const updated = {
      ...this.profile(),
      security: {
        ...this.profile().security,
        twoFactorEnabled: !current
      }
    };
    this.saveLocally(updated);

    const token = this.authService.getToken();
    if (!token) return of({ success: true, twoFactorEnabled: !current });

    return this.http.post(`${this.apiUrl}/toggle-2fa`, {}).pipe(
      catchError(() => of({ success: true, twoFactorEnabled: !current }))
    );
  }

  terminateSession(sessionId: string): Observable<any> {
    const updated = {
      ...this.profile(),
      security: {
        ...this.profile().security,
        activeSessions: this.profile().security.activeSessions.filter(s => s.sessionId !== sessionId || s.current)
      }
    };
    this.saveLocally(updated);

    const token = this.authService.getToken();
    if (!token) return of({ success: true });

    return this.http.post(`${this.apiUrl}/terminate-session`, { sessionId }).pipe(
      catchError(() => of({ success: true }))
    );
  }
}
