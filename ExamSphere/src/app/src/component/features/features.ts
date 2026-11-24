import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface FeatureCard {
  number: string;
  title: string;
  category: 'Intelligence' | 'Assessment' | 'Planning' | 'Revision' | 'Operations';
  badge: string;
  description: string;
  highlights: string[];
  ctaLink: string;
  ctaText: string;
  iconBg: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class Features {
  selectedCategory = 'All';

  categories = [
    'All',
    'Intelligence',
    'Assessment',
    'Planning',
    'Revision',
    'Operations'
  ];

  featuresList: FeatureCard[] = [
    {
      number: '01',
      title: 'Universal Examination Database',
      category: 'Operations',
      badge: 'Centralized Repository',
      description: 'Verified repository of national, state, university, and international examinations containing eligibility, exam patterns, fees, and application links.',
      highlights: ['1,000+ Verified Examinations', 'Multi-level categorization', 'Official notification change alerts'],
      ctaLink: '/explore-exams',
      ctaText: 'Explore Exam Directory',
      iconBg: 'bg-blue-600'
    },
    {
      number: '02',
      title: 'AI Examination Mentor',
      category: 'Intelligence',
      badge: '24/7 Academic Tutor',
      description: 'Conversational AI that answers exam-related academic doubts, derives complex formulas, and customizes explanations to your learning difficulty.',
      highlights: ['Syllabus-grounded answers', 'Step-by-step logic breakdown', 'Continuous multi-turn memory'],
      ctaLink: '/ai-mentor',
      ctaText: 'Chat With AI Mentor',
      iconBg: 'bg-indigo-600'
    },
    {
      number: '03',
      title: 'Personalized Study Planner',
      category: 'Planning',
      badge: 'Dynamic Scheduling',
      description: 'Automatically designs daily, weekly, and monthly preparation schedules based on your target exam, available hours, and performance trends.',
      highlights: ['Self-adjusting timetable', 'Activity-balanced study blocks', 'Target completion tracker'],
      ctaLink: '/study-planner',
      ctaText: 'View Study Planner',
      iconBg: 'bg-sky-600'
    },
    {
      number: '04',
      title: 'Syllabus & Learning Roadmap',
      category: 'Planning',
      badge: 'Hierarchical Mastery',
      description: 'Breaks down every exam syllabus into subjects, chapters, and subtopics with estimated hours, importance levels, and topic completion tracking.',
      highlights: ['High/Medium/Low yield tags', 'Estimated study hours', 'Interactive topic checklists'],
      ctaLink: '/syllabus',
      ctaText: 'Open Syllabus Explorer',
      iconBg: 'bg-emerald-600'
    },
    {
      number: '05',
      title: 'AI Mock Test & Question Generator',
      category: 'Assessment',
      badge: 'Adaptive Testing',
      description: 'Create realistic examination-pattern mock tests with configurable negative marking, live countdown timers, instant scoring, and answer keys.',
      highlights: ['Official CBT interface', 'Real-time countdown timer', 'Instant score & accuracy analysis'],
      ctaLink: '/mock-tests',
      ctaText: 'Take a Mock Test',
      iconBg: 'bg-purple-600'
    },
    {
      number: '06',
      title: 'Previous-Year Question Bank (PYQ)',
      category: 'Assessment',
      badge: '15+ Years Archive',
      description: 'Searchable database of solved examination papers organized by year, subject, and topic with verified derivations and step-by-step answers.',
      highlights: ['Search by keyword & chapter', 'Year & session filtering', 'Official verified solutions'],
      ctaLink: '/pyq-bank',
      ctaText: 'Search Solved PYQs',
      iconBg: 'bg-amber-600'
    },
    {
      number: '07',
      title: 'Performance Analytics & Readiness Index',
      category: 'Intelligence',
      badge: 'Data Diagnostics',
      description: 'Diagnostic metrics analyzing accuracy, time per question, mistake patterns, and syllabus coverage to calculate an All-India readiness score.',
      highlights: ['Weak vs strong topic heatmaps', 'Accuracy by subject', 'Readiness index calculation'],
      ctaLink: '/dashboard',
      ctaText: 'Inspect Analytics',
      iconBg: 'bg-rose-600'
    },
    {
      number: '08',
      title: 'Smart Revision System (2-3-5-7 Method)',
      category: 'Revision',
      badge: 'Spaced Recall',
      description: 'Spaced-repetition flashcards, mind maps, formula sheets, and micro-quizzes engineered to reduce memory decay and optimize long-term retention.',
      highlights: ['2-3-5-7 spaced repetition', 'Interactive flashcard flip', 'High-yield formula cards'],
      ctaLink: '/resources',
      ctaText: 'Access Smart Revision',
      iconBg: 'bg-teal-600'
    },
    {
      number: '09',
      title: 'Eligibility Checker & Exam Discovery',
      category: 'Operations',
      badge: 'Career Wizard',
      description: 'Step-by-step recommendation engine that suggests suitable examinations based on student qualifications, age, and academic interests.',
      highlights: ['Interactive 3-step wizard', 'Direct official links', 'Category-based matching'],
      ctaLink: '/explore-exams',
      ctaText: 'Try Finder Wizard',
      iconBg: 'bg-cyan-600'
    },
    {
      number: '10',
      title: 'Focus & Productivity Lab (Pomodoro)',
      category: 'Planning',
      badge: 'Distraction-Free',
      description: 'Integrated digital timers, 25-minute deep work blocks, 5-minute rest intervals, daily streak monitors, and realistic routine management.',
      highlights: ['Deep work / break toggles', 'Daily streak counter', 'Burnout prevention reminders'],
      ctaLink: '/study-planner',
      ctaText: 'Launch Focus Timer',
      iconBg: 'bg-orange-600'
    },
    {
      number: '11',
      title: 'Multilingual AI Tutoring',
      category: 'Intelligence',
      badge: 'Inclusive Learning',
      description: 'Multilingual concept teaching supporting English, Hindi, and regional languages for accessible competitive preparation nationwide.',
      highlights: ['Instant language switching', 'Simple vernacular explanations', 'Bilingual question stems'],
      ctaLink: '/resources',
      ctaText: 'Explore Multilingual Lab',
      iconBg: 'bg-violet-600'
    },
    {
      number: '12',
      title: 'Enterprise Security & Verification',
      category: 'Operations',
      badge: 'Data Protection',
      description: 'Robust authentication, role-based access control, cryptographic password hashing, rate limiting, and source-verified academic information.',
      highlights: ['JWT session management', 'Bcrypt password hashing', 'Administrative review pipeline'],
      ctaLink: '/auth',
      ctaText: 'Sign In / Register',
      iconBg: 'bg-slate-700'
    }
  ];

  get filteredFeatures(): FeatureCard[] {
    if (this.selectedCategory === 'All') return this.featuresList;
    return this.featuresList.filter(f => f.category === this.selectedCategory);
  }
}
