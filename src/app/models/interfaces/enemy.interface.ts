import { EnemyRaceType } from 'enums/enemy-race-type.enum';
import { BaseEntity, BaseInstance } from './base-entity.interface';

export interface Enemy extends BaseEntity, BaseInstance {
  kind: 'normal' | 'elite' | 'boss';
  race: EnemyRaceType;
}
