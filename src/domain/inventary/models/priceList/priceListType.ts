import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

/**
 * Esquema para describir un lista de precio.
 */
const priceTypeSchema: Schema = new Schema(
  {
    listName: {
      type: String,
      trim: true,
      required: true
    }
  },
  {
    collection: 'pricesTypes'
  }
);

export const PriceTypeModel = connect.model('PriceType', priceTypeSchema);
