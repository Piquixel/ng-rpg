import { ENEMY_DATA } from 'data/enemy.data';
import { EnemyRaceType } from 'enums/enemy-race-type.enum';
import { enemyKind } from 'enums/kind.enum';
import { Enemy } from 'interfaces/enemy.interface';

export class EntityHelper {
  private static _enemiesTemplate: Enemy[] = ENEMY_DATA;
  private static BOSS_RATIO = 2;
  private static ELITE_RATIO = 1.3;

  public static RatioMap: Record<enemyKind, number> = {
    [enemyKind.NORMAL]: 1,
    [enemyKind.BOSS]: this.BOSS_RATIO,
    [enemyKind.ELITE]: this.ELITE_RATIO,
  };
  public static KindMap: Record<number, enemyKind> = {
    0: enemyKind.NORMAL,
    1: enemyKind.BOSS,
    2: enemyKind.ELITE,
  };

  public static RaceMap: Record<number, EnemyRaceType> = {
    0: EnemyRaceType.Dragon,
    1: EnemyRaceType.Goblin,
    2: EnemyRaceType.Orc,
    3: EnemyRaceType.Troll,
    4: EnemyRaceType.Wolf,
  };

  public static getRaceByNumbers(arr: number[]): EnemyRaceType[] {
    return arr.map(n => this.RaceMap[n] ?? EnemyRaceType.Goblin);
  }
  public static getKindByNumbers(arr: number[]): enemyKind[] {
    return arr.map(n => this.KindMap[n] ?? enemyKind.NORMAL);
  }

  public static enemyRaceToInstance(race: EnemyRaceType, kind: enemyKind): Enemy {
    const template = this._enemiesTemplate.find(template => template.race === race)!;
    const ratio = this.RatioMap[kind];
    return {
      ...template,
      currentHp: template.currentHp * ratio,
      currentMp: template.currentMp * ratio,
      lvl: 1,
      kind,
    };
  }
}
