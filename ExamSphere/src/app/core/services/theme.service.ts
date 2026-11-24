import { Injectable, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'examsphere_theme';

  currentTheme = signal<AppTheme>('light');
  isDarkMode = signal<boolean>(false);

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') return;

    const saved = (localStorage.getItem(this.storageKey) as AppTheme) || 'light';
    this.setTheme(saved);

    // Listen to OS-level dark mode changes if system theme is preferred
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (this.currentTheme() === 'system') {
        this.applyDarkState(e.matches);
      }
    });
  }

  setTheme(theme: AppTheme): void {
    this.currentTheme.set(theme);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, theme);
    }

    if (theme === 'system') {
      const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.applyDarkState(prefersDark);
    } else {
      this.applyDarkState(theme === 'dark');
    }
  }

  toggleDarkMode(): void {
    const nextState = !this.isDarkMode();
    this.setTheme(nextState ? 'dark' : 'light');
  }

  private applyDarkState(isDark: boolean): void {
    this.isDarkMode.set(isDark);
    if (typeof document !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }
  }
}
