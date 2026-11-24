import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service/auth.service';
import { ToastService } from '../services/toast.service';

/**
 * Protects routes requiring student/user authentication
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const toastService = inject(ToastService);

  const token = authService.getToken();
  if (token) {
    return true;
  }

  toastService.info('Please sign in to access your personalized preparation workspace.');
  return router.createUrlTree(['/auth'], {
    queryParams: { redirect: state.url }
  });
};

/**
 * Prevents logged-in users from visiting auth/login pages
 */
export const guestGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();
  if (!token) {
    return true;
  }

  return router.createUrlTree(['/dashboard']);
};

/**
 * Restricts access to administrator portals
 */
export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const toastService = inject(ToastService);

  const user = authService.getUser();
  if (user && user.role === 'admin') {
    return true;
  }

  toastService.error('Administrator access required.');
  return router.createUrlTree(['/dashboard']);
};
