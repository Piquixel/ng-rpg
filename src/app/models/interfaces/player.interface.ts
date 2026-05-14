import { BaseInstance } from './base-entity.interface';
import { Character } from './character.interface';

export interface Player extends Character, BaseInstance {
  currentXp: number;
  money: number;
  nickname: string;
}
