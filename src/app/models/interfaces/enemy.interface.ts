import { EnemyRaceType } from 'enums/enemy-race-type.enum';
import { BaseEntity, BaseInstance } from './base-entity.interface';

interface EnemyInstance extends BaseEntity {
  race: EnemyRaceType;
}

export interface Enemy extends EnemyInstance, BaseInstance {
  kind: 'normal' | 'elite' | 'boss';
}
