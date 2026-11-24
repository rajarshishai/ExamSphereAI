import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface BackendResource {
  _id: string;
  title: string;
  slug: string;
  examSlug: string;
  examName: string;
  category: string;
  resourceType: string;
  subject: string;
  chapter: string;
  topics: string[];
  sourceType: 'Official Verified' | 'Standard Academic' | 'Expert Curated' | 'AI Generated';
  authorOrPublisher: string;
  description: string;
  fileFormat: 'PDF' | 'Video' | 'Interactive' | 'Flashcard Deck' | 'Article';
  fileSizeOrDuration: string;
  downloadUrl?: string;
  externalUrl?: string;
  rating: number;
  downloadsCount: number;
  isFeatured: boolean;
  isActive: boolean;
  verifiedYear: string;
  createdAt: string;
}

export interface ResourcePagination {
  currentPage: number;
  pageSize: number;
  totalResources: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ResourceApiResponse<T> {
  success: boolean;
  message?: string;
  pagination?: ResourcePagination;
  data: T;
}

export interface ResourceQueryParams {
  search?: string;
  examSlug?: string;
  exam?: string;
  category?: string;
  resourceType?: string;
  format?: string;
  page?: number;
  limit?: number;
  sort?: 'popular' | 'rating' | 'newest' | 'title';
}

export interface BackendWorkspace {
  examName: string;
  slug: string;
  category: string;
  officialBody: string;
  lastVerified: string;
  readinessIndex: number;
  streakDays: number;
  stats: {
    subjects: number;
    resources: string;
    mockTests: number;
    pyqPapers: number;
  };
  modules: {
    id: string;
    subject: string;
    weightage: string;
    chaptersCount: number;
    progress: number;
    status: 'Strong' | 'In Progress' | 'Weak Area' | 'Not Started';
    topics: { name: string; done: boolean; importance: 'High' | 'Medium' }[];
  }[];
  weaknessLoop: {
    weakTopic: string;
    errorRate: string;
    mistakeNote: string;
    nextRevisionAction: string;
  };
  dailyPlan: {
    time: string;
    task: string;
    tag: string;
    completed: boolean;
  }[];
  flashcard: {
    tag: string;
    front: string;
    back: string;
  };
  availableResources: BackendResource[];
}

@Injectable({ providedIn: 'root' })
export class ResourceService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5000/api/resources';

  getResources(params?: ResourceQueryParams): Observable<{ resources: BackendResource[]; pagination?: ResourcePagination }> {
    let httpParams = new HttpParams();

    if (params) {
      if (params.search && params.search.trim()) {
        httpParams = httpParams.set('search', params.search.trim());
      }
      if (params.examSlug && params.examSlug !== 'All' && params.examSlug !== 'All Exams') {
        httpParams = httpParams.set('examSlug', params.examSlug);
      }
      if (params.exam && params.exam !== 'All' && params.exam !== 'All Exams') {
        httpParams = httpParams.set('exam', params.exam);
      }
      if (params.category && params.category !== 'All' && params.category !== 'All Categories') {
        httpParams = httpParams.set('category', params.category);
      }
      if (params.resourceType && params.resourceType !== 'All' && params.resourceType !== 'All Resources') {
        httpParams = httpParams.set('resourceType', params.resourceType);
      }
      if (params.format && params.format !== 'All') {
        httpParams = httpParams.set('format', params.format);
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

    return this.http.get<ResourceApiResponse<BackendResource[]>>(this.apiUrl, { params: httpParams }).pipe(
      map(res => ({
        resources: res.data || [],
        pagination: res.pagination
      }))
    );
  }

  getResourceBySlug(slug: string): Observable<BackendResource> {
    return this.http.get<ResourceApiResponse<BackendResource>>(`${this.apiUrl}/${slug}`).pipe(
      map(res => res.data)
    );
  }

  getExamWorkspace(examSlug: string): Observable<BackendWorkspace> {
    return this.http.get<ResourceApiResponse<BackendWorkspace>>(`${this.apiUrl}/workspace/${encodeURIComponent(examSlug)}`).pipe(
      map(res => res.data)
    );
  }
}
