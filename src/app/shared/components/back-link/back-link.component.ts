import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

/** Botón "Atrás" que lleva al paso anterior del flujo. */
@Component({
  selector: 'app-back-link',
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <a [routerLink]="link()" class="back-link touch-target" [attr.aria-label]="'Volver a ' + target()">
      <app-icon name="arrow-left" [size]="20" />
      <span>Atrás</span>
    </a>
  `,
  styles: `
    :host {
      display: block;
      margin-bottom: 0.75rem;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      margin-left: -0.5rem;
      padding: 0 0.5rem;
      color: var(--text-primary);
      font-family: var(--font-display);
      font-size: 1.125rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;

      &:hover {
        color: var(--accent);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackLinkComponent {
  /** Ruta del paso anterior. */
  readonly link = input.required<string>();
  /** Nombre del paso anterior, para el texto accesible. */
  readonly target = input.required<string>();
}
