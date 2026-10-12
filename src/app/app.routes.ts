import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    title: 'Inicio • MinimalApp',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'sideboard',
    title: 'SIDEBOARD • Metagame Pauper',
    loadComponent: () =>
      import('./features/sideboard/sideboard-list.component').then((m) => m.SideboardListComponent)
  },
  {
    path: 'sideboard/:slug',
    title: 'Guía de Banquillo • SIDEBOARD',
    loadComponent: () =>
      import('./features/sideboard/sideboard-detail.component').then((m) => m.SideboardDetailComponent)
  },
  {
    path: 'players',
    title: 'Jugadores • Pauper',
    loadComponent: () =>
      import('./features/players/players-list.component').then((m) => m.PlayersListComponent)
  },
  {
    path: 'players/:slug',
    title: 'Perfil de Jugador • Pauper',
    loadComponent: () =>
      import('./features/players/player-detail.component').then((m) => m.PlayerDetailComponent)
  },
  {
    path: 'explore',
    title: 'Explorar • MinimalApp',
    loadComponent: () =>
      import('./features/explore/explore.component').then((m) => m.ExploreComponent)
  },
  {
    path: 'activity',
    title: 'Actividad • MinimalApp',
    loadComponent: () =>
      import('./features/activity/activity.component').then((m) => m.ActivityComponent)
  },
  {
    path: 'settings',
    title: 'Ajustes • MinimalApp',
    loadComponent: () =>
      import('./features/settings/settings.component').then((m) => m.SettingsComponent)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
