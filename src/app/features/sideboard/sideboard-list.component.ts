import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideboardService } from '../../core/services/sideboard.service';
import { CardComponent } from '../../shared/components/card/card.component';
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
}
