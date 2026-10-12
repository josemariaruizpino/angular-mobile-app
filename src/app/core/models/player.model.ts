export interface PlayerLink {
  title: string;
  url: string;
  platform: 'mtgdecks' | 'mtggoldfish' | 'moxfield' | 'twitter' | 'youtube' | 'twitch' | 'other';
  badge?: string;
  description?: string;
}

export interface Player {
  id: string;
  slug: string;
  name: string;
  alias?: string;
  avatarUrl?: string;
  bio?: string;
  location?: string;
  favoriteDecks?: string[];
  links: PlayerLink[];
}
