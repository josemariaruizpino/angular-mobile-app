import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { ThemeService } from '../../services/theme.service';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly navService = inject(NavigationService);
  readonly themeService = inject(ThemeService);

  onToggleDrawer(): void {
    this.navService.toggleDrawer();
  }

  onToggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
