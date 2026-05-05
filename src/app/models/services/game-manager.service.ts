import { Injectable } from '@angular/core';
import { Player } from 'interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  private _currentPlayer?: Player;

  public initGame(player: Player) {
    this._currentPlayer = player;
  }

  public get isInit(): boolean {
    return !!this._currentPlayer;
  }

  public currentPlayer() {
    return this._currentPlayer!;
  }
}
