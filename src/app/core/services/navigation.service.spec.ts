import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])]
    });
    service = TestBed.inject(NavigationService);
  });

  it('should be created with drawer closed by default', () => {
    expect(service).toBeTruthy();
    expect(service.isDrawerOpen()).toBeFalse();
  });

  it('should toggle drawer state', () => {
    expect(service.isDrawerOpen()).toBeFalse();
    service.toggleDrawer();
    expect(service.isDrawerOpen()).toBeTrue();
    service.toggleDrawer();
    expect(service.isDrawerOpen()).toBeFalse();
  });

  it('should explicitly open and close the drawer', () => {
    service.openDrawer();
    expect(service.isDrawerOpen()).toBeTrue();
    service.closeDrawer();
    expect(service.isDrawerOpen()).toBeFalse();
  });

  it('should provide the active mobile sections including SIDEBOARD and JUGADORES', () => {
    const items = service.items();
    expect(items.length).toBe(3);
    expect(items.map((i) => i.id)).toEqual(['home', 'sideboard', 'players']);
  });
});
