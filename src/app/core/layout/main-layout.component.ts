import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarDrawerComponent } from './sidebar-drawer/sidebar-drawer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarDrawerComponent],
  template: `
    <div class="app-viewport">
      <!-- Cabecera Sticky -->
      <app-header />

      <!-- Menú Lateral Hamburguesa -->
      <app-sidebar-drawer />

      <!-- Contenedor Principal de Vistas -->
      <main class="main-content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: `
    .app-viewport {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .main-content {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {}
