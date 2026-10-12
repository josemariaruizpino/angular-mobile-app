import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationService } from '../../core/services/navigation.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

interface QuickStat {
  label: string;
  value: string;
  trend: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly navService = inject(NavigationService);

  readonly stats: QuickStat[] = [
    { label: 'Rendimiento', value: '99.8%', trend: '+0.4%', icon: 'pulse' },
    { label: 'Tareas Activas', value: '14', trend: '3 hoy', icon: 'check' },
    { label: 'Módulos', value: '4', trend: 'Standalone', icon: 'sparkles' }
  ];

  openMenu(): void {
    this.navService.openDrawer();
  }
}
