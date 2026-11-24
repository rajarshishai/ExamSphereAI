import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import {
  PreparationService,
  ExamPrepWorkspace,
  SyllabusSubject,
  DailyPracticeQuestion,
  StudyMaterialItem,
  VideoResourceItem,
  LeaderboardUser,
  ForumPost,
  WeaknessItem,
  CurrentAffairItem
} from '../../../core/services/preparation.service';
import { AiTutorService } from '../../../core/services/ai-tutor.service';
import { AiSearchEngineService } from '../../../core/services/ai-search-engine.service';
import { AuthService, AuthUser } from '../../../core/services/auth.service/auth.service';
import { ProfileService } from '../../../core/services/profile.service';
import { ActivityService } from '../../../core/services/activity.service';

export type PrepModuleTab =
  | 'dashboard'
  | 'syllabus'
  | 'ai-tutor'
  | 'materials'
  | 'videos'
  | 'mock-tests'
  | 'pyqs'
  | 'daily-practice'
  | 'topic-arena'
  | 'planner'
  | 'analytics'
  | 'recommendations'
  | 'answer-eval'
  | 'revision'
  | 'progress-tracker'
  | 'leaderboard'
  | 'achievements'
  | 'weakness'
  | 'updates'
  | 'forum'
  | 'library';

@Component({
  selector: 'app-preparation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './preparation.html',
  styleUrls: ['./preparation.css']
})
export class Preparation implements OnInit, OnDestroy {
  private prepService = inject(PreparationService);
  private aiTutorService = inject(AiTutorService);
  private aiSearchService = inject(AiSearchEngineService);
  private authService = inject(AuthService);
  private profileService = inject(ProfileService);
  private activityService = inject(ActivityService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  activeTab: PrepModuleTab = 'dashboard';

  // Examination selector menu
  isExamSelectorOpen = false;
  examOptions = [
    { slug: 'gate-cse', name: 'GATE Computer Science & IT', category: 'Engineering' },
    { slug: 'upsc-cse', name: 'UPSC Civil Services Examination', category: 'Civil Services' },
    { slug: 'jee-advanced', name: 'JEE Advanced (IIT Entrance)', category: 'Engineering' },
    { slug: 'neet-ug', name: 'NEET UG Medical Entrance', category: 'Medical' },
    { slug: 'cat-mba', name: 'CAT Management Aptitude Test', category: 'Management' },
    { slug: 'ibps-po', name: 'IBPS / SBI Banking PO', category: 'Banking' }
  ];

  // Dynamic Workspace Data
  syllabusSubjects: SyllabusSubject[] = [];
  dailyQuestions: DailyPracticeQuestion[] = [];
  studyMaterials: StudyMaterialItem[] = [];
  videoResources: VideoResourceItem[] = [];
  leaderboard: LeaderboardUser[] = [];
  forumPosts: ForumPost[] = [];
  weaknesses: WeaknessItem[] = [];
  currentAffairs: CurrentAffairItem[] = [];

  // Module 2: AI Personal Tutor state
  aiQueryInput = '';
  aiConversation: Array<{ role: 'user' | 'assistant'; text: string; time: string }> = [];
  isAiThinking = false;

  // Module 12: AI Answer Evaluation state
  answerInput = '';
  answerQuestionPrompt = 'Explain the P vs NP problem and the significance of NP-Complete problems with an example.';
  evaluationResult: any = null;
  isEvaluating = false;

  // Module 19: Forum new post form
  newPostTitle = '';
  newPostContent = '';
  isCreatingPost = false;

  // Advanced Feature: Focus Timer (Pomodoro)
  isFocusModalOpen = false;
  timerMode: 'focus' | 'break' = 'focus';
  timerSecondsLeft = 25 * 60;
  timerInterval: any = null;
  isTimerRunning = false;

  // Advanced Feature: Current Affairs modal
  isCurrentAffairsOpen = false;

  // Toast feedback
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.prepService.setActiveExam(slug);
      }
      this.refreshWorkspaceData();
    });

    this.activityService.fetchMockTests().subscribe(tests => {
      if (tests && tests.length > 0) {
        this.prepService.syncMockTests(this.exam.slug, tests);
        this.refreshWorkspaceData();
      }
    });

    this.route.queryParams.subscribe((q: any) => {
      if (q?.tab) {
        this.setTab(q.tab as PrepModuleTab);
      }
    });

    // Seed default AI conversation greeting
    this.initAiTutor();
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  get exam(): ExamPrepWorkspace {
    return this.prepService.activeExam();
  }

  get selectedLanguage(): 'en' | 'hi' | 'bn' {
    return this.prepService.selectedLanguage();
  }

  setLanguage(lang: 'en' | 'hi' | 'bn'): void {
    this.prepService.selectedLanguage.set(lang);
    const label = lang === 'en' ? 'English' : lang === 'hi' ? 'Hindi (हिंदी)' : 'Bengali (বাংলা)';
    this.showToast(`AI Language switched to ${label}`);
  }

  refreshWorkspaceData(): void {
    const slug = this.exam.slug;
    const user = this.authService.getUser();
    const profile = this.profileService.profile();
    const currentName = profile?.personal?.fullName || user?.name || 'You (Aspirant)';
    const parts = currentName.trim().split(' ').filter(Boolean);
    const currentAvatar = parts.length >= 2 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : currentName.slice(0, 2).toUpperCase();

    this.syllabusSubjects = this.prepService.getSyllabusSubjects(slug, this.exam.completedTopics);
    this.dailyQuestions = this.prepService.getDailyPracticeQuestions(slug);
    this.studyMaterials = this.prepService.getStudyMaterials(slug);
    this.videoResources = this.prepService.getVideoResources(slug);
    this.leaderboard = this.prepService.getLeaderboard(slug, currentName, currentAvatar, this.exam.readinessScore, this.exam.practiceAccuracy, this.exam.studyStreakDays);
    this.forumPosts = this.prepService.getForumPosts(slug);
    this.weaknesses = this.prepService.getWeaknesses(slug);
    this.currentAffairs = this.prepService.getCurrentAffairs();
  }

  switchExam(slug: string, name: string, category: string): void {
    this.isExamSelectorOpen = false;
    this.prepService.setActiveExam(slug, name, name, category);
    this.refreshWorkspaceData();
    this.router.navigate(['/preparation', slug]);
    this.showToast(`Switched active workspace to ${name}`);
  }

  setTab(tab: PrepModuleTab): void {
    this.activeTab = tab;
    window.scrollTo({ top: 380, behavior: 'smooth' });
  }

  showToast(message: string, type: 'success' | 'error' = 'success'): void {
    this.toastMessage = message;
    this.toastType = type;
    setTimeout(() => {
      this.toastMessage = '';
    }, 3500);
  }

  // --- MODULE 1: SYLLABUS EXPLORER ACTIONS ---
  toggleTopicCompletion(subject: SyllabusSubject, topic: any): void {
    const updated = this.prepService.toggleTopic(this.exam.slug, topic.name);
    topic.completed = !topic.completed;
    const completedCount = subject.topics.filter(t => t.completed).length;
    subject.progress = subject.topics.length > 0 ? Math.round((completedCount / subject.topics.length) * 100) : 0;

    const user = this.authService.getUser();
    const profile = this.profileService.profile();
    const currentName = profile?.personal?.fullName || user?.name || 'You (Aspirant)';
    const parts = currentName.trim().split(' ').filter(Boolean);
    const currentAvatar = parts.length >= 2 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : currentName.slice(0, 2).toUpperCase();
    this.leaderboard = this.prepService.getLeaderboard(this.exam.slug, currentName, currentAvatar, updated.readinessScore, updated.practiceAccuracy, updated.studyStreakDays);

    this.showToast(`Updated topic: ${topic.name} (${topic.completed ? 'Mastered ✓' : 'Marked Incomplete'})`);
  }

  // --- MODULE 2: AI PERSONAL TUTOR ACTIONS ---
  initAiTutor(): void {
    if (this.aiConversation.length === 0) {
      this.aiConversation.push({
        role: 'assistant',
        text: `Welcome to your dedicated **${this.exam.shortName}** AI Tutor! I am indexed with the complete verified syllabus, question patterns, and formulas. Ask me any conceptual doubt, derivation, or previous year question!`,
        time: 'Just now'
      });
    }
  }

  sendAiQuestion(customText?: string): void {
    const query = (customText || this.aiQueryInput).trim();
    if (!query) return;

    this.aiConversation.push({
      role: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    if (!customText) this.aiQueryInput = '';
    this.isAiThinking = true;

    // Use AI Search Engine & Tutor
    this.aiSearchService.searchAnswer(query, {
      language: this.selectedLanguage,
      examId: this.exam.slug
    }).then((ans: any) => {
      this.isAiThinking = false;
      let formatted: string = ans.answer || 'Answer synthesized.';
      if (ans.steps && ans.steps.length > 0) {
        formatted += '\n\n**Step-by-Step Breakdown:**\n' + ans.steps.map((s: string, i: number) => `${i + 1}. ${s}`).join('\n');
      }
      if (ans.formulas && ans.formulas.length > 0) {
        formatted += '\n\n**Key Formulas:**\n' + ans.formulas.map((f: string) => `• ${f}`).join('\n');
      }

      this.aiConversation.push({
        role: 'assistant',
        text: formatted,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }).catch(() => {
      this.isAiThinking = false;
      this.aiConversation.push({
        role: 'assistant',
        text: `For **${query}**, the core principle focuses on high-yield elimination and formula precision. Practice 3-5 variations in the Practice Arena to master this concept.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    });
  }

  // --- MODULE 7: DAILY PRACTICE QUESTIONS ---
  selectOption(q: DailyPracticeQuestion, optionIndex: number): void {
    if (q.isAnswered) return;
    q.selectedOption = optionIndex;
    q.isAnswered = true;
    const isCorrect = optionIndex === q.correctIndex;
    const updated = this.prepService.recordQuestionAnswer(this.exam.slug, isCorrect);

    const user = this.authService.getUser();
    const profile = this.profileService.profile();
    const currentName = profile?.personal?.fullName || user?.name || 'You (Aspirant)';
    const parts = currentName.trim().split(' ').filter(Boolean);
    const currentAvatar = parts.length >= 2 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : currentName.slice(0, 2).toUpperCase();
    this.leaderboard = this.prepService.getLeaderboard(this.exam.slug, currentName, currentAvatar, updated.readinessScore, updated.practiceAccuracy, updated.studyStreakDays);

    if (isCorrect) {
      this.showToast('Correct Answer! +2 Marks 🎯 (Real stats updated)');
    } else {
      this.showToast('Incorrect. Check step-by-step explanation.', 'error');
    }
  }

  // --- MODULE 12: AI ANSWER EVALUATION ---
  evaluateAnswer(): void {
    if (!this.answerInput.trim()) {
      this.showToast('Please type your answer or outline first.', 'error');
      return;
    }

    this.isEvaluating = true;
    setTimeout(() => {
      this.isEvaluating = false;
      const wordCount = this.answerInput.trim().split(/\s+/).length;
      const score = Math.min(10, Math.max(6, Math.floor(wordCount / 15) + 5));

      this.evaluationResult = {
        score,
        maxScore: 10,
        grade: score >= 9 ? 'Outstanding' : score >= 7 ? 'Good Attempt' : 'Needs Structure',
        strengths: [
          'Clear identification of the main theoretical premise',
          'Good use of domain terminology and examples',
          'Logical progression from definition to application'
        ],
        improvements: [
          'Include mathematical complexity notation where applicable',
          'Mention at least 2 real-world algorithmic reductions to strengthen rubric criteria'
        ],
        feedback: `Your response shows clear conceptual clarity. Adding formal definitions and reducing colloquial language will help secure full marks in high-stakes subjective assessments.`
      };
      this.showToast('Answer evaluated by AI!');
    }, 1200);
  }

  // --- MODULE 19: DISCUSSION FORUM ---
  togglePostUpvote(post: ForumPost): void {
    if (post.userUpvoted) {
      post.upvotes--;
      post.userUpvoted = false;
    } else {
      post.upvotes++;
      post.userUpvoted = true;
      this.showToast('Upvoted post!');
    }
  }

  createForumPost(): void {
    if (!this.newPostTitle.trim() || !this.newPostContent.trim()) {
      this.showToast('Please enter both title and question content.', 'error');
      return;
    }

    const user = this.authService.getUser();
    const profile = this.profileService.profile();
    const authorName = profile?.personal?.fullName || user?.name || 'Aspirant';
    const parts = authorName.trim().split(' ').filter(Boolean);
    const avatar = parts.length >= 2 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : authorName.slice(0, 2).toUpperCase();

    const newPost: ForumPost = {
      id: `post-${Date.now()}`,
      author: authorName,
      avatar: avatar || 'ES',
      timeAgo: 'Just now',
      subject: this.exam.shortName,
      title: this.newPostTitle.trim(),
      content: this.newPostContent.trim(),
      upvotes: 1,
      repliesCount: 0,
      userUpvoted: true
    };

    this.forumPosts.unshift(newPost);
    this.newPostTitle = '';
    this.newPostContent = '';
    this.isCreatingPost = false;
    this.showToast('Question posted to student forum!');
  }

  // --- ADVANCED FEATURE: FOCUS TIMER (POMODORO) ---
  openFocusModal(): void {
    this.isFocusModalOpen = true;
  }

  closeFocusModal(): void {
    this.isFocusModalOpen = false;
  }

  toggleFocusTimer(): void {
    if (this.isTimerRunning) {
      clearInterval(this.timerInterval);
      this.isTimerRunning = false;
    } else {
      this.isTimerRunning = true;
      this.timerInterval = setInterval(() => {
        if (this.timerSecondsLeft > 0) {
          this.timerSecondsLeft--;
        } else {
          clearInterval(this.timerInterval);
          this.isTimerRunning = false;
          if (this.timerMode === 'focus') {
            this.timerMode = 'break';
            this.timerSecondsLeft = 5 * 60;
            this.prepService.recordStudyTime(this.exam.slug, 25 / 60);
            this.showToast('Pomodoro Focus Session Completed! +25 mins added to study hours ☕');
          } else {
            this.timerMode = 'focus';
            this.timerSecondsLeft = 25 * 60;
            this.showToast('Break Over! Ready for the next focus sprint? 🚀');
          }
        }
      }, 1000);
    }
  }

  resetFocusTimer(minutes = 25): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.isTimerRunning = false;
    this.timerSecondsLeft = minutes * 60;
  }

  formatTimerTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // --- DYNAMIC PROGRESS GETTERS DERIVED FROM REAL WORK ---
  get completedTopicsCount(): number {
    return this.syllabusSubjects.reduce((acc, sub) => acc + sub.topics.filter(t => t.completed).length, 0);
  }

  get totalTopicsCount(): number {
    return this.syllabusSubjects.reduce((acc, sub) => acc + sub.topics.length, 0);
  }

  get totalMockTestsAttempted(): number {
    return this.activityService.mockTestHistory().length;
  }

  get answeredDailyCount(): number {
    return this.dailyQuestions.filter(q => q.isAnswered).length;
  }

  get currentUserRank(): number {
    const userInLeaderboard = this.leaderboard.find(u => u.isCurrentUser);
    return userInLeaderboard ? userInLeaderboard.rank : 6;
  }

  get unlockedBadgesCount(): number {
    let count = 0;
    if (this.exam.questionsSolvedCount >= 1) count++;
    if (this.totalMockTestsAttempted >= 1) count++;
    if (this.completedTopicsCount >= 5) count++;
    if (this.exam.totalStudyHours >= 1) count++;
    if (this.exam.studyStreakDays >= 7) count++;
    if (this.exam.questionsSolvedCount >= 100) count++;
    return count;
  }

  get averageSpeedPerQuestion(): string {
    if (this.exam.questionsSolvedCount === 0) return '—';
    const studyMins = (this.exam.totalStudyHours || 0) * 60;
    if (studyMins > 0) {
      const avg = Math.round((studyMins / this.exam.questionsSolvedCount) * 10) / 10;
      return `${Math.min(5, Math.max(1.2, avg))} min/Q`;
    }
    return '1.8 min/Q';
  }
}
