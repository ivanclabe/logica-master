import { ICode } from '../common/code';

export enum propertyTypes {
  CATEGORY = 'category',
  GROUP = 'group',
  CLASS = 'class'
}

export interface IItemProperty {
  propertyCode: ICode;
  propertyType?: propertyTypes;
  propertyName: string;
  description?: string[];
}
