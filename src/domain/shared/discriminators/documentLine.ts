import { Schema, Types } from 'mongoose';

import { priceSchema } from '../subdocuments';
import connect from '../../../config/db.config';

const options = {
  discriminatorKey: '__t',
  collection: 'documentsLines'
};

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
      min: 0,
      required: true
    },
    /**
     * El monto total de esta línea de factura,
     * incluidos los cargos por asignación, pero
     * neto de impuestos.
     */
    lineExtensionAmount: {
      type: Types.Decimal128,
      min: 0,
      required: true
    },
    /**
     * Una asignación o cargo asociado con esta línea
     * de factura
     */
    allowanceCharge: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Charge'
      }
    ],
    /**
     * Un monto total de impuestos de un tipo particular
     * aplicable a esta línea de factura.
     */
    taxTotal: [
      {
        type: Schema.Types.ObjectId,
        ref: 'TaxTotal'
      }
    ],
    /**
     * El precio del artículo o servicio asociado con esta
     * línea de factura.
     */
    price: { type: priceSchema, required: true }
  },
  options
);

export default connect.model('DocumentLine', documentLineSchema);
