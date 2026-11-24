import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

import { SyllabusService } from '../../../../core/services/syllabus.service';
import { AuthService } from '../../../../core/services/auth.service/auth.service';
import { ToastService } from '../../../../core/services/toast.service';
import { EXAM_SYLLABUS_CATALOG } from '../../data/syllabus-catalog.data';

import {
  Syllabus,
  SyllabusProgress,
  SyllabusSubject
} from '../../models/syllabus.model';

@Component({
  selector: 'app-syllabus-explorer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './syllabus-explorer.html',
  styleUrl: './syllabus-explorer.css'
})
export class SyllabusExplorerComponent implements OnInit {
  private syllabusService = inject(SyllabusService);
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // Core State (Angular Signals for Zoneless Change Detection)
  syllabuses = signal<Syllabus[]>(EXAM_SYLLABUS_CATALOG);
  selectedExamId = signal<string>('gate-cse');
  selectedSyllabus = signal<Syllabus | null>(null);

  // Search & Filtering Signals
  examSearchText = signal<string>('');
  selectedCategory = signal<string>('All');
  topicSearchText = signal<string>('');
  importanceFilter = signal<'All' | 'High' | 'Medium' | 'Low'>('All');
  difficultyFilter = signal<'All' | 'Easy' | 'Medium' | 'Hard'>('All');

  // UI state
  isSearchDropdownOpen = signal<boolean>(false);
  expandedSubjects = signal<string[]>([]);
  loading = signal<boolean>(false);
  isGuest = signal<boolean>(true);
  savingTopicIds = signal<string[]>([]);
  errorMessage = signal<string>('');
  localCompletedIds = signal<string[]>([]);

  // Popular Shortcut Exams
  readonly popularSlugs = [
    'gate-cse',
    'upsc-cse',
    'jee-advanced',
    'neet-ug',
    'cat-mba',
    'ssc-cgl',
    'sbi-po',
    'clat-ug',
    'nda',
    'ugc-net'
  ];

  // Distinct Categories with Counts
  categories = computed(() => {
    const map = new Map<string, number>();
    const all = this.syllabuses();
    all.forEach(e => {
      const cat = e.category || 'General';
      map.set(cat, (map.get(cat) || 0) + 1);
    });

    const list = Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    return [{ name: 'All', count: all.length }, ...list];
  });

  // Filtered Exam List based on examSearchText & selectedCategory
  filteredExams = computed(() => {
    const query = this.examSearchText().toLowerCase().trim();
    const category = this.selectedCategory();
    const all = this.syllabuses();

    return all.filter(item => {
      const matchesCategory = category === 'All' || item.category === category;
      if (!matchesCategory) return false;

      if (!query) return true;

      const nameMatch = item.examName.toLowerCase().includes(query);
      const slugMatch = (item.slug || '').toLowerCase().includes(query);
      const bodyMatch = (item.conductingBody || '').toLowerCase().includes(query);
      const catMatch = item.category.toLowerCase().includes(query);
      const subjectMatch = item.subjects.some(s => s.name.toLowerCase().includes(query));

      return nameMatch || slugMatch || bodyMatch || catMatch || subjectMatch;
    });
  });

  // Accurate Progress Computation (only counting topics of the current exam)
  currentProgress = computed<SyllabusProgress>(() => {
    const syllabus = this.selectedSyllabus();
    if (!syllabus) {
      return {
        examName: 'No Exam Selected',
        totalTopics: 0,
        completedTopics: 0,
        pendingTopics: 0,
        completionPercentage: 0,
        completedTopicIds: [],
        subjects: []
      };
    }

    const subjects = syllabus.subjects || [];
    const allTopics = subjects.flatMap(s => s.topics);
    const total = allTopics.length;

    // Filter localCompletedIds strictly to this exam's valid topic IDs (fixes previous bug)
    const validTopicIdSet = new Set(allTopics.map(t => t._id));
    const completedList = this.localCompletedIds().filter(id => validTopicIdSet.has(id));
    const completed = completedList.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      examName: syllabus.examName,
      totalTopics: total,
      completedTopics: completed,
      pendingTopics: Math.max(0, total - completed),
      completionPercentage: percentage,
      completedTopicIds: completedList,
      subjects: subjects.map(s => {
        const subCompleted = s.topics.filter(t => completedList.includes(t._id)).length;
        const subTotal = s.topics.length;
        return {
          subjectName: s.name,
          totalTopics: subTotal,
          completedTopics: subCompleted,
          completionPercentage: subTotal > 0 ? Math.round((subCompleted / subTotal) * 100) : 0
        };
      })
    };
  });

  // Filtered Subjects & Topics based on topicSearchText, importance, and difficulty
  filteredSubjects = computed(() => {
    const syllabus = this.selectedSyllabus();
    if (!syllabus) return [];

    const search = this.topicSearchText().toLowerCase().trim();
    const imp = this.importanceFilter();
    const diff = this.difficultyFilter();

    if (!search && imp === 'All' && diff === 'All') {
      return syllabus.subjects;
    }

    return syllabus.subjects
      .map(subject => ({
        ...subject,
        topics: subject.topics.filter(topic => {
          const matchesImportance = imp === 'All' || topic.importance === imp;
          const matchesDifficulty = diff === 'All' || topic.difficulty === diff;
          if (!matchesImportance || !matchesDifficulty) return false;

          if (!search) return true;

          const titleMatch = topic.title.toLowerCase().includes(search);
          const descMatch = topic.description ? topic.description.toLowerCase().includes(search) : false;
          const subjectMatch = subject.name.toLowerCase().includes(search);

          return titleMatch || descMatch || subjectMatch;
        })
      }))
      .filter(subject => subject.topics.length > 0);
  });

  // Total Estimated Prep Hours
  totalCurriculumHours = computed<number>(() => {
    const syllabus = this.selectedSyllabus();
    if (!syllabus) return 0;
    return syllabus.subjects.flatMap(s => s.topics).reduce((acc, t) => acc + (t.estimatedHours || 0), 0);
  });

  ngOnInit(): void {
    this.isGuest.set(!this.authService.getToken());
    this.loadCatalog();
  }

  loadCatalog(): void {
    this.loading.set(true);

    this.syllabusService.getSyllabuses().subscribe({
      next: (data) => {
        const catalogList = data && data.length > 0 ? data : EXAM_SYLLABUS_CATALOG;
        this.syllabuses.set(catalogList);
        this.loading.set(false);
        this.resolveInitialExam();
      },
      error: () => {
        this.syllabuses.set(EXAM_SYLLABUS_CATALOG);
        this.loading.set(false);
        this.resolveInitialExam();
      }
    });
  }

  private resolveInitialExam(): void {
    // 1. Check URL query parameters
    const queryExam = this.route.snapshot.queryParams['exam'] ||
                      this.route.snapshot.queryParams['examId'] ||
                      this.route.snapshot.queryParams['slug'];

    if (queryExam) {
      const match = this.syllabuses().find(
        e => e.examId === queryExam || e.slug === queryExam || e._id === queryExam || e.examName.toLowerCase().includes(String(queryExam).toLowerCase())
      );
      if (match) {
        this.selectExam(match.examId || match.slug || match._id);
        return;
      }
    }

    // 2. Check localStorage
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('examsphere_selected_exam');
      if (saved) {
        const match = this.syllabuses().find(e => e.examId === saved || e.slug === saved || e._id === saved);
        if (match) {
          this.selectExam(match.examId || match.slug || match._id);
          return;
        }
      }
    }

    // 3. Fallback to default (GATE CSE or first available)
    if (this.syllabuses().length > 0) {
      this.selectExam(this.syllabuses()[0].examId || this.syllabuses()[0].slug || 'gate-cse');
    }
  }

  selectExam(examIdOrSlug?: string): void {
    if (!examIdOrSlug) return;

    this.selectedExamId.set(examIdOrSlug);
    this.isSearchDropdownOpen.set(false);
    this.examSearchText.set('');
    this.topicSearchText.set('');
    this.importanceFilter.set('All');
    this.difficultyFilter.set('All');

    // Load locally saved completed topic IDs for this specific exam
    this.loadStoredLocalCompleted(examIdOrSlug);

    // Save active selected exam
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('examsphere_selected_exam', examIdOrSlug);
      } catch {}
    }

    this.loading.set(true);

    this.syllabusService.getSyllabusByExam(examIdOrSlug).subscribe({
      next: (data) => {
        const target = data || this.syllabuses().find(s => s.examId === examIdOrSlug || s.slug === examIdOrSlug) || EXAM_SYLLABUS_CATALOG[0];
        this.selectedSyllabus.set(target);

        // Auto-expand all subjects by default for clear viewing
        if (target && target.subjects && target.subjects.length > 0) {
          this.expandedSubjects.set(target.subjects.map(s => s._id));
        }

        this.loading.set(false);
        this.loadCloudProgress(examIdOrSlug);
      },
      error: () => {
        const local = this.syllabuses().find(s => s.examId === examIdOrSlug || s.slug === examIdOrSlug) || EXAM_SYLLABUS_CATALOG[0];
        this.selectedSyllabus.set(local);
        if (local && local.subjects) {
          this.expandedSubjects.set(local.subjects.map(s => s._id));
        }
        this.loading.set(false);
      }
    });
  }

  private loadStoredLocalCompleted(examId: string): void {
    if (typeof localStorage !== 'undefined') {
      try {
        const stored = localStorage.getItem(`examsphere_completed_topics_${examId}`);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            this.localCompletedIds.set(parsed);
            return;
          }
        }
      } catch {}
    }
    this.localCompletedIds.set([]);
  }

  private saveStoredLocalCompleted(examId: string): void {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(
          `examsphere_completed_topics_${examId}`,
          JSON.stringify(this.localCompletedIds())
        );
      } catch {}
    }
  }

  private loadCloudProgress(examId: string): void {
    const token = this.authService.getToken();
    if (!token) {
      this.isGuest.set(true);
      return;
    }

    this.isGuest.set(false);
    this.syllabusService.getProgress(examId).subscribe({
      next: (data) => {
        if (data && data.completedTopicIds && data.completedTopicIds.length > 0) {
          const merged = Array.from(new Set([...this.localCompletedIds(), ...data.completedTopicIds]));
          this.localCompletedIds.set(merged);
          this.saveStoredLocalCompleted(examId);
        }
      },
      error: () => {
        // Fall back gracefully to local progress
      }
    });
  }

  toggleTopic(topicId: string, completed: boolean): void {
    if (this.savingTopicIds().includes(topicId)) return;

    const current = this.localCompletedIds();
    let updated: string[];

    if (completed && !current.includes(topicId)) {
      updated = [...current, topicId];
    } else if (!completed) {
      updated = current.filter(id => id !== topicId);
    } else {
      updated = current;
    }

    this.localCompletedIds.set(updated);
    this.saveStoredLocalCompleted(this.selectedExamId());

    if (completed) {
      const topic = this.selectedSyllabus()?.subjects.flatMap(s => s.topics).find(t => t._id === topicId);
      if (topic) {
        this.toastService.success(`Completed: ${topic.title}! 🎯`);
      }
      if (this.currentProgress().completionPercentage === 100) {
        this.toastService.success(`🏆 Outstanding! You have mastered 100% of the ${this.selectedSyllabus()?.examName} syllabus!`);
      }
    }

    // Sync with backend if authenticated
    const token = this.authService.getToken();
    if (!token) return;

    this.savingTopicIds.update(ids => [...ids, topicId]);

    this.syllabusService.updateTopicProgress(this.selectedExamId(), topicId, completed).subscribe({
      next: () => {
        this.savingTopicIds.update(ids => ids.filter(id => id !== topicId));
      },
      error: () => {
        this.savingTopicIds.update(ids => ids.filter(id => id !== topicId));
      }
    });
  }

  isCompleted(topicId: string): boolean {
    return this.localCompletedIds().includes(topicId);
  }

  toggleSubject(subjectId: string): void {
    const current = this.expandedSubjects();
    if (current.includes(subjectId)) {
      this.expandedSubjects.set(current.filter(id => id !== subjectId));
    } else {
      this.expandedSubjects.set([...current, subjectId]);
    }
  }

  expandAll(): void {
    const syllabus = this.selectedSyllabus();
    if (syllabus) {
      this.expandedSubjects.set(syllabus.subjects.map(s => s._id));
    }
  }

  collapseAll(): void {
    this.expandedSubjects.set([]);
  }

  isExpanded(subjectId: string): boolean {
    return this.expandedSubjects().includes(subjectId);
  }

  getSubjectProgress(subjectName: string): number {
    return this.currentProgress().subjects.find(s => s.subjectName === subjectName)?.completionPercentage ?? 0;
  }

  markAllCompleted(): void {
    const syllabus = this.selectedSyllabus();
    if (!syllabus) return;

    const allTopicIds = syllabus.subjects.flatMap(s => s.topics).map(t => t._id);
    this.localCompletedIds.set(allTopicIds);
    this.saveStoredLocalCompleted(this.selectedExamId());
    this.toastService.success('All topics marked as completed! 🚀');
  }

  clearAllCompleted(): void {
    if (confirm('Are you sure you want to reset your checklist progress for this examination?')) {
      this.localCompletedIds.set([]);
      this.saveStoredLocalCompleted(this.selectedExamId());
      this.toastService.info('Checklist progress reset.');
    }
  }

  // Quick category selection
  setCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  // Generate Ask AI Query
  getAiMentorQuery(topicTitle: string): string {
    const examName = this.selectedSyllabus()?.examName || 'Competitive Examination';
    return `Explain ${topicTitle} in detail for ${examName}. Include fundamental concepts, core formulas, key shortcuts, and common exam questions.`;
  }
}
