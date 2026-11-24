import { Routes, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './core/services/auth.service/auth.service';
import { authGuard, guestGuard, adminGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Public Landing / Discovery Routes
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./src/component/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'explore-exams',
    loadComponent: () => import('./src/Pages/explore-exams/explore-exams').then(m => m.ExploreExams)
  },
  {
    path: 'about',
    loadComponent: () => import('./src/component/about/about').then(m => m.About)
  },
  {
    path: 'contact',
    loadComponent: () => import('./src/component/contact/contact').then(m => m.Contact)
  },
  {
    path: 'features',
    loadComponent: () => import('./src/component/features/features').then(m => m.Features)
  },
  {
    path: 'resources',
    loadComponent: () => import('./src/component/resources/resources').then(m => m.Resources)
  },

  // Interactive Learning Tools (Public Preview & Practice)
  {
    path: 'ai-mentor',
    loadComponent: () => import('./src/Pages/ai-mentor/ai-mentor').then(m => m.AiMentor)
  },
  {
    path: 'mock-tests',
    loadComponent: () => import('./src/Pages/mock-tests/mock-tests').then(m => m.MockTests)
  },
  {
    path: 'pyq-bank',
    loadComponent: () => import('./src/Pages/pyq-bank/pyq-bank').then(m => m.PyqBank)
  },

  // Protected Student Preparation Workspace (Requires Authentication)
  {
    path: 'preparation',
    canActivate: [authGuard],
    loadComponent: () => import('./src/Pages/preparation/preparation').then(m => m.Preparation)
  },
  {
    path: 'preparation/:slug',
    canActivate: [authGuard],
    loadComponent: () => import('./src/Pages/preparation/preparation').then(m => m.Preparation)
  },
  {
    path: 'study-planner',
    canActivate: [authGuard],
    loadComponent: () => import('./src/Pages/study-planner/study-planner').then(m => m.StudyPlanner)
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () => import('./src/Pages/profile/profile').then(m => m.Profile)
  },
  {
    path: 'activities',
    canActivate: [authGuard],
    loadComponent: () => import('./src/Pages/activities/activities').then(m => m.Activities)
  },

  // Administrator Management Portal
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadComponent: () => import('./src/Pages/admin/admin').then(m => m.AdminComponent)
  },

  // Authentication Routes (Guest Only)
  {
    path: 'auth',
    canActivate: [guestGuard],
    loadComponent: () => import('./src/Pages/auth/auth').then(m => m.Auth)
  },
  {
    path: 'login',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'register',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth/verify-otp',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth/forgot-password',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth/reset-password',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth/complete-profile',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'auth/account-locked',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'unauthorized',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'session-expired',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'logout',
    canActivate: [() => {
      const auth = inject(AuthService);
      const router = inject(Router);
      auth.logout();
      return router.createUrlTree(['/auth']);
    }],
    loadComponent: () => import('./src/Pages/auth/auth').then(m => m.Auth)
  },
  {
    path: 'terms',
    loadComponent: () => import('./src/component/about/about').then(m => m.About)
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./src/component/about/about').then(m => m.About)
  },

  // Lazy-loaded Feature Modules
  {
    path: 'syllabus',
    loadChildren: () =>
      import('./features/syllabus/syllabus.routes').then(m => m.SYLLABUS_ROUTES)
  },

  // Fallback Wildcard
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
