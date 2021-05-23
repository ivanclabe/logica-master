import Base, { GroupOptionType } from '../extends/Base';

export enum itemTypes {
  PRODUCT = 'product',
  SERVICE = 'service'
}

export enum itemPropertyTypes {
  CATEGORY = 'category',
  GROUP = 'group',
  CLASS = 'class'
}

export interface IItemProperty extends Base {
  propertyType?: itemPropertyTypes;
  name: string;
  nameCode?: string;
  value?: string;
  valueCode?: string;
}

/**
 * Una interfaz para describir un item.
 */
export interface IItem extends Base {
  name: string;
  shortName?: string;
  description?: string[];
  measureUnit?: string;

  /**
   * La cantidad de embalaje unitario; el número
   * de subunidades que componen este artículo.
   */
  packQuantity?: number;
  brandName: string[];
  keyword?: string[];

  /**
   * Una categoría de impuestos aplicable a este
   * artículo.
   * */
  taxCategory?: GroupOptionType[];
  additionalProperty?: IItemProperty[];
}
