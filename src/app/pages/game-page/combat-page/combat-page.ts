import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionBar } from 'components/action-bar/action-bar';
import { FightHistory } from 'components/fight-history/fight-history';
import { PlayerCard } from 'components/player-card/player-card';
import { GameState } from 'enums/gameState.enum';
import { ZoneMap } from 'enums/zones.enum';
import { GameManagerService } from 'models/services/game-manager.service';
import { LogEntryService } from 'models/services/log-entry.service';

@Component({
  selector: 'app-combat-page',
  imports: [PlayerCard, FightHistory, ActionBar],
  templateUrl: './combat-page.html',
  styleUrl: './combat-page.scss',
})
export class CombatPage {
  public readonly log = inject(LogEntryService);
  public readonly gameManager: GameManagerService = inject(GameManagerService);
  private readonly _activatedRoutes: ActivatedRoute = inject(ActivatedRoute);

  public readonly GameState = GameState;
  public get isActive(): boolean {
    return this.gameManager.state() === GameState.PLAYER_TURN;
  }

  constructor() {
    const zone: ZoneMap = this._activatedRoutes.snapshot.params['slug'];
    this.gameManager.startFight(zone);
  }
}
