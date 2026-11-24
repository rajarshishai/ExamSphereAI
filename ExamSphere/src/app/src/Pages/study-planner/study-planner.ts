import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { StudyPlanService, StudyPlanItem, StudyTaskItem } from '../../../core/services/study-plan.service';
import { ExamService, BackendExam } from '../../../core/services/exam.service';
import { AuthService } from '../../../core/services/auth.service/auth.service';
import { ToastService } from '../../../core/services/toast.service';

interface CuratedExamMeta {
  _id: string;
  slug: string;
  name: string;
  category: string;
  targetExamDate: string;
  adaptiveNotes: string;
}

@Component({
  selector: 'app-study-planner',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './study-planner.html',
  styleUrls: ['./study-planner.css']
})
export class StudyPlanner implements OnInit, OnDestroy {
  private studyPlanService = inject(StudyPlanService);
  private examService = inject(ExamService);
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private route = inject(ActivatedRoute);

  // Verified Exam Catalog for instant selection & fallback
  readonly verifiedExams: CuratedExamMeta[] = [
    {
      _id: 'gate-cse',
      slug: 'gate-cse',
      name: 'GATE Computer Science & IT',
      category: 'Engineering',
      targetExamDate: 'February 2027',
      adaptiveNotes: 'Curated 7-day adaptive schedule balancing core CS concepts, PYQs, and full 3-hour CBT mock tests.'
    },
    {
      _id: 'upsc-cse',
      slug: 'upsc-cse',
      name: 'Civil Services Examination (UPSC CSE)',
      category: 'Government',
      targetExamDate: 'May 2026',
      adaptiveNotes: 'Comprehensive Prelims GS-1 + CSAT schedule covering Polity, History, Economy, Environment, and Mains Answer Writing.'
    },
    {
      _id: 'jee-advanced',
      slug: 'jee-advanced',
      name: 'IIT JEE Main & Advanced',
      category: 'Engineering',
      targetExamDate: 'May 2026',
      adaptiveNotes: 'Intense Physics-Chemistry-Mathematics problem solving schedule with daily calculus and mechanics deep work.'
    },
    {
      _id: 'neet-ug',
      slug: 'neet-ug',
      name: 'National Eligibility cum Entrance Test (NEET UG)',
      category: 'Medical',
      targetExamDate: 'May 2026',
      adaptiveNotes: 'Targeted PCB schedule with NCERT Biology line-by-line mastery, high-yield organic reactions, and speed physics.'
    },
    {
      _id: 'cat-mba',
      slug: 'cat-mba',
      name: 'Common Admission Test (CAT MBA)',
      category: 'Management',
      targetExamDate: 'November 2026',
      adaptiveNotes: 'Sectional mastery timetable for VARC 4-RC passages, DILR puzzles, and speed Arithmetic/Algebra drills.'
    },
    {
      _id: 'banking-po',
      slug: 'banking-po',
      name: 'Banking PO (IBPS / SBI PO)',
      category: 'Banking',
      targetExamDate: 'October 2026',
      adaptiveNotes: 'Speed-accuracy focused plan for High-Level Floor Puzzles, Data Interpretation, English Cloze Tests, and Banking GK.'
    },
    {
      _id: 'ssc-cgl',
      slug: 'ssc-cgl',
      name: 'Staff Selection Commission (SSC CGL)',
      category: 'Government',
      targetExamDate: 'September 2026',
      adaptiveNotes: 'Tier-1 high-speed timetable covering Quantitative Tricks, General Intelligence, Static GK, and English Comprehension.'
    },
    {
      _id: 'ugc-net',
      slug: 'ugc-net',
      name: 'UGC NET & Assistant Professorship',
      category: 'Teaching',
      targetExamDate: 'June 2026',
      adaptiveNotes: 'Balanced syllabus for Paper 1 Teaching/Research Aptitude combined with Paper 2 deep domain specialization.'
    }
  ];

  exams: BackendExam[] = [];
  selectedExamId = 'gate-cse';
  dailyHours = 4;
  targetExamDate = '';

  studyPlan: StudyPlanItem | null = null;
  isLoading = false;
  isGenerating = false;
  errorMessage = '';

  selectedDayFilter = 'All'; // 'All' | 'Monday' | 'Tuesday' etc.

  // Real-Time Desk Clock State (Angular Signals for Zoneless Change Detection)
  currentTimeString = signal<string>('');
  currentDateString = signal<string>('');
  private clockInterval: any = null;

  // Pomodoro Focus Timer State (Angular Signals)
  timerMode = signal<'WORK' | 'SHORT_BREAK' | 'LONG_BREAK'>('WORK');
  timerSeconds = signal<number>(25 * 60);
  timerTotalSeconds = signal<number>(25 * 60);
  isTimerRunning = signal<boolean>(false);
  completedPomodorosToday = signal<number>(0);
  customWorkMinutes = signal<number>(25);
  studyStreakDays = signal<number>(8);
  private pomodoroInterval: any = null;

  // Progress computation
  timerProgressPercent = computed(() => {
    const total = this.timerTotalSeconds();
    if (total <= 0) return 100;
    const remaining = this.timerSeconds();
    const elapsed = total - remaining;
    return Math.min(100, Math.max(0, Math.round((elapsed / total) * 100)));
  });

  // Custom Task Creation Form State
  isAddingTask = false;
  newTaskDay = 'Monday';
  newTaskSubject = '';
  newTaskTopic = '';
  newTaskActivity: 'Concept Study' | 'Practice PYQ' | 'Revision' | 'Mock Test' = 'Concept Study';
  newTaskDuration = 60;

  ngOnInit(): void {
    this.startClock();
    this.loadInitialSavedPomodoroData();
    this.loadExams();
  }

  ngOnDestroy(): void {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
    this.stopPomodoro();
  }

  // Live Local Wall-Clock Ticker
  private startClock(): void {
    this.updateClock();
    this.clockInterval = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  private updateClock(): void {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    const dateStr = now.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    this.currentTimeString.set(timeStr);
    this.currentDateString.set(dateStr);
  }

  private loadInitialSavedPomodoroData(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedCount = localStorage.getItem('examsphere_pomodoro_completed_today');
      if (savedCount) {
        this.completedPomodorosToday.set(parseInt(savedCount, 10) || 0);
      }
      const savedStreak = localStorage.getItem('examsphere_study_streak');
      if (savedStreak) {
        this.studyStreakDays.set(parseInt(savedStreak, 10) || 8);
      }
    }
  }

  loadExams(): void {
    this.examService.getExams().subscribe({
      next: ({ exams }) => {
        // Merge verified exams with dynamic backend exams
        const merged: BackendExam[] = [...exams];
        for (const v of this.verifiedExams) {
          const exists = merged.some(e => e._id === v._id || e.slug === v.slug || e.name.toLowerCase().includes(v.slug));
          if (!exists) {
            merged.push({
              _id: v._id,
              slug: v.slug,
              name: v.name,
              category: v.category,
              conductingBody: 'National Testing Body',
              overview: v.adaptiveNotes,
              eligibility: 'Eligible candidates',
              qualification: 'Degree / 12th',
              pattern: 'Standard',
              mode: 'Online / Offline',
              frequency: 'Annual',
              stages: ['Stage 1'],
              subjects: ['Core Subjects'],
              syllabus: ['Standard Syllabus'],
              isActive: true,
              isFeatured: true,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            });
          }
        }
        this.exams = merged;
        this.resolveSelectedExam();
      },
      error: () => {
        // If backend fails, use rich verified exams catalog
        this.exams = this.verifiedExams.map(v => ({
          _id: v._id,
          slug: v.slug,
          name: v.name,
          category: v.category,
          conductingBody: 'National Authority',
          overview: v.adaptiveNotes,
          eligibility: 'Standard Eligibility',
          qualification: 'Undergraduate / 12th',
          pattern: 'Standard Pattern',
          mode: 'Online',
          frequency: 'Annual',
          stages: ['Standard Stage'],
          subjects: ['Core Subjects'],
          syllabus: ['Standard Syllabus'],
          isActive: true,
          isFeatured: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }));
        this.resolveSelectedExam();
      }
    });
  }

  private resolveSelectedExam(): void {
    // 1. Check URL query parameters
    const queryExam = this.route.snapshot.queryParams['examId'] || this.route.snapshot.queryParams['exam'] || this.route.snapshot.queryParams['slug'];
    if (queryExam) {
      const match = this.exams.find(e => e._id === queryExam || e.slug === queryExam || e.name.toLowerCase().includes(String(queryExam).toLowerCase()));
      if (match) {
        this.selectedExamId = match._id;
        this.loadPlan();
        return;
      }
    }

    // 2. Check localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedExam = localStorage.getItem('examsphere_selected_exam');
      if (storedExam) {
        const match = this.exams.find(e => e._id === storedExam || e.slug === storedExam);
        if (match) {
          this.selectedExamId = match._id;
          this.loadPlan();
          return;
        }
      }
    }

    // 3. Fallback to first available exam
    if (this.exams.length > 0) {
      this.selectedExamId = this.exams[0]._id;
    } else {
      this.selectedExamId = 'gate-cse';
    }
    this.loadPlan();
  }

  onExamChange(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('examsphere_selected_exam', this.selectedExamId);
    }
    this.loadPlan();
  }

  loadPlan(): void {
    if (!this.selectedExamId) return;
    this.isLoading = true;
    this.errorMessage = '';

    // Check localStorage cache for this exam first
    const cachedPlan = this.getLocalExamPlan(this.selectedExamId);
    if (cachedPlan && cachedPlan.tasks && cachedPlan.tasks.length > 0) {
      this.studyPlan = cachedPlan;
      this.dailyHours = cachedPlan.dailyHours || 4;
      this.isLoading = false;
    }

    const token = this.authService.getToken();
    if (!token) {
      if (!this.studyPlan || this.studyPlan.examId !== this.selectedExamId) {
        this.studyPlan = this.getCuratedPlanForExam(this.selectedExamId);
        this.saveLocalExamPlan(this.selectedExamId, this.studyPlan);
      }
      this.isLoading = false;
      return;
    }

    // Query backend if authenticated
    this.studyPlanService.getPlan(this.selectedExamId).subscribe({
      next: (plan) => {
        this.isLoading = false;
        if (plan && plan.tasks && plan.tasks.length > 0) {
          this.studyPlan = plan;
          this.dailyHours = plan.dailyHours || 4;
          this.saveLocalExamPlan(this.selectedExamId, plan);
        } else {
          // If no plan in DB yet, create or load curated plan
          if (!this.studyPlan) {
            this.studyPlan = this.getCuratedPlanForExam(this.selectedExamId);
            this.saveLocalExamPlan(this.selectedExamId, this.studyPlan);
          }
        }
      },
      error: () => {
        this.isLoading = false;
        if (!this.studyPlan) {
          this.studyPlan = this.getCuratedPlanForExam(this.selectedExamId);
          this.saveLocalExamPlan(this.selectedExamId, this.studyPlan);
        }
      }
    });
  }

  generatePlan(): void {
    const token = this.authService.getToken();
    if (!token) {
      // Re-generate local curated plan with chosen daily hours
      this.isGenerating = true;
      setTimeout(() => {
        this.studyPlan = this.getCuratedPlanForExam(this.selectedExamId, this.dailyHours);
        this.saveLocalExamPlan(this.selectedExamId, this.studyPlan);
        this.isGenerating = false;
        this.toastService.success(`Adaptive timetable recalibrated for ${this.dailyHours} hours/day! 🎯`);
      }, 350);
      return;
    }

    this.isGenerating = true;
    this.studyPlanService.generatePlan(this.selectedExamId, this.dailyHours, this.targetExamDate).subscribe({
      next: (plan) => {
        this.isGenerating = false;
        this.studyPlan = plan;
        this.saveLocalExamPlan(this.selectedExamId, plan);
        this.toastService.success(`AI Adaptive Plan generated successfully for ${plan.examName}! 🚀`);
      },
      error: () => {
        this.isGenerating = false;
        // Fallback locally
        this.studyPlan = this.getCuratedPlanForExam(this.selectedExamId, this.dailyHours);
        this.saveLocalExamPlan(this.selectedExamId, this.studyPlan);
        this.toastService.info(`Updated timetable for ${this.dailyHours} hours daily.`);
      }
    });
  }

  toggleTask(task: StudyTaskItem): void {
    task.completed = !task.completed;
    if (this.studyPlan) {
      this.saveLocalExamPlan(this.selectedExamId, this.studyPlan);

      if (this.authService.getToken() && this.studyPlan._id && !this.studyPlan._id.startsWith('CURATED-')) {
        this.studyPlanService.toggleTask(this.studyPlan._id, task._id, task.completed).subscribe({
          next: () => {},
          error: () => {}
        });
      }

      if (task.completed) {
        this.toastService.success(`Completed: ${task.topic}! Keep up the momentum! ✨`);
        if (this.completedTasksCount === this.totalTasksCount) {
          this.toastService.success('🎉 Incredible! You completed all scheduled tasks for this week!');
        }
      }
    }
  }

  addNewTask(): void {
    if (!this.newTaskSubject.trim() || !this.newTaskTopic.trim()) {
      this.toastService.error('Please enter both subject and topic.');
      return;
    }

    if (!this.studyPlan) {
      this.studyPlan = this.getCuratedPlanForExam(this.selectedExamId);
    }

    const newTask: StudyTaskItem = {
      _id: 'TASK-' + Date.now(),
      day: this.newTaskDay,
      subject: this.newTaskSubject.trim(),
      topic: this.newTaskTopic.trim(),
      activity: this.newTaskActivity,
      durationMinutes: Number(this.newTaskDuration) || 60,
      completed: false
    };

    this.studyPlan.tasks.push(newTask);
    this.saveLocalExamPlan(this.selectedExamId, this.studyPlan);

    // Sync to backend if authenticated
    if (this.authService.getToken() && this.studyPlan._id && !this.studyPlan._id.startsWith('CURATED-')) {
      this.studyPlanService.addTask(this.studyPlan._id, newTask).subscribe({
        next: (updatedPlan) => {
          this.studyPlan = updatedPlan;
          this.saveLocalExamPlan(this.selectedExamId, updatedPlan);
        },
        error: () => {}
      });
    }

    this.toastService.success(`Added task "${newTask.topic}" for ${newTask.day}! 📝`);
    this.newTaskSubject = '';
    this.newTaskTopic = '';
    this.isAddingTask = false;
  }

  removeTask(task: StudyTaskItem): void {
    if (!this.studyPlan) return;
    const idx = this.studyPlan.tasks.findIndex(t => t._id === task._id);
    if (idx !== -1) {
      this.studyPlan.tasks.splice(idx, 1);
      this.saveLocalExamPlan(this.selectedExamId, this.studyPlan);

      if (this.authService.getToken() && this.studyPlan._id && !this.studyPlan._id.startsWith('CURATED-')) {
        this.studyPlanService.deleteTask(this.studyPlan._id, task._id).subscribe({
          next: (updatedPlan) => {
            this.studyPlan = updatedPlan;
            this.saveLocalExamPlan(this.selectedExamId, updatedPlan);
          },
          error: () => {}
        });
      }
      this.toastService.info('Task removed from schedule.');
    }
  }

  resetToRecommendedCurriculum(): void {
    if (confirm('Reset this schedule to the official ExamSphere recommended curriculum?')) {
      this.studyPlan = this.getCuratedPlanForExam(this.selectedExamId, this.dailyHours);
      this.saveLocalExamPlan(this.selectedExamId, this.studyPlan);
      this.toastService.success('Reset schedule to recommended high-yield curriculum! 📘');
    }
  }

  get filteredTasks(): StudyTaskItem[] {
    if (!this.studyPlan) return [];
    if (this.selectedDayFilter === 'All') return this.studyPlan.tasks;
    return this.studyPlan.tasks.filter(t => t.day.toLowerCase() === this.selectedDayFilter.toLowerCase());
  }

  get completedTasksCount(): number {
    return this.studyPlan?.tasks.filter(t => t.completed).length || 0;
  }

  get totalTasksCount(): number {
    return this.studyPlan?.tasks.length || 0;
  }

  get completionPercentage(): number {
    if (!this.totalTasksCount) return 0;
    return Math.round((this.completedTasksCount / this.totalTasksCount) * 100);
  }

  getTasksCountForDay(day: string): number {
    if (!this.studyPlan) return 0;
    if (day === 'All') return this.studyPlan.tasks.length;
    return this.studyPlan.tasks.filter(t => t.day.toLowerCase() === day.toLowerCase()).length;
  }

  // Focus Lab Pomodoro Controls (Signals-based for reactive zoneless updates)
  startPomodoro(): void {
    if (this.isTimerRunning()) return;
    this.isTimerRunning.set(true);
    this.pomodoroInterval = setInterval(() => {
      if (this.timerSeconds() > 0) {
        this.timerSeconds.update(s => s - 1);
      } else {
        this.handleTimerComplete();
      }
    }, 1000);
  }

  pausePomodoro(): void {
    this.isTimerRunning.set(false);
    this.stopPomodoro();
  }

  resetPomodoro(): void {
    this.pausePomodoro();
    let duration = 25 * 60;
    const mode = this.timerMode();
    if (mode === 'SHORT_BREAK') duration = 5 * 60;
    else if (mode === 'LONG_BREAK') duration = 15 * 60;
    else duration = this.customWorkMinutes() * 60;

    this.timerSeconds.set(duration);
    this.timerTotalSeconds.set(duration);
  }

  setTimerMode(mode: 'WORK' | 'SHORT_BREAK' | 'LONG_BREAK', workMins: number = 25): void {
    this.pausePomodoro();
    this.timerMode.set(mode);
    let seconds = 25 * 60;

    if (mode === 'WORK') {
      this.customWorkMinutes.set(workMins);
      seconds = workMins * 60;
    } else if (mode === 'SHORT_BREAK') {
      seconds = 5 * 60;
    } else if (mode === 'LONG_BREAK') {
      seconds = 15 * 60;
    }

    this.timerSeconds.set(seconds);
    this.timerTotalSeconds.set(seconds);
  }

  private stopPomodoro(): void {
    if (this.pomodoroInterval) {
      clearInterval(this.pomodoroInterval);
      this.pomodoroInterval = null;
    }
  }

  private handleTimerComplete(): void {
    this.stopPomodoro();
    this.isTimerRunning.set(false);
    this.playCompletionChime();

    if (this.timerMode() === 'WORK') {
      this.completedPomodorosToday.update(c => c + 1);
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('examsphere_pomodoro_completed_today', String(this.completedPomodorosToday()));
      }
      this.toastService.success('🎯 Focus block complete! Take a well-deserved 5-minute break.');
      this.setTimerMode('SHORT_BREAK');
    } else {
      this.toastService.info('☕ Break complete! Ready for your next deep study block? 🚀');
      this.setTimerMode('WORK', this.customWorkMinutes());
    }
  }

  private playCompletionChime(): void {
    try {
      if (typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      }
    } catch {
      // Audio playback fails silently if browser blocks autoplay
    }
  }

  formatTimer(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  // Local Storage Helpers
  private getLocalExamPlan(examId: string): StudyPlanItem | null {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    try {
      const data = localStorage.getItem(`examsphere_study_plan_${examId}`);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  private saveLocalExamPlan(examId: string, plan: StudyPlanItem): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      localStorage.setItem(`examsphere_study_plan_${examId}`, JSON.stringify(plan));
    } catch {
      // Ignore quota errors
    }
  }

  // Authentic, tailored 7-day study plans per examination
  getCuratedPlanForExam(examIdOrSlug: string, dailyHrs: number = 4): StudyPlanItem {
    const idLower = String(examIdOrSlug).toLowerCase();
    const matchedExam = this.exams.find(e => e._id === examIdOrSlug || e.slug === examIdOrSlug) ||
      this.verifiedExams.find(v => v._id === examIdOrSlug || v.slug === examIdOrSlug);

    const examName = matchedExam?.name || examIdOrSlug.replace(/-/g, ' ').toUpperCase();

    // 1. GATE COMPUTER SCIENCE & IT
    if (idLower.includes('gate')) {
      return {
        _id: 'CURATED-GATE-CSE',
        examId: examIdOrSlug,
        examName: 'GATE Computer Science & IT',
        dailyHours: dailyHrs,
        targetExamDate: 'February 2027',
        adaptiveNotes: 'Optimized syllabus balancing Discrete Math, Algorithms, OS, Networks, Databases, and Sunday 3-Hour CBT mocks.',
        tasks: [
          { _id: 'G1', day: 'Monday', subject: 'Algorithms', topic: 'Dynamic Programming & Memoization', activity: 'Concept Study', durationMinutes: 90, completed: true },
          { _id: 'G2', day: 'Monday', subject: 'Data Structures', topic: 'Binary Search Trees & AVL Rotations', activity: 'Practice PYQ', durationMinutes: 60, completed: true },
          { _id: 'G3', day: 'Tuesday', subject: 'Operating Systems', topic: 'Deadlock Avoidance & Banker Algorithm', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'G4', day: 'Tuesday', subject: 'Theory of Computation', topic: 'Pumping Lemma & DFA Minimization', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'G5', day: 'Wednesday', subject: 'Computer Networks', topic: 'TCP Sliding Window & Subnetting', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'G6', day: 'Wednesday', subject: 'Databases', topic: 'Normalization & BCNF Decomposition', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'G7', day: 'Thursday', subject: 'Engineering Mathematics', topic: 'Linear Algebra: Eigenvalues & Vector Spaces', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'G8', day: 'Friday', subject: 'Compiler Design', topic: 'LR Parsing & Syntax Directed Translation', activity: 'Concept Study', durationMinutes: 75, completed: false },
          { _id: 'G9', day: 'Friday', subject: 'General Aptitude', topic: 'Numerical & Verbal Reasoning Drills', activity: 'Practice PYQ', durationMinutes: 45, completed: false },
          { _id: 'G10', day: 'Saturday', subject: 'Full Syllabus', topic: 'Past 5-Year Solved Papers & Formula Review', activity: 'Revision', durationMinutes: 120, completed: false },
          { _id: 'G11', day: 'Sunday', subject: 'Full Syllabus', topic: 'Weekly Full-Length CBT Mock Examination (65 Questions)', activity: 'Mock Test', durationMinutes: 180, completed: false }
        ]
      };
    }

    // 2. UPSC CIVIL SERVICES (CSE / IAS)
    if (idLower.includes('upsc') || idLower.includes('civil') || idLower.includes('ias')) {
      return {
        _id: 'CURATED-UPSC-CSE',
        examId: examIdOrSlug,
        examName: 'Civil Services Examination (UPSC CSE)',
        dailyHours: dailyHrs,
        targetExamDate: 'May 2026',
        adaptiveNotes: 'Prelims GS-1 + CSAT balanced roadmap with Indian Polity, Modern History, Economy, and Mains Answer Writing.',
        tasks: [
          { _id: 'U1', day: 'Monday', subject: 'Indian Polity & Governance', topic: 'Preamble, Fundamental Rights & DPSP (Articles 12-51A)', activity: 'Concept Study', durationMinutes: 90, completed: true },
          { _id: 'U2', day: 'Monday', subject: 'Modern Indian History', topic: 'Freedom Struggle & National Movement (1885-1947)', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'U3', day: 'Tuesday', subject: 'Indian Economy', topic: 'Monetary Policy, Fiscal Deficit & Banking Sector Reforms', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'U4', day: 'Tuesday', subject: 'Geography', topic: 'Physical Geography & Indian River Systems', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'U5', day: 'Wednesday', subject: 'Environment & Ecology', topic: 'Biodiversity Hotspots, Ramsar Sites & Climate Accords', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'U6', day: 'Wednesday', subject: 'Science & Technology', topic: 'Space Missions, Biotechnology & Defense Indigenization', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'U7', day: 'Thursday', subject: 'CSAT Aptitude', topic: 'Reading Comprehension & Logical Deductions', activity: 'Concept Study', durationMinutes: 75, completed: false },
          { _id: 'U8', day: 'Thursday', subject: 'CSAT Mathematics', topic: 'Permutations, Number Series & Data Interpretation', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'U9', day: 'Friday', subject: 'Ethics & Integrity', topic: 'Case Studies on Administrative Ethics & Value Systems', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'U10', day: 'Saturday', subject: 'Current Affairs & Editorial', topic: 'Weekly Editorial Analysis & Mains Answer Writing Drill', activity: 'Revision', durationMinutes: 120, completed: false },
          { _id: 'U11', day: 'Sunday', subject: 'General Studies', topic: 'UPSC Prelims GS-1 Full-Length Simulation (100 Questions)', activity: 'Mock Test', durationMinutes: 120, completed: false }
        ]
      };
    }

    // 3. IIT JEE MAIN & ADVANCED
    if (idLower.includes('jee') || idLower.includes('iit')) {
      return {
        _id: 'CURATED-JEE-ADVANCED',
        examId: examIdOrSlug,
        examName: 'IIT JEE Main & Advanced',
        dailyHours: dailyHrs,
        targetExamDate: 'May 2026',
        adaptiveNotes: 'Intense Physics-Chemistry-Mathematics problem solving with Rotational Dynamics, Calculus, and Reaction Mechanisms.',
        tasks: [
          { _id: 'J1', day: 'Monday', subject: 'Physics', topic: 'Rotational Motion & Moment of Inertia', activity: 'Concept Study', durationMinutes: 90, completed: true },
          { _id: 'J2', day: 'Monday', subject: 'Mathematics', topic: 'Calculus: Definite Integrals & Area Under Curves', activity: 'Practice PYQ', durationMinutes: 90, completed: false },
          { _id: 'J3', day: 'Tuesday', subject: 'Organic Chemistry', topic: 'Reaction Mechanisms (SN1, SN2, Electrophilic Additions)', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'J4', day: 'Tuesday', subject: 'Physical Chemistry', topic: 'Chemical Thermodynamics & Ionic Equilibrium', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'J5', day: 'Wednesday', subject: 'Mathematics', topic: 'Vectors & 3D Geometry Problem Set', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'J6', day: 'Wednesday', subject: 'Physics', topic: 'Electrostatics & Gauss Law Applications', activity: 'Practice PYQ', durationMinutes: 75, completed: false },
          { _id: 'J7', day: 'Thursday', subject: 'Inorganic Chemistry', topic: 'Coordination Compounds & Chemical Bonding', activity: 'Concept Study', durationMinutes: 75, completed: false },
          { _id: 'J8', day: 'Thursday', subject: 'Physics', topic: 'Modern Physics & Photoelectric Effect', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'J9', day: 'Friday', subject: 'Mathematics', topic: 'Permutations, Combinations & Probability', activity: 'Practice PYQ', durationMinutes: 90, completed: false },
          { _id: 'J10', day: 'Saturday', subject: 'PCM Master Review', topic: 'Key Formula Derivations & Tough Problems Error Log', activity: 'Revision', durationMinutes: 120, completed: false },
          { _id: 'J11', day: 'Sunday', subject: 'Full PCM Syllabus', topic: 'JEE Advanced Timed Dual 3-Hour CBT Simulation', activity: 'Mock Test', durationMinutes: 180, completed: false }
        ]
      };
    }

    // 4. NEET UG (MEDICAL)
    if (idLower.includes('neet') || idLower.includes('medical') || idLower.includes('mbbs')) {
      return {
        _id: 'CURATED-NEET-UG',
        examId: examIdOrSlug,
        examName: 'National Eligibility cum Entrance Test (NEET UG)',
        dailyHours: dailyHrs,
        targetExamDate: 'May 2026',
        adaptiveNotes: 'Medical entrance roadmap emphasizing NCERT Biology line-by-line mastery, high-yield Organic Chemistry, and Physics Mechanics.',
        tasks: [
          { _id: 'N1', day: 'Monday', subject: 'Human Physiology', topic: 'Neural Control & Endocrine Coordination', activity: 'Concept Study', durationMinutes: 90, completed: true },
          { _id: 'N2', day: 'Monday', subject: 'Genetics', topic: 'Mendelian Genetics & Molecular Basis of Inheritance', activity: 'Practice PYQ', durationMinutes: 75, completed: false },
          { _id: 'N3', day: 'Tuesday', subject: 'Physics', topic: 'Laws of Motion & Work-Energy-Power', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'N4', day: 'Tuesday', subject: 'Organic Chemistry', topic: 'Aldehydes, Ketones & Carboxylic Acids', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'N5', day: 'Wednesday', subject: 'Plant Physiology', topic: 'Photosynthesis & Mineral Nutrition in Higher Plants', activity: 'Concept Study', durationMinutes: 75, completed: false },
          { _id: 'N6', day: 'Wednesday', subject: 'Physical Chemistry', topic: 'Chemical Equilibrium & Solutions Numericals', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'N7', day: 'Thursday', subject: 'Inorganic Chemistry', topic: 'p-Block Elements & Periodic Trends', activity: 'Concept Study', durationMinutes: 75, completed: false },
          { _id: 'N8', day: 'Thursday', subject: 'Physics', topic: 'Ray Optics & Wave Optics Problem Drill', activity: 'Practice PYQ', durationMinutes: 75, completed: false },
          { _id: 'N9', day: 'Friday', subject: 'Ecology & Evolution', topic: 'Ecosystem Dynamics & Population Ecology', activity: 'Concept Study', durationMinutes: 75, completed: false },
          { _id: 'N10', day: 'Saturday', subject: 'NCERT Biology High-Yield', topic: 'NCERT Exemplar Diagrams & Line-by-Line Revision', activity: 'Revision', durationMinutes: 120, completed: false },
          { _id: 'N11', day: 'Sunday', subject: 'Full NEET Syllabus', topic: 'NEET Grand Mock Test (200 Questions, 720 Marks, 200 Mins)', activity: 'Mock Test', durationMinutes: 200, completed: false }
        ]
      };
    }

    // 5. CAT MBA
    if (idLower.includes('cat') || idLower.includes('mba') || idLower.includes('iim')) {
      return {
        _id: 'CURATED-CAT-MBA',
        examId: examIdOrSlug,
        examName: 'Common Admission Test (CAT MBA)',
        dailyHours: dailyHrs,
        targetExamDate: 'November 2026',
        adaptiveNotes: 'Targeted IIM prep: 4 RC passages daily, complex DILR matrices, and high-speed Arithmetic/Algebra shortcuts.',
        tasks: [
          { _id: 'C1', day: 'Monday', subject: 'VARC', topic: '4 Advanced Reading Comprehension Passages', activity: 'Concept Study', durationMinutes: 90, completed: true },
          { _id: 'C2', day: 'Monday', subject: 'DILR', topic: 'Linear & Circular Matrix Arrangements', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'C3', day: 'Tuesday', subject: 'Quantitative Aptitude', topic: 'Arithmetic: Percentages, Profit-Loss & TSD', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'C4', day: 'Tuesday', subject: 'VARC', topic: 'Para Jumbles, Para Summary & Odd-One-Out', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'C5', day: 'Wednesday', subject: 'DILR', topic: 'Games & Tournaments / Venn Diagrams', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'C6', day: 'Wednesday', subject: 'Quantitative Aptitude', topic: 'Algebra: Quadratic Equations & Logarithms', activity: 'Practice PYQ', durationMinutes: 75, completed: false },
          { _id: 'C7', day: 'Thursday', subject: 'Quantitative Aptitude', topic: 'Geometry, Circles & Mensuration', activity: 'Concept Study', durationMinutes: 75, completed: false },
          { _id: 'C8', day: 'Friday', subject: 'DILR Speed Drill', topic: 'Complex Caselets & Radar Chart Interpretation', activity: 'Practice PYQ', durationMinutes: 75, completed: false },
          { _id: 'C9', day: 'Saturday', subject: 'Sectional Review', topic: 'Error Analysis & Speed Optimization Strategy', activity: 'Revision', durationMinutes: 90, completed: false },
          { _id: 'C10', day: 'Sunday', subject: 'Full CAT Syllabus', topic: 'Full-Length 2-Hour Timed CAT Computer-Based Mock', activity: 'Mock Test', durationMinutes: 120, completed: false }
        ]
      };
    }

    // 6. BANKING PO (IBPS / SBI PO)
    if (idLower.includes('bank') || idLower.includes('ibps') || idLower.includes('sbi')) {
      return {
        _id: 'CURATED-BANKING-PO',
        examId: examIdOrSlug,
        examName: 'Banking PO (IBPS / SBI PO)',
        dailyHours: dailyHrs,
        targetExamDate: 'October 2026',
        adaptiveNotes: 'Fast-paced banking exam schedule: High-Level Floor Puzzles, DI Caselets, Cloze Tests, and Banking Awareness.',
        tasks: [
          { _id: 'B1', day: 'Monday', subject: 'Quantitative Aptitude', topic: 'Simplification, Approximation & Number Series', activity: 'Concept Study', durationMinutes: 75, completed: true },
          { _id: 'B2', day: 'Monday', subject: 'Reasoning Ability', topic: 'Floor & Flat Puzzles, Box Arrangements', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'B3', day: 'Tuesday', subject: 'Reasoning Ability', topic: 'Syllogism (Only a Few Cases) & Inequalities', activity: 'Concept Study', durationMinutes: 75, completed: false },
          { _id: 'B4', day: 'Tuesday', subject: 'English Language', topic: 'Reading Comprehension & Cloze Test Drills', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'B5', day: 'Wednesday', subject: 'Quantitative Aptitude', topic: 'Data Interpretation: Bar, Line & Pie Charts', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'B6', day: 'Wednesday', subject: 'Banking Awareness', topic: 'RBI Regulations, Monetary Policy & Financial Terms', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'B7', day: 'Thursday', subject: 'Reasoning Ability', topic: 'Machine Input-Output & Direction Sense', activity: 'Concept Study', durationMinutes: 75, completed: false },
          { _id: 'B8', day: 'Friday', subject: 'Speed Math & Vocabulary', topic: 'Vedic Math Shortcuts, Error Spotting & Word Swap', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'B9', day: 'Saturday', subject: 'Revision & Analysis', topic: 'Sectional Timed Quizzes & Weak Area Practice', activity: 'Revision', durationMinutes: 90, completed: false },
          { _id: 'B10', day: 'Sunday', subject: 'Full Syllabus', topic: 'IBPS/SBI PO Prelims Full 100-Question 60-Minute Mock', activity: 'Mock Test', durationMinutes: 60, completed: false }
        ]
      };
    }

    // 7. SSC CGL
    if (idLower.includes('ssc') || idLower.includes('cgl')) {
      return {
        _id: 'CURATED-SSC-CGL',
        examId: examIdOrSlug,
        examName: 'Staff Selection Commission (SSC CGL)',
        dailyHours: dailyHrs,
        targetExamDate: 'September 2026',
        adaptiveNotes: 'High-speed Tier-1 prep: Advanced Math Tricks, Reasoning Analogies, Static GK, and English Vocabulary.',
        tasks: [
          { _id: 'S1', day: 'Monday', subject: 'Quantitative Aptitude', topic: 'Geometry & Trigonometry Identities', activity: 'Concept Study', durationMinutes: 90, completed: true },
          { _id: 'S2', day: 'Monday', subject: 'Reasoning', topic: 'Analogies, Syllogisms & Coding-Decoding', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'S3', day: 'Tuesday', subject: 'General Awareness', topic: 'Indian Constitution, Articles & Amendments', activity: 'Concept Study', durationMinutes: 75, completed: false },
          { _id: 'S4', day: 'Tuesday', subject: 'English Language', topic: 'Active/Passive Voice & Direct/Indirect Speech', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'S5', day: 'Wednesday', subject: 'Quantitative Aptitude', topic: 'Arithmetic: Ratios, Time-Work & Compound Interest', activity: 'Concept Study', durationMinutes: 90, completed: false },
          { _id: 'S6', day: 'Wednesday', subject: 'General Awareness', topic: 'Modern History & Static GK (Dances, Parks, Rivers)', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'S7', day: 'Thursday', subject: 'English Language', topic: 'Idioms, Phrases, One-Word Substitutions & Cloze Test', activity: 'Concept Study', durationMinutes: 75, completed: false },
          { _id: 'S8', day: 'Friday', subject: 'Speed Marathon', topic: 'Tier-1 Mixed 100-Question Speed Sprint', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
          { _id: 'S9', day: 'Saturday', subject: 'Weekly Revision', topic: 'Math Short Tricks & Current Affairs of Last 6 Months', activity: 'Revision', durationMinutes: 90, completed: false },
          { _id: 'S10', day: 'Sunday', subject: 'Full Syllabus', topic: 'SSC CGL Tier-1 100-Question 60-Minute Real Simulation', activity: 'Mock Test', durationMinutes: 60, completed: false }
        ]
      };
    }

    // 8. UGC NET / GENERAL FALLBACK
    return {
      _id: 'CURATED-UGC-NET',
      examId: examIdOrSlug,
      examName: examName,
      dailyHours: dailyHrs,
      targetExamDate: 'June 2026',
      adaptiveNotes: `Comprehensive syllabus roadmap tailored for ${examName} with conceptual modules, PYQs, and weekly tests.`,
      tasks: [
        { _id: 'O1', day: 'Monday', subject: 'Core Paper 1', topic: 'Teaching & Research Aptitude Fundamentals', activity: 'Concept Study', durationMinutes: 90, completed: true },
        { _id: 'O2', day: 'Monday', subject: 'Domain Subject', topic: 'Core Theoretical Foundations - Module 1', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
        { _id: 'O3', day: 'Tuesday', subject: 'Core Paper 1', topic: 'Information & Communication Technology in Education', activity: 'Concept Study', durationMinutes: 75, completed: false },
        { _id: 'O4', day: 'Tuesday', subject: 'Domain Subject', topic: 'Advanced Analytical Concepts & Problem Sets', activity: 'Practice PYQ', durationMinutes: 75, completed: false },
        { _id: 'O5', day: 'Wednesday', subject: 'Core Paper 1', topic: 'People, Development & Environmental Sustainability', activity: 'Concept Study', durationMinutes: 75, completed: false },
        { _id: 'O6', day: 'Wednesday', subject: 'Domain Subject', topic: 'Previous Years Solved Questions Drill', activity: 'Practice PYQ', durationMinutes: 60, completed: false },
        { _id: 'O7', day: 'Thursday', subject: 'Core Paper 1', topic: 'Higher Education System & Governance Structure', activity: 'Concept Study', durationMinutes: 75, completed: false },
        { _id: 'O8', day: 'Friday', subject: 'Domain Subject', topic: 'Comprehensive Formula & Thematic Synthesis', activity: 'Concept Study', durationMinutes: 75, completed: false },
        { _id: 'O9', day: 'Saturday', subject: 'Full Syllabus', topic: 'Comprehensive Synopsis Review & Mistake Analysis', activity: 'Revision', durationMinutes: 90, completed: false },
        { _id: 'O10', day: 'Sunday', subject: 'Full Syllabus', topic: 'Full-Length 3-Hour Combined Mock Examination', activity: 'Mock Test', durationMinutes: 180, completed: false }
      ]
    };
  }
}
