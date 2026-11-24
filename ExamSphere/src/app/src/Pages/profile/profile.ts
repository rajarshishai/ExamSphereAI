import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ProfileService, FullUserProfile } from '../../../core/services/profile.service';
import { AuthService } from '../../../core/services/auth.service/auth.service';
import { ThemeService } from '../../../core/services/theme.service';

type ProfileTab = 'personal' | 'academic' | 'exams' | 'security' | 'learning' | 'account';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit {
  private profileService = inject(ProfileService);
  private authService = inject(AuthService);
  private themeService = inject(ThemeService);
  private route = inject(ActivatedRoute);

  activeTab: ProfileTab = 'personal';

  // Edit states for sections
  isEditingPersonal = false;
  isEditingAcademic = false;
  isEditingExams = false;
  isEditingLearning = false;

  // Feedback alerts
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  // Password change form
  passwordForm = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  passwordError = '';
  passwordSuccess = '';
  isChangingPassword = false;

  // New subject input for tags
  newSubjectInput = '';

  // Delete account confirmation
  showDeleteModal = false;

  // Profile data form models (for two-way binding during edit)
  personalForm = { ...this.profileService.profile().personal };
  academicForm = { ...this.profileService.profile().academic };
  examForm = {
    ...this.profileService.profile().examPreferences,
    targetExams: [...this.profileService.profile().examPreferences.targetExams],
    preferredSubjects: [...this.profileService.profile().examPreferences.preferredSubjects]
  };
  learningForm = {
    ...this.profileService.profile().learningPreferences,
    notificationPreferences: { ...this.profileService.profile().learningPreferences.notificationPreferences }
  };

  availableExams = [
    'GATE CS', 'GATE ME', 'GATE EC', 'UPSC CSE', 'SSC CGL', 'SSC CHSL',
    'CAT', 'JEE Advanced', 'JEE Main', 'NEET UG', 'IBPS PO', 'SBI PO'
  ];

  avatarPresets = [
    'https://api.dicebear.com/7.x/bottts/svg?seed=ExamSphere1',
    'https://api.dicebear.com/7.x/bottts/svg?seed=ExamSphere2',
    'https://api.dicebear.com/7.x/bottts/svg?seed=ExamSphere3',
    'https://api.dicebear.com/7.x/bottts/svg?seed=ExamSphere4'
  ];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        const tab = params['tab'] as ProfileTab;
        if (['personal', 'academic', 'exams', 'security', 'learning', 'account'].includes(tab)) {
          this.activeTab = tab;
        }
      }
    });

    this.profileService.fetchProfile().subscribe(() => {
      this.syncForms();
    });
  }

  get profile(): FullUserProfile {
    return this.profileService.profile();
  }

  get userEmail(): string {
    return this.authService.getUser()?.email || '';
  }

  get userInitials(): string {
    const name = (this.profile?.personal?.fullName || 'ExamSphere Student').trim();
    const parts = name.split(' ').filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }

  get profileCompletion(): number {
    let score = 20; // base registered
    if (this.profile.personal.phone) score += 15;
    if (this.profile.personal.bio) score += 15;
    if (this.profile.academic.institution) score += 15;
    if (this.profile.academic.course) score += 15;
    if (this.profile.examPreferences.targetExams.length) score += 20;
    return Math.min(100, score);
  }

  syncForms(): void {
    this.personalForm = { ...this.profile.personal };
    this.academicForm = { ...this.profile.academic };
    this.examForm = {
      ...this.profile.examPreferences,
      targetExams: [...this.profile.examPreferences.targetExams],
      preferredSubjects: [...this.profile.examPreferences.preferredSubjects]
    };
    this.learningForm = {
      ...this.profile.learningPreferences,
      notificationPreferences: { ...this.profile.learningPreferences.notificationPreferences }
    };
  }

  setTab(tab: ProfileTab): void {
    this.activeTab = tab;
  }

  showToast(message: string, type: 'success' | 'error' = 'success'): void {
    this.toastMessage = message;
    this.toastType = type;
    setTimeout(() => {
      this.toastMessage = '';
    }, 4000);
  }

  // Personal Info handlers
  savePersonal(): void {
    this.profileService.updatePersonal(this.personalForm).subscribe({
      next: () => {
        this.isEditingPersonal = false;
        this.showToast('Personal information updated successfully!');
      },
      error: () => this.showToast('Failed to save personal information.', 'error')
    });
  }

  cancelPersonal(): void {
    this.personalForm = { ...this.profile.personal };
    this.isEditingPersonal = false;
  }

  selectAvatarPreset(preset: string): void {
    this.personalForm.avatar = preset;
    this.savePersonal();
  }

  // Academic Info handlers
  saveAcademic(): void {
    this.profileService.updateAcademic(this.academicForm).subscribe({
      next: () => {
        this.isEditingAcademic = false;
        this.showToast('Academic information updated successfully!');
      },
      error: () => this.showToast('Failed to save academic information.', 'error')
    });
  }

  cancelAcademic(): void {
    this.academicForm = { ...this.profile.academic };
    this.isEditingAcademic = false;
  }

  // Exam Preferences handlers
  toggleTargetExam(exam: string): void {
    const idx = this.examForm.targetExams.indexOf(exam);
    if (idx > -1) {
      this.examForm.targetExams.splice(idx, 1);
    } else {
      this.examForm.targetExams.push(exam);
    }
  }

  addPreferredSubject(): void {
    const sub = this.newSubjectInput.trim();
    if (sub && !this.examForm.preferredSubjects.includes(sub)) {
      this.examForm.preferredSubjects.push(sub);
      this.newSubjectInput = '';
    }
  }

  removePreferredSubject(index: number): void {
    this.examForm.preferredSubjects.splice(index, 1);
  }

  saveExams(): void {
    this.profileService.updateExamPreferences(this.examForm).subscribe({
      next: () => {
        this.isEditingExams = false;
        this.showToast('Examination preferences updated successfully!');
      },
      error: () => this.showToast('Failed to save examination preferences.', 'error')
    });
  }

  cancelExams(): void {
    this.examForm = {
      ...this.profile.examPreferences,
      targetExams: [...this.profile.examPreferences.targetExams],
      preferredSubjects: [...this.profile.examPreferences.preferredSubjects]
    };
    this.isEditingExams = false;
  }

  // Learning Preferences handlers
  saveLearning(): void {
    if (this.learningForm.theme) {
      this.themeService.setTheme(this.learningForm.theme as any);
    }
    this.profileService.updateLearningPreferences(this.learningForm).subscribe({
      next: () => {
        this.isEditingLearning = false;
        this.showToast('Learning preferences saved!');
      },
      error: () => this.showToast('Failed to save learning preferences.', 'error')
    });
  }

  cancelLearning(): void {
    this.learningForm = {
      ...this.profile.learningPreferences,
      notificationPreferences: { ...this.profile.learningPreferences.notificationPreferences }
    };
    this.isEditingLearning = false;
  }

  // Security handlers
  handleChangePassword(): void {
    this.passwordError = '';
    this.passwordSuccess = '';

    if (!this.passwordForm.currentPassword || !this.passwordForm.newPassword) {
      this.passwordError = 'Please fill out all password fields.';
      return;
    }

    if (this.passwordForm.newPassword.length < 6) {
      this.passwordError = 'New password must be at least 6 characters.';
      return;
    }

    if (this.passwordForm.newPassword !== this.passwordForm.confirmPassword) {
      this.passwordError = 'New passwords do not match.';
      return;
    }

    this.isChangingPassword = true;
    this.profileService.changePassword(this.passwordForm.currentPassword, this.passwordForm.newPassword).subscribe({
      next: (res) => {
        this.isChangingPassword = false;
        this.passwordSuccess = res.message || 'Password changed successfully.';
        this.passwordForm = { currentPassword: '', newPassword: '', confirmPassword: '' };
        this.showToast('Password changed successfully!');
      },
      error: (err) => {
        this.isChangingPassword = false;
        this.passwordError = err.error?.message || 'Failed to update password. Check current password.';
      }
    });
  }

  handleToggle2FA(): void {
    this.profileService.toggleTwoFactor().subscribe({
      next: () => {
        this.showToast(`Two-Factor Authentication ${this.profile.security.twoFactorEnabled ? 'Enabled' : 'Disabled'}`);
      }
    });
  }

  terminateSession(sessionId: string): void {
    this.profileService.terminateSession(sessionId).subscribe({
      next: () => {
        this.showToast('Session terminated successfully.');
      }
    });
  }

  copyUserId(): void {
    const id = this.profile.account.userId || 'USR-EXAM-PRO';
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(id);
      this.showToast('User ID copied to clipboard!');
    }
  }
}
