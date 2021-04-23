import { Schema, Types } from 'mongoose';

import { priceSchema, allowanceChargeSchema, taxSchema } from '../subdocuments';
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
    price: { type: priceSchema, required: true }
  },
  {
    discriminatorKey: '__t',
    collection: 'documentsLines'
  }
);

export default connect.model('DocumentLine', documentLineSchema);
