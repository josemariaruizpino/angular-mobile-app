import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { ThemeService } from '../../services/theme.service';
import { GAMES } from '../../data/games';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-sidebar-drawer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './sidebar-drawer.component.html',
  styleUrl: './sidebar-drawer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarDrawerComponent {
  readonly navService = inject(NavigationService);
  readonly themeService = inject(ThemeService);
  readonly games = GAMES;

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.navService.isDrawerOpen()) {
      this.navService.closeDrawer();
    }
  }

  onClose(): void {
    this.navService.closeDrawer();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('drawer-backdrop')) {
      this.navService.closeDrawer();
    }
  }
}
