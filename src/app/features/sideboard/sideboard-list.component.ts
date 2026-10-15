import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideboardService } from '../../core/services/sideboard.service';
import { MagicFormat } from '../../core/models/sideboard.model';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-sideboard-list',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './sideboard-list.component.html',
  styleUrl: './sideboard-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideboardListComponent {
  readonly sideboardService = inject(SideboardService);

  readonly formats: { id: MagicFormat; label: string; description: string }[] = [
    { id: 'pauper', label: 'Pauper', description: 'Metagame de comunes de Magic' },
    { id: 'modern', label: 'Modern', description: 'Metagame de Modern competitivo' }
  ];

  readonly filters = [
    { id: 'all', label: 'Todos' },
    { id: 'Aggro', label: 'Aggro' },
    { id: 'Control', label: 'Control' },
    { id: 'Midrange', label: 'Midrange' },
    { id: 'Combo', label: 'Combo' },
    { id: 'Ramp', label: 'Ramp' }
  ];

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.sideboardService.setSearch(input.value);
  }

  setFilter(filterId: string): void {
    this.sideboardService.setFilter(filterId);
  }

  setFormat(format: MagicFormat): void {
    this.sideboardService.setFormat(format);
  }
}
