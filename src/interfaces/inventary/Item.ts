import Base from '../extends/Base';
import { IItemProperty } from './ItemProperty';

export enum itemTypes {
  PRODUCT = 'product',
  SERVICE = 'service'
}

/**
 * Una interfaz para describir un item.
 */
export interface IItem extends Base {
  itemName: string[];
  description?: string[];
  measureUnit?: string;

  /**
   * La cantidad de embalaje unitario; el número
   * de subunidades que componen este artículo.
   */
  packQuantity?: number;
  brandName: string[];
  keyword?: string[];
  additionalProperty?: IItemProperty[];
}
