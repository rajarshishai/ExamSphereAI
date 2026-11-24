import { Component, inject, signal, HostListener, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService, AuthUser } from '../../../core/services/auth.service/auth.service';
import { ProfileService } from '../../../core/services/profile.service';
import { ThemeService } from '../../../core/services/theme.service';
import { SavedExamService, TodayNotificationTask } from '../../../core/services/saved-exam.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {
  private authService = inject(AuthService);
  private profileService = inject(ProfileService);
  private themeService = inject(ThemeService);
  public savedExamService = inject(SavedExamService);
  private router = inject(Router);
  private elementRef = inject(ElementRef);

  isMobileMenuOpen = false;
  isProfileDropdownOpen = false;
  showNotificationsModal = false;

  notificationsList = [
    {
      id: 1,
      title: 'UPSC CSE 2026 Prelims Notification Released',
      time: '10m ago',
      read: false,
      type: 'exam'
    },
    {
      id: 2,
      title: 'GATE 2026 CS Mock Test #4 is now live',
      time: '2h ago',
      read: false,
      type: 'test'
    },
    {
      id: 3,
      title: 'Daily Study Streak: 7 Days Maintained! 🔥',
      time: '1d ago',
      read: true,
      type: 'streak'
    }
  ];

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.profileService.fetchProfile().subscribe();
      this.savedExamService.loadSavedExams();
    }
    this.savedExamService.refreshNotifications();

    // Re-fetch profile, saved exams, and notifications as soon as login/logout occurs
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.profileService.fetchProfile().subscribe();
        this.savedExamService.loadSavedExams();
        this.savedExamService.refreshNotifications();
      }
    });
  }

  get remainingTasksCount(): number {
    return this.savedExamService.remainingCount();
  }

  get remainingTasks(): TodayNotificationTask[] {
    return this.savedExamService.remainingTasks();
  }

  markTaskDone(task: TodayNotificationTask, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.savedExamService.toggleTask(task.savedExamId, task.taskId);
  }

  markAllTodayTasksDone(): void {
    const tasks = [...this.remainingTasks];
    tasks.forEach(task => {
      this.savedExamService.toggleTask(task.savedExamId, task.taskId);
    });
  }

  goToExploreExams(): void {
    this.closeNotifications();
    this.router.navigate(['/explore-exams']);
  }

  get currentUser(): AuthUser | null {
    return this.authService.getUser();
  }

  get profile() {
    return this.profileService.profile();
  }

  get userDisplayName(): string {
    return this.profile?.personal?.fullName || this.currentUser?.name || 'Student';
  }

  get userEmail(): string {
    return this.currentUser?.email || '';
  }

  get userInitials(): string {
    const name = this.userDisplayName.trim();
    if (!name) return 'ES';
    const parts = name.split(' ').filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }

  get isLoggedIn(): boolean {
    return !!this.authService.getToken();
  }

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.isProfileDropdownOpen = false;
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  toggleProfileDropdown(): void {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  closeProfileDropdown(): void {
    this.isProfileDropdownOpen = false;
  }

  toggleNotifications(): void {
    this.showNotificationsModal = !this.showNotificationsModal;
    this.isProfileDropdownOpen = false;
    if (this.showNotificationsModal) {
      this.savedExamService.refreshNotifications();
    }
  }

  closeNotifications(): void {
    this.showNotificationsModal = false;
  }

  navigateTo(path: string, queryParams?: any): void {
    this.closeProfileDropdown();
    this.closeMobileMenu();
    this.router.navigate([path], { queryParams });
  }

  logout(): void {
    this.authService.logout();
    this.closeProfileDropdown();
    this.closeMobileMenu();
    this.router.navigateByUrl('/auth');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(target)) {
      this.isProfileDropdownOpen = false;
    }
  }
}
