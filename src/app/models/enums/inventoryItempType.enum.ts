export enum InventoryItemType {
  POTION = 'normal',
  WEAPONS = 'weapons',
  ARMOUR = 'armour',
  ACCESSORY = 'accessory',
}

export const IconByItemType: Record<InventoryItemType, string> = {
  [InventoryItemType.POTION]: '🧪',
  [InventoryItemType.WEAPONS]: '⚔️',
  [InventoryItemType.ARMOUR]: '🪖',
  [InventoryItemType.ACCESSORY]: '💍',
};
