import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FeedbackService, FeedbackItem } from '../../../core/services/feedback.service';
import { ToastService } from '../../../core/services/toast.service';
import { AuthService } from '../../../core/services/auth.service/auth.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements OnInit {
  private feedbackService = inject(FeedbackService);
  private toastService = inject(ToastService);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  activeFaqIndex: number | null = 0;
  selectedCategory = signal<string>('All');
  isLoadingFeedbacks = signal<boolean>(false);
  isSubmitting = signal<boolean>(false);

  feedbackForm!: FormGroup;
  selectedRating = 5;

  // Stream Highlights
  streams = [
    { name: 'Engineering', count: '110+ Exams', icon: '⚡', examples: 'GATE, JEE Main & Advanced, BITSAT, VITEEE' },
    { name: 'Medical', count: '65+ Exams', icon: '🩺', examples: 'NEET UG, NEET PG, INI-CET, FMGE, AIAPGET' },
    { name: 'Civil Services', count: '120+ Exams', icon: '🏛️', examples: 'UPSC CSE, IFS, State PSCs (UPPSC, BPSC, MPSC)' },
    { name: 'Banking & Finance', count: '85+ Exams', icon: '🏦', examples: 'SBI PO, IBPS PO, RBI Grade B, SEBI, NABARD' },
    { name: 'Management', count: '50+ Exams', icon: '📊', examples: 'CAT, XAT, SNAP, NMAT, CMAT, MAT' },
    { name: 'Defence & Military', count: '75+ Exams', icon: '🎖️', examples: 'NDA & NA, CDS, AFCAT, INET, SSB Interview' },
    { name: 'Law & Judiciary', count: '45+ Exams', icon: '⚖️', examples: 'CLAT UG/PG, AILET, State Judicial Services' },
    { name: 'Teaching & Science', count: '90+ Exams', icon: '🎓', examples: 'UGC-NET, CSIR-NET, CTET, IIT JAM, JEST' }
  ];

  // Feedback Categories
  feedbackCategories = ['All', 'Testimonial', 'Academic Review', 'Feature Request', 'General'];

  // Live Database Feedbacks + Fallbacks
  feedbacks: FeedbackItem[] = [
    {
      name: 'Aarav Sharma',
      exam: 'JEE Advanced',
      rankOrScore: 'AIR 142',
      rating: 5,
      category: 'Testimonial',
      comment: 'The AI Mock Test Generator pinpointed my Rotational Mechanics weakness two months before the exam. My accuracy jumped from 64% to 91%.',
      avatar: 'AS'
    },
    {
      name: 'Priya Nair',
      exam: 'NEET UG',
      rankOrScore: '695 / 720',
      rating: 5,
      category: 'Testimonial',
      comment: 'Instead of wasting hours searching for NCERT line-by-line questions, the AI Quiz Generator created custom biology drills every night.',
      avatar: 'PN'
    },
    {
      name: 'Rohan Das',
      exam: 'GATE CSE',
      rankOrScore: 'AIR 58',
      rating: 5,
      category: 'Testimonial',
      comment: 'Managing college semesters alongside GATE prep was tough until I started using the AI Study Planner. It adjusted my daily goals automatically.',
      avatar: 'RD'
    },
    {
      name: 'Sneha Mukherjee',
      exam: 'UPSC CSE',
      rankOrScore: 'Prelims Qualified',
      rating: 5,
      category: 'Academic Review',
      comment: 'The Indian Polity flashcards and daily editorial summaries gave me unprecedented clarity. The AI Tutor explains constitutional articles better than offline coaching.',
      avatar: 'SM'
    },
    {
      name: 'Ananya Iyer',
      exam: 'CAT',
      rankOrScore: '99.4 Percentile',
      rating: 5,
      category: 'Testimonial',
      comment: 'The DILR section caselets were identical in difficulty to actual slot papers. The detailed time-per-question analytics changed my test-taking strategy completely.',
      avatar: 'AI'
    },
    {
      name: 'Vikramaditya Singh',
      exam: 'SSC CGL',
      rankOrScore: 'Income Tax Inspector',
      rating: 5,
      category: 'Testimonial',
      comment: 'The Advance Maths formulas and shift-wise PYQ explanations helped me score 180+ in Tier-II. ExamSphere is a game changer for government job aspirants.',
      avatar: 'VS'
    }
  ];

  faqs = [
    {
      q: 'How does ExamSphere AI verify examination dates and syllabuses?',
      a: 'All examination dates, eligibility rules, and syllabuses are directly cross-checked against official gazette notifications and testing agency portals (such as UPSC, NTA, IIT JAB, IIMs, and SSC). Syllabuses are refreshed on every official notification update.'
    },
    {
      q: 'Can the AI Mentor hallucinate answers or generate unverified formulas?',
      a: 'Our AI Tutor operates under strict academic grounding instructions and system prompts that restrict answers to accredited competitive examination curricula. If uncertain about an emerging rule change, the system explicitly advises checking the official agency link.'
    },
    {
      q: 'Does ExamSphere AI support preparation for multiple exams at once?',
      a: 'Yes! Our multi-exam preparation architecture maps overlapping subjects (such as General Studies, Quantitative Aptitude, and Engineering Mathematics) across targets like GATE, UPSC, and SSC so you never duplicate study efforts.'
    },
    {
      q: 'How are standard textbooks and study materials sourced?',
      a: 'All textbooks, formula sheets, and study materials in our Universal Resource Library are compiled from verified standard academic works (e.g., CLRS, Silberschatz & Galvin, NCERT, M. Laxmikanth, Dr. H.C. Verma) with direct citations and open-access links.'
    },
    {
      q: 'Is ExamSphere AI free for students?',
      a: 'Core examination discovery, syllabus exploration, basic AI mentoring, and essential PYQs are completely free. Advanced continuous adaptive mock test generation and detailed 1-on-1 strategy reports are accessible via flexible aspirant passes.'
    },
    {
      q: 'How can I submit feedback, report an inaccuracy, or suggest a new feature?',
      a: 'Use the interactive feedback section below on this page. Every student submission is reviewed by our academic engineering team and reflected across our community dashboard.'
    }
  ];

  ngOnInit(): void {
    this.initForm();
    this.loadFeedbacks();
  }

  initForm(): void {
    const user = this.authService.getUser();
    this.feedbackForm = this.fb.group({
      name: [user ? user.name : '', [Validators.required, Validators.minLength(2)]],
      email: [user ? user.email : '', [Validators.email]],
      exam: ['JEE Advanced', [Validators.required]],
      rankOrScore: [''],
      category: ['Testimonial', [Validators.required]],
      comment: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  loadFeedbacks(): void {
    this.isLoadingFeedbacks.set(true);
    this.feedbackService.getAllFeedback({ limit: 20 }).subscribe({
      next: ({ feedbacks }) => {
        this.isLoadingFeedbacks.set(false);
        if (feedbacks && feedbacks.length > 0) {
          // Merge with fallbacks, keeping uniques by name + exam
          const apiKeys = new Set(feedbacks.map(f => `${f.name}_${f.exam}`.toLowerCase()));
          const fallbacks = this.feedbacks.filter(f => !apiKeys.has(`${f.name}_${f.exam}`.toLowerCase()));
          this.feedbacks = [...feedbacks, ...fallbacks];
        }
      },
      error: () => {
        this.isLoadingFeedbacks.set(false);
        // Fallback remains active
      }
    });
  }

  filterFeedbacks(cat: string): void {
    this.selectedCategory.set(cat);
  }

  get filteredFeedbacks(): FeedbackItem[] {
    const cat = this.selectedCategory();
    if (cat === 'All') {
      return this.feedbacks;
    }
    return this.feedbacks.filter(f => f.category === cat);
  }

  setRating(rating: number): void {
    this.selectedRating = rating;
  }

  submitFeedback(): void {
    if (this.feedbackForm.invalid) {
      this.feedbackForm.markAllAsTouched();
      this.toastService.warning('Please complete the required fields with at least 10 characters.');
      return;
    }

    this.isSubmitting.set(true);
    const formVals = this.feedbackForm.value;

    const payload = {
      name: formVals.name,
      email: formVals.email || undefined,
      exam: formVals.exam,
      rankOrScore: formVals.rankOrScore || 'Aspirant',
      rating: this.selectedRating,
      category: formVals.category,
      comment: formVals.comment
    };

    this.feedbackService.submitFeedback(payload).subscribe({
      next: (savedItem) => {
        this.isSubmitting.set(false);
        this.toastService.success('Thank you! Your feedback has been published to the community.');
        
        // Prepend to current feedbacks list immediately
        this.feedbacks = [savedItem, ...this.feedbacks];

        // Reset form keeping name if logged in
        const user = this.authService.getUser();
        this.feedbackForm.reset({
          name: user ? user.name : '',
          email: user ? user.email : '',
          exam: 'JEE Advanced',
          rankOrScore: '',
          category: 'Testimonial',
          comment: ''
        });
        this.selectedRating = 5;
      },
      error: (err) => {
        this.isSubmitting.set(false);
        this.toastService.error(err?.error?.message || 'Could not submit feedback. Please try again.');
      }
    });
  }

  toggleFaq(index: number): void {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }
}
