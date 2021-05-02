import { Schema, Types } from 'mongoose';

import { DocumentLineModel } from '../../../shared/discriminators/documentLine';

const invoiceLineSchema: Schema = new Schema({
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
});

export default DocumentLineModel.discriminator(
  'InvoiceLine',
  invoiceLineSchema
);
