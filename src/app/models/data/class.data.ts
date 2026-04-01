import { ClassType } from 'enums/class-type.enum';
import { ICharacter } from 'models/interfaces/character.interface';

export const USER_CHOICES_CLASS: ICharacter[] = [
  {
    type: ClassType.Warrior,
    icon: '⚔️',
    name: 'Warrior',
    description: 'Robust tank with high resistance.',
    features: ['High defense', 'High HP', 'Durable'],
    characteristics: {
      atk: 15,
      def: 12,
      speed: 8,
      hp: 120,
      mana: 30,
    },
  },
  {
    type: ClassType.Mage,
    icon: '🔮',
    name: 'Mage',
    description: 'Spellcaster with destructive magic power.',
    features: ['High Damages', 'Powerful Spells', 'Heal'],
    characteristics: {
      atk: 20,
      def: 5,
      speed: 10,
      hp: 70,
      mana: 100,
    },
  },
  {
    type: ClassType.Rogue,
    icon: '🗡️',
    name: 'Rogue',
    description: 'Agile assassin who hits fast and strong.',
    features: ['High Speed', 'Critical Hits', 'Dodge'],
    characteristics: {
      atk: 18,
      def: 8,
      speed: 15,
      hp: 90,
      mana: 50,
    },
  },
];
