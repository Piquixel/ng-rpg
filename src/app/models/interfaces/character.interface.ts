import { ClassType } from 'enums/class-type.enum';
import { BaseEntity } from './base-entity.interface';

export interface Character extends BaseEntity {
  features: string[];
  icon: string;
  type: ClassType;
}
