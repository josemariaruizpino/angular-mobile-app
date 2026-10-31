export type GameId = 'magic' | 'riftbound';

export interface Game {
  id: GameId;
  name: string;
  description: string;
  path: string;
  logo: string;
  /** Icono compacto para menús. */
  icon: string;
  /** Etiqueta corta bajo el nombre (formatos, estado...). */
  tagline: string;
  comingSoon?: boolean;
}
