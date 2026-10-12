import { Injectable, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NavigationItem } from '../models/navigation-item.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private readonly router = inject(Router);

  // Navegación principal de la app
  private readonly _items = signal<NavigationItem[]>([
    {
      id: 'home',
      label: 'Inicio',
      path: '/home',
      icon: 'home',
      description: 'Panel principal y resumen de actividad'
    },
    {
      id: 'sideboard',
      label: 'SIDEBOARD',
      path: '/sideboard',
      icon: 'sparkles',
      badge: 'Pauper',
      description: 'Metagame de Pauper y guías de banquillo'
    },
    // {
    //   id: 'explore',
    //   label: 'Explorar',
    //   path: '/explore',
    //   icon: 'compass',
    //   description: 'Descubre recursos y secciones destacadas'
    // },
    // {
    //   id: 'activity',
    //   label: 'Actividad',
    //   path: '/activity',
    //   icon: 'pulse',
    //   badge: '3',
    //   description: 'Historial y notificaciones recientes'
    // },
    // {
    //   id: 'settings',
    //   label: 'Ajustes',
    //   path: '/settings',
    //   icon: 'sliders',
    //   description: 'Preferencias de usuario y apariencia'
    // }
  ]);

  // Estado del menú hamburguesa (drawer)
  private readonly _isDrawerOpen = signal<boolean>(false);
  private readonly _currentUrl = signal<string>(this.router.url);

  // Señales públicas de solo lectura
  readonly items = this._items.asReadonly();
  readonly isDrawerOpen = this._isDrawerOpen.asReadonly();
  readonly currentUrl = this._currentUrl.asReadonly();

  // Item actualmente activo calculado reactivamente
  readonly activeItem = computed(() => {
    const url = this._currentUrl();
    return this._items().find((item) => url.startsWith(item.path)) ?? this._items()[0];
  });

  constructor() {
    // Al cambiar de ruta, cerramos automáticamente el drawer lateral en móvil y hacemos scroll al inicio
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this._currentUrl.set(event.urlAfterRedirects);
        this.closeDrawer();
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      });
  }

  toggleDrawer(): void {
    const nextState = !this._isDrawerOpen();
    this.setDrawerState(nextState);
  }

  openDrawer(): void {
    this.setDrawerState(true);
  }

  closeDrawer(): void {
    this.setDrawerState(false);
  }

  private setDrawerState(isOpen: boolean): void {
    this._isDrawerOpen.set(isOpen);
    this.syncBodyScrollLock(isOpen);
  }

  private syncBodyScrollLock(locked: boolean): void {
    if (typeof document !== 'undefined') {
      if (locked) {
        document.body.classList.add('drawer-locked');
      } else {
        document.body.classList.remove('drawer-locked');
      }
    }
  }
}
