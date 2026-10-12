import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';

interface ActivityItem {
  id: string;
  title: string;
  time: string;
  type: 'success' | 'info' | 'warning';
  icon: string;
  detail: string;
}

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityComponent {
  readonly activities = signal<ActivityItem[]>([
    {
      id: '1',
      title: 'Compilación optimizada',
      time: 'Hace 5 min',
      type: 'success',
      icon: 'check',
      detail: 'El bundle inicial se generó en 1.98 segundos sin dependencias circulares.'
    },
    {
      id: '2',
      title: 'Menú hamburguesa sincronizado',
      time: 'Hace 22 min',
      type: 'info',
      icon: 'sparkles',
      detail: 'Navegación reactiva implementada con Signals y control de scroll móvil.'
    },
    {
      id: '3',
      title: 'Soporte Dark Mode activo',
      time: 'Hace 1 hora',
      type: 'info',
      icon: 'moon',
      detail: 'Variables CSS configuradas y detección automática del sistema.'
    },
    {
      id: '4',
      title: 'Ajuste de accesibilidad',
      time: 'Ayer',
      type: 'warning',
      icon: 'bell',
      detail: 'Se configuraron las etiquetas ARIA y el cierre del drawer mediante tecla Escape.'
    }
  ]);

  clearActivity(id: string): void {
    this.activities.update((items) => items.filter((item) => item.id !== id));
  }
}
