import { UpperCasePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Player } from 'interfaces/player.interface';
import { GameManagerService } from 'models/services/game-manager.service';

@Component({
  selector: 'app-player-card',
  imports: [UpperCasePipe],
  templateUrl: './player-card.html',
  styleUrl: './player-card.scss',
})
export class PlayerCard {
  public readonly isPlayer = input.required();
  private readonly gameManager = inject(GameManagerService)

  public readonly player: Player = this.gameManager.currentPlayer
}
