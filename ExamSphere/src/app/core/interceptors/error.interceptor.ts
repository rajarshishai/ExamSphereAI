import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service/auth.service';
import { ToastService } from '../services/toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const toastService = inject(ToastService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Only redirect if this wasn't an explicit login attempt
        const isAuthRequest = req.url.includes('/api/auth/login') || req.url.includes('/api/auth/register') || req.url.includes('/api/auth/otp');
        if (!isAuthRequest && authService.getToken()) {
          authService.logout();
          toastService.warning('Your session has expired. Please sign in again.');
          router.navigate(['/auth'], { queryParams: { redirect: router.url } });
        }
      } else if (error.status === 403) {
        toastService.error(error.error?.message || 'Access denied. You do not have permission.');
      } else if (error.status === 429) {
        toastService.warning(error.error?.message || 'Too many requests. Please slow down.');
      }

      return throwError(() => error);
    })
  );
};
