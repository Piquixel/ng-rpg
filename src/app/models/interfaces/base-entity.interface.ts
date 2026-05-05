export interface BaseEntity {
  characteristics: ICharacteristics;
  name: string;
  description: string;
}

export interface ICharacteristics {
  atk: number;
  def: number;
  speed: number;
  hp: number;
  mana: number;
}

export interface BaseInstance {
  lvl: number;
  currentHP: number;
  currentMP: number;
}
