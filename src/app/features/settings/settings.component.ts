import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ThemeMode, ThemeService } from '../../core/services/theme.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CardComponent, IconComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
  readonly themeService = inject(ThemeService);

  readonly notificationsEnabled = signal<boolean>(true);
  readonly animationsEnabled = signal<boolean>(true);
  readonly hapticFeedback = signal<boolean>(true);

  setTheme(mode: ThemeMode): void {
    this.themeService.setTheme(mode);
  }

  toggleNotifications(): void {
    this.notificationsEnabled.update((v) => !v);
  }

  toggleAnimations(): void {
    this.animationsEnabled.update((v) => !v);
  }

  toggleHaptic(): void {
    this.hapticFeedback.update((v) => !v);
  }
}
