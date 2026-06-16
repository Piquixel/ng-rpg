import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { EnemyRaceType } from 'enums/enemy-race-type.enum';
import { GameState } from 'enums/gameState.enum';
import { enemyKind } from 'enums/kind.enum';
import { Enemy } from 'interfaces/enemy.interface';
import { Player } from 'interfaces/player.interface';
import { EntityHelper } from 'models/helpers/entity.helper';
import { map, Observable, zip } from 'rxjs';
import { LogEntryService } from './log-entry.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  private _currentPlayer?: Player;
  private _gameState: WritableSignal<GameState> = signal(GameState.NONE);
  private _enemies: Enemy[] = [];
  private _CurrentEnemy?: Enemy;

  private readonly _random: RandomService = inject(RandomService);
  private _logs: LogEntryService = inject(LogEntryService);

  public initGame(player: Player): void {
    this._currentPlayer = player;
  }

  public getRandomEnemiesType(): Observable<EnemyRaceType[]> {
    return this._random
      .generateIntegerAndGetData(5, 0, 2)
      .pipe(map(values => EntityHelper.getRaceByNumbers(values)));
  }

  public getRandomEnemiesKind(): Observable<enemyKind[]> {
    return this._random
      .generateIntegerAndGetData(5, 0, 2)
      .pipe(map(values => EntityHelper.getKindByNumbers(values)));
  }

  public resetGame(): void {
    delete this._currentPlayer;
  }

  public get isInit(): boolean {
    return !!this._currentPlayer;
  }

  public get state(): WritableSignal<GameState> {
    return this._gameState;
  }

  public get currentPlayer(): Player {
    return this._currentPlayer!;
  }

  public get currentEnemy(): Enemy {
    return this._CurrentEnemy!;
  }

  public startFight(): void {
    const type$ = this.getRandomEnemiesType();
    const kind$ = this.getRandomEnemiesKind();

    zip(type$, kind$)
      .pipe(
        map(([type, kind]) => ({
          type,
          kind,
        })),
      )
      .subscribe(values => {
        this._enemies = values.type.map((type, i) =>
          EntityHelper.enemyRaceToInstance(type, values.kind[i]),
        );

        this._gameState.set(GameState.FIGHT_INIT);
        while (this._gameState() !== GameState.FIGHT_END) {
          // console.log('Fight state => ', this._gameState);
          switch (this._gameState()) {
            case GameState.FIGHT_INIT:
              this._CurrentEnemy = this._enemies.shift();
              this._logs.addLog('system', '⚔️', `Combat démarré!`);
              this._logs.addLog(
                'enemy',
                this._CurrentEnemy!.icon,
                `Un ${this.currentEnemy.name} surgit`,
              );
              this._gameState.set(GameState.TURN_DECIDE);
              break;
            case GameState.TURN_DECIDE:
              this._gameState.set(this.handleTurnDecide());
              break;
            case GameState.PLAYER_TURN:
              this._gameState.set(this.handlePlayerTurn());
              break;
            case GameState.ENEMY_TURN:
              this._gameState.set(this.handleEnemyTurn());
              break;
            case GameState.APPLY_EFFECT:
              this._gameState.set(this.handleApplyEffect());
              break;
            case GameState.CHECK_END:
              this._gameState.set(this.handleCheckEnd());
              break;
            default:
              this._gameState.set(GameState.FIGHT_END);
          }
        }
      });
  }

  public handleTurnDecide(): GameState {
    return this.currentPlayer.characteristics.speed >= this._CurrentEnemy!.characteristics.speed
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
