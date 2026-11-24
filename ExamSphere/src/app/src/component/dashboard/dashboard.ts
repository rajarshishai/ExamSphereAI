import { Component, signal, computed, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AiTutorService } from '../../../core/services/ai-tutor.service';
import { AuthService, AuthUser } from '../../../core/services/auth.service/auth.service';
import { ExamService } from '../../../core/services/exam.service';
import { AnalyticsService, StudentAnalytics } from '../../../core/services/analytics.service';
import { AiSearchEngineService } from '../../../core/services/ai-search-engine.service';
import { PreparationService } from '../../../core/services/preparation.service';
import { FeedbackService } from '../../../core/services/feedback.service';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  route?: string;
}

interface Package {
  name: string;
  price: string;
  period: string;
  badge?: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

interface Feedback {
  name: string;
  exam: string;
  rank: string;
  quote: string;
  avatar: string;
}

interface ExamDetail {
  name: string;
  category: string;
  conductingBody: string;
  nextSession: string;
  overview: string;
  pattern: string;
  eligibility: string;
  imageurl?: string;
  slug?: string;
}

interface MentorMessage {
  sender: 'student' | 'ai';
  text: string;
}

interface HeatmapTopic {
  topic: string;
  accuracy: number;
  status: 'Strong' | 'Moderate' | 'Weak';
  weightage: 'High' | 'Medium' | 'Low';
  questionsAttempted: number;
}

interface DailyQuizItem {
  examTag: string;
  subject: string;
  difficulty: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
  githubUrl?: string; // Added property
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit, OnDestroy {
  // Hero background images cycling every 5 seconds
  heroImages = [
    'https://media.istockphoto.com/id/1398473177/photo/questionnaire-with-checkboxes-filling-survey-form-online-answer-questions.jpg?s=612x612&w=0&k=20&c=sgZY6ojUqB0goVyn_9fKLfeyZ6lyWjSb3-FQjgeUPec=',
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80',
    'https://mystudycart.com/blog/wp-content/uploads/strategy-preparation-tips-neet.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiY1LDxDV7xUA-ekZQDY2gsQtB3KxYpmhdyJbaWs6W24P0TvxQEGg3EI8&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSoMZekgpyzY_nEbbgyjcEZM457bnCGT3YfC8k4uCBbeBzXTRyVnWgRYK&s=10',
  ];

  currentImageIndex = signal(0);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  // =========================================================
  // SECTION A STATE: PREPARE YOUR TEST FROM TODAY (EXAM SEARCH)
  // =========================================================
  examSearchQuery = signal('');

  examCatalog: ExamDetail[] = [
    {
      name: 'JEE Main ',
      category: 'Engineering',
      conductingBody: 'NTA / IITs',
      nextSession: 'Jan & Apr Cycles',
      overview:
        'Gateway to NITs, IIITs, and IITs testing deep conceptual mastery in Physics, Chemistry, and Mathematics.',
      pattern: 'CBT • 75 Qs (300 Marks)',
      eligibility: 'Class 12 PCM',
      imageurl:
        'https://msmunifyindia.blob.core.windows.net/public-media/exams/1790079102146-0ff63e0d-jee-main-2026-featured-image-350.webp',
      slug: 'jee-main',
    },
    {
      name: 'JEE Advanced ',
      category: 'Engineering Entrance',
      conductingBody: 'Indian Institute of Technology (IIT Delhi)',
      nextSession: 'JEE Advanced 2027',
      overview:
        'National-level engineering entrance examination for admission to undergraduate programmes at IITs. Candidates must qualify JEE Main and satisfy the prescribed eligibility criteria.',
      pattern: 'Computer Based Test (CBT) – Paper 1 & Paper 2',
      eligibility: 'JEE Main 2027 Qualified Candidates meeting JEE Advanced eligibility criteria',
      imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-ksKzyNrxkeZ_4bx0x8jtEXcAUneITUookejF0LZBA&s=10',
      slug: 'jee-advanced',
    },
    {
      name: 'NEET UG',
      category: 'Medical',
      conductingBody: 'NTA',
      nextSession: 'May Annual Exam',
      overview:
        'Single-tier national entrance for MBBS, BDS, and AYUSH seats focusing heavily on NCERT Biology, Physics & Chemistry.',
      pattern: 'Pen & Paper • 180 Qs (720 Marks)',
      eligibility: 'Class 12 PCB',
      imageurl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFM3-Rm-U5Tb2CGN6YRQfSlNvzUvJEKEBcD3Y-Z9g1lw&s=10',
      slug: 'neet-ug',
    },
    {
      name: 'UPSC CSE',
      category: 'Civil Services',
      conductingBody: 'UPSC',
      nextSession: 'Prelims in May',
      overview:
        'Prestigious three-stage selection (Prelims, Mains, Interview) for IAS, IPS, and IFS across General Studies and CSAT.',
      pattern: 'GS + CSAT Prelims + Mains',
      eligibility: 'Any Bachelor Degree',
      imageurl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9zKVpVHY07jUd3vZLeLgON0mMPfmtxGmTOTHPWzJuA&s=10',
      slug: 'upsc-cse',
    },
    {
      name: 'GATE',
      category: 'Postgraduate Tech',
      conductingBody: 'IISc & IITs',
      nextSession: 'February Session',
      overview:
        'Tests undergraduate engineering & science subjects for M.Tech admissions and PSU recruitment.',
      pattern: 'CBT • 65 Qs (100 Marks)',
      eligibility: '3rd/4th Yr B.Tech or Graduate',
      imageurl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaB9t4o4h57MP8M2S4XhAFWOtrGHE6laUroX3ijnlhRJkVRCvGAs9ODD0&s=10',
      slug: 'gate-cse',
    },
    {
      name: 'CAT',
      category: 'Management',
      conductingBody: 'IIMs',
      nextSession: 'November Exam',
      overview:
        'Premier MBA entrance evaluating Verbal Ability, Data Interpretation, Logical Reasoning, and Quantitative Aptitude.',
      pattern: 'CBT • 68 Qs (120 Mins)',
      eligibility: 'Graduate (50% Marks)',
      imageurl:
        'https://premierinstitute.co.in/_next/image?url=https%3A%2F%2Fpremierinstitute.co.in%2Fadmin%2Fassets%2Fimages%2Fpages%2Fcat_exam_logo.png&w=256&q=75',
      slug: 'cat-mba',
    },
    {
      name: 'SSC CGL',
      category: 'Government',
      conductingBody: 'Staff Selection Commission',
      nextSession: 'Tier-I & Tier-II',
      overview:
        'Combined Graduate Level recruitment for Group B and C ministries covering Quant, Reasoning, English, and GK.',
      pattern: 'Tier-I & Tier-II CBT',
      eligibility: 'Any Bachelor Degree',
      imageurl:
        'https://upload.wikimedia.org/wikipedia/commons/6/64/Staff_Selection_Commission_Logo.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
      slug: 'ssc-cgl',
    },
    {
      name: 'CUET UG ',
      category: 'University Entrance',
      conductingBody: 'National Testing Agency (NTA)',
      nextSession: 'CUET UG 2027',
      overview:
        'Common University Entrance Test for admission to undergraduate programmes in central, state, deemed, and participating private universities across India.',
      pattern: 'Computer Based Test (CBT) / Hybrid Mode',
      eligibility: 'Class 12 Passed / Appearing Candidates',
      imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloJ2z4U7lR8h7rkGin1tN2Celi-OuCrTkpI6ao2xIq9h0AtL8qRktFgs&s=10',
      slug: 'cuet-ug',
    },
   
  ];

  filteredExamCatalog = computed(() => {
    const q = this.examSearchQuery().trim().toLowerCase();
    if (!q) return this.examCatalog;
    return this.examCatalog.filter(
      (exam) =>
        exam.name.toLowerCase().includes(q) ||
        exam.category.toLowerCase().includes(q) ||
        exam.conductingBody.toLowerCase().includes(q) ||
        exam.overview.toLowerCase().includes(q),
    );
  });

  selectExamSearch(examName: string): void {
    this.examSearchQuery.set(examName);
    document.getElementById('prepare-test')?.scrollIntoView({ behavior: 'smooth' });
  }

  // =========================================================
  // SECTION B STATE: EXAM SPHERE AI MENTOR
  // =========================================================
  aiQuery = signal('');

  quickPrompts = [
    'Explain Electromagnetic Induction in simple terms',
    'How do I balance chemical redox equations?',
    'Give me a shortcut formula for projectile motion',
    'What is the difference between DNA and RNA?',
  ];

  private aiTutorService = inject(AiTutorService);
  private authService = inject(AuthService);
  private examService = inject(ExamService);
  private analyticsService = inject(AnalyticsService);
  private searchEngine = inject(AiSearchEngineService);
  private prepService = inject(PreparationService);
  private feedbackService = inject(FeedbackService);
  private router = inject(Router);

  startExamPreparation(exam: ExamDetail, event?: Event): void {
    if (event) event.stopPropagation();
    const slug = exam.slug || exam.name.toLowerCase().trim().replace(/[^a-z0-9]/g, '-');
    this.prepService.setActiveExam(slug, exam.name, exam.name, exam.category);
    this.router.navigate(['/preparation', slug]);
  }

  currentUser = signal<AuthUser | null>(null);
  studentAnalytics = signal<StudentAnalytics | null>(null);
  activeConversationId = signal<string | undefined>(undefined);
  isAiLoading = signal(false);

  mentorMessages = signal<MentorMessage[]>([
    {
      sender: 'ai',
      text: 'Welcome! Ask any concept doubt, formula derivation, or mock-test strategy question. I will break it down step by step.',
    },
  ]);

  submitAiquery(): void {
    const query = this.aiQuery().trim();
    if (!query || this.isAiLoading()) return;

    // Push student message
    this.mentorMessages.update((msgs) => [
      ...msgs,
      { sender: 'student', text: query },
    ]);
    this.aiQuery.set('');

    this.isAiLoading.set(true);
    this.mentorMessages.update((msgs) => [
      ...msgs,
      { sender: 'ai', text: 'ExamSphere AI Search Engine is finding verified explanations and synthesizing guidance...' },
    ]);

    this.aiTutorService
      .askQuestion({
        question: query,
        conversationId: this.activeConversationId(),
        difficulty: 'intermediate',
      })
      .subscribe({
        next: (res) => {
          this.isAiLoading.set(false);
          if (res?.conversationId) {
            this.activeConversationId.set(res.conversationId);
          }
          this.mentorMessages.update((msgs) => {
            const copy = [...msgs];
            copy[copy.length - 1] = {
              sender: 'ai',
              text: res.answer || 'Concept explained! Ask another question to explore deeper.',
            };
            return copy;
          });
        },
        error: async () => {
          this.isAiLoading.set(false);
          const fallback = await this.searchEngine.searchAnswer(query);
          this.mentorMessages.update((msgs) => {
            const copy = [...msgs];
            copy[copy.length - 1] = {
              sender: 'ai',
              text: fallback.answer,
            };
            return copy;
          });
        },
      });
  }

  selectPrompt(prompt: string): void {
    this.aiQuery.set(prompt);
    this.submitAiquery();
  }

  private generateMentorReply(query: string): string {
    const lower = query.toLowerCase();
    if (lower.includes('electromagnetic')) {
      return '1. Core Idea: Whenever magnetic flux linked with a closed coil changes, an EMF is induced.\n2. Faraday’s Law: e = -dΦ/dt (the minus sign is Lenz’s Law—nature opposes the cause of change).\n3. Exam Tip: Always check whether B (field), A (area), or θ (angle) is changing with time.';
    }
    if (lower.includes('redox')) {
      return 'Step 1: Assign oxidation numbers to identify what is oxidized and reduced.\nStep 2: Split into oxidation and reduction half-reactions.\nStep 3: Balance atoms other than O and H, then add H₂O for Oxygen and H⁺ for Hydrogen.\nStep 4: Equalize electrons and add both halves.';
    }
    if (lower.includes('projectile')) {
      return 'Quick Projectile Shortcuts (level ground):\n• Time of Flight (T) = 2u·sinθ / g\n• Max Height (H) = u²·sin²θ / 2g\n• Range (R) = u²·sin(2θ) / g\n• Trick: R_max occurs at θ = 45°, where R_max = 4H.';
    }
    if (lower.includes('dna') || lower.includes('rna')) {
      return '• Sugar: DNA has Deoxyribose; RNA has Ribose.\n• Bases: DNA uses A, T, G, C; RNA replaces Thymine (T) with Uracil (U).\n• Structure: DNA is double-stranded & stable (genetic storage); RNA is single-stranded & active in protein synthesis.';
    }
    return `Here is how to approach "${query}":\n1. Break the problem into known variables and target units.\n2. Apply the fundamental governing law before plugging in numbers.\n3. Would you like 3 practice PYQs on this exact topic?`;
  }

  // =========================================================
  // SECTION C STATE: WEAKNESS & STRENGTH TOPIC HEATMAP
  // =========================================================
  heatmapSubjects = ['Physics', 'Chemistry', 'Biology', 'Quantitative Aptitude'];
  selectedHeatmapSubject = signal('Physics');

  heatmapData: Record<string, HeatmapTopic[]> = {
    Physics: [
      {
        topic: 'Rotational Mechanics',
        accuracy: 44,
        status: 'Weak',
        weightage: 'High',
        questionsAttempted: 65,
      },
      {
        topic: 'Current Electricity',
        accuracy: 88,
        status: 'Strong',
        weightage: 'High',
        questionsAttempted: 120,
      },
      {
        topic: 'Ray & Wave Optics',
        accuracy: 68,
        status: 'Moderate',
        weightage: 'High',
        questionsAttempted: 82,
      },
      {
        topic: 'Modern Physics',
        accuracy: 91,
        status: 'Strong',
        weightage: 'High',
        questionsAttempted: 110,
      },
    ],
    Chemistry: [
      {
        topic: 'Chemical Equilibrium',
        accuracy: 52,
        status: 'Weak',
        weightage: 'Medium',
        questionsAttempted: 54,
      },
      {
        topic: 'Coordination Compounds',
        accuracy: 84,
        status: 'Strong',
        weightage: 'High',
        questionsAttempted: 95,
      },
      {
        topic: 'Aldehydes & Ketones',
        accuracy: 63,
        status: 'Moderate',
        weightage: 'High',
        questionsAttempted: 78,
      },
      {
        topic: 'Chemical Bonding',
        accuracy: 89,
        status: 'Strong',
        weightage: 'High',
        questionsAttempted: 130,
      },
    ],
    Biology: [
      {
        topic: 'Molecular Basis of Inheritance',
        accuracy: 56,
        status: 'Weak',
        weightage: 'High',
        questionsAttempted: 90,
      },
      {
        topic: 'Human Physiology',
        accuracy: 86,
        status: 'Strong',
        weightage: 'High',
        questionsAttempted: 150,
      },
      {
        topic: 'Plant Kingdom',
        accuracy: 71,
        status: 'Moderate',
        weightage: 'Medium',
        questionsAttempted: 84,
      },
      {
        topic: 'Cell Cycle & Division',
        accuracy: 93,
        status: 'Strong',
        weightage: 'High',
        questionsAttempted: 112,
      },
    ],
    'Quantitative Aptitude': [
      {
        topic: 'Permutation & Combination',
        accuracy: 48,
        status: 'Weak',
        weightage: 'High',
        questionsAttempted: 60,
      },
      {
        topic: 'Percentages & Profit-Loss',
        accuracy: 87,
        status: 'Strong',
        weightage: 'High',
        questionsAttempted: 140,
      },
      {
        topic: 'Time, Speed & Distance',
        accuracy: 72,
        status: 'Moderate',
        weightage: 'Medium',
        questionsAttempted: 96,
      },
      {
        topic: 'Data Interpretation',
        accuracy: 83,
        status: 'Strong',
        weightage: 'High',
        questionsAttempted: 105,
      },
    ],
  };

  activeHeatmapTopics = computed(() => {
    return this.heatmapData[this.selectedHeatmapSubject()] ?? [];
  });

  practiceTopicWithAI(topic: string): void {
    this.aiQuery.set(`Give me key formulas and a 3-question recovery drill for ${topic}`);
    this.submitAiquery();
    document.getElementById('ai-mentor')?.scrollIntoView({ behavior: 'smooth' });
  }

  // =========================================================
  // SECTION D STATE: QUIZ OF THE DAY / DAILY CHALLENGE
  // =========================================================
  dailyChallenges: DailyQuizItem[] = [
    {
      examTag: 'JEE / NEET Physics',
      subject: 'Electrostatics',
      difficulty: 'Moderate',
      question:
        'If the distance between two point charges is doubled and each charge is also doubled, what happens to the electrostatic force between them?',
      options: [
        'It becomes four times',
        'It remains unchanged',
        'It becomes half',
        'It becomes double',
      ],
      correctIndex: 1,
      explanation:
        'By Coulomb’s Law, F = k·(q₁·q₂)/r². Replacing q₁ → 2q₁, q₂ → 2q₂, and r → 2r gives F′ = k·(4q₁q₂)/(4r²) = F. Hence, the force remains unchanged.',
    },
    {
      examTag: 'UPSC / SSC General Studies',
      subject: 'Indian Polity',
      difficulty: 'Easy-Moderate',
      question:
        'Which Constitutional Amendment Act lowered the voting age in India from 21 years to 18 years?',
      options: [
        '42nd Amendment Act',
        '44th Amendment Act',
        '61st Amendment Act',
        '73rd Amendment Act',
      ],
      correctIndex: 2,
      explanation:
        'The 61st Constitutional Amendment Act of 1988 amended Article 326 of the Constitution, reducing the voting age for Lok Sabha and State Assembly elections from 21 to 18 years.',
    },
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Rajarshi Shai',
      role: 'Leader & Full-stack Engineer',
      department: 'Product & Strategy',
      bio: 'Full-stack engineer passionate about building unified AI learning ecosystems for competitive exam aspirants across India.',
      imageUrl: 'https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8=',
      linkedinUrl: 'https://www.linkedin.com/in/rajarshi-shai-71830630b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      githubUrl: 'https://github.com/username',
    },
    {
      name: 'Sagar Dey',
      role: 'Lead Frontend Engineer',
      department: 'AI Tutor & Analytics',
      bio: 'Specializes in adaptive learning algorithms, NCERT/NTA knowledge graphs, and diagnostic topic-heatmap modeling.',
      imageUrl: 'https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8=',
      linkedinUrl: 'https://www.linkedin.com/in/sagar-dey-680601333?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      githubUrl: 'https://github.com/username',
    },
    {
      name: 'Rudranil Banarjee',
      role: 'Frontend ',
      department: 'Design Systems',
      bio: 'Crafts distraction-free, high-speed student interfaces and realistic CBT mock-test environments.',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      linkedinUrl: 'https://www.linkedin.com/in/',
      githubUrl: 'https://github.com/username',
    },
    {
      name: 'Shrima Maity',
      role: 'Frontend Developer',
      department: 'Syllabus & PYQ Curation',
      bio: 'Former JEE/NEET mentor overseeing 15+ years of verified PYQ solutions, weightage analysis, and revision notes.',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      linkedinUrl: 'https://www.linkedin.com/in/shrima-maity-412a683a2?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      githubUrl: 'https://github.com/username',
    },
     {
      name: 'Sovona Dutta',
      role: 'Frontend Developer',
      department: 'AI Tutor & Analytics',
      bio: 'Passionate about creating intuitive user experiences for adaptive learning platforms.',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      linkedinUrl: 'https://www.linkedin.com/in/shovona-dutta-b47389427?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      githubUrl: 'https://github.com/username',
    },
  ];

  currentQuizIdx = signal(0);
  selectedOptionIndex = signal<number | null>(null);
  quizSubmitted = signal(false);
  dailyStreak = signal(7);

  dailyQuiz = computed(() => this.dailyChallenges[this.currentQuizIdx()]);

  selectQuizOption(index: number): void {
    if (!this.quizSubmitted()) {
      this.selectedOptionIndex.set(index);
    }
  }

  submitDailyQuiz(): void {
    if (this.selectedOptionIndex() === null || this.quizSubmitted()) return;
    this.quizSubmitted.set(true);
    if (this.selectedOptionIndex() === this.dailyQuiz().correctIndex) {
      this.dailyStreak.update((s) => s + 1);
    }
  }

  nextDailyChallenge(): void {
    this.selectedOptionIndex.set(null);
    this.quizSubmitted.set(false);
    this.currentQuizIdx.update((idx) => (idx + 1) % this.dailyChallenges.length);
  }

  // =========================================================
  // EXISTING DATA ARRAYS
  // =========================================================
  exams = [
    { name: 'JEE Main & Advanced', category: 'Engineering' },
    { name: 'NEET UG', category: 'Medical' },
    { name: 'UPSC CSE', category: 'Civil Services' },
    { name: 'GATE', category: 'Postgraduate Tech' },
    { name: 'CAT', category: 'Management' },
    { name: 'SSC CGL', category: 'Government' },
    { name: 'CUET UG', category: 'Central Universities' },
    { name: 'IBPS PO', category: 'Banking' },
  ];

  features: Feature[] = [
    {
      id: 1,
      title: 'Smart Syllabus Explorer',
      description:
        'Interactive topic-by-topic syllabus breakdown with weightage analysis and completion tracking.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      route: '/syllabus',
    },
    {
      id: 2,
      title: 'AI Personal Tutor',
      description:
        '24/7 instant doubt resolution with step-by-step explanations tailored to your learning pace.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      route: '/dashboard',
    },
    {
      id: 3,
      title: 'AI Mock Test Generator',
      description:
        'Adaptive full-length and sectional tests matching real exam difficulty and NTA/UPSC patterns.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      route: '/mock-tests',
    },
    {
      id: 4,
      title: 'Previous Year Questions (PYQ)',
      description:
        '15+ years of chapter-wise solved papers with video solutions and trend frequency tags.',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      route: '/pyq-bank',
    },
    {
      id: 5,
      title: 'Smart Study Materials',
      description:
        'AI-condensed revision notes, formula sheets, and mind maps built for rapid recall.',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      route: '/resources',
    },
    {
      id: 6,
      title: 'AI Study Planner',
      description:
        'Dynamic daily timetables that automatically reschedule missed targets before exam day.',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      route: '/study-planner',
    },
    {
      id: 7,
      title: 'Performance Analytics',
      description:
        'Deep accuracy heatmaps, time-per-question metrics, and All-India percentile predictions.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      route: '/dashboard',
    },
    {
      id: 8,
      title: 'AI Quiz Generator',
      description:
        'Generate instant 10-minute micro-quizzes on any weak subtopic or uploaded PDF note.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      route: '/mock-tests',
    },
    {
      id: 9,
      title: 'Exam Updates & Notifications',
      description:
        'Real-time alerts for application forms, admit cards, syllabus changes, and result dates.',
      icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
      route: '/explore-exams',
    },
    {
      id: 10,
      title: 'Multi-Exam Management',
      description:
        'Prepare for multiple overlapping exams seamlessly from one unified student workspace.',
      icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
      route: '/study-planner',
    },
  ];

  comparisons = [
    {
      feature: 'Mock Tests',
      others: 'Static, same test for every student',
      examsphere: 'AI-adaptive tests tailored to your weak areas',
    },
    {
      feature: 'Doubt Solving',
      others: 'Wait hours or days for forum replies',
      examsphere: 'Instant 24/7 AI Personal Tutor with step-by-step logic',
    },
    {
      feature: 'Study Schedule',
      others: 'Rigid PDF timetables that fail if you miss a day',
      examsphere: 'Self-adjusting AI Study Planner',
    },
    {
      feature: 'Exam Switching',
      others: 'Buy separate courses for each exam',
      examsphere: 'Unified Multi-Exam Management dashboard',
    },
    {
      feature: 'PYQ Analysis',
      others: 'Unorganized PDF dumps',
      examsphere: 'Topic-tagged PYQs with AI weightage forecasting',
    },
  ];

  packages: Package[] = [
    {
      name: 'Starter Explorer',
      price: '₹0',
      period: '/ forever',
      description: 'Essential tools to kickstart your exam preparation journey.',
      features: [
        'Smart Syllabus Explorer (1 Exam)',
        '5 AI Mock Tests per month',
        'Last 5 Years PYQ Archive',
        'Exam Updates & Notifications',
      ],
      highlighted: false,
    },
    {
      name: 'Pro Aspirant AI',
      price: '₹499',
      period: '/ month',
      badge: 'Most Popular',
      description: 'Complete AI-powered preparation suite for serious rankers.',
      features: [
        'Unlimited AI Personal Tutor Doubts',
        'Unlimited AI Mock & Quiz Generator',
        '15+ Years Solved PYQs + Smart Notes',
        'Dynamic AI Study Planner & Analytics',
        'Up to 3 Exams in Multi-Exam Workspace',
      ],
      highlighted: true,
    },
    {
      name: 'Ultimate Ranker Pass',
      price: '₹3,999',
      period: '/ year',
      badge: 'Best Value',
      description: 'All-access annual pass across all competitive categories.',
      features: [
        'Everything in Pro Aspirant AI',
        'All Exams Unlocked (JEE, NEET, UPSC, GATE, CAT & more)',
        '1-on-1 AI Performance Strategy Reports',
        'Downloadable Offline Revision Mind Maps',
        'Priority Early Access to New AI Tools',
      ],
      highlighted: false,
    },
  ];

  feedbacks: Feedback[] = [
    {
      name: 'Aarav Sharma',
      exam: 'JEE Advanced',
      rank: 'AIR 142',
      quote:
        'The AI Mock Test Generator pinpointed my Rotational Mechanics weakness two months before the exam. My accuracy jumped from 64% to 91%.',
      avatar: 'AS',
    },
    {
      name: 'Priya Nair',
      exam: 'NEET UG',
      rank: '695 / 720',
      quote:
        'Instead of wasting hours searching for NCERT line-by-line questions, the AI Quiz Generator created custom biology drills every night.',
      avatar: 'PN',
    },
    {
      name: 'Rohan Das',
      exam: 'GATE CSE',
      rank: 'AIR 58',
      quote:
        'Managing college semesters alongside GATE prep was tough until I started using the AI Study Planner. It adjusted my daily goals automatically.',
      avatar: 'RD',
    },
  ];

  workStages = [
    {
      step: 'Stage 01',
      title: 'Select Target Exam',
      description:
        'Pick one or multiple exams (JEE, NEET, UPSC, GATE, CAT, SSC) to initialize a dedicated workspace with official patterns and eligibility rules.',
      output: 'Custom Exam Workspace',
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      isFinal: false,
    },
    {
      step: 'Stage 02',
      title: 'AI Roadmap & Syllabus',
      description:
        'Explore weightage-ranked topics and generate an adaptive daily study timetable that auto-adjusts whenever you miss a target.',
      output: 'Dynamic Study Schedule',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      isFinal: false,
    },
    {
      step: 'Stage 03',
      title: 'Learn & Solve Doubts',
      description:
        'Study AI-condensed notes, formula sheets, and mind maps while resolving concept doubts 24/7 with the ExamSphere AI Personal Tutor.',
      output: 'Instant Concept Clarity',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      isFinal: false,
    },
    {
      step: 'Stage 04',
      title: 'PYQs & Adaptive Mocks',
      description:
        'Practice 15+ years of chapter-wise Previous Year Questions, daily challenges, and real CBT-interface mock tests calibrated to exam difficulty.',
      output: 'Real-Exam Speed & Stamina',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      isFinal: false,
    },
    {
      step: 'Stage 05',
      title: 'Heatmap & AI Recovery',
      description:
        'Track your Readiness Index and topic-level accuracy heatmap while AI auto-builds targeted recovery drills for every red-zone chapter.',
      output: 'Continuous Rank Improvement',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      isFinal: true,
    },
  ];

  corePrinciples = [
    {
      num: '01',
      title: 'Clarity Over Rote Memorization',
      tag: 'Pedagogy First',
      badgeClass: 'bg-[#315FEA]/10 text-[#315FEA] group-hover:bg-[#315FEA] group-hover:text-white',
      tagColor: 'text-[#315FEA]',
      description:
        'Every AI explanation breaks problems down into first principles, step-by-step logic, and visual intuition—so you master concepts rather than memorizing answers.',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    },
    {
      num: '02',
      title: 'Syllabus & PYQ Grounded Accuracy',
      tag: 'Verified Content',
      badgeClass: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
      tagColor: 'text-emerald-600',
      description:
        'Our AI models, mock tests, and notes are strictly anchored to official NTA, UPSC, GATE, and university syllabi—eliminating off-topic noise and unverified shortcuts.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
    {
      num: '03',
      title: 'Adaptive Personalization',
      tag: 'Tailored to You',
      badgeClass: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      tagColor: 'text-purple-600',
      description:
        'No two aspirants share the same weak spots. Your study timetable, mock difficulty, and recovery drills dynamically adapt to your real-time accuracy and speed.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      num: '04',
      title: 'Evidence-Driven Progress',
      tag: 'Actionable Analytics',
      badgeClass: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white',
      tagColor: 'text-amber-600',
      description:
        'Replace guesswork with transparent diagnostics. Chapter-level heatmaps, time-per-question metrics, and readiness scores show exactly where your next 20 marks will come from.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
    {
      num: '05',
      title: 'Equal Access for Every Aspirant',
      tag: 'Inclusive by Design',
      badgeClass: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
      tagColor: 'text-sky-600',
      description:
        'High-quality mentorship shouldn’t depend on city or budget. Essential syllabi, PYQs, daily challenges, and AI guidance remain accessible from any device, anywhere.',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      num: '06',
      title: 'Distraction-Free & Privacy-Safe',
      tag: 'Student Trust',
      badgeClass: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
      tagColor: 'text-rose-600',
      description:
        'Zero intrusive ads, zero selling of student performance data, and a clean unified workspace built strictly to protect your focus during peak exam months.',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    },
  ];

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentImageIndex.update((idx) => (idx + 1) % this.heroImages.length);
    }, 5000);

    // Fetch latest 3 verified student feedbacks from database
    this.loadLatestFeedbacks();

    // Fetch dynamic examinations from backend
    this.examService.getExams({ limit: 12 }).subscribe({
      next: ({ exams }) => {
        if (exams && exams.length > 0) {
          const apiCatalog: ExamDetail[] = exams.map(e => ({
            name: e.name,
            category: e.category,
            conductingBody: e.conductingBody,
            nextSession: e.examDate ? new Date(e.examDate).toLocaleDateString() : 'Upcoming Session',
            overview: e.overview,
            pattern: e.pattern || `${e.mode || 'CBT'} Pattern`,
            eligibility: e.eligibility || e.qualification,
            slug: e.slug
          }));
          const existingSlugs = new Set(apiCatalog.map(x => x.slug || x.name.toLowerCase()));
          const fallbacks = this.examCatalog.filter(x => !existingSlugs.has(x.slug || x.name.toLowerCase()));
          this.examCatalog = [...apiCatalog, ...fallbacks];
        }
      },
      error: () => {
        // Fallback catalog remains active
      }
    });

    // Load authenticated user and their live analytics
    const token = this.authService.getToken();
    const user = this.authService.getUser();
    if (user) {
      this.currentUser.set(user);
    }

    if (token) {
      this.analyticsService.getDashboardAnalytics().subscribe({
        next: (analytics) => {
          if (analytics) {
            this.studentAnalytics.set(analytics);
            if (analytics.subjectBreakdown && analytics.subjectBreakdown.length > 0) {
              const realHeatmap: Record<string, HeatmapTopic[]> = {};
              analytics.subjectBreakdown.forEach(sub => {
                realHeatmap[sub.subject] = [
                  {
                    topic: `${sub.subject} Overall`,
                    accuracy: sub.accuracy,
                    status: sub.status === 'Needs Practice' ? 'Weak' : sub.status,
                    weightage: 'High',
                    questionsAttempted: sub.questionsAttempted
                  }
                ];
              });
              this.heatmapData = { ...this.heatmapData, ...realHeatmap };
              const currentSubjects = new Set(this.heatmapSubjects);
              analytics.subjectBreakdown.forEach(s => currentSubjects.add(s.subject));
              this.heatmapSubjects = Array.from(currentSubjects);
            }
          }
        },
        error: () => {
          // Keep default simulated heatmap for exploration
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setHeroImage(index: number): void {
    this.currentImageIndex.set(index);
  }

  loadLatestFeedbacks(): void {
    this.feedbackService.getLatestFeedback(3).subscribe({
      next: (items) => {
        if (items && items.length > 0) {
          this.feedbacks = items.map((f) => ({
            name: f.name,
            exam: f.exam,
            rank: f.rankOrScore || 'Verified Aspirant',
            quote: f.comment,
            avatar: f.avatar || 'ST',
          }));
        }
      },
      error: () => {
        // Fallback reviews remain active
      },
    });
  }
}
