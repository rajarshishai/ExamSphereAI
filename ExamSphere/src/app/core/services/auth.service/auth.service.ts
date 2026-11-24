import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, BehaviorSubject } from 'rxjs';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'student' | 'admin';
  targetExams?: string[];
  isOnboardingCompleted?: boolean;
  avatar?: string;
  dob?: string;
  institution?: string;
  state?: string;
  educationLevel?: string;
  preferredLanguage?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token: string;
  user: AuthUser;
  isNewUser?: boolean;
}

export interface SendOtpResponse {
  success: boolean;
  message: string;
  waitSeconds?: number;
  demoOtp?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private readonly apiUrl = 'http://localhost:5000/api/auth';
  private readonly tokenKey = 'examsphere_token';
  private readonly userKey = 'examsphere_user';

  private authStateSubject = new BehaviorSubject<AuthUser | null>(this.getUser());
  public authState$ = this.authStateSubject.asObservable();

  // =========================================================================
  // 1. PASSWORDLESS OTP AUTHENTICATION
  // =========================================================================
  sendOtp(contact: string, type: 'email' | 'mobile'): Observable<SendOtpResponse> {
    return this.http.post<SendOtpResponse>(`${this.apiUrl}/otp/send`, { contact, type });
  }

  verifyOtp(contact: string, type: 'email' | 'mobile', otp: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/otp/verify`, { contact, type, otp }).pipe(
      tap(response => this.saveSession(response, true))
    );
  }

  // =========================================================================
  // 2. SOCIAL 1-CLICK AUTHENTICATION (GOOGLE, GITHUB & LINKEDIN)
  // =========================================================================
  googleLogin(payload: { email: string; name: string; avatar?: string; googleId?: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/google`, payload).pipe(
      tap(response => this.saveSession(response, true))
    );
  }

  githubLogin(payload: { email?: string; name?: string; avatar?: string; githubId?: string; username?: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/github`, payload).pipe(
      tap(response => this.saveSession(response, true))
    );
  }

  linkedinLogin(payload: { email?: string; name?: string; avatar?: string; linkedinId?: string; headline?: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/linkedin`, payload).pipe(
      tap(response => this.saveSession(response, true))
    );
  }

  // =========================================================================
  // 3. PASSWORD RECOVERY / RESET
  // =========================================================================
  resetPassword(payload: { contact: string; type: 'email' | 'mobile'; otp: string; newPassword: string }): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.apiUrl}/reset-password`, payload);
  }

  // =========================================================================
  // 4. ONBOARDING & PROFILE PERSONALIZATION
  // =========================================================================
  completeOnboarding(profileData: {
    fullName?: string;
    educationLevel?: string;
    state?: string;
    preferredLanguage?: string;
    targetExams?: string[];
    preparationLevel?: string;
    dailyStudyTime?: number;
    secondaryContact?: string;
  }): Observable<{ success: boolean; message: string; user: AuthUser }> {
    return this.http.post<{ success: boolean; message: string; user: AuthUser }>(
      `${this.apiUrl}/onboarding`,
      profileData
    ).pipe(
      tap(res => {
        if (res.user) {
          this.updateCurrentUser(res.user);
        }
      })
    );
  }

  // =========================================================================
  // 5. UNIFIED LOGIN & REGISTRATION
  // =========================================================================
  login(identifierOrEmail: string, password: string, rememberMe = true): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { identifier: identifierOrEmail, email: identifierOrEmail, password }).pipe(
      tap(response => this.saveSession(response, rememberMe))
    );
  }

  register(
    nameOrData: string | {
      fullName: string;
      email: string;
      password: string;
      phone?: string;
      targetExam?: string;
      targetExams?: string[];
      dob?: string;
      institution?: string;
      state?: string;
      educationLevel?: string;
      preferredLanguage?: string;
      accountType?: 'student' | 'admin';
      invitationCode?: string;
    },
    email?: string,
    password?: string,
    targetExam?: string
  ): Observable<AuthResponse> {
    let payload: any;
    if (typeof nameOrData === 'object') {
      payload = nameOrData;
    } else {
      payload = { name: nameOrData, email, password, targetExam };
    }

    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, payload).pipe(
      tap(response => this.saveSession(response, true))
    );
  }

  // =========================================================================
  // 6. ROLE-BASED ACCESS CONTROL (RBAC) REDIRECTION
  // =========================================================================
  handleRoleRedirect(user?: AuthUser | null): void {
    const currentUser = user || this.getUser();
    if (currentUser?.role === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  isAdmin(): boolean {
    return this.getUser()?.role === 'admin';
  }

  isStudent(): boolean {
    return this.getUser()?.role === 'student';
  }

  // =========================================================================
  // SESSION STORAGE HELPERS
  // =========================================================================
  getToken(): string | null {
    if (typeof localStorage === 'undefined') return null;
    return localStorage.getItem(this.tokenKey) || sessionStorage.getItem(this.tokenKey);
  }

  getUser(): AuthUser | null {
    if (typeof localStorage === 'undefined') return null;
    const raw = localStorage.getItem(this.userKey) || sessionStorage.getItem(this.userKey);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as AuthUser;
    } catch {
      return null;
    }
  }

  updateCurrentUser(user: AuthUser): void {
    if (typeof localStorage === 'undefined') return;
    const existing = this.getUser() || {};
    const merged = { ...existing, ...user };
    if (localStorage.getItem(this.tokenKey)) {
      localStorage.setItem(this.userKey, JSON.stringify(merged));
    } else if (sessionStorage.getItem(this.tokenKey)) {
      sessionStorage.setItem(this.userKey, JSON.stringify(merged));
    } else {
      localStorage.setItem(this.userKey, JSON.stringify(merged));
    }
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.userKey);
      sessionStorage.removeItem(this.tokenKey);
      sessionStorage.removeItem(this.userKey);
    }
    this.authStateSubject.next(null);
  }

  private saveSession(response: AuthResponse, remember: boolean): void {
    if (!response?.token || !response.user) {
      throw new Error('Invalid authentication response.');
    }
    this.logout();
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem(this.tokenKey, response.token);
    storage.setItem(this.userKey, JSON.stringify(response.user));
    this.authStateSubject.next(response.user);
  }
}
