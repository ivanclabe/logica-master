import { Schema, Document, model, Types } from 'mongoose';

import { allowanceChargeSchema } from './subdocuments/allowanceCharge';
import { taxSchema } from './subdocuments/tax';

export const DOCUMENT_NAME = 'DocumentLine';
export const COLLECTION_NAME = 'documents_lines';

export enum lineTypes {
  INVOICE_LINE = 'invoiceLine',
  ORDER_LINE = 'orderLine'
}

export interface IDocumentLine extends Document {
  lineOrder: number;
}

const documentLineSchema: Schema = new Schema({
  lineOrder: { type: Number, required: true },
  /**
   * Una referencia a una línea de pedido asociada
   * con esta línea de factura.
   */
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
    ref: 'Item',
    required: true
  },
  note: [String],
  quantity: {
    type: Types.Decimal128,
    required: true
  },
  /**
   * El monto total de esta línea de factura,
   * incluidos los cargos por asignación, pero
   * neto de impuestos.
   */
  lineExtensionAmount: {
    type: Types.Decimal128,
    required: true
  },
  /**
   * Una asignación o cargo asociado con esta línea
   * de factura
   */
  allowanceCharge: [allowanceChargeSchema],
  /**
   * Un monto total de impuestos de un tipo particular
   * aplicable a esta línea de factura.
   */
  taxTotal: [taxSchema],
  /**
   * El precio del artículo o servicio asociado con esta
   * línea de factura.
   */
  price: {
    amount: {
      type: Types.Decimal128,
      required: true
    },
    priceReference: {
      type: Schema.Types.ObjectId,
      ref: 'PriceListLine'
    }
  },
  __t: {
    type: String,
    required: true,
    enum: Object.values(lineTypes)
  }
});

export const DocumentLineModel = model<IDocumentLine>(
  DOCUMENT_NAME,
  documentLineSchema,
  COLLECTION_NAME
);
