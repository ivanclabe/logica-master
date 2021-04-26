import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

/**
 * Esquema para describir un inventario.
 */
const inventarySchema: Schema = new Schema(
  {
    inventaryPeriod: {
      type: Schema.Types.ObjectId,
      ref: 'Period',
      required: true
    },
    note: [String],
    inventaryLine: [
      {
        type: Schema.Types.ObjectId,
        ref: 'InventaryLine',
        required: true
      }
    ]
  },
  {
    collection: 'inventaries'
  }
);

export const InventaryModel = connect.model('Inventary', inventarySchema);
