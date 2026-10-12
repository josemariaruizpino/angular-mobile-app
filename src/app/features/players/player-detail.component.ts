import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlayersService } from '../../core/services/players.service';
import { Player } from '../../core/models/player.model';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerDetailComponent {
  readonly slug = input.required<string>();
  private readonly playersService = inject(PlayersService);

  readonly player = computed<Player | undefined>(() =>
    this.playersService.getPlayerBySlug(this.slug())
  );

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  getPlatformColor(platform: string): string {
    switch (platform) {
      case 'mtgdecks':
        return '#0284c7';
      case 'mtggoldfish':
        return '#ea580c';
      case 'moxfield':
        return '#10b981';
      default:
        return '#6366f1';
    }
  }
}
