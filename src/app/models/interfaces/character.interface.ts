import { ClassType } from 'enums/class-type.enum';
import { BaseEntity } from './base-entity.interface';

export interface ICharacter extends BaseEntity {
  type: ClassType;
  icon: string;
  features: string[];
}
