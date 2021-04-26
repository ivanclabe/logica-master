import { Schema } from 'mongoose';

import { quantity } from '../../../shared/subdocuments';
import connect from '../../../../config/db.config';

/**
 * Esquema para describir un lote.
 */
const inventaryLotSchema: Schema = new Schema(
  {
    inventaryLine: {
      type: Schema.Types.ObjectId,
      ref: 'InventaryLine',
      required: true
    },
    lotName: { type: String, trim: true, required: true },
    dueDate: Date,
    note: [String],
    quantity: quantity.schema
  },
  {
    collection: 'inventariesLots'
  }
);

export const InventaryLotModel = connect.model(
  'InventaryLot',
  inventaryLotSchema
);
