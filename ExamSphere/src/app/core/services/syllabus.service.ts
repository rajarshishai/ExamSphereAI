import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, catchError } from 'rxjs';
import { Syllabus, SyllabusProgress, ApiResponse } from '../../features/syllabus/models/syllabus.model';
import { EXAM_SYLLABUS_CATALOG } from '../../features/syllabus/data/syllabus-catalog.data';

@Injectable({ providedIn: 'root' })
export class SyllabusService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/api';

  // Return verified catalog of 120+ examinations
  getSyllabuses(): Observable<Syllabus[]> {
    return this.http.get<ApiResponse<Syllabus[]>>(`${this.apiUrl}/syllabuses`).pipe(
      map(r => {
        if (r && r.data && r.data.length > 0) {
          // Merge dynamic backend syllabuses with verified catalog
          const merged = [...EXAM_SYLLABUS_CATALOG];
          r.data.forEach(backendSyl => {
            const idx = merged.findIndex(m => m.examId === backendSyl.examId || m.slug === backendSyl.slug);
            if (idx !== -1) {
              merged[idx] = backendSyl;
            } else {
              merged.push(backendSyl);
            }
          });
          return merged;
        }
        return EXAM_SYLLABUS_CATALOG;
      }),
      catchError(() => of(EXAM_SYLLABUS_CATALOG))
    );
  }

  getSyllabusByExam(examIdOrSlug: string): Observable<Syllabus> {
    const localMatch = EXAM_SYLLABUS_CATALOG.find(
      s => s.examId === examIdOrSlug || s.slug === examIdOrSlug || s._id === examIdOrSlug
    );

    return this.http.get<ApiResponse<Syllabus>>(`${this.apiUrl}/syllabuses/${examIdOrSlug}`).pipe(
      map(r => r.data || localMatch || EXAM_SYLLABUS_CATALOG[0]),
      catchError(() => of(localMatch || EXAM_SYLLABUS_CATALOG[0]))
    );
  }

  getProgress(examId: string): Observable<SyllabusProgress> {
    return this.http.get<ApiResponse<SyllabusProgress>>(`${this.apiUrl}/syllabus-progress/${examId}`).pipe(
      map(r => r.data)
    );
  }

  updateTopicProgress(examId: string, topicId: string, completed: boolean): Observable<any> {
    return this.http.patch<ApiResponse<any>>(`${this.apiUrl}/syllabus-progress/${examId}/topic/${topicId}`, { completed });
  }
}
