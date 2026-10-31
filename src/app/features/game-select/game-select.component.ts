import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { GAMES } from '../../core/data/games';

@Component({
  selector: 'app-game-select',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './game-select.component.html',
  styleUrl: './game-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameSelectComponent {
  protected readonly games = GAMES;
}
