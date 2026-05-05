export enum ClassType {
  Warrior = 'WARRIOR',
  Mage = 'MAGE',
  Rogue = 'ROGUE',
}

export const IconByClass = {
  [ClassType.Mage]: '🔮',
  [ClassType.Rogue]: '🗡️',
  [ClassType.Warrior]: '⚔️',
};
