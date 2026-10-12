import { Injectable, computed, signal } from '@angular/core';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private readonly _players = signal<Player[]>([
    {
      id: 'jose-maria-ruiz',
      slug: 'jose-maria-ruiz',
      name: 'Jose Maria Ruiz',
      alias: 'josefvck',
      bio: 'Jugador competitivo de Magic: The Gathering Pauper y Magic Online (MOL).',
      location: 'Madrid',
      favoriteDecks: ['CAW Gates', 'Grixis Affinity', 'Blue Terror'],
      links: [
        {
          title: 'Historial de Torneos y Mazos',
          url: 'https://mtgdecks.net/players/jose-maria-ruiz-pino',
          platform: 'mtgdecks',
          badge: 'MTGDecks',
          description: 'Registro de torneos presenciales y online, mazos jugados, victorias y estadísticas competitivas.'
        },
        {
          title: 'Perfil & Trofeos MOL (Magic Online)',
          url: 'https://www.mtggoldfish.com/player/josefvck',
          platform: 'mtggoldfish',
          badge: 'MOL / MTGGoldfish',
          description: 'Historial de ligas 5-0, challenges y listas publicadas en Magic Online bajo el usuario josefvck.'
        }
      ]
    },
    {
      id: 'andres-sanchez',
      slug: 'andres-sanchez',
      name: 'Andrés Sánchez',
      alias: 'ByeMan',
      bio: 'Piloto competitivo y referente en arquetipos pensantes de Pauper.',
      location: 'Madrid',
      favoriteDecks: ['Jund Wildfire', 'Gardens', 'Spy Combo'],
      links: [
        {
          title: 'Historial de Torneos y Mazos',
          url: 'https://mtgdecks.net/players/andres-sanchez-chamorro',
          platform: 'mtgdecks',
          badge: 'MTGDecks',
          description: 'Registro de torneos presenciales y online, mazos jugados, victorias y estadísticas competitivas.'
        }
      ]
    },
    {
      id: 'alejandro-ramos',
      slug: 'alejandro-ramos',
      name: 'Alejandro Ramos',
      alias: 'Lale14',
      bio: 'Maestro de perezosos y combador profesional.',
      location: 'Málaga',
      favoriteDecks: ['Ruby Storm', 'Esper Affinity'],
      links: [
        {
          title: 'Historial de Torneos y Mazos',
          url: 'https://mtgdecks.net/players/alejandro-ramos-de-la-vega',
          platform: 'mtgdecks',
          badge: 'MTGDecks',
          description: 'Registro de torneos presenciales y online, mazos jugados, victorias y estadísticas competitivas.'
        },
        {
          title: 'Perfil & Trofeos MOL (Magic Online)',
          url: 'https://www.mtggoldfish.com/player/Lale14',
          platform: 'mtggoldfish',
          badge: 'MOL / MTGGoldfish',
          description: 'Historial de ligas 5-0, challenges y listas publicadas en Magic Online bajo el usuario josefvck.'
        }
      ]
    }
  ]);

  readonly searchQuery = signal<string>('');
  readonly players = this._players.asReadonly();

  readonly filteredPlayers = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) {
      return this._players();
    }
    return this._players().filter((p) =>
      p.name.toLowerCase().includes(query) ||
      (p.alias && p.alias.toLowerCase().includes(query)) ||
      (p.bio && p.bio.toLowerCase().includes(query)) ||
      (p.favoriteDecks && p.favoriteDecks.some((d) => d.toLowerCase().includes(query)))
    );
  });

  getPlayerBySlug(slug: string): Player | undefined {
    return this._players().find((p) => p.slug === slug);
  }

  setSearch(query: string): void {
    this.searchQuery.set(query);
  }
}
