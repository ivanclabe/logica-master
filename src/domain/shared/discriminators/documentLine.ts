import { Schema, Types } from 'mongoose';

import { price, allowanceCharge, tax } from '../subdocuments';
import { amountType, quantityType } from '../types';
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
      type: quantityType.schema,
      required: true
    },
    /**
     * El monto total de esta línea de factura,
     * incluidos los cargos por asignación, pero
     * neto de impuestos.
     */
    lineExtensionAmount: {
      type: amountType.schema,
      required: true
    },
    /**
     * Una asignación o cargo asociado con esta línea
     * de factura
     */
    allowanceCharge: [allowanceCharge.schema],
    /**
     * Un monto total de impuestos de un tipo particular
     * aplicable a esta línea de factura.
     */
    taxTotal: [tax.schema],
    /**
     * El precio del artículo o servicio asociado con esta
     * línea de factura.
     */
    price: { type: price.schema, required: true }
  },
  {
    discriminatorKey: '__t',
    collection: 'documentsLines'
  }
);

export default connect.model('DocumentLine', documentLineSchema);
