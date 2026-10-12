import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideboardService } from '../../core/services/sideboard.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-sideboard-detail',
  standalone: true,
  imports: [RouterLink, CardComponent, IconComponent],
  templateUrl: './sideboard-detail.component.html',
  styleUrl: './sideboard-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideboardDetailComponent {
  private readonly sideboardService = inject(SideboardService);

  // Inyectado automáticamente desde el parámetro de la ruta (:slug)
  readonly slug = input.required<string>();

  constructor() {
    effect(() => {
      // Al cargar o cambiar de mazo, hacer scroll a la parte superior de la pantalla
      this.slug();
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    });
  }

  // Filtro de búsqueda de emparejamientos
  readonly matchupQuery = signal<string>('');
  readonly selectedDifficulty = signal<string>('all');

  // Pestaña o sección activa (matchups / tips / maybeboard)
  readonly activeSection = signal<'matchups' | 'tips' | 'maybeboard'>('matchups');

  // Datos reactivos del mazo
  readonly deck = computed(() => this.sideboardService.getDeckBySlug(this.slug()));

  // Emparejamientos filtrados reactivamente
  readonly filteredMatchups = computed(() => {
    const currentDeck = this.deck();
    if (!currentDeck) return [];
    const query = this.matchupQuery().toLowerCase().trim();
    const diff = this.selectedDifficulty();

    return currentDeck.matchups.filter((m) => {
      const matchesDiff = diff === 'all' || m.difficulty === diff;
      const matchesQuery = !query ||
        m.vsDeckName.toLowerCase().includes(query) ||
        m.inCards.some((c) => c.cardName.toLowerCase().includes(query)) ||
        m.outCards.some((c) => c.cardName.toLowerCase().includes(query));
      return matchesDiff && matchesQuery;
    });
  });

  // Emparejamiento seleccionado actualmente
  readonly selectedMatchupIndex = signal<number>(0);

  readonly currentMatchup = computed(() => {
    const list = this.filteredMatchups();
    if (list.length === 0) return undefined;
    const index = Math.min(this.selectedMatchupIndex(), list.length - 1);
    return list[index];
  });

  selectMatchup(index: number): void {
    this.selectedMatchupIndex.set(index);
  }

  onMatchupSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.matchupQuery.set(input.value);
    this.selectedMatchupIndex.set(0);
  }

  setDifficultyFilter(diff: string): void {
    this.selectedDifficulty.set(diff);
    this.selectedMatchupIndex.set(0);
  }

  setActiveSection(section: 'matchups' | 'tips' | 'maybeboard'): void {
    this.activeSection.set(section);
  }
}
