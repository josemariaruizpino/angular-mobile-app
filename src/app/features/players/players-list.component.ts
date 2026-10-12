import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlayersService } from '../../core/services/players.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersListComponent {
  readonly playersService = inject(PlayersService);
  readonly players = this.playersService.filteredPlayers;
  readonly searchQuery = this.playersService.searchQuery;

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.playersService.setSearch(value);
  }

  clearSearch(): void {
    this.playersService.setSearch('');
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }
}
