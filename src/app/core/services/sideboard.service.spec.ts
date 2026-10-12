import { TestBed } from '@angular/core/testing';
import { SideboardService } from './sideboard.service';

describe('SideboardService', () => {
  let service: SideboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideboardService);
  });

  it('should be created and contain MTGGoldfish Pauper decks', () => {
    expect(service).toBeTruthy();
    expect(service.decks().length).toBeGreaterThan(5);
  });

  it('should find a deck by its slug', () => {
    const deck = service.getDeckBySlug('mono-red-madness');
    expect(deck).toBeDefined();
    expect(deck?.name).toBe('Mono Red Madness');
    expect(deck?.imageUrl).toContain('mtggoldfish.com');
    expect(deck?.matchups.length).toBeGreaterThan(0);
  });

  it('should filter decks by query signal', () => {
    service.setSearch('Terror');
    const filtered = service.filteredDecks();
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.some((d) => d.slug === 'blue-terror')).toBeTrue();
  });

  it('should filter decks by archetype type signal', () => {
    service.setFilter('Aggro');
    const filtered = service.filteredDecks();
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((d) => d.archetypeType === 'Aggro')).toBeTrue();
  });
});
