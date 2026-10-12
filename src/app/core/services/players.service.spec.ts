import { TestBed } from '@angular/core/testing';
import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersService);
  });

  it('should be created and contain initial players', () => {
    expect(service).toBeTruthy();
    expect(service.players().length).toBeGreaterThanOrEqual(1);
  });

  it('should include Jose Maria Ruiz with both MTGDecks and MTGGoldfish links', () => {
    const player = service.getPlayerBySlug('jose-maria-ruiz');
    expect(player).toBeDefined();
    expect(player?.name).toBe('Jose Maria Ruiz');
    expect(player?.alias).toBe('josefvck');
    expect(player?.links.length).toBe(2);

    const mtgdecksLink = player?.links.find((l) => l.platform === 'mtgdecks');
    expect(mtgdecksLink).toBeDefined();
    expect(mtgdecksLink?.url).toBe('https://mtgdecks.net/players/jose-maria-ruiz-pino');

    const goldfishLink = player?.links.find((l) => l.platform === 'mtggoldfish');
    expect(goldfishLink).toBeDefined();
    expect(goldfishLink?.url).toBe('https://www.mtggoldfish.com/player/josefvck');
  });

  it('should filter players by search query', () => {
    service.setSearch('josefvck');
    expect(service.filteredPlayers().length).toBe(1);
    expect(service.filteredPlayers()[0].slug).toBe('jose-maria-ruiz');

    service.setSearch('inexistente123');
    expect(service.filteredPlayers().length).toBe(0);

    service.setSearch('');
    expect(service.filteredPlayers().length).toBe(service.players().length);
  });
});
