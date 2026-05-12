import { Component } from '@angular/core';

interface TypeActions {
  icon: string;
  name: string;
  cost: string;
}

interface InventoryActions {
  icon: string;
  name: string;
  quantity: string;
}

@Component({
  selector: 'app-action-bar',
  imports: [],
  templateUrl: './action-bar.html',
  styleUrl: './action-bar.scss',
})
export class ActionBar {
  public readonly typeAction: TypeActions[] = [
    {
      icon: '⚔️',
      name: 'Taillade',
      cost: '10',
    },
    {
      icon: '⚔️',
      name: 'Taillade',
      cost: '10',
    },
    {
      icon: '⚔️',
      name: 'Taillade',
      cost: '10',
    },
  ];
  public readonly InventoryAction: InventoryActions[] = [
    {
      icon: '⚔️',
      name: 'Taillade',
      quantity: '10',
    },
    {
      icon: '⚔️',
      name: 'Taillade',
      quantity: '10',
    },
    {
      icon: '⚔️',
      name: 'Taillade',
      quantity: '10',
    },
  ];
}
