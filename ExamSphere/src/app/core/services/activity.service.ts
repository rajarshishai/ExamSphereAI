import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, catchError } from 'rxjs';
import { AuthService } from './auth.service/auth.service';

export interface ActivityItem {
  id?: string;
  activityType: 'mock_test' | 'study_topic' | 'ai_question' | 'saved_exam' | 'achievement' | 'schedule_update';
  title: string;
  description: string;
  metadata?: Record<string, any>;
  createdAt: string | Date;
}

export interface MockTestHistoryItem {
  testTitle: string;
  examName: string;
  score: number;
  maxScore: number;
  accuracyPercentage: number;
  attemptedCount: number;
  totalQuestions: number;
  timeSpentSeconds: number;
  completedAt: string | Date;
  status: 'Master' | 'Excellent' | 'Good' | 'Needs Practice';
}

export interface StudyHistoryItem {
  subject: string;
  exam: string;
  topicsCompleted: number;
  totalTopics: number;
  masteryPercentage: number;
  hoursSpent: number;
  lastStudied: string | Date;
}

export interface AiHistoryItem {
  id: string;
  title: string;
  subject: string;
  messageCount: number;
  lastQuestion: string;
  updatedAt: string | Date;
}

export interface SavedExamItem {
  examId: string;
  examName: string;
  category: string;
  targetYear?: number;
  examDate?: string;
  syllabusCoverage?: number;
  notes?: string;
  savedAt?: string | Date;
}

export interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  badgeIcon: string;
  category: string;
  unlocked: boolean;
  unlockedAt?: string;
  progress: number;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private readonly apiUrl = 'http://localhost:5000/api/activities';

  activities = signal<ActivityItem[]>([]);
  mockTestHistory = signal<MockTestHistoryItem[]>([]);
  studyHistory = signal<StudyHistoryItem[]>([]);
  aiHistory = signal<AiHistoryItem[]>([]);
  savedExams = signal<SavedExamItem[]>([]);
  achievements = signal<AchievementBadge[]>([]);

  fetchActivities(): Observable<ActivityItem[]> {
    return this.http.get<{ success: boolean; data: ActivityItem[] }>(this.apiUrl).pipe(
      tap(res => {
        if (res?.data) this.activities.set(res.data);
      }),
      catchError(() => of({ success: true, data: this.activities() } as any))
    );
  }

  fetchMockTests(): Observable<MockTestHistoryItem[]> {
    return this.http.get<{ success: boolean; data: MockTestHistoryItem[] }>(`${this.apiUrl}/mock-tests`).pipe(
      tap(res => {
        if (res?.data) this.mockTestHistory.set(res.data);
      }),
      catchError(() => of({ success: true, data: this.mockTestHistory() } as any))
    );
  }

  fetchStudyHistory(): Observable<StudyHistoryItem[]> {
    return this.http.get<{ success: boolean; data: StudyHistoryItem[] }>(`${this.apiUrl}/study-history`).pipe(
      tap(res => {
        if (res?.data) this.studyHistory.set(res.data);
      }),
      catchError(() => of({ success: true, data: this.studyHistory() } as any))
    );
  }

  fetchAiHistory(): Observable<AiHistoryItem[]> {
    return this.http.get<{ success: boolean; data: AiHistoryItem[] }>(`${this.apiUrl}/ai-history`).pipe(
      tap(res => {
        if (res?.data) this.aiHistory.set(res.data);
      }),
      catchError(() => of({ success: true, data: this.aiHistory() } as any))
    );
  }

  fetchSavedExams(): Observable<SavedExamItem[]> {
    return this.http.get<{ success: boolean; data: SavedExamItem[] }>(`${this.apiUrl}/saved-exams`).pipe(
      tap(res => {
        if (res?.data) this.savedExams.set(res.data);
      }),
      catchError(() => of({ success: true, data: this.savedExams() } as any))
    );
  }

  toggleSaveExam(exam: Partial<SavedExamItem>): Observable<any> {
    const list = this.savedExams();
    const exists = list.some(e => e.examId === exam.examId);
    let updated: SavedExamItem[];

    if (exists) {
      updated = list.filter(e => e.examId !== exam.examId);
    } else {
      updated = [
        {
          examId: exam.examId || `exam-${Date.now()}`,
          examName: exam.examName || 'Target Exam',
          category: exam.category || 'National',
          targetYear: exam.targetYear || 2026,
          examDate: exam.examDate || 'Upcoming',
          syllabusCoverage: exam.syllabusCoverage || 0,
          notes: exam.notes || '',
          savedAt: new Date().toISOString()
        },
        ...list
      ];
    }
    this.savedExams.set(updated);

    const token = this.authService.getToken();
    if (!token) return of({ success: true, saved: !exists });

    return this.http.post(`${this.apiUrl}/saved-exams/toggle`, exam).pipe(
      catchError(() => of({ success: true, saved: !exists }))
    );
  }

  fetchAchievements(): Observable<AchievementBadge[]> {
    return this.http.get<{ success: boolean; data: AchievementBadge[] }>(`${this.apiUrl}/achievements`).pipe(
      tap(res => {
        if (res?.data) this.achievements.set(res.data);
      }),
      catchError(() => of({ success: true, data: this.achievements() } as any))
    );
  }
}
