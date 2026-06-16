import { EnemyRaceType } from 'enums/enemy-race-type.enum';
import { enemyKind } from 'enums/kind.enum';
import { BaseEntity, BaseInstance } from './base-entity.interface';

export interface EnemyInstance extends BaseEntity {
  race: EnemyRaceType;
  xpReward: number;
  goldReward: number;
}

export interface Enemy extends EnemyInstance, BaseInstance {
  kind: enemyKind;
}
