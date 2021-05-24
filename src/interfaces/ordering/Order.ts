import { BaseMov, BaseMovLine } from '../extends/BaseMov';

export enum orderTypes {
  INVOICE = 'invoice'
}

export interface IOrderLine extends BaseMovLine {
  order: IOrder;
}

export interface IOrder extends BaseMov {
  ordeType: orderTypes;

  /** Una referencia a la orden que se está cambiando. */
  orderReference: IOrder;

  orderLine: IOrderLine[];
}
