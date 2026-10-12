import { Injectable, effect, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'app-theme-preference';

  // Señal del modo actual
  readonly themeMode = signal<ThemeMode>(this.getInitialTheme());

  // Señal que indica si actualmente está en modo oscuro efectivo
  readonly isDark = signal<boolean>(false);

  constructor() {
    this.updateEffectiveTheme(this.themeMode());

    // Effect que reacciona a cambios en themeMode
    effect(() => {
      const mode = this.themeMode();
      this.updateEffectiveTheme(mode);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.storageKey, mode);
      }
    });

    // Escuchar cambios de preferencia en el sistema operativo si está en modo 'system'
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', () => {
        if (this.themeMode() === 'system') {
          this.updateEffectiveTheme('system');
        }
      });
    }
  }

  setTheme(mode: ThemeMode): void {
    this.themeMode.set(mode);
  }

  toggleTheme(): void {
    const next: ThemeMode = this.isDark() ? 'light' : 'dark';
    this.setTheme(next);
  }

  private getInitialTheme(): ThemeMode {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(this.storageKey) as ThemeMode | null;
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        return saved;
      }
    }
    return 'system';
  }

  private updateEffectiveTheme(mode: ThemeMode): void {
    if (typeof document === 'undefined') return;

    let darkMode = false;
    if (mode === 'dark') {
      darkMode = true;
    } else if (mode === 'light') {
      darkMode = false;
    } else {
      darkMode = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    this.isDark.set(darkMode);

    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }
}
