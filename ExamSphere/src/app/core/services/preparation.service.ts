import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map, catchError } from 'rxjs';
import { ExamService, BackendExam } from './exam.service';

export interface ExamPrepWorkspace {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  category: string;
  conductingAuthority: string;
  examDateText: string;
  daysRemaining: number;
  preparationStatus: 'On Track' | 'Needs Attention' | 'Foundation Phase' | 'Final Revision';
  readinessScore: number; // 0-100
  readinessLabel: string;
  syllabusCompletion: number; // %
  mockTestAvg: number; // %
  practiceAccuracy: number; // %
  studyStreakDays: number;
  totalStudyHours: number;
  questionsSolvedCount: number;
  correctQuestionsCount: number;
  completedTopics: string[];
  description: string;
  subjects: string[];
}

export interface SyllabusSubject {
  name: string;
  weightage: string;
  progress: number;
  topics: Array<{ name: string; completed: boolean; difficulty: 'Easy' | 'Medium' | 'Hard' }>;
}

export interface DailyPracticeQuestion {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  selectedOption?: number;
  isAnswered?: boolean;
}

export interface StudyMaterialItem {
  id: string;
  title: string;
  type: 'Formula Sheet' | 'Summary Notes' | 'Handwritten PDF' | 'Quick Cheat Sheet';
  subject: string;
  pages: number;
  rating: number;
  downloads: string;
  downloadUrl?: string;
}

export interface VideoResourceItem {
  id: string;
  title: string;
  channel: string;
  duration: string;
  subject: string;
  views: string;
  rating: number;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  score: number;
  accuracy: number;
  streak: number;
  isCurrentUser?: boolean;
}

export interface ForumPost {
  id: string;
  author: string;
  avatar: string;
  timeAgo: string;
  subject: string;
  title: string;
  content: string;
  upvotes: number;
  repliesCount: number;
  userUpvoted?: boolean;
}

export interface WeaknessItem {
  subject: string;
  topic: string;
  accuracy: number;
  priority: 'High' | 'Medium' | 'Low';
  remedy: string;
}

export interface CurrentAffairItem {
  id: string;
  title: string;
  category: 'Science & Tech' | 'National Policy' | 'Economy' | 'Environment' | 'Global Affairs';
  summary: string;
  date: string;
  importance: 'High' | 'Medium';
}

@Injectable({
  providedIn: 'root'
})
export class PreparationService {
  private http = inject(HttpClient);
  private examService = inject(ExamService);

  private readonly storageKey = 'examsphere_active_prep_exam';

  // Active examination workspace signal
  activeExam = signal<ExamPrepWorkspace>(this.loadInitialExam());

  // Language setting signal (English, Hindi, Bengali)
  selectedLanguage = signal<'en' | 'hi' | 'bn'>('en');

  // Focus timer signal (in seconds)
  focusTimerSeconds = signal<number>(25 * 60);
  isTimerRunning = signal<boolean>(false);

  private loadInitialExam(): ExamPrepWorkspace {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        try {
          const parsed: ExamPrepWorkspace = JSON.parse(saved);
          // If the cached workspace contains legacy mock numbers, reset to clean genuine state
          if (parsed && (parsed.questionsSolvedCount === 420 || parsed.syllabusCompletion === 68 || parsed.questionsSolvedCount === 510)) {
            const clean = this.generateWorkspaceData(parsed.slug || 'gate-cse', parsed.name, parsed.shortName, parsed.category);
            localStorage.setItem(this.storageKey, JSON.stringify(clean));
            return clean;
          }
          if (parsed && parsed.slug) {
            return parsed;
          }
        } catch {}
      }
    }
    return this.generateWorkspaceData('gate-cse', 'Graduate Aptitude Test in Engineering (Computer Science)', 'GATE 2027 CSE', 'Engineering Entrance');
  }

  setActiveExam(slugOrId: string, name?: string, shortName?: string, category?: string): void {
    const norm = slugOrId.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const examStorageKey = `examsphere_prep_workspace_${norm}`;

    let ws: ExamPrepWorkspace;
    if (typeof localStorage !== 'undefined') {
      const cached = localStorage.getItem(examStorageKey);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (parsed && parsed.questionsSolvedCount !== 420 && parsed.syllabusCompletion !== 68) {
            ws = parsed;
          } else {
            ws = this.generateWorkspaceData(slugOrId, name, shortName, category);
          }
        } catch {
          ws = this.generateWorkspaceData(slugOrId, name, shortName, category);
        }
      } else {
        ws = this.generateWorkspaceData(slugOrId, name, shortName, category);
      }
      localStorage.setItem(examStorageKey, JSON.stringify(ws));
      localStorage.setItem(this.storageKey, JSON.stringify(ws));
    } else {
      ws = this.generateWorkspaceData(slugOrId, name, shortName, category);
    }

    this.activeExam.set(ws);
  }

  generateWorkspaceData(
    slugOrId: string,
    name?: string,
    shortName?: string,
    category?: string
  ): ExamPrepWorkspace {
    const norm = slugOrId.toLowerCase().replace(/[^a-z0-9]/g, '-');

    let examName = name || 'Competitive Examination Preparation';
    let examShort = shortName || 'Exam Prep';
    let examCat = category || 'National Examination';
    let authority = 'Official Examination Authority';
    let examDate = 'Upcoming Cycle';
    let daysRemaining = 180;
    let desc = 'Unified AI examination workspace loaded with syllabus tracking, smart practice arenas, and 24/7 AI tutor guidance.';
    let subjects = ['Core Domain Subject 1', 'Core Domain Subject 2', 'Aptitude & Logical Reasoning', 'General Awareness'];

    if (norm.includes('gate')) {
      examName = name || 'Graduate Aptitude Test in Engineering (Computer Science)';
      examShort = shortName || 'GATE 2027 CSE';
      examCat = category || 'Engineering Entrance';
      authority = 'Organizing IIT (IIT Madras / Bombay)';
      examDate = 'February 2027';
      daysRemaining = 260;
      desc = 'Comprehensive preparation workspace for GATE CS & IT featuring high-yield algorithms, OS concurrency, discrete math, and AI doubt clearing.';
      subjects = ['Algorithms', 'Data Structures', 'Operating Systems', 'Computer Networks', 'Databases', 'Theory of Computation', 'Compiler Design', 'Engineering Mathematics', 'Digital Logic', 'General Aptitude'];
    } else if (norm.includes('upsc') || norm.includes('civil')) {
      examName = name || 'UPSC Civil Services Examination (CSE)';
      examShort = shortName || 'UPSC CSE 2026';
      examCat = category || 'Government & Civil Services';
      authority = 'Union Public Service Commission (UPSC)';
      examDate = 'May 2026 (Prelims)';
      daysRemaining = 180;
      desc = 'All-inclusive UPSC CSE preparation hub covering GS Papers I-IV, CSAT aptitude, dynamic Current Affairs intelligence, and answer evaluation.';
      subjects = ['Indian Polity & Governance', 'Modern Indian History', 'Geography & Environment', 'Indian Economy', 'Science & Technology', 'Ethics & Integrity', 'CSAT Aptitude'];
    } else if (norm.includes('jee')) {
      examName = name || 'Joint Entrance Examination (Advanced)';
      examShort = shortName || 'JEE Advanced 2026';
      examCat = category || 'Engineering Entrance';
      authority = 'IIT Joint Admission Board';
      examDate = 'May 2026';
      daysRemaining = 175;
      desc = 'Advanced problem-solving arena for IIT aspirants with high-difficulty multi-concept physics, organic reaction mechanisms, and calculus drills.';
      subjects = ['Physics (Mechanics, Electrodynamics, Optics)', 'Chemistry (Physical, Organic, Inorganic)', 'Mathematics (Calculus, Coordinate Geometry, Algebra)'];
    } else if (norm.includes('neet')) {
      examName = name || 'National Eligibility cum Entrance Test (UG)';
      examShort = shortName || 'NEET UG 2026';
      examCat = category || 'Medical Entrance';
      authority = 'National Testing Agency (NTA)';
      examDate = 'May 2026';
      daysRemaining = 165;
      desc = 'Dedicated medical entrance workspace covering NCERT-aligned Botany, Zoology, high-speed physics numericals, and full 720-mark mock papers.';
      subjects = ['Botany', 'Zoology', 'Human Physiology', 'Physics', 'Chemistry (Inorganic & Organic)'];
    } else if (norm.includes('cat')) {
      examName = name || 'Common Admission Test (CAT)';
      examShort = shortName || 'CAT 2026';
      examCat = category || 'Management Entrance';
      authority = 'Indian Institutes of Management (IIM)';
      examDate = 'November 2026';
      daysRemaining = 340;
      desc = 'Elite MBA entrance ecosystem focused on speed reading comprehension, logical data puzzles, and quantitative shortcuts.';
      subjects = ['Verbal Ability & Reading Comprehension (VARC)', 'Data Interpretation & Logical Reasoning (DILR)', 'Quantitative Aptitude (QA)'];
    } else if (norm.includes('bank') || norm.includes('ibps') || norm.includes('sbi')) {
      examName = name || 'IBPS & SBI Probationary Officer Examination';
      examShort = shortName || 'Banking PO 2026';
      examCat = category || 'Banking & Finance';
      authority = 'Institute of Banking Personnel Selection';
      examDate = 'October 2026';
      daysRemaining = 310;
      desc = 'Fast-paced banking workspace highlighting sectional speed math, seating arrangement puzzles, and daily banking awareness.';
      subjects = ['Quantitative Aptitude', 'Reasoning & Puzzles', 'English Language', 'General & Banking Awareness', 'Computer Aptitude'];
    }

    const cleanWorkspace: ExamPrepWorkspace = {
      id: slugOrId,
      slug: norm,
      name: examName,
      shortName: examShort,
      category: examCat,
      conductingAuthority: authority,
      examDateText: examDate,
      daysRemaining: daysRemaining,
      preparationStatus: 'Foundation Phase',
      readinessScore: 10,
      readinessLabel: 'Foundation Phase • Complete Core Syllabus Topics',
      syllabusCompletion: 0,
      mockTestAvg: 0,
      practiceAccuracy: 0,
      studyStreakDays: 1,
      totalStudyHours: 0.0,
      questionsSolvedCount: 0,
      correctQuestionsCount: 0,
      completedTopics: [],
      description: desc,
      subjects: subjects
    };

    return cleanWorkspace;
  }

  // --- INTERACTIVE WORK METHODS: REAL DATA THAT INCREASES WITH WORK ---

  toggleTopic(examSlug: string, topicName: string): ExamPrepWorkspace {
    const ws = { ...this.activeExam() };
    const list = ws.completedTopics ? [...ws.completedTopics] : [];
    const index = list.indexOf(topicName);

    if (index >= 0) {
      list.splice(index, 1);
    } else {
      list.push(topicName);
    }
    ws.completedTopics = list;

    // Recalculate total syllabus completion
    const allSubjects = this.getSyllabusSubjects(examSlug, list);
    const totalTopics = allSubjects.reduce((acc, sub) => acc + sub.topics.length, 0);
    const completedCount = allSubjects.reduce((acc, sub) => acc + sub.topics.filter(t => t.completed).length, 0);

    ws.syllabusCompletion = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

    // Recalculate readiness
    const readiness = this.computeReadiness(ws);
    ws.readinessScore = readiness.score;
    ws.readinessLabel = readiness.label;
    ws.preparationStatus = readiness.status;

    this.saveWorkspace(ws);
    return ws;
  }

  recordQuestionAnswer(examSlug: string, isCorrect: boolean): ExamPrepWorkspace {
    const ws = { ...this.activeExam() };
    ws.questionsSolvedCount = (ws.questionsSolvedCount || 0) + 1;
    if (isCorrect) {
      ws.correctQuestionsCount = (ws.correctQuestionsCount || 0) + 1;
    }
    ws.practiceAccuracy = ws.questionsSolvedCount > 0
      ? Math.round((ws.correctQuestionsCount / ws.questionsSolvedCount) * 100)
      : 0;

    const readiness = this.computeReadiness(ws);
    ws.readinessScore = readiness.score;
    ws.readinessLabel = readiness.label;
    ws.preparationStatus = readiness.status;

    this.saveWorkspace(ws);
    return ws;
  }

  recordStudyTime(examSlug: string, hours: number): ExamPrepWorkspace {
    const ws = { ...this.activeExam() };
    ws.totalStudyHours = Math.round(((ws.totalStudyHours || 0) + hours) * 10) / 10;
    if (ws.studyStreakDays === 0) ws.studyStreakDays = 1;

    const readiness = this.computeReadiness(ws);
    ws.readinessScore = readiness.score;
    ws.readinessLabel = readiness.label;
    ws.preparationStatus = readiness.status;

    this.saveWorkspace(ws);
    return ws;
  }

  syncMockTests(examSlug: string, tests: any[]): ExamPrepWorkspace {
    const ws = { ...this.activeExam() };
    if (tests && tests.length > 0) {
      const avg = Math.round(tests.reduce((acc, t) => acc + ((t.score || 0) / (t.maxScore || 100)) * 100, 0) / tests.length);
      ws.mockTestAvg = avg;
      if (ws.practiceAccuracy === 0) {
        ws.practiceAccuracy = Math.round(tests.reduce((acc, t) => acc + (t.accuracyPercentage || 0), 0) / tests.length);
      }
    } else {
      ws.mockTestAvg = 0;
    }

    const readiness = this.computeReadiness(ws);
    ws.readinessScore = readiness.score;
    ws.readinessLabel = readiness.label;
    ws.preparationStatus = readiness.status;

    this.saveWorkspace(ws);
    return ws;
  }

  private computeReadiness(ws: ExamPrepWorkspace): { score: number; label: string; status: 'On Track' | 'Needs Attention' | 'Foundation Phase' | 'Final Revision' } {
    const syllabusWeight = (ws.syllabusCompletion / 100) * 45;
    const questionFactor = Math.min(1, (ws.questionsSolvedCount || 0) / 40);
    const accuracyWeight = ((ws.practiceAccuracy || 0) / 100) * 25 * questionFactor;
    const mockWeight = ws.mockTestAvg > 0 ? (ws.mockTestAvg / 100) * 20 : 0;
    const studyWeight = Math.min(1, (ws.totalStudyHours || 0) / 20) * 10;

    let score = Math.round(10 + syllabusWeight + accuracyWeight + mockWeight + studyWeight);
    score = Math.min(99, Math.max(10, score));

    let label = 'Foundation Phase • Complete Core Syllabus Topics';
    let status: 'On Track' | 'Needs Attention' | 'Foundation Phase' | 'Final Revision' = 'Foundation Phase';

    if (score >= 80) {
      label = 'Elite AIR Contender (Expected Rank: Top 250)';
      status = 'Final Revision';
    } else if (score >= 60) {
      label = 'Competitive Track • High Qualifying Probability';
      status = 'On Track';
    } else if (score >= 35) {
      label = 'Intermediate Progression • Needs Focused Practice';
      status = 'Needs Attention';
    } else {
      label = 'Foundation Phase • Complete Core Syllabus Topics';
      status = 'Foundation Phase';
    }

    return { score, label, status };
  }

  saveWorkspace(ws: ExamPrepWorkspace): void {
    this.activeExam.set(ws);
    if (typeof localStorage !== 'undefined') {
      const examStorageKey = `examsphere_prep_workspace_${ws.slug}`;
      localStorage.setItem(examStorageKey, JSON.stringify(ws));
      localStorage.setItem(this.storageKey, JSON.stringify(ws));
    }
  }

  // GET DETAILED SYLLABUS FOR ACTIVE EXAM WITH REAL TOGGLE STATE
  getSyllabusSubjects(examSlug: string, completedTopics: string[] = []): SyllabusSubject[] {
    const norm = (examSlug || '').toLowerCase();
    const completedSet = new Set(completedTopics || []);

    const buildSubject = (
      name: string,
      weightage: string,
      topicDefs: Array<{ name: string; difficulty: 'Easy' | 'Medium' | 'Hard' }>
    ): SyllabusSubject => {
      const topics = topicDefs.map(t => ({
        name: t.name,
        completed: completedSet.has(t.name),
        difficulty: t.difficulty
      }));
      const completedCount = topics.filter(t => t.completed).length;
      const progress = topics.length > 0 ? Math.round((completedCount / topics.length) * 100) : 0;
      return { name, weightage, progress, topics };
    };

    if (norm.includes('gate')) {
      return [
        buildSubject('Programming & Data Structures', '12% • 8-10 Marks', [
          { name: 'Arrays, Stacks, Queues & Linked Lists', difficulty: 'Easy' },
          { name: 'Trees, BST, AVL Trees & Heaps', difficulty: 'Medium' },
          { name: 'Graph Representations & Traversals (BFS/DFS)', difficulty: 'Medium' },
          { name: 'Recursion & Dynamic Memory Allocation', difficulty: 'Hard' }
        ]),
        buildSubject('Algorithms & Complexity', '10% • 7-9 Marks', [
          { name: 'Asymptotic Analysis & Recurrences', difficulty: 'Easy' },
          { name: 'Divide & Conquer, Greedy Strategies', difficulty: 'Medium' },
          { name: 'Dynamic Programming & Memoization', difficulty: 'Hard' },
          { name: 'Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)', difficulty: 'Hard' }
        ]),
        buildSubject('Operating Systems', '10% • 7-9 Marks', [
          { name: 'Processes, Threads & CPU Scheduling', difficulty: 'Easy' },
          { name: 'Process Synchronization & Semaphores', difficulty: 'Hard' },
          { name: 'Deadlock Detection, Prevention & Banker’s Algorithm', difficulty: 'Medium' },
          { name: 'Virtual Memory, Paging & Page Replacement', difficulty: 'Medium' }
        ]),
        buildSubject('Computer Networks', '9% • 6-8 Marks', [
          { name: 'OSI & TCP/IP Reference Models', difficulty: 'Easy' },
          { name: 'IP Addressing, Subnetting & CIDR', difficulty: 'Medium' },
          { name: 'Flow Control & Error Control (Sliding Window)', difficulty: 'Medium' },
          { name: 'TCP Congestion Control & Routing Protocols', difficulty: 'Hard' }
        ]),
        buildSubject('Theory of Computation', '8% • 6-8 Marks', [
          { name: 'DFA, NFA & Regular Expressions', difficulty: 'Medium' },
          { name: 'Pumping Lemma & Closure Properties', difficulty: 'Hard' },
          { name: 'Context-Free Grammars & Pushdown Automata', difficulty: 'Hard' },
          { name: 'Turing Machines & Decidability (Halting Problem)', difficulty: 'Hard' }
        ]),
        buildSubject('Databases & SQL', '8% • 6-7 Marks', [
          { name: 'ER Models & Relational Algebra', difficulty: 'Easy' },
          { name: 'Normal Forms (1NF, 2NF, 3NF, BCNF)', difficulty: 'Medium' },
          { name: 'Transactions, ACID & Concurrency Control (2PL)', difficulty: 'Hard' },
          { name: 'Indexing & B+ Trees', difficulty: 'Medium' }
        ])
      ];
    } else if (norm.includes('upsc') || norm.includes('civil')) {
      return [
        buildSubject('Indian Polity & Constitution', '18% • 15-18 Qs', [
          { name: 'Preamble, Fundamental Rights & DPSP', difficulty: 'Medium' },
          { name: 'Parliament, Prime Minister & Executive', difficulty: 'Medium' },
          { name: 'Supreme Court & Judicial Review', difficulty: 'Hard' },
          { name: 'Constitutional & Non-Constitutional Bodies', difficulty: 'Easy' }
        ]),
        buildSubject('Modern Indian History & Freedom Struggle', '15% • 12-14 Qs', [
          { name: 'British Expansion & Administrative Policies', difficulty: 'Easy' },
          { name: 'Revolt of 1857 & Early Nationalists', difficulty: 'Medium' },
          { name: 'Gandhian Movements & Freedom Struggle', difficulty: 'Medium' },
          { name: 'Post-Independence Consolidation', difficulty: 'Hard' }
        ]),
        buildSubject('Indian Economy & Sustainable Growth', '16% • 14-16 Qs', [
          { name: 'National Income, GDP & Fiscal Policy', difficulty: 'Medium' },
          { name: 'Monetary Policy & RBI Banking Regulations', difficulty: 'Medium' },
          { name: 'Inflation, Poverty & Inclusive Growth', difficulty: 'Hard' },
          { name: 'Foreign Trade, Balance of Payments & WTO', difficulty: 'Hard' }
        ]),
        buildSubject('Geography, Environment & Climate Change', '15% • 12-14 Qs', [
          { name: 'Physical Geography & Geomorphology', difficulty: 'Medium' },
          { name: 'Monsoons, Rivers & Indian Climate', difficulty: 'Easy' },
          { name: 'Biodiversity Hotspots & Conservation Acts', difficulty: 'Medium' },
          { name: 'UNFCCC, COP Conventions & Carbon Trading', difficulty: 'Hard' }
        ])
      ];
    } else if (norm.includes('jee')) {
      return [
        buildSubject('Physics (Mechanics, Electrodynamics & Optics)', '35% • Core Paper', [
          { name: 'Newton’s Laws, Work-Energy & Rotational Dynamics', difficulty: 'Hard' },
          { name: 'Electrostatics, Gauss Law & Current Electricity', difficulty: 'Medium' },
          { name: 'Electromagnetic Induction & Alternating Current', difficulty: 'Hard' },
          { name: 'Wave Optics, Interference & Modern Physics', difficulty: 'Medium' }
        ]),
        buildSubject('Chemistry (Physical, Organic & Inorganic)', '35% • Core Paper', [
          { name: 'Chemical Thermodynamics & Equilibrium', difficulty: 'Medium' },
          { name: 'Reaction Mechanisms (SN1, SN2, Electrophilic Addition)', difficulty: 'Hard' },
          { name: 'Coordination Compounds & Transition Metals', difficulty: 'Medium' },
          { name: 'Electrochemistry & Chemical Kinetics', difficulty: 'Easy' }
        ]),
        buildSubject('Mathematics (Calculus, Algebra & Geometry)', '30% • Scoring Paper', [
          { name: 'Definite Integration & Differential Equations', difficulty: 'Hard' },
          { name: 'Coordinate Geometry & Conic Sections', difficulty: 'Medium' },
          { name: 'Matrices, Determinants & Vector Algebra', difficulty: 'Easy' },
          { name: 'Probability & Permutations/Combinations', difficulty: 'Hard' }
        ])
      ];
    } else if (norm.includes('neet')) {
      return [
        buildSubject('Human Physiology & Genetics', '30% • 45 Questions', [
          { name: 'Cell Cycle, Mitosis & Meiosis', difficulty: 'Easy' },
          { name: 'Mendelian Genetics & Molecular Basis of Inheritance', difficulty: 'Hard' },
          { name: 'Human Circulatory & Excretory Systems', difficulty: 'Medium' },
          { name: 'Neural Control & Chemical Coordination', difficulty: 'Medium' }
        ]),
        buildSubject('Botany & Plant Diversity', '25% • 45 Questions', [
          { name: 'Plant Kingdom & Biological Classification', difficulty: 'Easy' },
          { name: 'Photosynthesis & Respiration in Higher Plants', difficulty: 'Hard' },
          { name: 'Plant Growth & Mineral Nutrition', difficulty: 'Medium' },
          { name: 'Sexual Reproduction in Flowering Plants', difficulty: 'Medium' }
        ]),
        buildSubject('Physics (Mechanics, Heat & Waves)', '25% • 45 Questions', [
          { name: 'Kinematics & Laws of Motion', difficulty: 'Medium' },
          { name: 'Thermodynamics & Kinetic Theory', difficulty: 'Easy' },
          { name: 'Ray Optics & Optical Instruments', difficulty: 'Medium' },
          { name: 'Semiconductors & Electronic Devices', difficulty: 'Easy' }
        ]),
        buildSubject('Chemistry (NCERT Organic & Inorganic)', '20% • 45 Questions', [
          { name: 'Periodic Properties & Chemical Bonding', difficulty: 'Easy' },
          { name: 'Hydrocarbons & Carbonyl Compounds (Aldehydes/Ketones)', difficulty: 'Hard' },
          { name: 'Biomolecules & Polymers', difficulty: 'Easy' },
          { name: 'Solutions & Electrochemistry Numericals', difficulty: 'Medium' }
        ])
      ];
    }

    // Default universal examination syllabus
    return [
      buildSubject('Core Theory & Domain Concepts', '35% • Paper 1', [
        { name: 'Fundamental Definitions, Theories & Laws', difficulty: 'Easy' },
        { name: 'Intermediate Applications & Comparative Frameworks', difficulty: 'Medium' },
        { name: 'Complex Problem Reductions & Structural Analysis', difficulty: 'Hard' }
      ]),
      buildSubject('Analytical & Quantitative Problem Solving', '35% • Paper 2', [
        { name: 'Standard Mathematical Techniques & Formulae', difficulty: 'Easy' },
        { name: 'Multi-Step Numerical Deduction & Interpretation', difficulty: 'Hard' }
      ]),
      buildSubject('General Aptitude & Logical Reasoning', '30% • Scoring Section', [
        { name: 'Verbal Comprehension & Grammar Rules', difficulty: 'Easy' },
        { name: 'Logical Deduction, Sequences & Critical Thinking', difficulty: 'Medium' }
      ])
    ];
  }

  // GET DAILY PRACTICE QUESTIONS
  getDailyPracticeQuestions(examSlug: string): DailyPracticeQuestion[] {
    const norm = examSlug.toLowerCase();
    if (norm.includes('gate')) {
      return [
        {
          id: 1,
          subject: 'Operating Systems',
          question: 'Consider a counting semaphore initialized to 10. If 12 P (wait) operations and 4 V (signal) operations are executed, what is the final value of the semaphore?',
          options: ['2', '0', '-2', '14'],
          correctIndex: 0,
          explanation: 'Initial = 10. Each P operation decrements by 1 (10 - 12 = -2). Each V operation increments by 1 (-2 + 4 = 2). Final semaphore value is 2.',
          difficulty: 'Easy'
        },
        {
          id: 2,
          subject: 'Algorithms',
          question: 'What is the tightest worst-case time complexity of finding the Median in an unsorted array of n elements using the QuickSelect algorithm?',
          options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
          correctIndex: 2,
          explanation: 'Standard QuickSelect average time is O(n), but worst-case occurs with poor pivot choice resulting in O(n²). (Deterministic Median-of-Medians achieves O(n) worst-case).',
          difficulty: 'Medium'
        },
        {
          id: 3,
          subject: 'Computer Networks',
          question: 'In a IPv4 network with subnet mask 255.255.255.224, how many valid assignable host IP addresses are available per subnet?',
          options: ['32', '30', '16', '14'],
          correctIndex: 1,
          explanation: 'Last octet 224 in binary is 11100000. There are 5 host bits. Total IPs = 2^5 = 32. Subtracting network and broadcast addresses: 32 - 2 = 30 assignable host IPs.',
          difficulty: 'Easy'
        },
        {
          id: 4,
          subject: 'Theory of Computation',
          question: 'Which of the following problems is undecidable for Turing Machines?',
          options: [
            'Determining if a given TM accepts the empty string (L = ∅)',
            'Determining if a given DFA accepts the empty string',
            'Determining if a string w is accepted by a DFA',
            'Determining if a Context-Free Language is empty'
          ],
          correctIndex: 0,
          explanation: 'By Rice\'s Theorem, any non-trivial semantic property of a Turing Machine language is undecidable. Emptiness problem for TMs is undecidable, whereas for DFAs and CFLs it is decidable.',
          difficulty: 'Hard'
        },
        {
          id: 5,
          subject: 'Databases',
          question: 'A relational schema R(A, B, C, D) with FDs { A → B, B → C, C → D, D → A } is in which highest normal form?',
          options: ['1NF', '2NF', '3NF', 'BCNF'],
          correctIndex: 3,
          explanation: 'Every attribute A, B, C, D is a candidate key because closures of each produce ABCD. Since the determinant of every functional dependency is a superkey, the relation is in BCNF.',
          difficulty: 'Medium'
        }
      ];
    } else if (norm.includes('upsc')) {
      return [
        {
          id: 1,
          subject: 'Indian Polity',
          question: 'Under Article 32 of the Indian Constitution, which of the following writs is issued by the Supreme Court to prevent an unlawful claimant from holding a public office?',
          options: ['Habeas Corpus', 'Mandamus', 'Quo-Warranto', 'Certiorari'],
          correctIndex: 2,
          explanation: 'Quo-Warranto (meaning "by what authority") is issued to restrain a person from holding an unconstitutional or usurped public office.',
          difficulty: 'Easy'
        },
        {
          id: 2,
          subject: 'Indian Economy',
          question: 'What is the impact of an increase in the Cash Reserve Ratio (CRR) by the Reserve Bank of India on liquidity in the banking system?',
          options: [
            'It increases the money supply and bank lending capacity',
            'It contracts credit creation and decreases market liquidity',
            'It has no direct effect on bank lending rates',
            'It immediately lowers the inflation rate to zero'
          ],
          correctIndex: 1,
          explanation: 'Increasing CRR requires commercial banks to lock away a larger fraction of deposits with the RBI as cash, shrinking the lendable reserve and tightening overall credit liquidity.',
          difficulty: 'Medium'
        },
        {
          id: 3,
          subject: 'Environment & Ecology',
          question: 'Which international environmental protocol was adopted under the UNFCCC to commit industrialized nations to limit greenhouse gas emissions through flexible market mechanisms?',
          options: ['Montreal Protocol', 'Kyoto Protocol', 'Ramsar Convention', 'Stockholm Convention'],
          correctIndex: 1,
          explanation: 'The Kyoto Protocol (1997) introduced legally binding emission reduction targets and market mechanisms like Carbon Trading and Clean Development Mechanism (CDM).',
          difficulty: 'Medium'
        },
        {
          id: 4,
          subject: 'Modern History',
          question: 'The famous "August Offer" of 1940 was proposed by which British Viceroy of India?',
          options: ['Lord Linlithgow', 'Lord Wavell', 'Lord Mountbatten', 'Lord Irwin'],
          correctIndex: 0,
          explanation: 'Lord Linlithgow announced the August Offer in 1940 to secure Indian cooperation in World War II, proposing Dominion status after the war and expansion of the Governor-General’s Executive Council.',
          difficulty: 'Easy'
        },
        {
          id: 5,
          subject: 'Science & Technology',
          question: 'CRISPR-Cas9 technology is widely recognized in contemporary biomedical science primarily for which function?',
          options: [
            'High-speed genomic quantum computing',
            'Targeted molecular gene editing and RNA interference',
            'Synthesis of synthetic hydrocarbon rocket fuels',
            'Cryogenic organ preservation'
          ],
          correctIndex: 1,
          explanation: 'CRISPR-Cas9 acts as a programmable molecular scissors system guided by RNA to cut and edit specific DNA sequences in genomes.',
          difficulty: 'Easy'
        }
      ];
    }

    // Default 5 universal questions
    return [
      {
        id: 1,
        subject: 'General Aptitude',
        question: 'If 6 workers can complete a project in 15 days working 8 hours a day, how many days will 10 workers take working 6 hours a day?',
        options: ['12 Days', '15 Days', '10 Days', '18 Days'],
        correctIndex: 0,
        explanation: 'Work = (Workers × Days × Hours). Total man-hours = 6 × 15 × 8 = 720. For 10 workers working 6 hrs: Days = 720 / (10 × 6) = 720 / 60 = 12 days.',
        difficulty: 'Easy'
      },
      {
        id: 2,
        subject: 'Logical Reasoning',
        question: 'In a certain code, "PLANET" is written as "QMBOGU". How will "SPHERE" be written in that code?',
        options: ['TQIFS F', 'TQIGSF', 'TQIFFF', 'SQIFSF'],
        correctIndex: 1,
        explanation: 'Each letter is shifted forward by +1: S(+1)=T, P(+1)=Q, H(+1)=I, E(+1)=F, R(+1)=S, E(+1)=F. Thus "TQIFSF".',
        difficulty: 'Easy'
      },
      {
        id: 3,
        subject: 'Analytical Thinking',
        question: 'A train 180 meters long running at 72 km/h crosses an electric pole. How many seconds does it take to cross?',
        options: ['9 Seconds', '10 Seconds', '12 Seconds', '15 Seconds'],
        correctIndex: 0,
        explanation: 'Speed in m/s = 72 × (5/18) = 20 m/s. Time = Distance / Speed = 180 / 20 = 9 seconds.',
        difficulty: 'Medium'
      },
      {
        id: 4,
        subject: 'Data Interpretation',
        question: 'In an election between two candidates, the winner received 56% of total votes and won by a margin of 1,440 votes. What was the total number of votes cast?',
        options: ['12,000', '10,000', '15,000', '14,400'],
        correctIndex: 0,
        explanation: 'Winner got 56%, loser got 44%. Difference = 12%. 12% of total = 1,440. Total = (1,440 × 100) / 12 = 12,000 votes.',
        difficulty: 'Medium'
      },
      {
        id: 5,
        subject: 'Core Comprehension',
        question: 'Which of the following principles guarantees that improving one subsystem of an architecture without addressing the primary bottleneck yields diminishing returns?',
        options: ["Amdahl's Law", "Moore's Law", "Metcalfe's Law", "Shannon's Theorem"],
        correctIndex: 0,
        explanation: "Amdahl's Law states that the overall performance improvement gained by optimizing a single component is strictly bounded by the proportion of time that component is actually used.",
        difficulty: 'Medium'
      }
    ];
  }

  // GET STUDY MATERIALS & NOTES
  getStudyMaterials(examSlug: string): StudyMaterialItem[] {
    return [
      {
        id: 'mat-1',
        title: 'Master Formula & Identity Handbook (2026 Edition)',
        type: 'Formula Sheet',
        subject: 'Comprehensive Formulae',
        pages: 36,
        rating: 4.9,
        downloads: '14.2k'
      },
      {
        id: 'mat-2',
        title: 'Top 50 Recurring Concepts & High-Yield Summary Notes',
        type: 'Summary Notes',
        subject: 'Core Theory',
        pages: 64,
        rating: 4.8,
        downloads: '22.8k'
      },
      {
        id: 'mat-3',
        title: 'Toppers Handwritten Short Revision Notes & Flowcharts',
        type: 'Handwritten PDF',
        subject: 'Quick Revision',
        pages: 52,
        rating: 4.9,
        downloads: '31.5k'
      },
      {
        id: 'mat-4',
        title: 'Last 10 Days High-Frequency Elimination & Memory Maps',
        type: 'Quick Cheat Sheet',
        subject: 'Exam Hall Strategies',
        pages: 18,
        rating: 4.7,
        downloads: '9.6k'
      }
    ];
  }

  // GET VIDEO LECTURES
  getVideoResources(examSlug: string): VideoResourceItem[] {
    return [
      {
        id: 'vid-1',
        title: 'One-Shot Complete Subject Marathon: Core Concepts in 4 Hours',
        channel: 'ExamSphere AI Masterclass',
        duration: '4h 15m',
        subject: 'Full Syllabus',
        views: '145k',
        rating: 4.9
      },
      {
        id: 'vid-2',
        title: 'Top 100 Previous Year Questions Solved with Shortcut Tricks',
        channel: 'Rankers Hub India',
        duration: '2h 45m',
        subject: 'PYQ Drills',
        views: '98k',
        rating: 4.8
      },
      {
        id: 'vid-3',
        title: 'Avoid These 10 Costly Negative Marking Mistakes on Exam Day',
        channel: 'ExamSphere Strategy Studio',
        duration: '35m',
        subject: 'Strategy & Temperament',
        views: '62k',
        rating: 4.9
      }
    ];
  }

  // GET LEADERBOARD
  getLeaderboard(examSlug: string, currentUserName?: string, currentUserAvatar?: string, userScore?: number, userAccuracy?: number, userStreak?: number): LeaderboardUser[] {
    const name = currentUserName || 'You (Aspirant)';
    const avatar = currentUserAvatar || 'YOU';
    const score = userScore !== undefined ? userScore : 10;
    const accuracy = userAccuracy !== undefined ? userAccuracy : 0;
    const streak = userStreak !== undefined ? userStreak : 1;

    const peers: LeaderboardUser[] = [
      { rank: 1, name: 'Ananya Sharma', avatar: 'AS', score: 96.5, accuracy: 94, streak: 28 },
      { rank: 2, name: 'Vikramaditya Roy', avatar: 'VR', score: 90.5, accuracy: 88, streak: 19 },
      { rank: 3, name: 'Sneha Mukherjee', avatar: 'SM', score: 88.0, accuracy: 86, streak: 14 },
      { rank: 4, name: 'Karthik Raman', avatar: 'KR', score: 86.5, accuracy: 84, streak: 21 },
      { rank: 5, name: 'Pooja Iyer', avatar: 'PI', score: 84.0, accuracy: 82, streak: 11 },
      { rank: 6, name: name, avatar: avatar, score: score, accuracy: accuracy, streak: streak, isCurrentUser: true }
    ];

    peers.sort((a, b) => b.score - a.score);
    peers.forEach((p, idx) => {
      p.rank = idx + 1;
    });

    return peers;
  }

  // GET COMMUNITY FORUM POSTS
  getForumPosts(examSlug: string): ForumPost[] {
    return [
      {
        id: 'post-1',
        author: 'Arjun Das',
        avatar: 'AD',
        timeAgo: '2 hours ago',
        subject: 'Strategy Discussion',
        title: 'How to score 80+ marks while minimizing negative marking in numerical questions?',
        content: 'I noticed that in NAT/Numerical questions without options, precision matters a lot. What is your calculation check strategy during the last 30 minutes of the test?',
        upvotes: 24,
        repliesCount: 9
      },
      {
        id: 'post-2',
        author: 'Debolina Sen',
        avatar: 'DS',
        timeAgo: '5 hours ago',
        subject: 'Doubt Clearing',
        title: 'Difference between Paging vs Segmentation in real modern 64-bit kernels?',
        content: 'Most textbooks say segmentation is logical while paging is physical. But in modern Linux x86-64, segmentation is mostly flattened. How does ExamSphere AI explain this for upcoming exams?',
        upvotes: 18,
        repliesCount: 6
      },
      {
        id: 'post-3',
        author: 'Rohan Sen',
        avatar: 'RS',
        timeAgo: '1 day ago',
        subject: 'Resource Sharing',
        title: 'Formula sheet for Asymptotic Bounds & Recurrence Relations verified by AI Mentor',
        content: 'I created a quick 2-page cheat sheet comparing Akra-Bazzi vs Master Theorem cases. Verified with 100% correctness. Check the study materials section!',
        upvotes: 42,
        repliesCount: 14,
        userUpvoted: true
      }
    ];
  }

  // GET WEAKNESS DETECTIONS
  getWeaknesses(examSlug: string): WeaknessItem[] {
    const norm = examSlug.toLowerCase();
    if (norm.includes('gate')) {
      return [
        { subject: 'Theory of Computation', topic: 'Pumping Lemma & Undecidability', accuracy: 52, priority: 'High', remedy: 'Solve 15 targeted PYQs from 2019-2024 with AI Step-by-Step proofs.' },
        { subject: 'Computer Networks', topic: 'Sliding Window & Congestion Control', accuracy: 58, priority: 'Medium', remedy: 'Review round-trip time (RTT) and window scale formulas in Chapter 4.' },
        { subject: 'Operating Systems', topic: 'Counting Semaphores with Multiple Processes', accuracy: 64, priority: 'Medium', remedy: 'Simulate concurrent execution traces using AI Mentor.' }
      ];
    }
    return [
      { subject: 'Analytical Reasoning', topic: 'Complex Circular Seating Arrangements', accuracy: 54, priority: 'High', remedy: 'Practice 10 grid-based visual deduction puzzles in the Practice Arena.' },
      { subject: 'Core Domain', topic: 'Advanced Exceptions & Edge Cases', accuracy: 61, priority: 'Medium', remedy: 'Revise summary notes and attempt 1 mini-mock sectional paper.' }
    ];
  }

  // GET CURRENT AFFAIRS INTELLIGENCE
  getCurrentAffairs(): CurrentAffairItem[] {
    return [
      {
        id: 'ca-1',
        title: 'National Quantum Mission (NQM) announces first indigenous 50-qubit processor framework',
        category: 'Science & Tech',
        summary: 'Department of Science & Technology outlines milestones for quantum communication and cryptographic security applicable for national exams.',
        date: 'Today, 9:00 AM',
        importance: 'High'
      },
      {
        id: 'ca-2',
        title: 'Reserve Bank of India retains Repo Rate at 6.50% in latest Monetary Policy Committee review',
        category: 'Economy',
        summary: 'MPC focuses on inflation targeting within 4% tolerance band with real GDP growth projected at 7.0% for the fiscal year.',
        date: 'Yesterday',
        importance: 'High'
      },
      {
        id: 'ca-3',
        title: 'COP29 Climate Summit advances New Collective Quantified Goal (NCQG) on climate finance',
        category: 'Environment',
        summary: 'Global delegates deliberate on financial transfers to developing nations for loss and damage mitigation under Article 6.',
        date: '2 days ago',
        importance: 'Medium'
      }
    ];
  }
}
