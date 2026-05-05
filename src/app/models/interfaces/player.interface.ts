import { BaseInstance } from './base-entity.interface';
import { ICharacter } from './character.interface';

export interface Player extends ICharacter, BaseInstance {
  nickname: string;
  currentXP: number;
  money: number;
}
