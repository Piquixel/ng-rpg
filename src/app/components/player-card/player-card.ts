import { UpperCasePipe } from '@angular/common';
import { Component, inject, input, InputSignal } from '@angular/core';
import { Player } from 'interfaces/player.interface';
import { GameManagerService } from 'models/services/game-manager.service';

@Component({
  selector: 'app-player-card',
  imports: [UpperCasePipe],
  templateUrl: './player-card.html',
  styleUrl: './player-card.scss',
})
export class PlayerCard {
  public readonly isPlayer: InputSignal<boolean> = input.required<boolean>();
  private readonly gameManager: GameManagerService = inject(GameManagerService);

  public readonly player: Player = this.gameManager.currentPlayer;
}
