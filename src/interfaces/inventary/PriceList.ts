import Base, { Amount, DateRange } from '../extends/Base';
import { IAllowanceCharge } from '../common/AllowanceCharge';
import { IItem } from './Item';

export interface IPriceListLine extends Base {
  priceList: IPriceList;
  item: IItem;
  baseAmount?: Amount;
  allowanceCharges?: IAllowanceCharge;
  amount: Amount;
}

/**
 * Interfaz para describir una lista de precios.
 */
export interface IPriceList extends Base {
  listName: string;

  /**
   * Un período durante el cual esta lista de
   * precios es válida.
   */
  validPeriod?: DateRange[];

  pricelistLine: IPriceListLine[];
}
