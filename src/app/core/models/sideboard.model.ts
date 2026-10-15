export interface SideboardCardPlan {
  cardName: string;
  quantity: number;
  role: 'in' | 'out';
  reason?: string;
}

export interface MatchupPlan {
  vsDeckName: string;
  difficulty: 'favorable' | 'even' | 'unfavorable';
  role?: string; // 'Aggro' | 'Control' | 'Tempo' | 'Combo' | 'Burn' | 'Midrange'
  inCards: SideboardCardPlan[];
  outCards: SideboardCardPlan[];
  gameplayTips: string[];
}

export interface MaybeboardCard {
  name: string;
  note: string;
}

export type MagicFormat = 'pauper' | 'modern';

export interface PauperDeck {
  id: string;
  slug: string;
  name: string;
  metaPercentage: string;
  metaCount: number;
  imageUrl: string;
  colors: string[];
  archetypeType: 'Aggro' | 'Control' | 'Midrange' | 'Combo' | 'Ramp';
  format?: MagicFormat;
  description: string;
  author?: string;
  decklistUrl?: string;
  keyCards: string[];
  sideboardCards: string[];
  maybeboard?: MaybeboardCard[];
  proTips?: string[];
  matchups: MatchupPlan[];
}
