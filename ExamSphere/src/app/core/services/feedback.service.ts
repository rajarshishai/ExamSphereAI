import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface FeedbackItem {
  _id?: string;
  id?: string;
  name: string;
  email?: string;
  exam: string;
  rankOrScore?: string;
  rating: number;
  category: 'Testimonial' | 'Feature Request' | 'Academic Review' | 'General';
  comment: string;
  avatar: string;
  isApproved?: boolean;
  isFeatured?: boolean;
  createdAt?: string;
}

export interface CreateFeedbackPayload {
  name: string;
  email?: string;
  exam: string;
  rankOrScore?: string;
  rating: number;
  category?: string;
  comment: string;
}

export interface FeedbackApiResponse<T> {
  success: boolean;
  message?: string;
  count?: number;
  data: T;
  pagination?: {
    currentPage: number;
    pageSize: number;
    totalFeedbacks: number;
    totalPages: number;
  };
}

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5000/api/feedback';

  getLatestFeedback(limit = 3): Observable<FeedbackItem[]> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<FeedbackApiResponse<FeedbackItem[]>>(`${this.apiUrl}/latest`, { params }).pipe(
      map(res => res.data || [])
    );
  }

  getAllFeedback(params?: { category?: string; exam?: string; page?: number; limit?: number }): Observable<{ feedbacks: FeedbackItem[]; total: number }> {
    let httpParams = new HttpParams();
    if (params) {
      if (params.category && params.category !== 'All') {
        httpParams = httpParams.set('category', params.category);
      }
      if (params.exam && params.exam !== 'All') {
        httpParams = httpParams.set('exam', params.exam);
      }
      if (params.page) {
        httpParams = httpParams.set('page', params.page.toString());
      }
      if (params.limit) {
        httpParams = httpParams.set('limit', params.limit.toString());
      }
    }

    return this.http.get<FeedbackApiResponse<FeedbackItem[]>>(this.apiUrl, { params: httpParams }).pipe(
      map(res => ({
        feedbacks: res.data || [],
        total: res.pagination?.totalFeedbacks || (res.data ? res.data.length : 0)
      }))
    );
  }

  submitFeedback(payload: CreateFeedbackPayload): Observable<FeedbackItem> {
    return this.http.post<FeedbackApiResponse<FeedbackItem>>(this.apiUrl, payload).pipe(
      map(res => res.data)
    );
  }
}
