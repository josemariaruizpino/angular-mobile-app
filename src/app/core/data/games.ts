import { Game } from '../models/game.model';

export const GAMES: readonly Game[] = [
  {
    id: 'magic',
    name: 'Magic',
    description: 'Metagame, banquillos y jugadores.',
    path: '/magic',
    logo: 'images/games/magic.png',
    icon: 'images/games/magic-icon.png',
    tagline: 'Pauper · Modern · Standard · Pioneer'
  },
  {
    id: 'riftbound',
    name: 'Riftbound',
    description: 'Un nuevo juego de cartas. Muy pronto.',
    path: '/riftbound',
    logo: 'images/games/riftbound.png',
    icon: 'images/games/riftbound-icon.png',
    tagline: 'League of Legends TCG',
    comingSoon: true
  }
];
