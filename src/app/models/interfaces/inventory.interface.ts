import { InventoryItemType } from 'enums/inventoryItempType.enum';

export interface InventoryItem {
  name: string;
  icon: string;
  type: InventoryItemType;
  rarity: 'common' | 'rare' | 'legendary';
  description: string;
}
export interface InventoryItemShopIstance extends InventoryItem {}
export interface InventoryItemBagIstance extends InventoryItem {
  quantity: number;
}
export interface InventoryBag {}
