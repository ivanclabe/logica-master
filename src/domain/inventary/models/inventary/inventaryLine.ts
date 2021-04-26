import { Schema } from 'mongoose';

import { quantity } from '../../../shared/subdocuments';
import connect from '../../../../config/db.config';

/**
 * Esquema para describir un inventario.
 */
const inventaryLineSchema: Schema = new Schema(
  {
    inventary: {
      type: Schema.Types.ObjectId,
      ref: 'Inventary',
      required: true
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true
    },
    quantity: {
      type: quantity.schema,
      required: true
    },
    inventariesLots: [
      {
        type: Schema.Types.ObjectId,
        ref: 'InventaryLot',
        required: true
      }
    ]
  },
  {
    collection: 'inventariesLines'
  }
);

export const InventaryLineModel = connect.model(
  'InventaryLine',
  inventaryLineSchema
);
