import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavigationService } from '../../core/services/navigation.service';
import { SideboardService } from '../../core/services/sideboard.service';
import { PlayersService } from '../../core/services/players.service';
import { MAGIC_FORMATS, getMagicFormatLabel } from '../../core/data/magic-formats';
import { MagicFormat } from '../../core/models/sideboard.model';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { BackLinkComponent } from '../../shared/components/back-link/back-link.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, IconComponent, BackLinkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly navService = inject(NavigationService);
  private readonly router = inject(Router);
  readonly sideboardService = inject(SideboardService);
  readonly playersService = inject(PlayersService);

  readonly formats = MAGIC_FORMATS;
  readonly activeFormat = signal<MagicFormat>('pauper');
  readonly activeFormatLabel = computed(() => getMagicFormatLabel(this.activeFormat()));

  readonly currentTopDecks = computed(() => {
    const format = this.activeFormat();
    return this.sideboardService
      .decks()
      .filter((deck) => (deck.format ?? 'pauper') === format)
      .slice(0, 6);
  });

  readonly totalDecksCount = computed(() => this.sideboardService.decks().length);
  readonly totalPlayersCount = computed(() => this.playersService.players().length);

  setHomeFormat(format: MagicFormat): void {
    this.activeFormat.set(format);
    this.sideboardService.setFormat(format);
  }

  navigateToFormat(format: MagicFormat): void {
    this.sideboardService.setFormat(format);
    this.router.navigate(['/sideboard']);
  }

  openMenu(): void {
    this.navService.openDrawer();
  }
}
