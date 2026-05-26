import { Component } from '@angular/core';

interface TypeActions {
  cost: number;
  icon: string;
  name: string;
}

interface InventoryActions {
  icon: string;
  quantity: number;
  name: string;
}

@Component({
  selector: 'app-action-bar',
  imports: [],
  templateUrl: './action-bar.html',
  styleUrl: './action-bar.scss',
})
export class ActionBar {
  public readonly typeActions: TypeActions[] = [
    { cost: 10, icon: '⚔️', name: 'Taillade' },
    { cost: 15, icon: '🛡️', name: 'Coup de bouclier' },
    { cost: 20, icon: '📯', name: 'Cri de Guerre' },
  ];
  public readonly inventoryActions: InventoryActions[] = [
    { icon: '', quantity: 3, name: 'Taillade' },
  ];
}
