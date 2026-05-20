export enum ClassType {
  Mage = 'MAGE',
  Rogue = 'ROGUE',
  Warrior = 'WARRIOR',
  Wolf = 'WOLF',
  Dragon = 'DRAGON',
}

export const IconByClass = {
  [ClassType.Mage]: '🔮',
  [ClassType.Rogue]: '🗡️',
  [ClassType.Warrior]: '⚔️',
  [ClassType.Dragon]: '🐲',
  [ClassType.Wolf]: '🐺',
};
