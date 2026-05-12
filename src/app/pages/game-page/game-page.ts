import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameHeader } from 'components/game-header/game-header';
import { GameManagerService } from 'models/services/game-manager.service';

@Component({
  selector: 'app-game',
  imports: [RouterOutlet, GameHeader],
  templateUrl: './game-page.html',
  styleUrl: './game-page.scss',
})
export class GamePage {
  public readonly gameManager = inject(GameManagerService);

  constructor() {
    console.log(this.gameManager.currentPlayer)
  }
}
