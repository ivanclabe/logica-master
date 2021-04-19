import { Schema } from 'mongoose';

import { quantitySchema } from '../../../shared/subdocuments';
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
    quantity: quantitySchema
  },
  {
    collection: 'inventariesLines'
  }
);

export const InventaryLineModel = connect.model(
  'InventaryLine',
  inventaryLineSchema
);
