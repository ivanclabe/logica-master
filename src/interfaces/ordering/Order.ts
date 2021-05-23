import { BaseMov, BaseMovLine } from '../extends/BaseMov';

export enum orderTypes {
  INVOICE = 'invoice',
  ORDER = 'order'
}

export interface IOrderLine extends BaseMovLine {
  order: IOrder;
}

export interface IOrder extends BaseMov {
  orderLine: IOrderLine[];
}
