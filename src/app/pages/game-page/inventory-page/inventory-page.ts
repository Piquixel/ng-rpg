import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IconByItemType, InventoryItemType } from 'enums/inventoryItempType.enum';
import { InventoryItemBagIstance } from 'interfaces/inventory.interface';
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
  public readonly inventoryTypeFilter = Object.values(InventoryItemType);
  public readonly IconByType = IconByItemType;
  public readonly bag: InventoryItemBagIstance[] = [
    {
      icon: '🧪',
      name: 'Petite Potion de Soin',
      rarity: 'common',
      quantity: 3,
      type: InventoryItemType.POTION,
      description: 'Restaure 30 HP',
    },
  ];
  public get playerStats(): Player {
    return this._gameManager.currentPlayer;
  }
}
