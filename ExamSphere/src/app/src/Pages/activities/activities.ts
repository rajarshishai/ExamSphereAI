import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import {
  ActivityService,
  ActivityItem,
  MockTestHistoryItem,
  StudyHistoryItem,
  AiHistoryItem,
  SavedExamItem,
  AchievementBadge
} from '../../../core/services/activity.service';
import { ProfileService } from '../../../core/services/profile.service';

type ActivityTab = 'timeline' | 'mock-tests' | 'study' | 'ai' | 'saved' | 'achievements' | 'progress';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './activities.html',
  styleUrls: ['./activities.css']
})
export class Activities implements OnInit {
  private activityService = inject(ActivityService);
  private profileService = inject(ProfileService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  activeTab: ActivityTab = 'timeline';

  // KPI metrics computed dynamically from genuine student progress
  get kpis() {
    const tests = this.mockTests;
    const testsTaken = tests.length;
    const totalAcc = tests.reduce((acc, t) => acc + (t.accuracyPercentage || 0), 0);
    const avgAccuracy = testsTaken > 0 ? Math.round(totalAcc / testsTaken) : 0;
    const totalSecs = tests.reduce((acc, t) => acc + (t.timeSpentSeconds || 0), 0);
    const studyHours = Math.round((totalSecs / 3600) * 10) / 10;
    const aiDoubtsSolved = this.aiHistory.length;
    const topicsMastered = this.studyHistory.reduce((acc, s) => acc + (s.topicsCompleted || 0), 0);
    const totalTopics = this.studyHistory.reduce((acc, s) => acc + (s.totalTopics || 0), 0);
    const streakDays = testsTaken > 0 ? Math.min(testsTaken, 7) : 0;

    return {
      studyHours,
      testsTaken,
      avgAccuracy,
      topicsMastered,
      totalTopics: totalTopics || 0,
      aiDoubtsSolved,
      streakDays
    };
  }

  // Readiness by subject computed from real syllabus progress
  get subjectReadiness() {
    if (this.studyHistory.length > 0) {
      return this.studyHistory.map(s => ({
        subject: s.subject,
        score: s.masteryPercentage,
        status: s.masteryPercentage >= 80 ? 'Strong' : s.masteryPercentage >= 50 ? 'Average' : 'Needs Practice',
        color: s.masteryPercentage >= 80 ? 'emerald' : s.masteryPercentage >= 50 ? 'amber' : 'rose'
      }));
    }
    return [];
  }

  // Dynamic AI advice recommendation based on real progress
  get recommendedFocus() {
    const target = this.profileService.profile()?.examPreferences?.targetExams?.[0] || 'Competitive Examination';
    if (this.studyHistory.length > 0) {
      const lowest = [...this.studyHistory].sort((a, b) => a.masteryPercentage - b.masteryPercentage)[0];
      return {
        title: `Recommended Next Focus: ${lowest.subject}`,
        description: `Your curriculum mastery in ${lowest.subject} is currently at ${lowest.masteryPercentage}%. Completing targeted practice topics will boost your overall preparation for ${lowest.exam || target}!`,
        actionText: `Solve ${lowest.subject} with AI Mentor`,
        actionLink: '/ai-mentor',
        practiceText: `Practice ${lowest.subject} PYQs`,
        practiceLink: '/pyq-bank'
      };
    }
    return {
      title: `Recommended Focus: Diagnostic Assessment`,
      description: `Take your first mock test or practice quiz for ${target} to identify your academic strengths and discover focus areas tailored to you!`,
      actionText: `Take First Mock Test`,
      actionLink: '/mock-tests',
      practiceText: `Explore Full Syllabus`,
      practiceLink: '/syllabus'
    };
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const tabParam = params['tab'] as ActivityTab;
      if (tabParam && ['timeline', 'mock-tests', 'study', 'ai', 'saved', 'achievements', 'progress'].includes(tabParam)) {
        this.activeTab = tabParam;
      }
    });

    this.loadAllData();
  }

  loadAllData(): void {
    this.activityService.fetchActivities().subscribe();
    this.activityService.fetchMockTests().subscribe();
    this.activityService.fetchStudyHistory().subscribe();
    this.activityService.fetchAiHistory().subscribe();
    this.activityService.fetchSavedExams().subscribe();
    this.activityService.fetchAchievements().subscribe();
  }

  get activities(): ActivityItem[] {
    return this.activityService.activities();
  }

  get mockTests(): MockTestHistoryItem[] {
    return this.activityService.mockTestHistory();
  }

  get studyHistory(): StudyHistoryItem[] {
    return this.activityService.studyHistory();
  }

  get aiHistory(): AiHistoryItem[] {
    return this.activityService.aiHistory();
  }

  get savedExams(): SavedExamItem[] {
    return this.activityService.savedExams();
  }

  get achievements(): AchievementBadge[] {
    return this.activityService.achievements();
  }

  setTab(tab: ActivityTab): void {
    this.activeTab = tab;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab },
      queryParamsHandling: 'merge'
    });
  }

  toggleBookmark(exam: SavedExamItem): void {
    this.activityService.toggleSaveExam(exam).subscribe();
  }

  formatDuration(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs > 0 ? secs + 's' : ''}`;
  }

  getActivityIcon(type: string): string {
    switch (type) {
      case 'mock_test': return '📝';
      case 'study_topic': return '📖';
      case 'ai_question': return '💡';
      case 'saved_exam': return '🔖';
      case 'achievement': return '🏆';
      default: return '⚡';
    }
  }

  getActivityBadgeColor(type: string): string {
    switch (type) {
      case 'mock_test': return 'bg-blue-100 text-blue-700';
      case 'study_topic': return 'bg-purple-100 text-purple-700';
      case 'ai_question': return 'bg-amber-100 text-amber-700';
      case 'saved_exam': return 'bg-indigo-100 text-indigo-700';
      case 'achievement': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  }
}
