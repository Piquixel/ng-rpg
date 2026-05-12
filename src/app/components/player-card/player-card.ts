import { Component, input } from '@angular/core';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.scss',
})
export class PlayerCard {
  public readonly isPlayer = input.required();
}
