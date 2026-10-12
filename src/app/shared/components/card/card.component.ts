import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div
      class="app-card"
      [class.clickable]="clickable()"
      [class.bordered]="bordered()"
    >
      @if (title()) {
        <div class="app-card__header">
          <h3 class="app-card__title">{{ title() }}</h3>
          @if (subtitle()) {
            <p class="app-card__subtitle">{{ subtitle() }}</p>
          }
        </div>
      }
      <div class="app-card__content">
        <ng-content />
      </div>
    </div>
  `,
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  readonly title = input<string>();
  readonly subtitle = input<string>();
  readonly clickable = input<boolean>(false);
  readonly bordered = input<boolean>(true);
}
