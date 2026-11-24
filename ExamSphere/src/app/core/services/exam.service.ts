import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface BackendExam {
  _id: string;
  name: string;
  slug: string;
  category: string;
  subCategory?: string;
  conductingBody: string;
  overview: string;
  eligibility: string;
  qualification: string;
  pattern: string;
  mode: string;
  frequency: string;
  stages: string[];
  subjects: string[];
  applicationStartDate?: string;
  applicationEndDate?: string;
  examDate?: string;
  resultDate?: string;
  officialWebsite?: string;
  applicationLink?: string;
  syllabus: string[];
  isActive: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ExamPagination {
  currentPage: number;
  pageSize: number;
  totalExams: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ExamApiResponse<T> {
  success: boolean;
  message?: string;
  pagination?: ExamPagination;
  data: T;
}

export interface ExamQueryParams {
  search?: string;
  category?: string;
  mode?: string;
  page?: number;
  limit?: number;
  sort?: 'newest' | 'upcoming' | 'oldest' | 'name';
}

@Injectable({ providedIn: 'root' })
export class ExamService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5000/api/exams';

  getExams(params?: ExamQueryParams): Observable<{ exams: BackendExam[]; pagination?: ExamPagination }> {
    let httpParams = new HttpParams();

    if (params) {
      if (params.search && params.search.trim()) {
        httpParams = httpParams.set('search', params.search.trim());
      }
      if (params.category && params.category !== 'All' && params.category !== 'All Categories') {
        httpParams = httpParams.set('category', params.category);
      }
      if (params.mode && params.mode !== 'All') {
        httpParams = httpParams.set('mode', params.mode);
      }
      if (params.page) {
        httpParams = httpParams.set('page', params.page.toString());
      }
      if (params.limit) {
        httpParams = httpParams.set('limit', params.limit.toString());
      }
      if (params.sort) {
        httpParams = httpParams.set('sort', params.sort);
      }
    }

    return this.http.get<ExamApiResponse<BackendExam[]>>(this.apiUrl, { params: httpParams }).pipe(
      map(response => ({
        exams: response.data || [],
        pagination: response.pagination
      }))
    );
  }

  getExamBySlug(slug: string): Observable<BackendExam> {
    return this.http.get<ExamApiResponse<BackendExam>>(`${this.apiUrl}/${slug}`).pipe(
      map(response => response.data)
    );
  }

  createExam(examData: Partial<BackendExam>): Observable<BackendExam> {
    return this.http.post<ExamApiResponse<BackendExam>>(this.apiUrl, examData).pipe(
      map(response => response.data)
    );
  }
}
