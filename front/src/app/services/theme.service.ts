import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export type ColorScheme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  colorScheme$ = new BehaviorSubject<ColorScheme>('light');

  constructor() {
    this.initialize();
  }

  initialize() {
    if (!window.matchMedia) {
      return;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.colorScheme$.next('dark');
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        const theme = e.matches ? 'dark' : 'light';
        this.colorScheme$.next(theme);
      });
  }
}
