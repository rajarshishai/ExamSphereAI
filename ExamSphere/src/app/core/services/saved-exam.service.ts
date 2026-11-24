import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap, catchError, map } from 'rxjs';
import { AuthService } from './auth.service/auth.service';
import { ToastService } from './toast.service';

export interface DailyTask {
  id: string;
  title: string;
  category: 'pyq' | 'concept' | 'mock' | 'revision' | 'general';
  estimatedMinutes: number;
  isCompleted: boolean;
  completedAt?: string;
  date: string; // YYYY-MM-DD
}

export interface SavedExamItem {
  _id?: string;
  userId?: string;
  examId: string;
  examSlug: string;
  examName: string;
  category: string;
  conductingBody?: string;
  targetYear?: number;
  examDate?: string;
  dailyTasks: DailyTask[];
  streakDays: number;
  totalCompletedTasks: number;
  lastActiveDate?: string;
  savedAt?: string;
}

export interface TodayNotificationTask {
  savedExamId: string;
  examName: string;
  examSlug: string;
  category: string;
  taskId: string;
  title: string;
  taskCategory: string;
  estimatedMinutes: number;
  isCompleted: boolean;
  date: string;
}

export interface TodayNotificationsSummary {
  totalRemaining: number;
  totalToday: number;
  completedToday: number;
  date: string;
  remainingTasks: TodayNotificationTask[];
}

@Injectable({
  providedIn: 'root'
})
export class SavedExamService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private toastService = inject(ToastService);

  private readonly apiUrl = 'http://localhost:5000/api/saved-exams';
  private readonly storageKey = 'examsphere_saved_exams_v2';

  // Reactive state signals
  savedExams = signal<SavedExamItem[]>(this.loadFromStorage());
  remainingTasks = signal<TodayNotificationTask[]>([]);
  isLoading = signal<boolean>(false);

  // Computed state
  savedExamSlugs = computed(() => {
    const set = new Set<string>();
    this.savedExams().forEach(e => {
      if (e.examSlug) set.add(e.examSlug.toLowerCase());
      if (e.examId) set.add(e.examId.toLowerCase());
    });
    return set;
  });

  savedCount = computed(() => this.savedExams().length);
  remainingCount = computed(() => this.remainingTasks().length);

  constructor() {
    this.ensureTodayTasksForLocalData();
    this.loadSavedExams();

    // Listen to real-time login/logout changes to sync immediately
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.syncLocalToBackend();
        this.loadSavedExams();
        this.refreshNotifications();
      } else {
        this.ensureTodayTasksForLocalData();
      }
    });
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.authService.getToken();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  private syncLocalToBackend(): void {
    const token = this.authService.getToken();
    if (!token) return;
    const local = this.loadFromStorage();
    if (local.length > 0) {
      local.forEach(e => {
        this.http.post(`${this.apiUrl}/toggle`, {
          examId: e.examId,
          examSlug: e.examSlug,
          examName: e.examName,
          category: e.category,
          conductingBody: e.conductingBody,
          examDate: e.examDate
        }, { headers: this.getHeaders() }).subscribe();
      });
    }
  }

  private getTodayDateStr(): string {
    return new Date().toISOString().split('T')[0];
  }

  private loadFromStorage(): SavedExamItem[] {
    if (typeof localStorage === 'undefined') return [];
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveToStorage(exams: SavedExamItem[]): void {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(exams));
      } catch {}
    }
  }

  // Generate standardized daily task set for an exam
  generateDefaultTasks(examName: string, category: string, dateStr: string): DailyTask[] {
    const ts = Date.now();
    const cat = (category || '').toLowerCase();

    let subjectFocus = 'Key Subject Modules';
    if (cat.includes('engineer') || cat.includes('gate') || cat.includes('jee')) {
      subjectFocus = 'Engineering Mathematics & Core Technicals';
    } else if (cat.includes('medical') || cat.includes('neet')) {
      subjectFocus = 'High-Yield Biology & Organic Chemistry';
    } else if (cat.includes('civil') || cat.includes('upsc') || cat.includes('psc')) {
      subjectFocus = 'Daily Current Affairs & General Studies';
    } else if (cat.includes('bank') || cat.includes('sbi') || cat.includes('ibps')) {
      subjectFocus = 'Quantitative Aptitude & Reasoning Puzzles';
    } else if (cat.includes('manage') || cat.includes('cat')) {
      subjectFocus = 'Data Interpretation & Verbal Ability';
    } else if (cat.includes('law') || cat.includes('clat')) {
      subjectFocus = 'Legal Reasoning & Constitutional Principles';
    }

    return [
      {
        id: `local-task-${ts}-1`,
        title: `Revise: ${subjectFocus} (${examName})`,
        category: 'concept',
        estimatedMinutes: 45,
        isCompleted: false,
        date: dateStr
      },
      {
        id: `local-task-${ts}-2`,
        title: `Solve 10 Previous Year Questions with error audit`,
        category: 'pyq',
        estimatedMinutes: 30,
        isCompleted: false,
        date: dateStr
      },
      {
        id: `local-task-${ts}-3`,
        title: `Attempt 1 Timed Sectional Mock Test / Quiz`,
        category: 'mock',
        estimatedMinutes: 25,
        isCompleted: false,
        date: dateStr
      },
      {
        id: `local-task-${ts}-4`,
        title: `Formula sheet review & quick memory retention check`,
        category: 'revision',
        estimatedMinutes: 15,
        isCompleted: false,
        date: dateStr
      }
    ];
  }

  // Ensure tasks for today exist in memory and local storage
  private ensureTodayTasksForLocalData(): void {
    const todayStr = this.getTodayDateStr();
    let changed = false;
    const current = this.savedExams();

    const updated = current.map(exam => {
      const hasToday = (exam.dailyTasks || []).some(t => t.date === todayStr);
      if (!hasToday) {
        changed = true;
        const newTasks = this.generateDefaultTasks(exam.examName, exam.category, todayStr);
        return {
          ...exam,
          dailyTasks: [...(exam.dailyTasks || []), ...newTasks]
        };
      }
      return exam;
    });

    if (changed) {
      this.savedExams.set(updated);
      this.saveToStorage(updated);
    }
    this.recomputeRemainingTasks();
  }

  // Fetch saved exams from backend API
  loadSavedExams(): void {
    const token = this.authService.getToken();
    this.isLoading.set(true);

    if (!token) {
      this.ensureTodayTasksForLocalData();
      this.isLoading.set(false);
      return;
    }

    this.http.get<{ success: boolean; data: SavedExamItem[] }>(this.apiUrl, { headers: this.getHeaders() }).pipe(
      catchError(() => of({ success: false, data: [] }))
    ).subscribe(res => {
      this.isLoading.set(false);
      if (res && res.success && Array.isArray(res.data)) {
        // If backend returned records, merge them with local storage
        if (res.data.length > 0) {
          this.savedExams.set(res.data);
          this.saveToStorage(res.data);
        } else {
          // If backend has 0 records but local has some, we sync local to backend if desired
          const local = this.loadFromStorage();
          if (local.length > 0) {
            this.savedExams.set(local);
          }
        }
      }
      this.refreshNotifications();
    });
  }

  // Refresh remaining notifications from backend or compute locally
  refreshNotifications(): void {
    const token = this.authService.getToken();

    if (!token) {
      this.recomputeRemainingTasks();
      return;
    }

    this.http.get<{ success: boolean; remainingTasks: TodayNotificationTask[] }>(
      `${this.apiUrl}/notifications/today`,
      { headers: this.getHeaders() }
    ).pipe(
      catchError(() => of(null))
    ).subscribe(res => {
      if (res && res.success && Array.isArray(res.remainingTasks)) {
        this.remainingTasks.set(res.remainingTasks);
      } else {
        this.recomputeRemainingTasks();
      }
    });
  }

  // Fallback / reactive recomputation of remaining tasks for today
  private recomputeRemainingTasks(): void {
    const todayStr = this.getTodayDateStr();
    const remaining: TodayNotificationTask[] = [];

    this.savedExams().forEach(exam => {
      const todayTasks = (exam.dailyTasks || []).filter(t => t.date === todayStr && !t.isCompleted);
      todayTasks.forEach(task => {
        remaining.push({
          savedExamId: exam._id || exam.examSlug || exam.examId,
          examName: exam.examName,
          examSlug: exam.examSlug || exam.examId,
          category: exam.category,
          taskId: task.id,
          title: task.title,
          taskCategory: task.category,
          estimatedMinutes: task.estimatedMinutes,
          isCompleted: false,
          date: task.date
        });
      });
    });

    this.remainingTasks.set(remaining);
  }

  isSaved(slugOrId: string): boolean {
    if (!slugOrId) return false;
    return this.savedExamSlugs().has(slugOrId.toLowerCase().trim());
  }

  // Toggle Save / Unsave Exam
  toggleSaveExam(exam: {
    id: string;
    slug?: string;
    name: string;
    category?: string;
    conductingAuthority?: string;
    examMode?: string;
    examDateText?: string;
  }): Observable<boolean> {
    const slug = (exam.slug || exam.id).toLowerCase();
    const isCurrentlySaved = this.isSaved(slug);
    const todayStr = this.getTodayDateStr();

    if (isCurrentlySaved) {
      // Remove from saved
      const updated = this.savedExams().filter(
        e => (e.examSlug || '').toLowerCase() !== slug && (e.examId || '').toLowerCase() !== slug
      );
      this.savedExams.set(updated);
      this.saveToStorage(updated);
      this.recomputeRemainingTasks();
      this.toastService.info(`Removed ${exam.name} from saved exams.`);

      // Sync with backend if logged in
      const token = this.authService.getToken();
      if (token) {
        this.http.post(`${this.apiUrl}/toggle`, {
          examId: exam.id,
          examSlug: exam.slug,
          examName: exam.name
        }, { headers: this.getHeaders() }).subscribe();
      }

      return of(false);
    } else {
      // Add to saved
      const initialTasks = this.generateDefaultTasks(exam.name, exam.category || 'National', todayStr);
      const newSavedItem: SavedExamItem = {
        examId: exam.id,
        examSlug: exam.slug || exam.id,
        examName: exam.name,
        category: exam.category || 'National',
        conductingBody: exam.conductingAuthority || '',
        examDate: exam.examDateText || 'Upcoming Cycle',
        dailyTasks: initialTasks,
        streakDays: 0,
        totalCompletedTasks: 0,
        lastActiveDate: todayStr,
        savedAt: new Date().toISOString()
      };

      const updated = [newSavedItem, ...this.savedExams()];
      this.savedExams.set(updated);
      this.saveToStorage(updated);
      this.recomputeRemainingTasks();
      this.toastService.success(`★ ${exam.name} saved! Today's 4 daily tasks are ready.`);

      // Sync with backend if logged in
      const token = this.authService.getToken();
      if (token) {
        this.http.post<{ success: boolean; data: SavedExamItem }>(`${this.apiUrl}/toggle`, {
          examId: exam.id,
          examSlug: exam.slug,
          examName: exam.name,
          category: exam.category,
          conductingBody: exam.conductingAuthority,
          examDate: exam.examDateText
        }, { headers: this.getHeaders() }).subscribe(res => {
          if (res?.data?._id) {
            // Update item with backend _id
            const synced = this.savedExams().map(e => {
              if ((e.examSlug || e.examId).toLowerCase() === slug) {
                return { ...e, _id: res.data._id, dailyTasks: res.data.dailyTasks || e.dailyTasks };
              }
              return e;
            });
            this.savedExams.set(synced);
            this.saveToStorage(synced);
            this.refreshNotifications();
          }
        });
      }

      return of(true);
    }
  }

  // Toggle completion of a daily task ("daily done there job")
  toggleTask(savedExamIdOrSlug: string, taskId: string): void {
    const todayStr = this.getTodayDateStr();
    let completedState = false;
    let taskTitle = '';
    let examName = '';
    let backendId: string | undefined;

    const updated = this.savedExams().map(exam => {
      const isMatch =
        exam._id === savedExamIdOrSlug ||
        (exam.examSlug && exam.examSlug.toLowerCase() === savedExamIdOrSlug.toLowerCase()) ||
        (exam.examId && exam.examId.toLowerCase() === savedExamIdOrSlug.toLowerCase());

      if (isMatch) {
        examName = exam.examName;
        backendId = exam._id;
        const updatedTasks = (exam.dailyTasks || []).map(task => {
          if (task.id === taskId) {
            completedState = !task.isCompleted;
            taskTitle = task.title;
            return {
              ...task,
              isCompleted: completedState,
              completedAt: completedState ? new Date().toISOString() : undefined
            };
          }
          return task;
        });

        const completedCount = updatedTasks.filter(t => t.isCompleted).length;
        const todayTasks = updatedTasks.filter(t => t.date === todayStr);
        const allTodayDone = todayTasks.length > 0 && todayTasks.every(t => t.isCompleted);

        return {
          ...exam,
          dailyTasks: updatedTasks,
          totalCompletedTasks: completedCount,
          lastActiveDate: todayStr,
          streakDays: allTodayDone ? (exam.streakDays || 0) + 1 : exam.streakDays
        };
      }
      return exam;
    });

    this.savedExams.set(updated);
    this.saveToStorage(updated);
    this.recomputeRemainingTasks();

    if (completedState) {
      this.toastService.success(`✓ Completed: "${taskTitle}" for ${examName}! Keep up the momentum! 🔥`);
    } else {
      this.toastService.info(`Marked task as pending: "${taskTitle}"`);
    }

    // Call backend API if user is authenticated and backendId exists
    const token = this.authService.getToken();
    if (token && backendId) {
      this.http.patch(`${this.apiUrl}/${backendId}/tasks/${taskId}`, {}, { headers: this.getHeaders() }).subscribe({
        next: () => this.refreshNotifications(),
        error: () => {}
      });
    }
  }

  // Quick helper to get today's tasks for a specific exam
  getTodayTasksForExam(slugOrId: string): DailyTask[] {
    const todayStr = this.getTodayDateStr();
    const clean = slugOrId.toLowerCase().trim();
    const exam = this.savedExams().find(
      e => (e.examSlug || '').toLowerCase() === clean || (e.examId || '').toLowerCase() === clean
    );
    if (!exam) return [];
    return (exam.dailyTasks || []).filter(t => t.date === todayStr);
  }

  // Quick helper to get progress statistics for a specific exam
  getExamProgress(slugOrId: string): { total: number; completed: number; percentage: number } {
    const tasks = this.getTodayTasksForExam(slugOrId);
    if (tasks.length === 0) return { total: 0, completed: 0, percentage: 0 };
    const completed = tasks.filter(t => t.isCompleted).length;
    const percentage = Math.round((completed / tasks.length) * 100);
    return { total: tasks.length, completed, percentage };
  }
}
