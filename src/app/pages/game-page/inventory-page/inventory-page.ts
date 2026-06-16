import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Player } from 'interfaces/player.interface';
import { GameManagerService } from 'models/services/game-manager.service';
import { InterfaceDigitsPipe } from '../../../pipes/interface-digits-pipe';

@Component({
  selector: 'app-inventory-page',
  imports: [TitleCasePipe, InterfaceDigitsPipe],
  templateUrl: './inventory-page.html',
  styleUrl: './inventory-page.scss',
})
export class InventoryPage {
  private _gameManager: GameManagerService = inject(GameManagerService);
  public get playerStats(): Player {
    return this._gameManager.currentPlayer;
  }
}
