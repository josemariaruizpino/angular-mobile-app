import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainLayoutComponent } from './core/layout/main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent],
  template: `<app-main-layout />`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
