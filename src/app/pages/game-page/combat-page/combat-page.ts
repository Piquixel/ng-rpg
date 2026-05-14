import { Component, inject } from '@angular/core';
import { ActionBar } from 'components/action-bar/action-bar';
import { FightHistory } from 'components/fight-history/fight-history';
import { PlayerCard } from 'components/player-card/player-card';
import { GameManagerService } from 'models/services/game-manager.service';

@Component({
  selector: 'app-combat-page',
  imports: [PlayerCard, FightHistory, ActionBar],
  templateUrl: './combat-page.html',
  styleUrl: './combat-page.scss',
})
export class CombatPage {
  public readonly gameManager = inject(GameManagerService);

  constructor() {
    this.gameManager.startFight();
  }
}
