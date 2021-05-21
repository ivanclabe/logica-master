import Base, { OptionType } from '../extends/Base';
import { IItemProperty } from './ItemProperty';

export enum itemTypes {
  PRODUCT = 'product',
  SERVICE = 'service'
}

/**
 * Una interfaz para describir un item.
 */
export interface IItem extends Base {
  name: string[];
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
  taxCategory?: OptionType[];
  additionalProperty?: IItemProperty[];
}
