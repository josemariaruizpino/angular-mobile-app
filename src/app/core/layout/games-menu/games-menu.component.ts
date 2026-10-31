import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GAMES } from '../../data/games';

@Component({
  selector: 'app-games-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './games-menu.component.html',
  styleUrl: './games-menu.component.scss',
  host: {
    '(mouseenter)': 'onHover(true)',
    '(mouseleave)': 'onHover(false)',
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'close()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesMenuComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly games = GAMES;
  protected readonly isOpen = signal(false);

  /** En escritorio (con hover real) el menú se abre al pasar el ratón; en táctil solo con toque. */
  private readonly canHover = typeof matchMedia === 'function' && matchMedia('(hover: hover)').matches;

  protected toggle(): void {
    // Con hover el menú ya está abierto al llegar el clic: no lo cerramos
    if (this.canHover) {
      this.isOpen.set(true);
      return;
    }
    this.isOpen.update((open) => !open);
  }

  protected onHover(entering: boolean): void {
    if (this.canHover) {
      this.isOpen.set(entering);
    }
  }

  protected close(): void {
    this.isOpen.set(false);
  }

  protected onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.close();
    }
  }
}
