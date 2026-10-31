import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackLinkComponent } from '../../shared/components/back-link/back-link.component';

@Component({
  selector: 'app-riftbound',
  standalone: true,
  imports: [BackLinkComponent],
  template: `
    <div class="mobile-container riftbound">
      <app-back-link link="/games" target="los juegos" />
      <h1 class="riftbound__title">Riftbound</h1>
      <p class="riftbound__lede">Esta sección está en construcción. Muy pronto.</p>
    </div>
  `,
  styles: `
    .riftbound {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .riftbound__title {
      font-size: 4rem;
      font-weight: 800;
      line-height: 0.9;
      color: var(--text-primary);
    }

    .riftbound__lede {
      color: var(--text-secondary);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RiftboundComponent {}
