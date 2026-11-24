import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class Auth implements OnInit, OnDestroy {
  public authService = inject(AuthService);
  private toastService = inject(ToastService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  // Main Mode: Login or Create Account
  isLoginMode = true;
  slideDirection: 'to-login' | 'to-register' = 'to-login';
  stepSlideDirection: 'next' | 'prev' = 'next';
  selectedRoleMode: 'student' | 'admin' = 'student';

  // Login Sub-method: Password vs Fast OTP
  loginMethod: 'password' | 'otp' = 'password';

  // Multi-Step Registration (Create Account)
  registerStep: 1 | 2 | 3 | 4 = 1;

  // OTP Verification Engine
  otpType: 'email' | 'mobile' = 'email';
  otpContact = '';
  otpDigits: string[] = ['', '', '', '', '', ''];
  demoOtpCode = '';
  resendCountdown = 0;
  private countdownTimer: ReturnType<typeof setInterval> | null = null;
  emailOtpVerified = false;
  mobileOtpVerified = false;

  // Forgot Password / Account Recovery State
  showForgotPasswordModal = false;
  forgotContact = '';
  forgotOtpDigits: string[] = ['', '', '', '', '', ''];
  forgotNewPassword = '';
  forgotConfirmPassword = '';
  forgotStep: 'contact' | 'verify' = 'contact';
  forgotDemoOtp = '';

  // Social OAuth Simulation Modals
  showGoogleModal = false;
  showLinkedinModal = false;
  showGithubModal = false;
  customGoogleEmail = '';
  customLinkedinEmail = '';
  customGithubUser = '';

  // Forms
  loginForm!: FormGroup;
  step1Form!: FormGroup;
  step3Form!: FormGroup;
  step4Form!: FormGroup;

  // Password Visibility Toggles
  showLoginPassword = false;
  showRegisterPassword = false;
  showConfirmPassword = false;

  // State flags
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  // Curated Avatars for Registration
  avatars = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Aria',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Leo',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Zack'
  ];
  selectedAvatar = this.avatars[0];

  demoGoogleAccounts = [
    {
      name: 'Alex Turner (Student)',
      email: 'alex.turner.aspirant@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
    },
    {
      name: 'Priya Sharma (GATE Aspirant)',
      email: 'priya.sharma.exams@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya'
    },
    {
      name: 'Dr. Vikram Malhotra (Admin/Faculty)',
      email: 'admin.malhotra@examsphere.ai',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram'
    }
  ];

  demoLinkedinAccounts = [
    {
      name: 'Sarah Jenkins',
      headline: 'Research Scholar & Aspirant at Tech University',
      email: 'sarah.jenkins@linkedin.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      name: 'Amit Patel',
      headline: 'Software Engineer & Civil Services Aspirant',
      email: 'amit.patel@linkedin.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit'
    }
  ];

  demoGithubAccounts = [
    {
      username: 'code-aspirant',
      name: 'Dev Aspirant',
      email: 'code.aspirant@github.com',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=code-aspirant'
    },
    {
      username: 'algo-master',
      name: 'Algorithm Scholar',
      email: 'algo.master@github.com',
      avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=algo-master'
    }
  ];

  examsList = [
    'GATE Computer Science',
    'UPSC Civil Services (CSE)',
    'JEE Advanced Engineering',
    'NEET UG Medical',
    'CAT Management',
    'SBI / IBPS PO Banking',
    'SSC CGL Government',
    'State PSC Civil Services',
    'CLAT Law Entrance',
    'Other Competitive Examination'
  ];

  countries = ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Other'];
  indianStates = [
    'Delhi NCR',
    'Maharashtra',
    'Karnataka',
    'Tamil Nadu',
    'Uttar Pradesh',
    'West Bengal',
    'Telangana',
    'Gujarat',
    'Rajasthan',
    'Kerala',
    'Madhya Pradesh',
    'Bihar',
    'Punjab',
    'Other State'
  ];

  ngOnInit(): void {
    this.initForms();

    this.route.queryParams.subscribe(params => {
      if (params['tab'] === 'register' || params['mode'] === 'register' || params['mode'] === 'verify-otp') {
        this.isLoginMode = false;
        if (params['step']) {
          const stepNum = parseInt(params['step'], 10);
          if (stepNum >= 1 && stepNum <= 4) {
            this.registerStep = stepNum as 1 | 2 | 3 | 4;
          }
        } else if (params['mode'] === 'verify-otp') {
          this.registerStep = 2;
        }
      } else if (params['tab'] === 'forgot' || params['mode'] === 'forgot-password' || params['mode'] === 'reset-password') {
        this.openForgotPassword();
      }

      if (params['reason'] === 'session-expired') {
        this.errorMessage = 'Your previous session has expired. Please sign in again.';
      } else if (params['reason'] === 'account-locked') {
        this.errorMessage = 'Account security verification required. Please log in with your credentials.';
      } else if (params['reason'] === 'unauthorized') {
        this.errorMessage = 'Administrator authorization required to access that resource.';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
    }
  }

  initForms(): void {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [true]
    });

    this.step1Form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+ -]{10,15}$/)]],
      dob: [''],
      accountType: ['student', Validators.required],
      invitationCode: ['']
    });

    this.step3Form = this.fb.group(
      {
        password: [
          '',
          [Validators.required, Validators.minLength(6), this.passwordStrengthValidator]
        ],
        confirmPassword: ['', [Validators.required]],
        terms: [true, Validators.requiredTrue]
      },
      { validators: this.passwordMatchValidator }
    );

    this.step4Form = this.fb.group({
      country: ['India', Validators.required],
      state: ['Delhi NCR', Validators.required],
      educationLevel: ['Undergraduate', Validators.required],
      institution: ['', [Validators.required, Validators.minLength(3)]],
      targetExam: ['GATE Computer Science', Validators.required],
      preferredLanguage: ['English', Validators.required]
    });
  }

  switchMode(toLogin: boolean): void {
    if (this.isLoginMode === toLogin) return;
    this.slideDirection = toLogin ? 'to-login' : 'to-register';
    this.isLoginMode = toLogin;
    this.errorMessage = '';
    this.successMessage = '';
    this.demoOtpCode = '';
    this.otpDigits = ['', '', '', '', '', ''];
    if (!toLogin) {
      this.registerStep = 1;
    }
  }

  fillDemoCredentials(role: 'student' | 'admin'): void {
    this.selectedRoleMode = role;
    this.isLoginMode = true;
    this.loginMethod = 'password';
    this.slideDirection = 'to-login';
    this.errorMessage = '';
    this.successMessage = '';

    if (role === 'admin') {
      this.loginForm.patchValue({
        identifier: 'admin@examsphere.ai',
        password: 'Admin@ExamSphere2026',
        rememberMe: true
      });
      this.toastService.info('Admin credentials pre-filled. Click "Sign In" to open the Admin Portal.');
    } else {
      this.loginForm.patchValue({
        identifier: 'alex.turner@examsphere.ai',
        password: 'Student@123456',
        rememberMe: true
      });
      this.toastService.info('Student credentials pre-filled. Click "Sign In" to open the Student Dashboard.');
    }
  }

  setLoginMethod(method: 'password' | 'otp'): void {
    this.loginMethod = method;
    this.errorMessage = '';
    this.successMessage = '';
    this.demoOtpCode = '';
    this.otpDigits = ['', '', '', '', '', ''];

    if (method === 'otp') {
      const idVal = (this.loginForm.get('identifier')?.value || '').trim();
      if (idVal) {
        this.otpContact = idVal;
        this.otpType = idVal.includes('@') ? 'email' : 'mobile';
      }
    }
  }

  switchLoginOtpChannel(type: 'email' | 'mobile'): void {
    if (this.otpType === type) return;
    this.otpType = type;
    this.demoOtpCode = '';
    this.otpDigits = ['', '', '', '', '', ''];
    this.errorMessage = '';
    this.successMessage = '';

    const idVal = (this.loginForm.get('identifier')?.value || '').trim();
    if (type === 'email') {
      this.otpContact = idVal.includes('@') ? idVal : '';
    } else {
      this.otpContact = !idVal.includes('@') && idVal.length >= 10 ? idVal : '';
    }
  }

  // =========================================================================
  // MULTI-STEP REGISTRATION NAVIGATION & VALIDATION
  // =========================================================================
  goToRegisterStep(step: 1 | 2 | 3 | 4): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.stepSlideDirection = step > this.registerStep ? 'next' : 'prev';

    if (step === 2) {
      if (this.step1Form.invalid) {
        this.step1Form.markAllAsTouched();
        this.errorMessage = 'Please complete all required personal details.';
        return;
      }
      if (this.step1Form.value.accountType === 'admin') {
        const code = (this.step1Form.value.invitationCode || '').trim();
        if (!code) {
          this.errorMessage = 'Administrator registration requires a valid authorization invitation code.';
          return;
        }
      }
      this.otpContact = this.step1Form.value.email.trim();
      this.otpType = 'email';
      this.registerStep = 2;
      this.sendOtpCode();
      return;
    }

    if (step === 3) {
      if (!this.emailOtpVerified && !this.mobileOtpVerified) {
        this.errorMessage = 'Please complete the OTP verification code check first.';
        return;
      }
      this.registerStep = 3;
      return;
    }

    if (step === 4) {
      if (this.step3Form.invalid) {
        this.step3Form.markAllAsTouched();
        this.errorMessage = 'Please enter a password of at least 6 characters that matches confirmation and accept terms.';
        return;
      }
      this.registerStep = 4;
      return;
    }

    this.registerStep = step;
  }

  passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    if (value && value.length < 6) {
      return { minLength: true };
    }
    return null;
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordMismatch: true };
  }

  getPasswordStrengthScore(): { score: number; label: string; color: string } {
    const pwd = this.step3Form?.get('password')?.value || '';
    if (!pwd) return { score: 0, label: 'None', color: 'bg-slate-200' };
    if (pwd.length < 6) return { score: 20, label: 'Too Short (Min 6 chars)', color: 'bg-rose-500' };
    
    let score = 40; // Base score for meeting min 6 chars
    if (pwd.length >= 8) score += 20;
    if (/[A-Z]/.test(pwd)) score += 15;
    if (/[0-9]/.test(pwd)) score += 15;
    if (/[^A-Za-z0-9]/.test(pwd) || pwd.length >= 10) score += 10;

    if (score <= 50) return { score: 50, label: 'Fair (Min 6 digits met)', color: 'bg-amber-500' };
    if (score <= 75) return { score: 75, label: 'Good', color: 'bg-blue-500' };
    return { score: 100, label: 'Strong & Secure', color: 'bg-emerald-500' };
  }

  // =========================================================================
  // OTP ENGINE (REGISTRATION & PASSWORDLESS LOGIN)
  // =========================================================================
  sendOtpCode(isMobileToggle = false): void {
    if (isMobileToggle) {
      this.otpType = this.otpType === 'email' ? 'mobile' : 'email';
      this.otpContact =
        this.otpType === 'email'
          ? (this.step1Form.value.email || '').trim()
          : (this.step1Form.value.phone || '').trim();
    }

    const contact = (this.otpContact || '').trim();
    if (!contact) {
      this.errorMessage =
        this.otpType === 'email'
          ? 'Please enter a valid Gmail or email address.'
          : 'Please enter a valid mobile number.';
      return;
    }

    if (this.otpType === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
      this.errorMessage = 'Please enter a properly formatted email address (e.g. name@gmail.com).';
      return;
    }

    if (this.otpType === 'mobile' && contact.replace(/\D/g, '').length < 10) {
      this.errorMessage = 'Please enter a valid 10-digit mobile number.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.sendOtp(contact, this.otpType).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.demoOtpCode = res.demoOtp || '123456';
        this.otpDigits = ['', '', '', '', '', ''];
        this.successMessage = `6-digit verification code dispatched to ${contact}.`;
        this.toastService.success(`Verification code sent to ${contact}!`);
        this.startResendTimer(res.waitSeconds || 45);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage =
          err.error?.message || 'Failed to dispatch verification code. Please check details.';
        this.toastService.error(this.errorMessage);
      }
    });
  }

  startResendTimer(seconds: number): void {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
    }
    this.resendCountdown = seconds;
    this.countdownTimer = setInterval(() => {
      if (this.resendCountdown > 0) {
        this.resendCountdown--;
      } else if (this.countdownTimer) {
        clearInterval(this.countdownTimer);
      }
    }, 1000);
  }

  private getOtpPrefix(context: 'login' | 'reg' | 'forgot'): string {
    return `${context}-otp-`;
  }

  onOtpDigitInput(event: Event, index: number, context: 'login' | 'reg' | 'forgot' = 'reg'): void {
    const input = event.target as HTMLInputElement;
    const val = input.value.replace(/\D/g, '');
    const targetArray = context === 'forgot' ? this.forgotOtpDigits : this.otpDigits;
    const prefix = this.getOtpPrefix(context);

    if (val.length > 0) {
      targetArray[index] = val.slice(-1);
      input.value = targetArray[index];
      if (index < 5) {
        document.getElementById(`${prefix}${index + 1}`)?.focus();
      }
    } else {
      targetArray[index] = '';
    }
  }

  onOtpKeyDown(event: KeyboardEvent, index: number, context: 'login' | 'reg' | 'forgot' = 'reg'): void {
    const targetArray = context === 'forgot' ? this.forgotOtpDigits : this.otpDigits;
    const prefix = this.getOtpPrefix(context);

    if (event.key === 'Backspace' && !targetArray[index] && index > 0) {
      document.getElementById(`${prefix}${index - 1}`)?.focus();
    }
  }

  onOtpPaste(event: ClipboardEvent, context: 'login' | 'reg' | 'forgot' = 'reg'): void {
    event.preventDefault();
    const pasted = event.clipboardData?.getData('text') || '';
    const digits = pasted.replace(/\D/g, '').slice(0, 6);
    const targetArray = context === 'forgot' ? this.forgotOtpDigits : this.otpDigits;
    const prefix = this.getOtpPrefix(context);

    for (let i = 0; i < 6; i++) {
      targetArray[i] = digits[i] || '';
    }
    const focusIdx = Math.min(digits.length, 5);
    document.getElementById(`${prefix}${focusIdx}`)?.focus();
  }

  autoFillDemoOtp(isForgot = false): void {
    const code = isForgot ? (this.forgotDemoOtp || '123456') : (this.demoOtpCode || '123456');
    const targetArray = isForgot ? this.forgotOtpDigits : this.otpDigits;
    for (let i = 0; i < 6; i++) {
      targetArray[i] = code[i] || '';
    }
    this.toastService.info(`Auto-filled code: ${code}`);
  }

  get enteredOtp(): string {
    return this.otpDigits.join('').trim();
  }

  verifyOtpCode(): void {
    const otp = this.enteredOtp;
    if (otp.length < 6) {
      this.errorMessage = 'Please enter the full 6-digit verification code.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.verifyOtp(this.otpContact.trim(), this.otpType, otp).subscribe({
      next: (res) => {
        this.isSubmitting = false;

        if (this.isLoginMode) {
          this.successMessage = 'Verification successful! Logging into workspace...';
          this.toastService.success(`Welcome to ExamSphere AI, ${res.user.name}!`);
          setTimeout(() => this.authService.handleRoleRedirect(res.user), 600);
          return;
        }

        if (this.otpType === 'email') {
          this.emailOtpVerified = true;
        } else {
          this.mobileOtpVerified = true;
        }
        this.successMessage = `Verified ${this.otpContact}! Proceeding to Account Security...`;
        this.toastService.success('Contact verified successfully!');
        setTimeout(() => {
          this.registerStep = 3;
          this.successMessage = '';
        }, 700);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage =
          err.error?.message || 'Invalid or expired verification code. Use master code 123456 for testing.';
        this.toastService.error(this.errorMessage);
      }
    });
  }

  // =========================================================================
  // FINAL SUBMISSIONS (LOGIN & REGISTRATION)
  // =========================================================================
  onLoginSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';
    const v = this.loginForm.getRawValue();

    this.authService.login(v.identifier, v.password, !!v.rememberMe).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        if (res.user?.role === 'admin') {
          this.successMessage = 'Administrator authenticated! Connecting to Admin Management Portal (/admin)...';
          this.toastService.success(`Welcome Administrator, ${res.user.name}!`);
          setTimeout(() => this.router.navigate(['/admin']), 500);
        } else {
          this.successMessage = res.message || 'Signed in successfully. Redirecting to workspace...';
          this.toastService.success(`Welcome back, ${res.user?.name || 'Aspirant'}!`);
          setTimeout(() => this.authService.handleRoleRedirect(res.user), 500);
        }
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage =
          err.error?.message || 'Login failed. Check your credentials or sign in with OTP / Google.';
        this.toastService.error(this.errorMessage);
      }
    });
  }

  onCompleteRegistration(): void {
    if (this.step4Form.invalid) {
      this.step4Form.markAllAsTouched();
      this.errorMessage = 'Please complete all academic profile questions.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    const s1 = this.step1Form.value;
    const s3 = this.step3Form.value;
    const s4 = this.step4Form.value;

    const registrationPayload = {
      fullName: s1.fullName,
      email: s1.email,
      phone: s1.phone,
      dob: s1.dob,
      accountType: s1.accountType,
      invitationCode: s1.invitationCode,
      password: s3.password,
      country: s4.country,
      state: s4.state,
      educationLevel: s4.educationLevel,
      institution: s4.institution,
      targetExam: s4.targetExam,
      preferredLanguage: s4.preferredLanguage,
      avatar: this.selectedAvatar
    };

    this.authService.register(registrationPayload).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.successMessage = res.message || 'Account created successfully! Preparing your dashboard...';
        this.toastService.success(`Account created! Welcome, ${res.user.name}.`);
        setTimeout(() => this.authService.handleRoleRedirect(res.user), 700);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage =
          err.error?.message || 'Registration failed. Please check your inputs and try again.';
        this.toastService.error(this.errorMessage);
      }
    });
  }

  // =========================================================================
  // SOCIAL 1-CLICK AUTH (GOOGLE, LINKEDIN, GITHUB)
  // =========================================================================
  openGoogleAuth(): void {
    this.showGoogleModal = true;
    this.customGoogleEmail = '';
  }

  closeGoogleAuth(): void {
    this.showGoogleModal = false;
  }

  loginWithGoogleProfile(profile: { name: string; email: string; avatar: string }): void {
    this.closeGoogleAuth();
    this.isSubmitting = true;
    this.errorMessage = '';

    this.authService
      .googleLogin({
        email: profile.email,
        name: profile.name,
        avatar: profile.avatar,
        googleId: `google_${Date.now()}`
      })
      .subscribe({
        next: (res) => {
          this.isSubmitting = false;
          this.toastService.success(`Google Sign-In successful! Welcome, ${res.user.name}.`);
          setTimeout(() => this.authService.handleRoleRedirect(res.user), 600);
        },
        error: (err) => {
          this.isSubmitting = false;
          this.errorMessage = err.error?.message || 'Google authentication failed.';
          this.toastService.error(this.errorMessage);
        }
      });
  }

  submitCustomGoogleLogin(): void {
    const email = (this.customGoogleEmail || '').trim().toLowerCase();
    if (!email || !email.includes('@')) {
      this.toastService.warning('Please enter a valid Google email address.');
      return;
    }
    const name = email.split('@')[0].replace(/[._-]/g, ' ');
    const formatted = name.charAt(0).toUpperCase() + name.slice(1);
    this.loginWithGoogleProfile({
      name: formatted,
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
    });
  }

  openLinkedinAuth(): void {
    this.showLinkedinModal = true;
    this.customLinkedinEmail = '';
  }

  closeLinkedinAuth(): void {
    this.showLinkedinModal = false;
  }

  loginWithLinkedinProfile(profile: { name: string; headline: string; email: string; avatar: string }): void {
    this.closeLinkedinAuth();
    this.isSubmitting = true;
    this.errorMessage = '';

    this.authService
      .linkedinLogin({
        email: profile.email,
        name: profile.name,
        avatar: profile.avatar,
        headline: profile.headline,
        linkedinId: `linkedin_${Date.now()}`
      })
      .subscribe({
        next: (res) => {
          this.isSubmitting = false;
          this.toastService.success(`LinkedIn verified! Welcome, ${res.user.name}.`);
          setTimeout(() => this.authService.handleRoleRedirect(res.user), 600);
        },
        error: (err) => {
          this.isSubmitting = false;
          this.errorMessage = err.error?.message || 'LinkedIn authentication failed.';
          this.toastService.error(this.errorMessage);
        }
      });
  }

  submitCustomLinkedinLogin(): void {
    const email = (this.customLinkedinEmail || '').trim().toLowerCase();
    if (!email || !email.includes('@')) {
      this.toastService.warning('Please enter your LinkedIn account email.');
      return;
    }
    const name = email.split('@')[0].replace(/[._-]/g, ' ');
    const formatted = name.charAt(0).toUpperCase() + name.slice(1);
    this.loginWithLinkedinProfile({
      name: formatted,
      headline: 'Competitive Aspirant',
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
    });
  }

  openGithubAuth(): void {
    this.showGithubModal = true;
    this.customGithubUser = '';
  }

  closeGithubAuth(): void {
    this.showGithubModal = false;
  }

  loginWithGithubProfile(profile: { username: string; name: string; email?: string; avatar: string }): void {
    this.closeGithubAuth();
    this.isSubmitting = true;
    this.errorMessage = '';

    this.authService
      .githubLogin({
        email: profile.email || `${profile.username.toLowerCase()}@github.users.examsphere.ai`,
        name: profile.name,
        avatar: profile.avatar,
        githubId: `github_${profile.username}`,
        username: profile.username
      })
      .subscribe({
        next: (res) => {
          this.isSubmitting = false;
          this.toastService.success(`GitHub connected! Welcome, @${profile.username}.`);
          setTimeout(() => this.authService.handleRoleRedirect(res.user), 600);
        },
        error: (err) => {
          this.isSubmitting = false;
          this.errorMessage = err.error?.message || 'GitHub authentication failed.';
          this.toastService.error(this.errorMessage);
        }
      });
  }

  submitCustomGithubLogin(): void {
    const user = (this.customGithubUser || '').trim();
    if (!user) {
      this.toastService.warning('Please enter your GitHub username or handle.');
      return;
    }
    this.loginWithGithubProfile({
      username: user,
      name: `Developer (${user})`,
      email: `${user.toLowerCase()}@github.users.examsphere.ai`,
      avatar: `https://api.dicebear.com/7.x/identicon/svg?seed=${user}`
    });
  }

  // =========================================================================
  // PASSWORD RECOVERY / FORGOT PASSWORD FLOW
  // =========================================================================
  openForgotPassword(): void {
    this.showForgotPasswordModal = true;
    this.forgotContact = this.loginForm?.get('identifier')?.value || '';
    this.forgotStep = 'contact';
    this.forgotOtpDigits = ['', '', '', '', '', ''];
    this.forgotNewPassword = '';
    this.forgotConfirmPassword = '';
  }

  closeForgotPassword(): void {
    this.showForgotPasswordModal = false;
  }

  sendForgotOtp(): void {
    const clean = (this.forgotContact || '').trim();
    if (!clean) {
      this.toastService.warning('Please enter your registered Gmail or phone number.');
      return;
    }

    const type = clean.includes('@') ? 'email' : 'mobile';
    this.isSubmitting = true;

    this.authService.sendOtp(clean, type).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.forgotStep = 'verify';
        this.forgotDemoOtp = res.demoOtp || '123456';
        this.toastService.success(`Recovery code sent to ${clean}!`);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.toastService.error(err.error?.message || 'Failed to send recovery code.');
      }
    });
  }

  submitPasswordReset(): void {
    const otp = this.forgotOtpDigits.join('').trim();
    if (otp.length < 6) {
      this.toastService.warning('Please enter the 6-digit recovery code.');
      return;
    }
    if (!this.forgotNewPassword || this.forgotNewPassword.length < 6) {
      this.toastService.warning('New password must be at least 6 characters.');
      return;
    }
    if (this.forgotNewPassword !== this.forgotConfirmPassword) {
      this.toastService.warning('Passwords do not match.');
      return;
    }

    const type = this.forgotContact.includes('@') ? 'email' : 'mobile';
    this.isSubmitting = true;

    this.authService
      .resetPassword({
        contact: this.forgotContact.trim(),
        type,
        otp,
        newPassword: this.forgotNewPassword
      })
      .subscribe({
        next: (res) => {
          this.isSubmitting = false;
          this.closeForgotPassword();
          this.toastService.success(res.message || 'Password reset! Please sign in with your new password.');
          this.isLoginMode = true;
          this.loginForm.patchValue({ identifier: this.forgotContact, password: '' });
        },
        error: (err) => {
          this.isSubmitting = false;
          this.toastService.error(err.error?.message || 'Password reset failed. Check the code.');
        }
      });
  }
}