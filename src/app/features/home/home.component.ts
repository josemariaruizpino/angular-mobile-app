import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationService } from '../../core/services/navigation.service';
import { SideboardService } from '../../core/services/sideboard.service';
import { PlayersService } from '../../core/services/players.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

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
  readonly sideboardService = inject(SideboardService);
  readonly playersService = inject(PlayersService);

  readonly topDecks = computed(() => this.sideboardService.decks().slice(0, 3));
  readonly totalDecksCount = computed(() => this.sideboardService.decks().length);
  readonly totalPlayersCount = computed(() => this.playersService.players().length);

  openMenu(): void {
    this.navService.openDrawer();
  }
}
