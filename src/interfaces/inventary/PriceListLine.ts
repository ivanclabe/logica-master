import { ICode } from '../common/Code';
import { IPriceList } from './PriceList';
import { IAllowanceCharge } from '../known/allowanceCharge';
import { IItem } from './Item';

export interface IPriceListLine {
  lineCode: ICode;
  priceList: IPriceList;
  item: IItem;
  baseAmount?: number;
  allowanceCharges?: IAllowanceCharge;
  amount: number;
}
