import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface StudyTaskItem {
  _id: string;
  day: string;
  date?: string;
  subject: string;
  topic: string;
  activity: 'Concept Study' | 'Practice PYQ' | 'Revision' | 'Mock Test';
  durationMinutes: number;
  completed: boolean;
  completedAt?: string;
}

export interface StudyPlanItem {
  _id: string;
  examId: string;
  examName: string;
  targetExamDate?: string;
  dailyHours: number;
  tasks: StudyTaskItem[];
  adaptiveNotes?: string;
}

@Injectable({ providedIn: 'root' })
export class StudyPlanService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5000/api/study-plans';

  getPlan(examId: string): Observable<StudyPlanItem | null> {
    return this.http.get<{ success: boolean; data: StudyPlanItem }>(`${this.apiUrl}/${examId}`).pipe(
      map(res => res.data || null)
    );
  }

  generatePlan(examId: string, dailyHours: number = 4, targetExamDate?: string): Observable<StudyPlanItem> {
    return this.http.post<{ success: boolean; data: StudyPlanItem }>(`${this.apiUrl}/generate`, {
      examId,
      dailyHours,
      targetExamDate
    }).pipe(
      map(res => res.data)
    );
  }

  toggleTask(planId: string, taskId: string, completed: boolean): Observable<StudyPlanItem> {
    return this.http.patch<{ success: boolean; data: StudyPlanItem }>(`${this.apiUrl}/${planId}/tasks/${taskId}`, {
      completed
    }).pipe(
      map(res => res.data)
    );
  }

  addTask(planId: string, task: Partial<StudyTaskItem>): Observable<StudyPlanItem> {
    return this.http.post<{ success: boolean; data: StudyPlanItem }>(`${this.apiUrl}/${planId}/tasks`, task).pipe(
      map(res => res.data)
    );
  }

  deleteTask(planId: string, taskId: string): Observable<StudyPlanItem> {
    return this.http.delete<{ success: boolean; data: StudyPlanItem }>(`${this.apiUrl}/${planId}/tasks/${taskId}`).pipe(
      map(res => res.data)
    );
  }
}
