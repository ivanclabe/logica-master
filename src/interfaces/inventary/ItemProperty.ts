import Base from '../extends/Base';

export enum propertyTypes {
  CATEGORY = 'category',
  GROUP = 'group',
  CLASS = 'class'
}

export interface IItemProperty extends Base {
  propertyType?: propertyTypes;
  propertyName: string;
  description?: string[];
}
