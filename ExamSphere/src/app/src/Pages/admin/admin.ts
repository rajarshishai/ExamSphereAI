import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ExamService, BackendExam } from '../../../core/services/exam.service';
import { MockTestService, MockTestItem } from '../../../core/services/mock-test.service';
import { AuthService, AuthUser } from '../../../core/services/auth.service/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent implements OnInit {
  private examService = inject(ExamService);
  private mockTestService = inject(MockTestService);
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  activeTab = signal<'exams' | 'tests' | 'analytics' | 'settings'>('exams');
  isLoading = signal<boolean>(false);

  // Stats
  examsList = signal<BackendExam[]>([]);
  mockTestsList = signal<MockTestItem[]>([]);
  totalExams = signal<number>(0);
  totalTests = signal<number>(0);
  totalQuestions = signal<number>(1420);
  activeStudentsCount = signal<number>(5430);

  // Exam Form Modal
  isExamModalOpen = signal<boolean>(false);
  isSubmitting = signal<boolean>(false);
  examForm!: FormGroup;

  categories = [
    'Engineering Entrance',
    'Medical Entrance',
    'Civil Services',
    'Government Recruitment',
    'Banking & Finance',
    'Management Entrance',
    'University Semester',
    'Study Abroad',
    'Defence & Military'
  ];

  get currentAdmin(): AuthUser | null {
    return this.authService.getUser();
  }

  logout(): void {
    this.authService.logout();
    this.toastService.info('Signed out of Administrator Portal.');
    this.router.navigate(['/auth']);
  }

  ngOnInit(): void {
    this.initExamForm();
    this.loadAdminData();
  }

  initExamForm(): void {
    this.examForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      slug: ['', [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]],
      category: ['Engineering Entrance', Validators.required],
      conductingBody: ['', Validators.required],
      qualification: ['Class 12 / Graduate', Validators.required],
      eligibility: ['Standard national criteria'],
      mode: ['Computer Based Test (CBT)', Validators.required],
      frequency: ['Annual'],
      overview: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  loadAdminData(): void {
    this.isLoading.set(true);

    this.examService.getExams({ limit: 100 }).subscribe({
      next: ({ exams, pagination }) => {
        this.examsList.set(exams);
        this.totalExams.set(pagination?.totalExams || exams.length);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });

    this.mockTestService.getMockTests().subscribe({
      next: (tests) => {
        if (tests) {
          this.mockTestsList.set(tests);
          this.totalTests.set(tests.length);
        }
      },
      error: () => {}
    });
  }

  openExamModal(): void {
    this.examForm.reset({
      category: 'Engineering Entrance',
      mode: 'Computer Based Test (CBT)',
      frequency: 'Annual',
      qualification: 'Class 12 / Graduate',
      eligibility: 'Standard national criteria'
    });
    this.isExamModalOpen.set(true);
  }

  closeExamModal(): void {
    this.isExamModalOpen.set(false);
  }

  autoGenerateSlug(): void {
    const name = this.examForm.get('name')?.value || '';
    const generated = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    this.examForm.patchValue({ slug: generated });
  }

  submitExam(): void {
    if (this.examForm.invalid) {
      this.examForm.markAllAsTouched();
      this.toastService.warning('Please complete all required fields correctly.');
      return;
    }

    this.isSubmitting.set(true);
    const formVal = this.examForm.getRawValue();

    this.examService.createExam(formVal).subscribe({
      next: (created: BackendExam) => {
        this.isSubmitting.set(false);
        this.toastService.success(`Examination "${created.name}" created and published successfully!`);
        this.closeExamModal();
        this.loadAdminData();
      },
      error: (err: any) => {
        this.isSubmitting.set(false);
        this.toastService.error(err.error?.message || 'Failed to create examination. Ensure admin role.');
      }
    });
  }

  get currentUser() {
    return this.authService.getUser();
  }
}
