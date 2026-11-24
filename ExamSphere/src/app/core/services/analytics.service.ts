import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface SubjectStat {
  subject: string;
  accuracy: number;
  questionsAttempted: number;
  status: 'Strong' | 'Moderate' | 'Needs Practice';
}

export interface RecentAttemptSummary {
  id: string;
  testTitle: string;
  examName: string;
  score: number;
  maxScore: number;
  accuracy: number;
  completedAt: string;
}

export interface StudentAnalytics {
  totalTestsAttempted: number;
  totalQuestionsSolved: number;
  averageAccuracy: number;
  syllabusCoverage: number;
  readinessIndex: number;
  subjectBreakdown: SubjectStat[];
  recentAttempts: RecentAttemptSummary[];
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5000/api/analytics';

  getDashboardAnalytics(): Observable<StudentAnalytics> {
    return this.http.get<{ success: boolean; data: StudentAnalytics }>(`${this.apiUrl}/dashboard`).pipe(
      map(res => res.data)
    );
  }
}
