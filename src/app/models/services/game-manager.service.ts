import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { EnemyRaceType } from 'enums/enemy-race-type.enum';
import { GameState } from 'enums/gameState.enum';
import { enemyKind } from 'enums/kind.enum';
import { Enemy } from 'interfaces/enemy.interface';
import { Player } from 'interfaces/player.interface';
import { EntityHelper } from 'models/helpers/entity.helper';
import { map, Observable, zip } from 'rxjs';
import { InterfaceDigitsPipe } from '../../pipes/interface-digits-pipe';
import { LogEntryService } from './log-entry.service';
import { PlayerService } from './player.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  private _currentPlayer?: Player;
  private _gameState: WritableSignal<GameState> = signal(GameState.NONE);
  private _enemies: Enemy[] = [];
  private _currentEnemy: WritableSignal<Enemy | undefined> = signal(undefined);
  private _interfaceCase = inject(InterfaceDigitsPipe);
  private router = inject(Router);
  private playerService = inject(PlayerService);

  private readonly _random: RandomService = inject(RandomService);
  private readonly _log: LogEntryService = inject(LogEntryService);

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
    return this._currentEnemy()!;
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
        this._enemies = values.type.map((type, i) => {
          const kind = i >= 3 ? values.kind[i] : enemyKind.NORMAL;
          return EntityHelper.enemyRaceToInstance(type, kind);
        });

        this._gameState.set(GameState.FIGHT_INIT);
        this.startNewFight();
      });
  }

  private startNewFight(): void {
    this._gameState.set(this.handleInitFight());
    this._gameState.set(this.handleTurnDecide());
    if (this._gameState() === GameState.ENEMY_TURN) this.fightLoop();
  }

  public fightLoop(): void {
    if (this._gameState() === GameState.ENEMY_TURN) {
      this._gameState.set(this.handleEnemyTurn());
      this.applyEnemyAttack();
      if (this.checkEnd()) {
        this._gameState.set(GameState.FIGHT_END);
        this.returnToMap(true);
        return;
      }
      this._gameState.set(GameState.PLAYER_TURN);
      this._log.addLog('system', '💻', 'Le joueur prend les armes');
    } else if (this._gameState() === GameState.PLAYER_TURN) {
      this.applyPlayerAttack();
      if (this.checkEnd()) {
        this._gameState.set(GameState.FIGHT_END);
        // this.returnToMap(false);
        this.handleReward();
        this._log.addLog(
          'system',
          '💻',
          `Le combat a été remporté par ${this.currentPlayer.currentHp <= 0 ? this.currentEnemy.name : this.currentPlayer.nickname}`,
        );
        if (this._enemies.length >= 1) this.startNewFight();
        else {
          this._gameState.set(GameState.NONE);
          this.returnToMap(false);
        }
      } else {
        setTimeout(() => {
          this._gameState.set(GameState.ENEMY_TURN);
          this._log.addLog('system', '💻', `Au tour de l'ennemi !`);
          this.fightLoop();
        }, 500);
      }
    }
  }

  private handleReward(): void {
    this._currentPlayer!.money += this.currentEnemy.goldReward;
    this._currentPlayer!.currentXp += this.currentEnemy.xpReward;

    const levelingUp = this.xpForNextLevel(this.currentPlayer.lvl) < this._currentPlayer!.currentXp;

    if (levelingUp) {
      this._currentPlayer!.lvl++;

      this._currentPlayer!.characteristics.atk *= 1.1;
      this._currentPlayer!.characteristics.def *= 1.1;
      this._currentPlayer!.characteristics.hp *= 1.1;
      this._currentPlayer!.characteristics.mana *= 1.1;
      this._currentPlayer!.characteristics.speed *= 1.1;

      this._currentPlayer!.currentHp = this._currentPlayer!.characteristics.hp;
      this._currentPlayer!.currentMp = this._currentPlayer!.characteristics.mana;
    }
  }

  private xpForNextLevel(level: number): number {
    return 500 * Math.pow(2.5, level - 1);
  }

  private checkEnemyDamage(): number {
    const atk = this.currentEnemy.characteristics.atk;
    if (this._currentPlayer!.characteristics.def > atk) {
      return atk / 2;
    } else {
      return atk;
    }
  }

  private checkPlayerDamage(): number {
    const def = this.currentEnemy.characteristics.def;
    const atk = this._currentPlayer!.characteristics.atk;

    if (atk < def) {
      return atk / 2;
    } else {
      return atk;
    }
  }

  private applyPlayerAttack(): void {
    this._gameState.set(GameState.APPLY_EFFECT);
    const atk = this.checkPlayerDamage();

    this.currentEnemy.currentHp -= atk;

    this._log.addLog(
      'player',
      '🧑‍🦲',
      `Le joueur inflige : ${this._interfaceCase.transform(atk)} HP`,
    );
  }

  public applyEnemyAttack(): void {
    this._gameState.set(this.handleApplyEffect());
    const hp = this.currentEnemy.characteristics.atk;
    this.currentPlayer.currentHp -= hp < this.currentPlayer.characteristics.def ? hp / 2 : hp;
    this._log.addLog(
      'enemy',
      '🐺',
      `Le joueur a perdu ${hp < this.currentPlayer.characteristics.def ? this._interfaceCase.transform(hp / 2) : this._interfaceCase.transform(hp)} HP.`,
    );
  }

  public checkEnd(): boolean {
    return this.currentEnemy.currentHp <= 0 || this.currentPlayer.currentHp <= 0;
  }

  public handleInitFight(): GameState {
    this._currentEnemy.set(this._enemies.shift());
    this.infoPromptLog();
    return GameState.TURN_DECIDE;
  }

  private infoPromptLog(): void {
    this._log.addLog('info', 'ℹ️', `Un ${this.currentEnemy.name} apparaît`);
  }

  public handleTurnDecide(): GameState {
    const turn =
      this.currentPlayer.characteristics.speed >= this.currentEnemy.characteristics.speed
        ? GameState.PLAYER_TURN
        : GameState.ENEMY_TURN;
    this._log.addLog(
      'info',
      'ℹ️',
      `${turn === GameState.PLAYER_TURN ? this.currentPlayer.name : this.currentEnemy.name} commence!`,
    );
    return turn;
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

  public returnToMap(restoreLife: boolean) {
    if (restoreLife) {
      this._currentPlayer!.currentHp = this._currentPlayer!.characteristics.hp;
      this._currentPlayer!.currentMp = this._currentPlayer!.characteristics.mana;

      this._currentPlayer!.money /= 2;
    }

    this.router.navigateByUrl('/game');
    this._log.reset();
  }

  public onSave() {
    this.playerService.save(this.currentPlayer);
    alert('Game Saved');
  }
}
