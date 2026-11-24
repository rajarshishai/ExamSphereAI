import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface PYQItem {
  _id: string;
  examId: string;
  examName: string;
  category?: string;
  year: number;
  session?: string;
  subject: string;
  topic?: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  marks: number;
  isVerified: boolean;
}

export interface PYQResponse {
  questions: PYQItem[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

@Injectable({ providedIn: 'root' })
export class PyqService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5000/api/pyqs';

  getPYQs(params?: {
    examId?: string;
    year?: number;
    subject?: string;
    search?: string;
    difficulty?: string;
    category?: string;
    page?: number;
    limit?: number;
  }): Observable<PYQResponse> {
    let httpParams = new HttpParams();

    if (params) {
      if (params.examId && params.examId !== 'All') httpParams = httpParams.set('examId', params.examId);
      if (params.year) httpParams = httpParams.set('year', params.year.toString());
      if (params.subject && params.subject !== 'All') httpParams = httpParams.set('subject', params.subject);
      if (params.category && params.category !== 'All') httpParams = httpParams.set('category', params.category);
      if (params.search && params.search.trim()) httpParams = httpParams.set('search', params.search.trim());
      if (params.difficulty && params.difficulty !== 'All') httpParams = httpParams.set('difficulty', params.difficulty);
      if (params.page) httpParams = httpParams.set('page', params.page.toString());
      if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
    }

    return this.http.get<{ success: boolean; data: PYQItem[]; pagination: any }>(this.apiUrl, { params: httpParams }).pipe(
      map(res => ({
        questions: res.data || [],
        totalCount: res.pagination?.totalCount || res.data?.length || 0,
        totalPages: res.pagination?.totalPages || 1,
        currentPage: res.pagination?.currentPage || 1
      }))
    );
  }

  getYears(examId: string): Observable<number[]> {
    return this.http.get<{ success: boolean; data: number[] }>(`${this.apiUrl}/years/${examId}`).pipe(
      map(res => res.data || [])
    );
  }
}
