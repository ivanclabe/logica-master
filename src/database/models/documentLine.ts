import { Schema, Types } from 'mongoose';

import allowanceChargeSchema, {
  IAllowanceCharge
} from '../subdocuments/allowanceCharge';
import taxSchema, { ITax } from '../subdocuments/tax';
import connect from '../../../config/db.config';

const documentLineSchema: Schema = new Schema(
  {
    lineOrder: { type: Number, required: true },
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
    }
  },
  {
    collection: 'documents_lines',
    discriminatorKey: '__t'
  }
);

export const DocumentLineModel = connect.model(
  'DocumentLine',
  documentLineSchema
);
