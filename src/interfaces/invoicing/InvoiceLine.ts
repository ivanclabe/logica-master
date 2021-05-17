import { ICode } from '../common/Code';
import { IItem } from '../inventary/Item';
import { IAllowanceCharge } from '../known/AllowanceCharge';
import { ITax } from '../known/tax';
import { IPrice } from '../known/Price';
import { IInvoice } from './Invoice';

export enum lineTypes {}

export interface IInvoiceLine {
  lineCode: ICode;
  invoice: IInvoice;
  item: IItem;
  note: string[];
  /**
   * La cantidad (de artículos) en esta línea de factura.
   */
  invoicedQuantity: number;
  /**
   * El monto total de esta línea de factura,
   * incluidos los cargos por asignación, pero
   * neto de impuestos.
   */
  lineAmount: number;
  /**
   * Una referencia a una línea de pedido asociada
   * con esta línea de factura.
   */
  orderLineReference: string[];
  /**
   * Una asignación o cargo asociado con esta línea
   * de factura
   */
  allowanceCharge: IAllowanceCharge[];
  /**
   * Un monto total de impuestos de un tipo particular
   * aplicable a esta línea de factura.
   */
  tax: ITax[];
  /**
   * El precio del artículo o servicio asociado con esta
   * línea de factura.
   */
  price: IPrice;
}
