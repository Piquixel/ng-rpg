import { Injectable } from '@angular/core';
import { Player } from 'interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private readonly _playerKey = 'PLAYER_KEY';

  public getCurrentUsers(): Player[] {
    const currentPlayerStr = localStorage[this._playerKey];
    if (currentPlayerStr) {
      try {
        return JSON.parse(currentPlayerStr) as Player[];
      } catch (err) {
        console.error(err);
      }
    }
    return [];
  }

  public add(player: Player) {
    const currentPlayers = this.getCurrentUsers();
    const exist = this.getUserByName(player.nickname);
    if (!exist) {
      currentPlayers.push(player);
      try {
        const toSave = JSON.stringify(currentPlayers);
        localStorage[this._playerKey] = toSave;
      } catch (err) {
        console.error(err);
      }
    }
  }

  public getUserByName(name: string): Player | undefined {
    return this.getCurrentUsers()?.find(player => player.nickname === name);
  }

  public hasSavedPlayers(): boolean {
    return this.getCurrentUsers().length > 0;
  }

  // public save() {}
  // public delete() {}
}
