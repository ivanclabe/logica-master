import Base from '../extends/Base';
import { IPriceList } from './PriceList';
import { IAllowanceCharge } from '../known/allowanceCharge';
import { IItem } from './Item';

export interface IPriceListLine extends Base {
  priceList: IPriceList;
  item: IItem;
  baseAmount?: number;
  allowanceCharges?: IAllowanceCharge;
  amount: number;
}
