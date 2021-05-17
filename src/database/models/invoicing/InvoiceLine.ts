import { Schema, Document, model, Types, Decimal128 } from 'mongoose';

import { IItem, COLLECTION_NAME as ItemModelName } from '../inventary/item';
import {
  allowanceChargeSchema,
  IAllowanceCharge
} from '../shared/subdocuments/allowanceCharge';

import { ITax, taxSchema } from '../shared/subdocuments/tax';
import { ICode, codeSchema } from '../shared/subdocuments/code';
import { IPrice, priceSchema } from '../shared/subdocuments/price';

export const DOCUMENT_NAME = 'InvoiceLine';
export const COLLECTION_NAME = 'invoices_lines';

export enum lineTypes {}

export interface IInvoiceLine extends Document {
  invoiceLineCode: ICode;
  item: IItem;
  note: string[];
  /**
   * La cantidad (de artículos) en esta línea de factura.
   */
  invoicedQuantity: Decimal128;
  /**
   * El monto total de esta línea de factura,
   * incluidos los cargos por asignación, pero
   * neto de impuestos.
   */
  lineAmount: Decimal128;
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

const invoiceLineSchema: Schema = new Schema({
  lineOrder: { type: Number, required: true },
  orderLineReference: [
    {
      lineOrder: Number,
      lineStatus: String,
      OrderReference: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
      }
    }
  ],
  item: {
    type: Schema.Types.ObjectId,
    ref: ItemModelName,
    required: true
  },
  note: [String],
  quantity: {
    type: Types.Decimal128,
    required: true
  },
  lineAmount: {
    type: Types.Decimal128,
    required: true
  },
  allowanceCharge: [allowanceChargeSchema],
  tax: [taxSchema],
  price: priceSchema
});

export const DocumentLineModel = model<IInvoiceLine>(
  DOCUMENT_NAME,
  invoiceLineSchema,
  COLLECTION_NAME
);
