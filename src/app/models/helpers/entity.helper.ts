import { ENEMY_DATA } from 'data/enemy.data';
import { EnemyRaceType } from 'enums/enemy-race-type.enum';
import { enemyKind } from 'enums/kind.enum';
import { ZoneMap } from 'enums/zones.enum';
import { Enemy, EnemyInstance } from 'interfaces/enemy.interface';

export class EntityHelper {
  private static _enemiesTemplate: EnemyInstance[] = ENEMY_DATA;
  private static BOSS_RATIO = 2;
  private static ELITE_RATIO = 1.3;

  public static RatioMap: Record<enemyKind, number> = {
    [enemyKind.NORMAL]: 1,
    [enemyKind.BOSS]: EntityHelper.BOSS_RATIO,
    [enemyKind.ELITE]: EntityHelper.ELITE_RATIO,
  };
  public static KindMap: Record<number, enemyKind> = {
    0: enemyKind.NORMAL,
    1: enemyKind.BOSS,
    2: enemyKind.ELITE,
  };

  public static RaceMap: Record<number, EnemyRaceType> = {
    // 0: EnemyRaceType.Dragon,
    0: EnemyRaceType.Goblin,
    // 2: EnemyRaceType.Orc,
    1: EnemyRaceType.Troll,
    2: EnemyRaceType.Wolf,
  };

  public static RaceMapDungeon: Record<number, EnemyRaceType> = {
    // 0: EnemyRaceType.Dragon,
    0: EnemyRaceType.Widow,
    // 2: EnemyRaceType.Orc,
    1: EnemyRaceType.DARK_MAGE,
    2: EnemyRaceType.LICH,
  };

  public static RaceMapMountain: Record<number, EnemyRaceType> = {
    // 0: EnemyRaceType.Dragon,
    0: EnemyRaceType.Orc,
    // 2: EnemyRaceType.Orc,
    1: EnemyRaceType.Dragon,
    2: EnemyRaceType.Angular,
  };

  public static getRaceByNumbersAndZone(arr: number[], zone: ZoneMap): EnemyRaceType[] {
    switch (zone) {
      case ZoneMap.FOREST:
        return arr.map(n => EntityHelper.RaceMap[n] ?? EnemyRaceType.Goblin);
      case ZoneMap.DUNGEON:
        return arr.map(n => EntityHelper.RaceMapDungeon[n] ?? EnemyRaceType.Widow);
      case ZoneMap.MOUNTAIN:
        return arr.map(n => EntityHelper.RaceMapMountain[n] ?? EnemyRaceType.Orc);
    }
  }
  public static getKindByNumbers(arr: number[]): enemyKind[] {
    return arr.map(n => EntityHelper.KindMap[n] ?? enemyKind.NORMAL);
  }

  public static enemyRaceToInstance(race: EnemyRaceType, kind: enemyKind): Enemy {
    const template = EntityHelper._enemiesTemplate.find(template => template.race === race)!;
    const ratio = EntityHelper.RatioMap[kind];
    console.log(template);
    return {
      ...template,
      characteristics: {
        hp: template.characteristics.hp * ratio,
        mana: template.characteristics.mana * ratio,
        atk: template.characteristics.atk * ratio,
        def: template.characteristics.def * ratio,
        speed: template.characteristics.speed * ratio,
      },
      currentHp: template.characteristics.hp * ratio,
      currentMp: template.characteristics.mana * ratio,
      lvl: 1,
      kind,
      goldReward: template.goldReward * ratio,
      xpReward: template.xpReward * ratio,
    };
  }
}
