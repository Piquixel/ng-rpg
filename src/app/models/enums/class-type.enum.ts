export enum ClassType {
  Mage = 'MAGE',
  Rogue = 'ROGUE',
  Warrior = 'WARRIOR',
}

export const IconByClass = {
  [ClassType.Mage]: '🔮',
  [ClassType.Rogue]: '🗡️',
  [ClassType.Warrior]: '⚔️',
};
