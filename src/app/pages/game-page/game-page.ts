import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { GameHeader } from 'components/game-header/game-header';
import { GameManagerService } from 'models/services/game-manager.service';
import { PlayerService } from 'models/services/player.service';

@Component({
  selector: 'app-game',
  imports: [RouterOutlet, GameHeader],
  templateUrl: './game-page.html',
  styleUrl: './game-page.scss',
})
export class GamePage {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _playerService = inject(PlayerService);
  public readonly gameManager = inject(GameManagerService);

  constructor() {
    this._activatedRoute.params.subscribe(params => {
      const playerNickname = params['nickname'];
      const player = this._playerService.getUserByName(playerNickname);

      if (player) {
        this.gameManager.initGame(player);
      }

      console.log(player);
    });
  }
}
