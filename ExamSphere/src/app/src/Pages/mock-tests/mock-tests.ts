import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MockTestService,
  MockTestItem,
  ExamMockMeta,
  TestResultResponse,
  QuestionReview,
  CustomTestPayload
} from '../../../core/services/mock-test.service';
import { AuthService } from '../../../core/services/auth.service/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { FALLBACK_MOCK_TESTS } from './mock-tests-catalog.data';
import { CLIENT_QUESTION_BANK, getQuestionsForExamSlug } from './mock-tests-bank.data';

export type MockTestViewMode = 'EXAM_SELECT' | 'EXAM_HUB' | 'ACTIVE_TEST' | 'RESULT';
export type ExamHubTab = 'OFFICIAL_PATTERN' | 'CUSTOMIZE_TEST';

export interface StreamCategory {
  id: string;
  label: string;
  icon: string;
}

const DEFAULT_EXAMS_META: ExamMockMeta[] = [
  {
    _id: 'gate-cse',
    name: 'GATE Computer Science (CSE)',
    slug: 'gate-cse',
    category: 'Engineering',
    conductingBody: 'IITs & IISc Bangalore',
    pattern: 'CBT • 65 Questions • 100 Marks',
    subjects: ['Algorithms & Data Structures', 'Operating Systems', 'Computer Networks', 'Theory of Computation', 'Databases', 'General Aptitude', 'Engineering Mathematics'],
    totalTests: 6,
    officialTestsCount: 6,
    blueprint: {
      examSlug: 'gate-cse',
      examName: 'GATE Computer Science (CSE)',
      category: 'Engineering',
      conductingBody: 'IITs & IISc Bangalore',
      officialDurationMinutes: 180,
      totalMarks: 100,
      totalQuestions: 65,
      negativeMarkingRate: 0.33,
      negativeMarkingFormula: '-0.33 for 1-mark MCQs, -0.66 for 2-mark MCQs (0 for NAT/MSQ)',
      patternType: 'Computer Based Test (CBT)',
      sections: [
        { name: 'General Aptitude (GA)', questionCount: 10, marks: 15 },
        { name: 'Engineering Mathematics', questionCount: 10, marks: 13 },
        { name: 'Computer Science Core Technical', questionCount: 45, marks: 72 }
      ],
      subjects: ['General Aptitude', 'Engineering Mathematics', 'Algorithms', 'OS', 'CN', 'TOC', 'DBMS'],
      officialRules: [
        'Total 65 questions testing core technical and mathematical mastery.',
        'Negative marking of 1/3rd applies ONLY to MCQs; No negative marking for NAT or MSQ.',
        'Virtual Scientific Calculator is enabled during the CBT session.'
      ],
      blueprintSummary: '3 Hours • 100 Marks • 65 Questions • Official IIT GATE Blueprint'
    }
  },
  {
    _id: 'jee-main',
    name: 'JEE Main',
    slug: 'jee-main',
    category: 'Engineering',
    conductingBody: 'National Testing Agency (NTA)',
    pattern: 'CBT • 90 Questions • 300 Marks',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    totalTests: 3,
    officialTestsCount: 3,
    blueprint: {
      examSlug: 'jee-main',
      examName: 'JEE Main',
      category: 'Engineering',
      conductingBody: 'National Testing Agency (NTA)',
      officialDurationMinutes: 180,
      totalMarks: 300,
      totalQuestions: 90,
      negativeMarkingRate: 0.25,
      negativeMarkingFormula: '-1 Mark per incorrect answer (both MCQs & Numerical)',
      patternType: 'Computer Based Test (CBT)',
      sections: [
        { name: 'Physics (Sec A MCQs + Sec B Numerical)', questionCount: 30, marks: 100 },
        { name: 'Chemistry (Sec A MCQs + Sec B Numerical)', questionCount: 30, marks: 100 },
        { name: 'Mathematics (Sec A MCQs + Sec B Numerical)', questionCount: 30, marks: 100 }
      ],
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      officialRules: [
        'Total 90 questions: 30 questions each in Physics, Chemistry, and Mathematics.',
        'Section A: 20 Multiple Choice Questions (compulsory).',
        'Section B: 10 Numerical Value questions (attempt any 5).',
        'Marking: +4 for correct, -1 for incorrect.'
      ],
      blueprintSummary: '3 Hours • 300 Marks • 75 Questions to Attempt • Official NTA Format'
    }
  },
  {
    _id: 'jee-advanced',
    name: 'JEE Advanced',
    slug: 'jee-advanced',
    category: 'Engineering',
    conductingBody: 'IIT Consortium (Zonal IIT)',
    pattern: 'CBT • 54 Questions • 180 Marks',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    totalTests: 3,
    officialTestsCount: 3,
    blueprint: {
      examSlug: 'jee-advanced',
      examName: 'JEE Advanced',
      category: 'Engineering',
      conductingBody: 'IIT Consortium (Zonal IIT)',
      officialDurationMinutes: 180,
      totalMarks: 180,
      totalQuestions: 54,
      negativeMarkingRate: 0.33,
      negativeMarkingFormula: '-1 to -2 for wrong MCQs, partial marks for multi-correct',
      patternType: 'Computer Based Test (CBT - Paper 1 & Paper 2)',
      sections: [
        { name: 'Physics (Single, Multi-Correct & Numerical)', questionCount: 18, marks: 60 },
        { name: 'Chemistry (Single, Multi-Correct & Numerical)', questionCount: 18, marks: 60 },
        { name: 'Mathematics (Single, Multi-Correct & Numerical)', questionCount: 18, marks: 60 }
      ],
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      officialRules: [
        'Advanced questions with multiple correct options and numerical values.',
        'Partial marking awarded for selecting subset of correct options.',
        'Negative marking applies for selecting any incorrect option.'
      ],
      blueprintSummary: '3 Hours • 180 Marks • Advanced Multi-Concept CBT'
    }
  },
  {
    _id: 'neet-ug',
    name: 'NEET UG',
    slug: 'neet-ug',
    category: 'Medical',
    conductingBody: 'National Testing Agency (NTA)',
    pattern: 'OMR / CBT • 200 Questions • 720 Marks',
    subjects: ['Physics', 'Chemistry', 'Botany', 'Zoology'],
    totalTests: 6,
    officialTestsCount: 6,
    blueprint: {
      examSlug: 'neet-ug',
      examName: 'NEET UG',
      category: 'Medical',
      conductingBody: 'National Testing Agency (NTA)',
      officialDurationMinutes: 200,
      totalMarks: 720,
      totalQuestions: 200,
      negativeMarkingRate: 0.25,
      negativeMarkingFormula: '-1 Mark per incorrect response (25%)',
      patternType: 'Pen & Paper OMR / CBT Simulation',
      sections: [
        { name: 'Physics (Section A: 35 + Section B: 15)', questionCount: 50, marks: 180 },
        { name: 'Chemistry (Section A: 35 + Section B: 15)', questionCount: 50, marks: 180 },
        { name: 'Botany (Section A: 35 + Section B: 15)', questionCount: 50, marks: 180 },
        { name: 'Zoology (Section A: 35 + Section B: 15)', questionCount: 50, marks: 180 }
      ],
      subjects: ['Physics', 'Chemistry', 'Botany', 'Zoology'],
      officialRules: [
        'Total 200 questions: 180 questions must be attempted.',
        'Each subject contains Section A (35 compulsory) and Section B (15, attempt any 10).',
        '+4 marks for correct, -1 mark for incorrect, 0 for unattempted.'
      ],
      blueprintSummary: '3 Hours 20 Mins • 720 Marks • 180 Questions to Attempt • NTA Medical Blueprint'
    }
  },
  {
    _id: 'upsc-cse',
    name: 'Civil Services Examination (UPSC CSE)',
    slug: 'upsc-cse',
    category: 'Government',
    conductingBody: 'Union Public Service Commission (UPSC)',
    pattern: 'OMR • 100 Questions • 200 Marks',
    subjects: ['Indian Polity & Governance', 'History of India', 'Geography & Environment', 'Economic Development', 'General Science & Tech', 'Current Affairs'],
    totalTests: 6,
    officialTestsCount: 6,
    blueprint: {
      examSlug: 'upsc-cse',
      examName: 'Civil Services Examination (UPSC CSE)',
      category: 'Government',
      conductingBody: 'Union Public Service Commission (UPSC)',
      officialDurationMinutes: 120,
      totalMarks: 200,
      totalQuestions: 100,
      negativeMarkingRate: 0.33,
      negativeMarkingFormula: '-0.66 Marks per incorrect answer (1/3rd penalty)',
      patternType: 'Offline OMR / Real Simulator',
      sections: [
        { name: 'Polity & Governance', questionCount: 18, marks: 36 },
        { name: 'History & Art & Culture', questionCount: 18, marks: 36 },
        { name: 'Geography & Ecology', questionCount: 22, marks: 44 },
        { name: 'Economy & Development', questionCount: 18, marks: 36 },
        { name: 'Science, Tech & Current Events', questionCount: 24, marks: 48 }
      ],
      subjects: ['Polity', 'History', 'Geography', 'Economy', 'Environment', 'Science & Technology'],
      officialRules: [
        'Prelims GS Paper I determines cutoff for Mains qualification.',
        '100 questions of 2 marks each. Total marks: 200.',
        '1/3rd (0.66 marks) deducted for every wrong answer.'
      ],
      blueprintSummary: '2 Hours • 200 Marks • 100 Questions • UPSC Prelims GS Paper 1 Pattern'
    }
  },
  {
    _id: 'cat',
    name: 'Common Admission Test (CAT)',
    slug: 'cat',
    category: 'Management',
    conductingBody: 'Indian Institutes of Management (IIMs)',
    pattern: 'CBT • 66 Questions • 198 Marks',
    subjects: ['Verbal Ability & Reading Comprehension (VARC)', 'Data Interpretation & Logical Reasoning (DILR)', 'Quantitative Aptitude (QA)'],
    totalTests: 5,
    officialTestsCount: 5,
    blueprint: {
      examSlug: 'cat',
      examName: 'Common Admission Test (CAT)',
      category: 'Management',
      conductingBody: 'Indian Institutes of Management (IIMs)',
      officialDurationMinutes: 120,
      totalMarks: 198,
      totalQuestions: 66,
      negativeMarkingRate: 0.33,
      negativeMarkingFormula: '-1 Mark for incorrect MCQ, 0 penalty for TITA',
      patternType: 'CBT with Sectional 40-Min Timers',
      sections: [
        { name: 'VARC', questionCount: 24, marks: 72, durationMinutes: 40 },
        { name: 'DILR', questionCount: 20, marks: 60, durationMinutes: 40 },
        { name: 'Quantitative Aptitude', questionCount: 22, marks: 66, durationMinutes: 40 }
      ],
      subjects: ['VARC', 'DILR', 'Quantitative Aptitude'],
      officialRules: [
        'Strict 40-minute timer per section. No switching during active section.',
        '+3 marks for correct, -1 mark for incorrect MCQ.',
        'Zero negative marking for Type-In-The-Answer (TITA) questions.'
      ],
      blueprintSummary: '2 Hours (40m/sec) • 198 Marks • 66 Questions • Official IIM CAT Blueprint'
    }
  },
  {
    _id: 'ssc-cgl',
    name: 'SSC Combined Graduate Level (SSC CGL)',
    slug: 'ssc-cgl',
    category: 'Government',
    conductingBody: 'Staff Selection Commission (SSC)',
    pattern: 'CBT • 100 Questions • 200 Marks',
    subjects: ['General Intelligence & Reasoning', 'General Awareness', 'Quantitative Aptitude', 'English Comprehension'],
    totalTests: 5,
    officialTestsCount: 5,
    blueprint: {
      examSlug: 'ssc-cgl',
      examName: 'SSC Combined Graduate Level (SSC CGL)',
      category: 'Government',
      conductingBody: 'Staff Selection Commission (SSC)',
      officialDurationMinutes: 60,
      totalMarks: 200,
      totalQuestions: 100,
      negativeMarkingRate: 0.25,
      negativeMarkingFormula: '-0.50 Marks per wrong answer (25%)',
      patternType: 'Computer Based Test (CBT Tier-1)',
      sections: [
        { name: 'Reasoning', questionCount: 25, marks: 50 },
        { name: 'General Awareness', questionCount: 25, marks: 50 },
        { name: 'Quantitative Aptitude', questionCount: 25, marks: 50 },
        { name: 'English Comprehension', questionCount: 25, marks: 50 }
      ],
      subjects: ['Reasoning', 'General Awareness', 'Quantitative Aptitude', 'English'],
      officialRules: [
        '100 questions of 2 marks each in 60 minutes.',
        '0.50 mark penalty for each wrong answer.',
        'Free navigation across all sections.'
      ],
      blueprintSummary: '60 Mins • 200 Marks • 100 Questions • SSC CGL Tier-1 Speed Blueprint'
    }
  },
  {
    _id: 'clat-ug',
    name: 'Common Law Admission Test (CLAT UG)',
    slug: 'clat-ug',
    category: 'University',
    conductingBody: 'Consortium of NLUs',
    pattern: 'CBT • 120 Questions • 120 Marks',
    subjects: ['English Language', 'Current Affairs & GK', 'Legal Reasoning', 'Logical Reasoning', 'Quantitative Techniques'],
    totalTests: 5,
    officialTestsCount: 5,
    blueprint: {
      examSlug: 'clat-ug',
      examName: 'Common Law Admission Test (CLAT UG)',
      category: 'University',
      conductingBody: 'Consortium of National Law Universities',
      officialDurationMinutes: 120,
      totalMarks: 120,
      totalQuestions: 120,
      negativeMarkingRate: 0.25,
      negativeMarkingFormula: '-0.25 Marks per incorrect answer (25%)',
      patternType: 'Passage-Based Comprehension CBT',
      sections: [
        { name: 'English Language', questionCount: 24, marks: 24 },
        { name: 'Current Affairs & GK', questionCount: 28, marks: 28 },
        { name: 'Legal Reasoning', questionCount: 32, marks: 32 },
        { name: 'Logical Reasoning', questionCount: 24, marks: 24 },
        { name: 'Quantitative Techniques', questionCount: 12, marks: 12 }
      ],
      subjects: ['English', 'Current Affairs', 'Legal Reasoning', 'Logical Reasoning', 'Quant'],
      officialRules: [
        '120 passage-based questions, 1 mark each.',
        '0.25 mark deducted for each incorrect answer.',
        'Emphasis on critical reading and logical inference.'
      ],
      blueprintSummary: '2 Hours • 120 Marks • 120 Questions • National Law Universities Blueprint'
    }
  },
  {
    _id: 'nda',
    name: 'National Defence Academy (NDA)',
    slug: 'nda',
    category: 'Defence',
    conductingBody: 'Union Public Service Commission (UPSC)',
    pattern: 'OMR • 120 Questions • 300 Marks',
    subjects: ['Algebra & Trigonometry', 'Calculus & Differential Equations', 'Coordinate Geometry, Vectors & Probability'],
    totalTests: 2,
    officialTestsCount: 2,
    blueprint: {
      examSlug: 'nda',
      examName: 'National Defence Academy (NDA)',
      category: 'Defence',
      conductingBody: 'Union Public Service Commission (UPSC)',
      officialDurationMinutes: 150,
      totalMarks: 300,
      totalQuestions: 120,
      negativeMarkingRate: 0.33,
      negativeMarkingFormula: '-0.83 Marks per incorrect answer (33%)',
      patternType: 'OMR Mathematics Paper Simulator',
      sections: [
        { name: 'Algebra, Matrices & Trigonometry', questionCount: 40, marks: 100 },
        { name: 'Calculus & Differential Equations', questionCount: 40, marks: 100 },
        { name: 'Geometry, Vectors & Statistics', questionCount: 40, marks: 100 }
      ],
      subjects: ['Algebra', 'Trigonometry', 'Calculus', 'Coordinate Geometry', 'Vectors & Statistics'],
      officialRules: [
        'Mathematics Paper: 120 questions of 2.5 marks each.',
        '1/3rd (0.83 marks) deducted for each incorrect response.',
        'Calculators are strictly prohibited.'
      ],
      blueprintSummary: '2.5 Hours • 300 Marks • 120 Questions • UPSC NDA Mathematics Blueprint'
    }
  },
  {
    _id: 'sbi-po',
    name: 'State Bank of India Probationary Officer (SBI PO)',
    slug: 'sbi-po',
    category: 'Banking',
    conductingBody: 'State Bank of India (SBI)',
    pattern: 'CBT • 100 Questions • 100 Marks',
    subjects: ['English Language', 'Quantitative Aptitude', 'Reasoning Ability'],
    totalTests: 2,
    officialTestsCount: 2,
    blueprint: {
      examSlug: 'sbi-po',
      examName: 'State Bank of India Probationary Officer (SBI PO)',
      category: 'Banking',
      conductingBody: 'State Bank of India (SBI)',
      officialDurationMinutes: 60,
      totalMarks: 100,
      totalQuestions: 100,
      negativeMarkingRate: 0.25,
      negativeMarkingFormula: '-0.25 Marks per wrong answer (25%)',
      patternType: 'Online CBT with 20-min Sectional Timers',
      sections: [
        { name: 'English Language', questionCount: 30, marks: 30, durationMinutes: 20 },
        { name: 'Quantitative Aptitude', questionCount: 35, marks: 35, durationMinutes: 20 },
        { name: 'Reasoning Ability', questionCount: 35, marks: 35, durationMinutes: 20 }
      ],
      subjects: ['English', 'Quantitative Aptitude', 'Reasoning Ability'],
      officialRules: [
        'Strict 20-minute timer for each section.',
        '0.25 mark penalty for every wrong answer.',
        'Rapid speed and high sectional accuracy required.'
      ],
      blueprintSummary: '60 Mins (20m/sec) • 100 Marks • 100 Questions • SBI PO Prelims Blueprint'
    }
  },
  {
    _id: 'ugc-net',
    name: 'UGC National Eligibility Test (UGC NET)',
    slug: 'ugc-net',
    category: 'University',
    conductingBody: 'National Testing Agency (NTA)',
    pattern: 'CBT • 150 Questions • 300 Marks',
    subjects: ['Teaching & Research Aptitude', 'Higher Education System', 'Information & Communication Technology', 'Subject Domain Knowledge'],
    totalTests: 5,
    officialTestsCount: 5,
    blueprint: {
      examSlug: 'ugc-net',
      examName: 'UGC National Eligibility Test (UGC NET)',
      category: 'University',
      conductingBody: 'National Testing Agency (NTA)',
      officialDurationMinutes: 180,
      totalMarks: 300,
      totalQuestions: 150,
      negativeMarkingRate: 0,
      negativeMarkingFormula: 'No Negative Marking (0%)',
      patternType: 'Single Session CBT without Break',
      sections: [
        { name: 'Paper 1 (General Teaching & Research)', questionCount: 50, marks: 100 },
        { name: 'Paper 2 (Subject Domain)', questionCount: 100, marks: 200 }
      ],
      subjects: ['Teaching Aptitude', 'Research Aptitude', 'ICT & Logic', 'Subject Domain'],
      officialRules: [
        '150 questions of 2 marks each across Paper 1 & Paper 2.',
        'Continuous 3-hour duration without break.',
        'Zero negative marking.'
      ],
      blueprintSummary: '3 Hours • 300 Marks • 150 Questions • Zero Negative Marking NTA NET'
    }
  },
  {
    _id: 'rrb-ntpc',
    name: 'Railway Recruitment Board (RRB NTPC)',
    slug: 'rrb-ntpc',
    category: 'Railway',
    conductingBody: 'Railway Recruitment Control Board',
    pattern: 'CBT • 100 Questions • 100 Marks',
    subjects: ['General Awareness', 'Mathematics', 'General Intelligence & Reasoning'],
    totalTests: 2,
    officialTestsCount: 2,
    blueprint: {
      examSlug: 'rrb-ntpc',
      examName: 'Railway Recruitment Board (RRB NTPC)',
      category: 'Railway',
      conductingBody: 'Railway Recruitment Control Board',
      officialDurationMinutes: 90,
      totalMarks: 100,
      totalQuestions: 100,
      negativeMarkingRate: 0.33,
      negativeMarkingFormula: '-0.33 Marks per wrong answer (33%)',
      patternType: 'Computer Based Test (CBT-1)',
      sections: [
        { name: 'General Awareness', questionCount: 40, marks: 40 },
        { name: 'Mathematics', questionCount: 30, marks: 30 },
        { name: 'General Intelligence & Reasoning', questionCount: 30, marks: 30 }
      ],
      subjects: ['General Awareness', 'Mathematics', 'General Intelligence & Reasoning'],
      officialRules: [
        '100 objective questions of 1 mark each.',
        '1/3rd mark deducted for every incorrect response.',
        'Free sectional navigation within 90 minutes.'
      ],
      blueprintSummary: '90 Mins • 100 Marks • 100 Questions • Railway CBT-1 Blueprint'
    }
  }
];

@Component({
  selector: 'app-mock-tests',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './mock-tests.html',
  styleUrls: ['./mock-tests.css']
})
export class MockTests implements OnInit, OnDestroy {
  private mockTestService = inject(MockTestService);
  private authService = inject(AuthService);
  private toastService = inject(ToastService);

  // View state: 'EXAM_SELECT' | 'EXAM_HUB' | 'ACTIVE_TEST' | 'RESULT'
  currentMode: MockTestViewMode = 'EXAM_SELECT';
  activeHubTab: ExamHubTab = 'OFFICIAL_PATTERN';

  isLoadingExams = false;
  isLoadingTests = false;
  isGeneratingCustom = false;
  errorMessage = '';

  // Stream Categories for filtering
  readonly streamCategories: StreamCategory[] = [
    { id: 'All', label: 'All Streams', icon: '🌐' },
    { id: 'Engineering', label: 'Engineering (GATE & JEE)', icon: '⚙️' },
    { id: 'Medical', label: 'Medical (NEET UG)', icon: '🩺' },
    { id: 'Government', label: 'Civil Services & SSC', icon: '🏛️' },
    { id: 'Management', label: 'Management (CAT & XAT)', icon: '📈' },
    { id: 'Banking', label: 'Banking & Insurance', icon: '🏦' },
    { id: 'University', label: 'Law & Teaching (CLAT & NET)', icon: '⚖️' },
    { id: 'Defence', label: 'Defence (NDA & CDS)', icon: '🎖️' },
    { id: 'Railway', label: 'Railways & Police', icon: '🚆' }
  ];

  // 1. Exam Catalog State
  examsCatalogList: ExamMockMeta[] = DEFAULT_EXAMS_META;
  selectedStreamFilter = 'All';
  examSearchTerm = '';

  // 2. Selected Exam Hub State
  selectedExam: ExamMockMeta | null = null;
  officialMockTests: MockTestItem[] = [];

  // Customize Test Form State
  customSubjects: { [subjectName: string]: boolean } = {};
  customTopic = '';
  customDifficulty: 'Easy' | 'Medium' | 'Hard' | 'Mixed' = 'Medium';
  customQuestionCount = 10;
  customDurationMinutes = 30;
  customNegativeMarking = true;

  // 3. Active Test Taking Engine State
  activeTest: MockTestItem | null = null;
  currentQuestionIndex = 0;
  userAnswers: { [qIdx: number]: number } = {};
  markedForReview = new Set<number>();
  timeRemainingSeconds = 0;
  private timerInterval: any = null;
  timeSpentSeconds = 0;
  isSubmitModalOpen = false;

  // 4. Result & Analysis State
  testResult: TestResultResponse | null = null;
  reviewFilter: 'All' | 'Correct' | 'Incorrect' | 'Unattempted' = 'All';

  ngOnInit(): void {
    this.loadExamsCatalog();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  // Load verified exams from Backend API
  loadExamsCatalog(): void {
    this.isLoadingExams = true;
    this.mockTestService.getExamsForMockTests().subscribe({
      next: (exams) => {
        this.isLoadingExams = false;
        if (exams && exams.length > 0) {
          this.examsCatalogList = exams;
        } else {
          this.examsCatalogList = DEFAULT_EXAMS_META;
        }
      },
      error: () => {
        this.isLoadingExams = false;
        this.examsCatalogList = DEFAULT_EXAMS_META;
      }
    });
  }

  // Filtered exams according to stream and search query
  get filteredExams(): ExamMockMeta[] {
    let list = this.examsCatalogList;

    if (this.selectedStreamFilter !== 'All') {
      const target = this.selectedStreamFilter.toLowerCase();
      list = list.filter(
        e => e.category.toLowerCase().includes(target) || target.includes(e.category.toLowerCase())
      );
    }

    if (this.examSearchTerm.trim()) {
      const q = this.examSearchTerm.trim().toLowerCase();
      list = list.filter(
        e =>
          e.name.toLowerCase().includes(q) ||
          e.slug.toLowerCase().includes(q) ||
          e.conductingBody.toLowerCase().includes(q) ||
          e.subjects.some(s => s.toLowerCase().includes(q))
      );
    }

    return list;
  }

  selectStreamCategory(catId: string): void {
    this.selectedStreamFilter = catId;
  }

  // User selects an examination to open its Testing Hub
  selectExam(exam: ExamMockMeta): void {
    this.selectedExam = exam;
    this.currentMode = 'EXAM_HUB';
    this.activeHubTab = 'OFFICIAL_PATTERN';

    // Initialize custom test form
    this.customSubjects = {};
    if (exam.subjects && exam.subjects.length > 0) {
      exam.subjects.forEach(s => (this.customSubjects[s] = true));
    } else {
      this.customSubjects['Core Domain'] = true;
    }

    this.customTopic = '';
    this.customDifficulty = 'Medium';
    this.customQuestionCount = 10;
    this.customDurationMinutes = Math.min(exam.blueprint?.officialDurationMinutes || 60, 30);
    this.customNegativeMarking = (exam.blueprint?.negativeMarkingRate || 0.25) > 0;

    // Load official tests for this exam
    this.loadOfficialTestsForExam(exam);
  }

  switchExam(): void {
    this.selectedExam = null;
    this.currentMode = 'EXAM_SELECT';
    this.officialMockTests = [];
    this.activeTest = null;
    this.testResult = null;
  }

  setHubTab(tab: ExamHubTab): void {
    this.activeHubTab = tab;
  }

  loadOfficialTestsForExam(exam: ExamMockMeta): void {
    this.isLoadingTests = true;
    this.officialMockTests = [];

    this.mockTestService.getMockTests(exam._id, undefined, undefined, undefined, 'official_pattern').subscribe({
      next: (tests) => {
        this.isLoadingTests = false;
        if (tests && tests.length > 0) {
          this.officialMockTests = tests;
        } else {
          this.officialMockTests = this.getFallbackTestsForExam(exam);
        }
      },
      error: () => {
        this.isLoadingTests = false;
        this.officialMockTests = this.getFallbackTestsForExam(exam);
      }
    });
  }

  private getFallbackTestsForExam(exam: ExamMockMeta): MockTestItem[] {
    const slug = exam.slug.toLowerCase();
    const name = exam.name.toLowerCase();

    const matches = FALLBACK_MOCK_TESTS.filter(t => {
      const tSlug = ((t as any).examSlug || '').toLowerCase();
      return (
        tSlug.includes(slug) ||
        slug.includes(tSlug) ||
        t.examName.toLowerCase().includes(name) ||
        name.includes(t.examName.toLowerCase())
      );
    });

    const bankQuestions = getQuestionsForExamSlug(slug);

    if (matches.length > 0) {
      return matches.map(m => {
        const existingTexts = new Set(m.questions.map(q => q.questionText.trim().toLowerCase()));
        const extra = bankQuestions.filter(q => !existingTexts.has(q.questionText.trim().toLowerCase()));
        const combined = [...m.questions, ...extra];
        return {
          ...m,
          questions: combined,
          totalMarks: combined.length * 4
        };
      });
    }

    return [
      {
        _id: `MOCK-${exam.slug}-01`,
        title: `${exam.name} Official All-India Pattern Mock Test 01`,
        examId: exam._id,
        examSlug: exam.slug,
        examName: exam.name,
        category: exam.category,
        subject: exam.subjects.join(', '),
        durationMinutes: exam.blueprint?.officialDurationMinutes || 60,
        totalMarks: bankQuestions.length * 4,
        negativeMarkingRate: exam.blueprint?.negativeMarkingRate || 0.25,
        difficulty: 'Medium',
        questions: bankQuestions,
        isAiGenerated: false,
        testType: 'official_pattern',
        createdAt: new Date().toISOString()
      }
    ];
  }

  setCustomDifficulty(diff: 'Easy' | 'Medium' | 'Hard' | 'Mixed'): void {
    this.customDifficulty = diff;
  }

  setReviewFilter(flt: 'All' | 'Correct' | 'Incorrect' | 'Unattempted'): void {
    this.reviewFilter = flt;
  }

  // Toggle subject in Customize Test
  toggleSubject(subjectName: string): void {
    this.customSubjects[subjectName] = !this.customSubjects[subjectName];
  }

  selectAllSubjects(select: boolean): void {
    if (!this.selectedExam) return;
    this.selectedExam.subjects.forEach(s => (this.customSubjects[s] = select));
  }

  getSelectedSubjectsList(): string[] {
    return Object.keys(this.customSubjects).filter(k => this.customSubjects[k]);
  }

  // Launch a Customized Practice Test
  launchCustomTest(): void {
    if (!this.selectedExam) return;

    const subjects = this.getSelectedSubjectsList();
    if (subjects.length === 0) {
      this.toastService.warning('Please select at least one subject to create a customized test.');
      return;
    }

    this.isGeneratingCustom = true;
    const payload: CustomTestPayload = {
      examId: this.selectedExam._id,
      examName: this.selectedExam.name,
      category: this.selectedExam.category,
      subjects,
      topic: this.customTopic.trim() || undefined,
      difficulty: this.customDifficulty,
      questionCount: this.customQuestionCount,
      durationMinutes: this.customDurationMinutes,
      negativeMarkingRate: this.customNegativeMarking
        ? (this.selectedExam.blueprint?.negativeMarkingRate || 0.25)
        : 0
    };

    this.mockTestService.createCustomMockTest(payload).subscribe({
      next: (customTest) => {
        this.isGeneratingCustom = false;
        this.toastService.success('Customized practice test generated successfully!');
        this.startTest(customTest);
      },
      error: () => {
        this.isGeneratingCustom = false;
        this.toastService.warning('Starting customized practice session with verified local test bank.');
        const fallbackQuestions = this.getFallbackTestsForExam(this.selectedExam!)
          .flatMap(t => t.questions)
          .slice(0, this.customQuestionCount);

        const localTest: MockTestItem = {
          _id: 'CUSTOM-LOCAL-' + Date.now(),
          title: `Custom Practice: ${this.selectedExam!.name} (${subjects.join(', ')})`,
          examId: this.selectedExam!._id,
          examName: this.selectedExam!.name,
          category: this.selectedExam!.category,
          subject: subjects.join(', '),
          durationMinutes: this.customDurationMinutes,
          totalMarks: fallbackQuestions.length * 4,
          negativeMarkingRate: this.customNegativeMarking ? 0.25 : 0,
          difficulty: this.customDifficulty === 'Mixed' ? 'Medium' : this.customDifficulty,
          questions: fallbackQuestions,
          isAiGenerated: true,
          testType: 'custom_practice',
          createdAt: new Date().toISOString()
        };
        this.startTest(localTest);
      }
    });
  }

  // Active Section / Subject in test engine
  activeSectionFilter = 'All';

  get testSections(): { name: string; count: number; startIndex: number }[] {
    if (!this.activeTest) return [];
    const map = new Map<string, { count: number; startIndex: number }>();
    this.activeTest.questions.forEach((q, idx) => {
      const s = q.subject || 'Core Section';
      if (!map.has(s)) {
        map.set(s, { count: 1, startIndex: idx });
      } else {
        map.get(s)!.count++;
      }
    });

    return Array.from(map.entries()).map(([name, data]) => ({
      name,
      count: data.count,
      startIndex: data.startIndex
    }));
  }

  setSectionFilter(name: string): void {
    this.activeSectionFilter = name;
    if (name !== 'All' && this.activeTest) {
      const idx = this.activeTest.questions.findIndex(q => (q.subject || 'Core Section') === name);
      if (idx !== -1) {
        this.currentQuestionIndex = idx;
      }
    }
  }

  get displayedPaletteIndices(): number[] {
    if (!this.activeTest) return [];
    if (this.activeSectionFilter === 'All') {
      return this.activeTest.questions.map((_, i) => i);
    }
    return this.activeTest.questions
      .map((q, i) => ((q.subject || 'Core Section') === this.activeSectionFilter ? i : -1))
      .filter(i => i !== -1);
  }

  // Start test taking engine
  startTest(test: MockTestItem): void {
    this.activeTest = test;
    this.activeSectionFilter = 'All';
    this.currentMode = 'ACTIVE_TEST';
    this.currentQuestionIndex = 0;
    this.userAnswers = {};
    this.markedForReview.clear();
    this.timeSpentSeconds = 0;
    this.timeRemainingSeconds = (test.durationMinutes || 60) * 60;

    this.clearTimer();
    this.timerInterval = setInterval(() => {
      if (this.timeRemainingSeconds > 0) {
        this.timeRemainingSeconds--;
        this.timeSpentSeconds++;
      } else {
        this.autoSubmit();
      }
    }, 1000);
  }

  clearTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  get currentQuestion() {
    return this.activeTest?.questions[this.currentQuestionIndex];
  }

  selectOption(optIdx: number): void {
    this.userAnswers[this.currentQuestionIndex] = optIdx;
  }

  clearOption(): void {
    delete this.userAnswers[this.currentQuestionIndex];
  }

  toggleMarkForReview(): void {
    if (this.markedForReview.has(this.currentQuestionIndex)) {
      this.markedForReview.delete(this.currentQuestionIndex);
    } else {
      this.markedForReview.add(this.currentQuestionIndex);
    }
  }

  goToQuestion(idx: number): void {
    if (this.activeTest && idx >= 0 && idx < this.activeTest.questions.length) {
      this.currentQuestionIndex = idx;
    }
  }

  nextQuestion(): void {
    if (this.activeTest && this.currentQuestionIndex < this.activeTest.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  prevQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  get answeredCount(): number {
    return Object.keys(this.userAnswers).length;
  }

  get markedCount(): number {
    return this.markedForReview.size;
  }

  get unansweredCount(): number {
    if (!this.activeTest) return 0;
    return this.activeTest.questions.length - this.answeredCount;
  }

  getQuestionPaletteClass(idx: number): string {
    const isAnswered = this.userAnswers[idx] !== undefined;
    const isMarked = this.markedForReview.has(idx);
    const isCurrent = this.currentQuestionIndex === idx;

    let base = 'w-9 h-9 rounded-xl font-bold text-xs flex items-center justify-center transition border ';
    if (isCurrent) {
      base += 'ring-2 ring-blue-600 ring-offset-1 font-extrabold ';
    }

    if (isAnswered && isMarked) {
      return base + 'bg-purple-100 border-purple-400 text-purple-800 relative';
    } else if (isMarked) {
      return base + 'bg-purple-50 border-purple-300 text-purple-700';
    } else if (isAnswered) {
      return base + 'bg-emerald-600 border-emerald-600 text-white shadow-sm';
    } else if (idx < this.currentQuestionIndex || Object.keys(this.userAnswers).length > 0) {
      return base + 'bg-rose-50 border-rose-300 text-rose-700';
    } else {
      return base + 'bg-slate-100 border-slate-200 text-slate-600';
    }
  }

  formatTime(totalSeconds: number): string {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  openSubmitConfirmation(): void {
    this.isSubmitModalOpen = true;
  }

  closeSubmitConfirmation(): void {
    this.isSubmitModalOpen = false;
  }

  confirmSubmit(): void {
    this.isSubmitModalOpen = false;
    this.submitTest();
  }

  autoSubmit(): void {
    this.clearTimer();
    this.toastService.warning('Time limit reached! Submitting your test automatically.');
    this.submitTest();
  }

  submitTest(): void {
    this.clearTimer();
    if (!this.activeTest) return;

    this.isLoadingTests = true;
    const formattedAnswers = Object.keys(this.userAnswers).map(k => ({
      questionIndex: Number(k),
      selectedOptionIndex: this.userAnswers[Number(k)]
    }));

    this.mockTestService.submitMockTest(this.activeTest._id, formattedAnswers, this.timeSpentSeconds).subscribe({
      next: (result) => {
        this.isLoadingTests = false;
        this.testResult = result;
        this.currentMode = 'RESULT';
        this.toastService.success('Test submitted successfully! View your performance scorecard.');
      },
      error: () => {
        this.isLoadingTests = false;
        this.evaluateLocally();
      }
    });
  }

  private evaluateLocally(): void {
    if (!this.activeTest) return;
    const questions = this.activeTest.questions;
    let correct = 0;
    let wrong = 0;
    let score = 0;

    const evaluated = questions.map((q, idx) => {
      const selected = this.userAnswers[idx];
      const isAttempted = selected !== undefined && selected !== null;
      const correctIdx = (q as any).correctOptionIndex ?? 0;
      const isCorrect = isAttempted && selected === correctIdx;
      const marks = q.marks || 4;
      const negRate = this.activeTest?.negativeMarkingRate ?? 0.25;

      let marksAwarded = 0;
      if (isAttempted) {
        if (isCorrect) {
          correct++;
          marksAwarded = marks;
        } else {
          wrong++;
          marksAwarded = -marks * negRate;
        }
      }
      score += marksAwarded;

      return {
        questionIndex: idx,
        questionText: q.questionText,
        options: q.options,
        selectedOptionIndex: isAttempted ? selected : -1,
        correctOptionIndex: correctIdx,
        isCorrect,
        isAttempted,
        marksAwarded,
        explanation: (q as any).explanation || 'Step-by-step verified curriculum derivation and concept breakdown.',
        subject: q.subject
      };
    });

    const attempted = correct + wrong;
    const totalQ = questions.length;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const maxScore = this.activeTest.totalMarks || totalQ * 4;
    const finalScore = Math.max(0, Math.round(score * 10) / 10);

    this.testResult = {
      attemptId: 'LOCAL-' + Date.now(),
      testTitle: this.activeTest.title,
      examName: this.activeTest.examName,
      totalQuestions: totalQ,
      attemptedCount: attempted,
      correctCount: correct,
      wrongCount: wrong,
      score: finalScore,
      maxScore,
      accuracyPercentage: accuracy,
      timeSpentSeconds: this.timeSpentSeconds,
      questionsReview: evaluated
    };

    this.currentMode = 'RESULT';
    this.toastService.success('Test evaluated! Here is your score breakdown.');
  }

  get filteredReviewQuestions(): QuestionReview[] {
    if (!this.testResult) return [];
    if (this.reviewFilter === 'Correct') {
      return this.testResult.questionsReview.filter(q => q.isAttempted && q.isCorrect);
    }
    if (this.reviewFilter === 'Incorrect') {
      return this.testResult.questionsReview.filter(q => q.isAttempted && !q.isCorrect);
    }
    if (this.reviewFilter === 'Unattempted') {
      return this.testResult.questionsReview.filter(q => !q.isAttempted);
    }
    return this.testResult.questionsReview;
  }

  get sectionPerformance(): {
    subject: string;
    total: number;
    attempted: number;
    correct: number;
    wrong: number;
    score: number;
    accuracy: number;
  }[] {
    if (!this.testResult) return [];
    const map = new Map<string, { total: number; attempted: number; correct: number; wrong: number; score: number }>();

    for (const q of this.testResult.questionsReview) {
      const s = q.subject || 'General Section';
      if (!map.has(s)) {
        map.set(s, { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0 });
      }
      const data = map.get(s)!;
      data.total++;
      if (q.isAttempted) {
        data.attempted++;
        if (q.isCorrect) {
          data.correct++;
        } else {
          data.wrong++;
        }
      }
      data.score += q.marksAwarded || 0;
    }

    return Array.from(map.entries()).map(([subject, data]) => {
      const accuracy = data.attempted > 0 ? Math.round((data.correct / data.attempted) * 100) : 0;
      return {
        subject,
        total: data.total,
        attempted: data.attempted,
        correct: data.correct,
        wrong: data.wrong,
        score: Math.round(data.score * 10) / 10,
        accuracy
      };
    });
  }

  retakeCurrentTest(): void {
    if (this.activeTest) {
      this.startTest(this.activeTest);
    }
  }

  backToExamHub(): void {
    this.activeTest = null;
    this.testResult = null;
    this.currentMode = 'EXAM_HUB';
  }

  backToExamSelection(): void {
    this.selectedExam = null;
    this.activeTest = null;
    this.testResult = null;
    this.currentMode = 'EXAM_SELECT';
  }
}
