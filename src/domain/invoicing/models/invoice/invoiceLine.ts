import { Schema } from 'mongoose';

import { DocumentLineModel } from '../../../shared/discriminators/documentLine';

const invoiceLineSchema: Schema = new Schema({
  /**
   * Un indicador de que esta línea de factura es libre
   * de cargos (verdadero) o no (falso).
   * El valor predeterminado es falso.
   */
  freeOfCharge: { type: Boolean, default: false },
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
  ]
});

export default DocumentLineModel.discriminator(
  'InvoiceLine',
  invoiceLineSchema
);
