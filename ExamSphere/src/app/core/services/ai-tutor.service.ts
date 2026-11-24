import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError, from } from 'rxjs';
import { AiSearchEngineService } from './ai-search-engine.service';

export type AIMentorMode =
  | 'academic_doubt'
  | 'exam_info'
  | 'study_plan'
  | 'practice_mcq'
  | 'performance_diagnostic'
  | 'revision_notes'
  | 'document_qa'
  | 'career_recommendation'
  | 'exam_day_guide';

export type SupportedLanguage = 'en' | 'hi' | 'hinglish' | 'bn' | 'ta' | 'te';

export interface InteractiveMCQ {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FlashcardItem {
  front: string;
  back: string;
}

export interface AskTutorRequest {
  examId?: string;
  subject?: string;
  topic?: string;
  question: string;
  conversationId?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  mode?: AIMentorMode;
  language?: SupportedLanguage;
  documentText?: string;
  documentName?: string;
}

export interface AskTutorResponse {
  conversationId: string;
  examName: string;
  subject: string;
  topic?: string;
  mode?: AIMentorMode;
  language?: SupportedLanguage;
  question: string;
  answer: string;
  mcqs?: InteractiveMCQ[];
  flashcards?: FlashcardItem[];
  citations?: string[];
  suggestedPrompts?: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  mode?: string;
  language?: string;
  mcqs?: InteractiveMCQ[];
  flashcards?: FlashcardItem[];
  createdAt: string;
}

export interface ConversationHistoryItem {
  _id: string;
  title: string;
  subject?: string;
  topic?: string;
  mode?: string;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

@Injectable({ providedIn: 'root' })
export class AiTutorService {
  private http = inject(HttpClient);
  private searchEngine = inject(AiSearchEngineService);
  private readonly apiUrl = 'http://localhost:5000/api/ai-tutor';

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('examsphere_token') || sessionStorage.getItem('examsphere_token');
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  }

  askQuestion(req: AskTutorRequest): Observable<AskTutorResponse> {
    return this.http.post<ApiResponse<AskTutorResponse>>(`${this.apiUrl}/chat`, req, { headers: this.getHeaders() }).pipe(
      map(res => res.data),
      catchError((err) => {
        console.warn('[AiTutorService] Chat error, falling back to local search engine:', err?.message || err);
        // Guaranteed instant search fallback if backend is offline or delayed
        return from(this.searchEngine.searchAnswer(req.question, {
          mode: req.mode,
          language: req.language,
          examId: req.examId,
          difficulty: req.difficulty
        }));
      })
    );
  }

  getHistory(examId: string = 'all'): Observable<ConversationHistoryItem[]> {
    return this.http.get<ApiResponse<ConversationHistoryItem[]>>(`${this.apiUrl}/history/${examId}`, { headers: this.getHeaders() }).pipe(
      map(res => res.data),
      catchError(() => {
        return from(Promise.resolve([]));
      })
    );
  }

  deleteConversation(id: string): Observable<any> {
    return this.http.delete<ApiResponse<any>>(`${this.apiUrl}/conversations/${id}`, { headers: this.getHeaders() }).pipe(
      map(res => res.data),
      catchError(() => from(Promise.resolve({ success: true })))
    );
  }

  clearAllConversations(): Observable<any> {
    return this.http.delete<ApiResponse<any>>(`${this.apiUrl}/conversations`, { headers: this.getHeaders() }).pipe(
      map(res => res.data),
      catchError(() => from(Promise.resolve({ success: true })))
    );
  }
}
