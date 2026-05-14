import { inject, Injectable } from '@angular/core';
import { GameState } from 'enums/gameState.enum';
import { Enemy } from 'interfaces/enemy.interface';
import { Player } from 'interfaces/player.interface';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  private _currentPlayer?: Player;
  private _gameState: GameState = GameState.NONE;
  private _enemies?: Enemy;
  private _Currentenemy?: Enemy;
  private randoms: number[] = [];
  private readonly randomService = inject(RandomService);

  public initGame(player: Player) {
    this._currentPlayer = player;
    this.randomService.getRandom().subscribe(res => {
      this.randoms = res.result.random.data;
    });
  }

  public get isInit(): boolean {
    return this._currentPlayer != undefined;
  }

  public get currentPlayer(): Player {
    return this._currentPlayer!;
  }

  public startFight() {
    this._gameState = GameState.FIGHT_INIT;
    while (this._gameState != GameState.FIGHT_END) {
      switch (this._gameState) {
        case GameState.FIGHT_INIT:
          this._gameState = GameState.TURN_DECIDE;
          break;
        case GameState.TURN_DECIDE:
          this._gameState = this.handleTurnDecide();
          break;
        case GameState.PLAYER_TURN:
          this._gameState = this.handlePlayerTurn();
          break;
        case GameState.ENEMY_TURN:
          this._gameState = this.handleEnemyTurn();
          break;
        case GameState.APPLY_EFFECT:
          this._gameState = this.handleApplyEffect();
          break;
        case GameState.CHECK_END:
          this._gameState = this.handleCheckEnd();
          break;
        default:
          this._gameState = GameState.FIGHT_END;
      }

      // this._gameState = GameState.FIGHT_END;
    }
  }

  public handleTurnDecide(): GameState {
    return this.currentPlayer.characteristics.speed >= this._Currentenemy!.characteristics.speed
      ? GameState.PLAYER_TURN
      : GameState.ENEMY_TURN;
  }
  public handlePlayerTurn(): GameState {
    return GameState.ENEMY_TURN;
  }
  public handleEnemyTurn(): GameState {
    return GameState.APPLY_EFFECT;
  }
  public handleApplyEffect(): GameState {
    return GameState.CHECK_END;
  }
  public handleCheckEnd(): GameState {
    return GameState.FIGHT_END;
  }
}
