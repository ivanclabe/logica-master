import { Schema } from 'mongoose';

import { quantitySchema } from '../../../shared/subdocuments';
import connect from '../../../../config/db.config';

/**
 * Esquema para describir un lote.
 */
const inventaryLotSchema: Schema = new Schema(
  {
    inventary: {
      type: Schema.Types.ObjectId,
      ref: 'Inventary',
      required: true
    },
    lotName: { type: String, trim: true, required: true },
    dueDate: Date,
    note: [String],
    quantity: quantitySchema
  },
  {
    collection: 'inventariesLots'
  }
);

export const InventaryLotModel = connect.model(
  'InventaryLot',
  inventaryLotSchema
);
