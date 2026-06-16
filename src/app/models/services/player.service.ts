import { Injectable } from '@angular/core';
import { Player } from 'interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private readonly _playerKey: string = 'PLAYER_KEY';

  public add(player: Player): void {
    const playerList: Player[] = this.savedPlayers;
    const exist: boolean = this.getPlayerByName(player.nickname) !== undefined;
    if (!exist) {
      playerList.push(player);
      try {
        const toSave: string = JSON.stringify(playerList);
        localStorage[this._playerKey] = toSave;
      } catch (err) {
        console.error('Failed to save player: ', err);
      }
    }
  }

  public get savedPlayers(): Player[] {
    const playerStorageValue: string = localStorage[this._playerKey];
    if (playerStorageValue) {
      try {
        return JSON.parse(playerStorageValue) as Player[];
      } catch (err) {
        console.error('Failed to fetch saved players: ', err);
      }
    }
    return [];
  }

  public getPlayerByName(name: string): Player | undefined {
    return this.savedPlayers?.find(p => p.nickname === name);
  }

  public get hasSavedPlayers(): boolean {
    return this.savedPlayers.length > 0;
  }

  public save(currentPlayer: Player): void {
    const players = this.savedPlayers.filter(p => p.nickname !== currentPlayer.nickname);

    if (players) {
      players.push(currentPlayer);

      try {
        const toSave = JSON.stringify(players);
        localStorage.setItem(this._playerKey, toSave);
      } catch (err) {
        console.error(err);
      }
    }
  }
  // public delete(): void {}
}
