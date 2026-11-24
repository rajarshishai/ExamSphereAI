import { ChangeDetectionStrategy, Component, computed, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ResourceService, BackendResource, BackendWorkspace } from '../../../core/services/resource.service';
import { ExamService } from '../../../core/services/exam.service';
import { AiTutorService } from '../../../core/services/ai-tutor.service';
import { AuthService } from '../../../core/services/auth.service/auth.service';
import { PreparationService } from '../../../core/services/preparation.service';
import { ToastService } from '../../../core/services/toast.service';
import { FALLBACK_RESOURCES_CATALOG, FrontendResource } from './resources-catalog.data';

export type PrepLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type ResourceCategory =
  | 'All Resources'
  | 'Standard Textbook'
  | 'Notes'
  | 'Formula Sheet'
  | 'Syllabus'
  | 'Previous Papers'
  | 'Video Lessons'
  | 'Flashcards'
  | 'Practice Questions'
  | 'Revision Materials'
  | 'Mind Maps';

export interface PreparationModule {
  id: string;
  subject: string;
  weightage: string;
  chaptersCount: number;
  progress: number;
  status: 'Strong' | 'In Progress' | 'Weak Area' | 'Not Started';
  topics: { name: string; done: boolean; importance: 'High' | 'Medium' }[];
}

export interface ExamWorkspace {
  examName: string;
  slug?: string;
  category: string;
  officialBody: string;
  lastVerified: string;
  level: PrepLevel;
  readinessIndex: number;
  streakDays: number;
  stats: {
    subjects: number;
    resources: string;
    mockTests: number;
    pyqPapers: number;
  };
  modules: PreparationModule[];
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
}

export interface EcosystemSection {
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  bullets: string[];
  actionLabel: string;
  targetCategory: ResourceCategory;
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resources.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Resources implements OnInit {
  private resourceService = inject(ResourceService);
  private examService = inject(ExamService);
  private aiTutorService = inject(AiTutorService);
  private authService = inject(AuthService);
  private prepService = inject(PreparationService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  // Exam Workspace Generator State
  readonly examQuery = signal<string>('GATE Computer Science');
  readonly selectedLevel = signal<PrepLevel>('Intermediate');
  readonly isGenerating = signal<boolean>(false);
  readonly activeExamKey = signal<string>('GATE Computer Science');
  readonly selectedModuleId = signal<string>('mod-1');
  readonly flashcardFlipped = signal<boolean>(false);
  readonly focusMode = signal<boolean>(false);

  // Popular Presets for One-Click Workspace Generation
  readonly quickExamPresets = [
    'GATE Computer Science',
    'UPSC Civil Services (CSE)',
    'JEE Main & Advanced',
    'NEET UG Medical',
    'SSC CGL Tier I & II',
    'CAT Management',
    'SBI PO Banking',
  ];

  readonly levels: PrepLevel[] = ['Beginner', 'Intermediate', 'Advanced'];

  // Current Active Workspace
  readonly currentWorkspace = signal<ExamWorkspace>({
    examName: 'GATE Computer Science & Information Technology',
    slug: 'gate-cse',
    category: 'Engineering',
    officialBody: 'IIT / IISc Conducting Board (Verified Syllabus)',
    lastVerified: 'Nov 2026',
    level: 'Intermediate',
    readinessIndex: 68,
    streakDays: 14,
    stats: {
      subjects: 10,
      resources: '35+ Verified Items',
      mockTests: 25,
      pyqPapers: 15,
    },
    modules: [
      {
        id: 'mod-1',
        subject: 'Algorithms & Data Structures',
        weightage: '16% Weightage',
        chaptersCount: 8,
        progress: 75,
        status: 'Strong',
        topics: [
          { name: 'Asymptotic Complexity & Master Theorem', done: true, importance: 'High' },
          { name: 'Divide-and-Conquer & Dynamic Programming', done: true, importance: 'High' },
          { name: 'Shortest Paths & Minimum Spanning Trees', done: false, importance: 'High' },
          { name: 'Binary Search Trees & AVL Rotations', done: false, importance: 'Medium' },
        ],
      },
      {
        id: 'mod-2',
        subject: 'Operating Systems & Concurrency',
        weightage: '12% Weightage',
        chaptersCount: 6,
        progress: 55,
        status: 'In Progress',
        topics: [
          { name: 'Process Synchronization & Semaphores', done: true, importance: 'High' },
          { name: 'CPU Scheduling & Banker Algorithm', done: true, importance: 'High' },
          { name: 'Paging, TLB & Virtual Memory Replacement', done: false, importance: 'High' },
        ],
      },
      {
        id: 'mod-3',
        subject: 'Computer Networks',
        weightage: '10% Weightage',
        chaptersCount: 6,
        progress: 30,
        status: 'Weak Area',
        topics: [
          { name: 'IPv4 Subnetting & CIDR Calculation', done: true, importance: 'High' },
          { name: 'TCP Flow & Congestion Control Mechanisms', done: false, importance: 'High' },
          { name: 'Routing Protocols (Distance Vector & Link State)', done: false, importance: 'Medium' },
        ],
      },
    ],
    weaknessLoop: {
      weakTopic: 'TCP Congestion Control & Bellman-Ford Negative Cycle Detection',
      errorRate: '54% error rate across last 3 sectional tests',
      mistakeNote: 'Missed additive increase / multiplicative decrease (AIMD) slope on threshold drop.',
      nextRevisionAction: '15-min Spaced Recall + 10 Verified PYQs from CLRS & Kurose-Ross notes',
    },
    dailyPlan: [
      { time: '08:00 AM', task: 'Algorithms: Dynamic Programming & CLRS Chapter Notes', tag: 'Learn', completed: true },
      { time: '11:30 AM', task: 'Solve 15 Verified GATE PYQs (2018–2025) on Graph Theory', tag: 'PYQ Practice', completed: false },
      { time: '05:30 PM', task: 'Mistake Notebook Review & Time Complexity Flashcards', tag: 'Smart Revision', completed: false },
    ],
    flashcard: {
      tag: 'Algorithms • Master Theorem',
      front: 'Master Theorem Case 2: What is T(n) when f(n) = Θ(n^(log_b a) · log^k n)?',
      back: 'T(n) = Θ(n^(log_b a) · log^(k+1) n) for any constant k ≥ 0.',
    },
  });

  // Selected Module for Chapter Breakdown
  readonly selectedModule = computed<PreparationModule>(() => {
    const ws = this.currentWorkspace();
    return ws.modules.find((m) => m.id === this.selectedModuleId()) ?? ws.modules[0];
  });

  // 12 Core Ecosystem Sections
  readonly twelveSections: EcosystemSection[] = [
    {
      number: '01',
      title: 'Complete Exam Syllabus',
      subtitle: 'Structured subject-wise and chapter-wise syllabus mapped with topic weightage and progress tracking.',
      badge: 'Verified Schema',
      bullets: ['Subject & chapter hierarchy', 'Topic importance & weightage', 'Completed vs. pending tracking', 'Downloadable PDF syllabus'],
      actionLabel: 'Explore Syllabus',
      targetCategory: 'Syllabus',
    },
    {
      number: '02',
      title: 'Standard Academic Textbooks',
      subtitle: 'Internationally recognized standard textbooks (CLRS, Galvin, Laxmikanth, NCERT) with chapter notes.',
      badge: 'Gold Standard',
      bullets: ['CLRS, Galvin & Kurose Ross', 'NCERT Class 11-12 complete sets', 'M. Laxmikanth & Spectrum', 'Direct publisher/open source links'],
      actionLabel: 'Browse Textbooks',
      targetCategory: 'Standard Textbook',
    },
    {
      number: '03',
      title: 'Study Materials & Notes',
      subtitle: 'Crisp chapter notes, conceptual guides, definitions, and printable revision sheets curated by subject experts.',
      badge: 'Core Library',
      bullets: ['Short & detailed chapter notes', 'Formulas & shortcut tricks', 'Important definitions', 'Topic-wise revision PDFs'],
      actionLabel: 'Browse Notes',
      targetCategory: 'Notes',
    },
    {
      number: '04',
      title: 'AI Mock Test Generator',
      subtitle: 'Full-length, subject-wise, and chapter-wise mock tests with Easy/Medium/Hard difficulty adaptation.',
      badge: 'CBT Engine',
      bullets: ['Full-length & sectional mocks', 'Easy, Medium & Hard tiers', 'Custom topic-based tests', 'Instant solutions & explanations'],
      actionLabel: 'Launch Mock Test',
      targetCategory: 'Practice Questions',
    },
    {
      number: '05',
      title: 'Previous Year Questions (PYQs)',
      subtitle: 'Authentically sourced year-wise and topic-wise previous papers with verified step-by-step solutions.',
      badge: 'Source Verified',
      bullets: ['10+ years solved shift papers', 'Step-by-step analytical answers', 'Repeated question frequency tags', 'Downloadable PYQ PDFs'],
      actionLabel: 'Solve PYQs',
      targetCategory: 'Previous Papers',
    },
    {
      number: '06',
      title: 'High-Yield Formula Handbooks',
      subtitle: 'Formula sheets, cheat sheets, mathematical identities, and unit conversion charts for quick calculation.',
      badge: 'Speed Math',
      bullets: ['One-page subject formula sheets', 'Time & space complexity tables', 'Derivation shortcut cheat sheets', 'Downloadable PDF prints'],
      actionLabel: 'View Formulas',
      targetCategory: 'Formula Sheet',
    },
    {
      number: '07',
      title: 'Curated Video Lectures',
      subtitle: 'Verified topic-wise lecture series from premier institutes (NPTEL, IIT Delhi, MIT OCW).',
      badge: 'Premier Institutes',
      bullets: ['NPTEL & MIT OCW playlists', 'Concept walkthroughs & derivations', 'Timestamped chapter topics', 'Direct ad-free access'],
      actionLabel: 'Watch Lectures',
      targetCategory: 'Video Lessons',
    },
    {
      number: '08',
      title: 'Smart Spaced Flashcards',
      subtitle: 'Active-recall concept decks powered by the 2-3-5-7 spaced repetition method for long-term retention.',
      badge: 'Spaced Repetition',
      bullets: ['AI-generated concept decks', 'Formula & definition cards', 'Q&A active recall mode', 'Automated spaced intervals'],
      actionLabel: 'Practice Flashcards',
      targetCategory: 'Flashcards',
    },
    {
      number: '09',
      title: 'Mind Maps & Visual Learning',
      subtitle: 'High-resolution concept maps, reaction mechanisms, and flowchart diagrams for holistic understanding.',
      badge: 'Visual Memory',
      bullets: ['Chapter-wise mind maps', 'Process & logic flowcharts', 'Cross-topic connection webs', 'One-page visual summaries'],
      actionLabel: 'Open Mind Maps',
      targetCategory: 'Mind Maps',
    },
    {
      number: '10',
      title: 'AI Personal Tutor',
      subtitle: '24/7 context-aware academic mentor that breaks down complex topics and explains textbook theorems in plain language.',
      badge: 'Context-Aware AI',
      bullets: ['Ask doubts anytime in plain language', 'Step-by-step worked examples', 'Ask questions from uploaded PDFs', 'Multilingual explanations (EN/HI)'],
      actionLabel: 'Ask AI Tutor',
      targetCategory: 'All Resources',
    },
    {
      number: '11',
      title: 'AI Adaptive Study Planner',
      subtitle: 'Dynamic daily timetable and weekly milestones that auto-adjust based on syllabus coverage and countdown.',
      badge: 'Adaptive Schedule',
      bullets: ['Personalized daily timetable', 'Subject-wise time allocation', 'Spaced revision reminders', 'Live exam countdown'],
      actionLabel: 'View Timetable',
      targetCategory: 'Revision Materials',
    },
    {
      number: '12',
      title: 'Performance & Readiness Analytics',
      subtitle: 'Granular accuracy, speed-per-question, and weak-topic diagnostics feeding your Exam Readiness Index.',
      badge: 'Readiness Intelligence',
      bullets: ['Test score & accuracy trends', 'Weak vs. strong topic matrix', 'Time spent per question', 'Preparation readiness report'],
      actionLabel: 'Inspect Analytics',
      targetCategory: 'Revision Materials',
    },
  ];

  // Universal Library Filters
  readonly libraryFilters: ResourceCategory[] = [
    'All Resources',
    'Standard Textbook',
    'Notes',
    'Formula Sheet',
    'Syllabus',
    'Previous Papers',
    'Video Lessons',
    'Flashcards',
    'Practice Questions',
    'Revision Materials',
    'Mind Maps',
  ];

  readonly selectedFilter = signal<ResourceCategory>('All Resources');
  readonly selectedFormatFilter = signal<string>('All');
  readonly librarySearch = signal<string>('');
  readonly libraryExamFilter = signal<string>('All Exams');
  readonly availableExams = signal<string[]>([
    'All Exams',
    'GATE Computer Science',
    'UPSC Civil Services (CSE)',
    'JEE Main & Advanced',
    'NEET UG Medical',
    'SSC CGL Tier I & II',
    'CAT Management',
    'SBI PO Banking',
  ]);

  // Live Database Items + Fallback
  readonly libraryItems = signal<FrontendResource[]>([...FALLBACK_RESOURCES_CATALOG]);
  readonly isLoadingLibrary = signal<boolean>(false);

  // Filtered Library Cards
  readonly filteredLibraryItems = computed(() => {
    const filter = this.selectedFilter();
    const examFilter = this.libraryExamFilter();
    const formatFilter = this.selectedFormatFilter();
    const query = this.librarySearch().toLowerCase().trim();

    return this.libraryItems().filter((item) => {
      const matchesCat = filter === 'All Resources' || item.resourceType.toLowerCase() === filter.toLowerCase();
      const matchesExam =
        examFilter === 'All Exams' ||
        item.examName.toLowerCase().includes(examFilter.toLowerCase()) ||
        item.examSlug.toLowerCase() === examFilter.toLowerCase();
      const matchesFormat = formatFilter === 'All' || item.fileFormat.toLowerCase() === formatFilter.toLowerCase();
      const matchesQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.subject.toLowerCase().includes(query) ||
        item.chapter.toLowerCase().includes(query) ||
        item.authorOrPublisher.toLowerCase().includes(query) ||
        item.examName.toLowerCase().includes(query) ||
        (item.topics && item.topics.some((t) => t.toLowerCase().includes(query)));

      return matchesCat && matchesExam && matchesFormat && matchesQuery;
    });
  });

  // Unique AI Differentiators
  readonly uniqueAiFeatures = [
    { name: 'AI Weakness Detector', desc: 'Pinpoints chapters where you repeatedly lose marks across mocks.', highlight: true },
    { name: 'Smart Revision Engine', desc: 'Schedules 2-3-5-7 day active recall before forgetting curves dip.', highlight: true },
    { name: 'Mistake Notebook', desc: 'Auto-collects every wrong answer with root-cause tags for re-testing.', highlight: true },
    { name: 'AI Question Generator', desc: 'Builds custom difficulty-adapted sets from any syllabus chapter.', highlight: false },
    { name: 'AI PDF Summarizer', desc: 'Condenses dense study PDFs into structured bullet notes & formulas.', highlight: false },
    { name: 'Answer Evaluator', desc: 'Scores descriptive answers against official rubric criteria.', highlight: false },
    { name: 'Exam Readiness Index', desc: 'Tracks syllabus coverage, speed & accuracy without false guarantees.', highlight: false },
    { name: 'Multilingual AI Tutor', desc: 'Explains complex concepts in English, Hindi, and regional languages.', highlight: false },
  ];

  // Resource Detail Preview Modal
  readonly selectedResourceForModal = signal<FrontendResource | null>(null);

  // Interactive AI Tutor State
  readonly tutorOpen = signal<boolean>(false);
  readonly tutorLanguage = signal<'English' | 'Hindi'>('English');
  readonly tutorTopic = signal<string>('Dynamic Programming vs Greedy Approach');
  readonly tutorQuestion = signal<string>('');
  readonly tutorMessages = signal<{ role: 'user' | 'ai'; text: string }[]>([
    {
      role: 'ai',
      text: 'Welcome to ExamSphere AI Tutor! Ask any conceptual doubt, request formula proofs, or ask questions on standard textbooks for your target examination.',
    },
  ]);

  private activeConversationId = signal<string | undefined>(undefined);

  ngOnInit(): void {
    // 1. Fetch live authentic resources from MongoDB Backend
    this.fetchResourcesFromBackend();

    // 2. Fetch popular exams from database to populate exam selectors
    this.fetchExamsList();

    // 3. Load workspace for initial default exam from database
    this.generateWorkspace();
  }

  fetchResourcesFromBackend(): void {
    this.isLoadingLibrary.set(true);
    this.resourceService.getResources({ limit: 100 }).subscribe({
      next: ({ resources }) => {
        this.isLoadingLibrary.set(false);
        if (resources && resources.length > 0) {
          const mapped: FrontendResource[] = resources.map((r, idx) => ({
            id: r._id || `res-${String(idx + 1).padStart(3, '0')}`,
            title: r.title,
            slug: r.slug,
            examSlug: r.examSlug,
            examName: r.examName,
            category: r.category,
            resourceType: r.resourceType,
            subject: r.subject,
            chapter: r.chapter,
            topics: r.topics || [],
            sourceType: r.sourceType,
            authorOrPublisher: r.authorOrPublisher,
            description: r.description,
            fileFormat: r.fileFormat,
            fileSizeOrDuration: r.fileSizeOrDuration,
            downloadUrl: r.downloadUrl,
            externalUrl: r.externalUrl,
            rating: r.rating,
            downloadsCount: r.downloadsCount,
            isFeatured: r.isFeatured,
            bookmarked: this.isSavedLocally(r.slug || r._id),
            verifiedYear: r.verifiedYear,
          }));

          // Merge backend items with fallback, avoiding duplicates by slug
          const backendSlugs = new Set(mapped.map((m) => m.slug));
          const fallbacks = FALLBACK_RESOURCES_CATALOG.filter((f) => !backendSlugs.has(f.slug));
          const combined = [...mapped, ...fallbacks];
          this.libraryItems.set(combined);

          // Extract unique exams for dropdown
          const examSet = new Set<string>();
          combined.forEach((item) => {
            if (item.examName) examSet.add(item.examName);
          });
          const sortedExams = Array.from(examSet).sort();
          this.availableExams.set(['All Exams', ...sortedExams]);
        }
      },
      error: () => {
        this.isLoadingLibrary.set(false);
        // Fallback catalog is already loaded
      },
    });
  }

  fetchExamsList(): void {
    this.examService.getExams({ limit: 50 }).subscribe({
      next: ({ exams }) => {
        if (exams && exams.length > 0) {
          const names = exams.map((e) => e.name);
          const current = this.availableExams();
          const combined = Array.from(new Set([...current, ...names]));
          this.availableExams.set(combined);
        }
      },
      error: () => {
        // Keep initial list
      },
    });
  }

  selectPreset(exam: string): void {
    this.examQuery.set(exam);
    this.generateWorkspace();
  }

  setLevel(level: PrepLevel): void {
    this.selectedLevel.set(level);
    this.currentWorkspace.update((ws) => ({
      ...ws,
      level,
      readinessIndex: level === 'Beginner' ? 35 : level === 'Intermediate' ? 68 : 88,
    }));
  }

  generateWorkspace(): void {
    const query = this.examQuery().trim();
    if (!query) return;

    this.isGenerating.set(true);
    const slug = query.toLowerCase().replace(/[^a-z0-9]/g, '-');

    this.resourceService.getExamWorkspace(slug).subscribe({
      next: (ws: BackendWorkspace) => {
        this.isGenerating.set(false);
        if (ws) {
          const mappedModules: PreparationModule[] = ws.modules.map((m) => ({
            id: m.id,
            subject: m.subject,
            weightage: m.weightage,
            chaptersCount: m.chaptersCount,
            progress: m.progress,
            status: m.status,
            topics: m.topics,
          }));

          const updated: ExamWorkspace = {
            examName: ws.examName,
            slug: ws.slug,
            category: ws.category,
            officialBody: ws.officialBody,
            lastVerified: ws.lastVerified || 'Nov 2026',
            level: this.selectedLevel(),
            readinessIndex: this.selectedLevel() === 'Beginner' ? 35 : this.selectedLevel() === 'Intermediate' ? 68 : 88,
            streakDays: ws.streakDays || 14,
            stats: ws.stats,
            modules: mappedModules,
            weaknessLoop: ws.weaknessLoop,
            dailyPlan: ws.dailyPlan,
            flashcard: ws.flashcard,
          };

          this.activeExamKey.set(ws.examName);
          this.currentWorkspace.set(updated);
          if (mappedModules.length > 0) {
            this.selectedModuleId.set(mappedModules[0].id);
          }
          this.flashcardFlipped.set(false);
        }
      },
      error: () => {
        this.isGenerating.set(false);
        // Fallback workspace generation
        this.activeExamKey.set(query);
        this.currentWorkspace.update((ws) => ({
          ...ws,
          examName: query,
          level: this.selectedLevel(),
        }));
      },
    });
  }

  selectModule(moduleId: string): void {
    this.selectedModuleId.set(moduleId);
  }

  toggleFlashcard(): void {
    this.flashcardFlipped.update((v) => !v);
  }

  toggleFocusMode(): void {
    this.focusMode.update((v) => !v);
  }

  selectLibraryFilter(category: ResourceCategory): void {
    this.selectedFilter.set(category);
  }

  jumpToLibraryCategory(category: ResourceCategory): void {
    this.selectedFilter.set(category);
    this.libraryExamFilter.set('All Exams');
    const el = document.getElementById('universal-library');
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleBookmark(id: string): void {
    this.libraryItems.update((items) =>
      items.map((item) => {
        if (item.id === id || item.slug === id) {
          const nextVal = !item.bookmarked;
          this.saveBookmarkLocally(item.slug || item.id, nextVal);
          return { ...item, bookmarked: nextVal };
        }
        return item;
      })
    );
  }

  private isSavedLocally(key: string): boolean {
    if (typeof localStorage === 'undefined') return false;
    const saved = localStorage.getItem(`bookmark_${key}`);
    return saved === 'true';
  }

  private saveBookmarkLocally(key: string, val: boolean): void {
    if (typeof localStorage === 'undefined') return;
    if (val) {
      localStorage.setItem(`bookmark_${key}`, 'true');
      this.toastService.success('Resource saved to your bookmarks.');
    } else {
      localStorage.removeItem(`bookmark_${key}`);
      this.toastService.info('Resource removed from bookmarks.');
    }
  }

  openResourceModal(resource: FrontendResource): void {
    this.selectedResourceForModal.set(resource);
  }

  closeResourceModal(): void {
    this.selectedResourceForModal.set(null);
  }

  openExternalResource(url?: string): void {
    if (!url) {
      this.toastService.info('Resource preview is currently hosted on ExamSphere AI internal viewer.');
      return;
    }
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  startPreparationForCurrentExam(): void {
    const ws = this.currentWorkspace();
    const slug = ws.slug || ws.examName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    this.prepService.setActiveExam(slug, ws.examName, ws.examName, ws.category);
    this.router.navigate(['/preparation', slug]);
  }

  exploreSyllabusForCurrentExam(): void {
    const ws = this.currentWorkspace();
    const slug = ws.slug || ws.examName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    this.router.navigate(['/syllabus', slug]);
  }

  openTutorWithTopic(topic: string): void {
    this.tutorTopic.set(topic);
    this.tutorOpen.set(true);
    const exam = this.currentWorkspace().examName;
    const lang = this.tutorLanguage();
    const reply =
      lang === 'Hindi'
        ? `[${exam} • हिंदी व्याख्या] "${topic}": सबसे पहले मूल परिभाषा समझें, फिर मानक पाठ्यपुस्तकों (Standard Textbooks) के मुख्य सूत्र और पिछले वर्षों के प्रश्नों (PYQs) को चरण-दर-चरण हल करें।`
        : `[${exam} Context] Step-by-Step Breakdown for "${topic}": 1) Core definition & theorem derivation from standard academic textbooks. 2) High-weightage sub-concepts tested in past shifts. 3) Practical problem-solving heuristics and common traps.`;

    this.tutorMessages.update((msgs) => [
      ...msgs,
      { role: 'user', text: `Explain "${topic}" for ${exam} (${this.selectedLevel()} level)` },
      { role: 'ai', text: reply },
    ]);
  }

  sendTutorPrompt(): void {
    const q = this.tutorQuestion().trim();
    if (!q) return;
    const exam = this.currentWorkspace().examName;
    const lang = this.tutorLanguage();
    const token = this.authService.getToken();

    this.tutorMessages.update((msgs) => [...msgs, { role: 'user', text: q }]);
    this.tutorQuestion.set('');

    if (token) {
      this.tutorMessages.update((msgs) => [
        ...msgs,
        { role: 'ai', text: 'ExamSphere AI is analyzing textbook & syllabus context...' },
      ]);

      const diff = this.selectedLevel().toLowerCase() as 'beginner' | 'intermediate' | 'advanced';

      this.aiTutorService
        .askQuestion({
          question: lang === 'Hindi' ? `${q} (कृपया उत्तर सरल हिंदी में दें)` : q,
          subject: this.selectedModule().subject,
          topic: this.tutorTopic(),
          difficulty: diff,
          conversationId: this.activeConversationId(),
        })
        .subscribe({
          next: (res) => {
            if (res?.conversationId) {
              this.activeConversationId.set(res.conversationId);
            }
            this.tutorMessages.update((msgs) => {
              const copy = [...msgs];
              copy[copy.length - 1] = {
                role: 'ai',
                text: res.answer || 'Response generated.',
              };
              return copy;
            });
          },
          error: (err) => {
            const fallback =
              lang === 'Hindi'
                ? `[${exam} AI Tutor - हिंदी] "${q}" का उत्तर: यह अवधारणा परीक्षा के उच्च-भार खंड से जुड़ी है। मुख्य सूत्र नोट करें और मानक पाठ्यपुस्तक से अभ्यास करें।`
                : `[${exam} AI Tutor] Structured breakdown for "${q}": Anchor the concept to your verified syllabus module, check boundary conditions, and cross-reference with official PYQs.`;

            this.tutorMessages.update((msgs) => {
              const copy = [...msgs];
              copy[copy.length - 1] = {
                role: 'ai',
                text: `${fallback}\n\n[Fallback mode: ${err.error?.message || 'Academic tutor heuristics active.'}]`,
              };
              return copy;
            });
          },
        });
    } else {
      const aiResponse =
        lang === 'Hindi'
          ? `[${exam} AI Tutor - हिंदी] "${q}" का चरण-दर-चरण उत्तर: यह अवधारणा परीक्षा के उच्च-भार खंड से जुड़ी है। पहले मुख्य सूत्र नोट करें और फिर 5 अभ्यास प्रश्न हल करें।\n\n(सुझाव: लाइव AI ट्यूटर और व्यक्तिगत चैट इतिहास के लिए लॉगिन करें।)`
          : `[${exam} AI Tutor] Structured breakdown for "${q}": First, review the relevant standard textbook theorems, break the problem into 3 logical steps, and verify against past examination shifts.\n\n(Tip: Sign in or register to unlock live multi-turn AI responses!)`;

      this.tutorMessages.update((msgs) => [...msgs, { role: 'ai', text: aiResponse }]);
    }
  }
}
