import { BaseMov, BaseMovLine } from '../extends/BaseMov';

export interface IOrderLine extends BaseMovLine {
  order: IOrder;
}

export interface IOrder extends BaseMov {
  orderLine: IOrderLine[];
}
