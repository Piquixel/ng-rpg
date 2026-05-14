export interface BaseEntity {
  characteristics: Characteristics;
  description: string;
  name: string;
}

export interface BaseInstance {
  currentHp: number;
  currentMp: number;
  lvl: number;
}

interface Characteristics {
  atk: number;
  def: number;
  hp: number;
  mana: number;
  speed: number;
}
