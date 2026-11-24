import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface TestQuestion {
  _id?: string;
  questionText: string;
  options: string[];
  subject: string;
  topic?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  marks: number;
}

export interface ExamBlueprintSection {
  name: string;
  questionCount: number;
  marks: number;
  durationMinutes?: number;
}

export interface ExamBlueprint {
  examSlug: string;
  examName: string;
  category: string;
  conductingBody: string;
  officialDurationMinutes: number;
  totalMarks: number;
  totalQuestions: number;
  negativeMarkingRate: number;
  negativeMarkingFormula: string;
  patternType: string;
  sections: ExamBlueprintSection[];
  subjects: string[];
  officialRules: string[];
  blueprintSummary: string;
}

export interface ExamMockMeta {
  _id: string;
  name: string;
  slug: string;
  category: string;
  subCategory?: string;
  conductingBody: string;
  pattern: string;
  subjects: string[];
  totalTests: number;
  officialTestsCount: number;
  blueprint: ExamBlueprint;
}

export interface CustomTestPayload {
  examId?: string;
  examName?: string;
  category?: string;
  subjects?: string[];
  topic?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard' | 'Mixed';
  questionCount?: number;
  durationMinutes?: number;
  negativeMarkingRate?: number;
}

export interface MockTestItem {
  _id: string;
  title: string;
  examId: string;
  examSlug?: string;
  examName: string;
  category: string;
  subject: string;
  durationMinutes: number;
  totalMarks: number;
  negativeMarkingRate: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questions: TestQuestion[];
  isAiGenerated: boolean;
  testType?: 'official_pattern' | 'sectional' | 'custom_practice';
  patternDetails?: {
    totalQuestions?: number;
    sectionsDescription?: string;
    markingScheme?: string;
  };
  createdAt: string;
}

export interface QuestionReview {
  questionIndex: number;
  questionText: string;
  options: string[];
  selectedOptionIndex: number;
  correctOptionIndex: number;
  isCorrect: boolean;
  isAttempted: boolean;
  marksAwarded: number;
  explanation: string;
  subject: string;
}

export interface TestResultResponse {
  attemptId: string;
  testTitle: string;
  examName: string;
  totalQuestions: number;
  attemptedCount: number;
  correctCount: number;
  wrongCount: number;
  score: number;
  maxScore: number;
  accuracyPercentage: number;
  timeSpentSeconds: number;
  questionsReview: QuestionReview[];
}

export interface PastAttemptItem {
  _id: string;
  testTitle: string;
  examName: string;
  score: number;
  maxScore: number;
  accuracyPercentage: number;
  timeSpentSeconds: number;
  completedAt: string;
}

@Injectable({ providedIn: 'root' })
export class MockTestService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5000/api/mock-tests';

  getExamsForMockTests(): Observable<ExamMockMeta[]> {
    return this.http.get<{ success: boolean; data: ExamMockMeta[] }>(`${this.apiUrl}/exams-catalog`).pipe(
      map(res => res.data || [])
    );
  }

  getMockTests(
    examId?: string,
    difficulty?: string,
    category?: string,
    search?: string,
    testType?: string
  ): Observable<MockTestItem[]> {
    let params = new HttpParams();
    if (examId && examId !== 'All') params = params.set('examId', examId);
    if (difficulty && difficulty !== 'All') params = params.set('difficulty', difficulty);
    if (category && category !== 'All') params = params.set('category', category);
    if (search && search.trim()) params = params.set('search', search.trim());
    if (testType && testType !== 'All') params = params.set('testType', testType);

    return this.http.get<{ success: boolean; data: MockTestItem[] }>(this.apiUrl, { params }).pipe(
      map(res => res.data || [])
    );
  }

  createCustomMockTest(payload: CustomTestPayload): Observable<MockTestItem> {
    return this.http.post<{ success: boolean; data: MockTestItem }>(`${this.apiUrl}/custom`, payload).pipe(
      map(res => res.data)
    );
  }

  getMockTestById(id: string): Observable<MockTestItem> {
    return this.http.get<{ success: boolean; data: MockTestItem }>(`${this.apiUrl}/${id}`).pipe(
      map(res => res.data)
    );
  }

  submitMockTest(id: string, answers: { questionIndex: number; selectedOptionIndex: number }[], timeSpentSeconds: number): Observable<TestResultResponse> {
    return this.http.post<{ success: boolean; data: TestResultResponse }>(`${this.apiUrl}/${id}/submit`, {
      userAnswers: answers,
      timeSpentSeconds
    }).pipe(
      map(res => res.data)
    );
  }

  generateAIMockTest(params: { examId?: string; subject?: string; topic?: string; difficulty?: string; questionCount?: number }): Observable<MockTestItem> {
    return this.http.post<{ success: boolean; data: MockTestItem }>(`${this.apiUrl}/generate-ai`, params).pipe(
      map(res => res.data)
    );
  }

  getMyAttempts(): Observable<PastAttemptItem[]> {
    return this.http.get<{ success: boolean; data: PastAttemptItem[] }>(`${this.apiUrl}/attempts/my-history`).pipe(
      map(res => res.data || [])
    );
  }
}
