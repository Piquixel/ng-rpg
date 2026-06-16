import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject, input, InputSignal } from '@angular/core';
import { IconByClass } from 'enums/class-type.enum';
import { EnemyRaceType } from 'enums/enemy-race-type.enum';
import { GameManagerService } from 'models/services/game-manager.service';
import { InterfaceDigitsPipe } from '../../pipes/interface-digits-pipe';

const IconByRace: Record<EnemyRaceType, string> = {
  [EnemyRaceType.Goblin]: '👺',
  [EnemyRaceType.Orc]: '👹',
  [EnemyRaceType.Troll]: '🧌',
  [EnemyRaceType.Wolf]: '🐺',
  [EnemyRaceType.Dragon]: '🐲',
};

@Component({
  selector: 'app-player-card',
  imports: [TitleCasePipe, InterfaceDigitsPipe],
  templateUrl: './player-card.html',
  styleUrl: './player-card.scss',
})
export class PlayerCard {
  private readonly gameManager: GameManagerService = inject(GameManagerService);
  public readonly isPlayer: InputSignal<boolean> = input.required<boolean>();

  public readonly IconByType = IconByClass;
  public readonly IconByRace = IconByRace;

  public readonly player = computed(() => this.gameManager.currentPlayer);
  public readonly enemy = computed(() => this.gameManager.currentEnemy);
}
