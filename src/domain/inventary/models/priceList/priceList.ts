import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

/**
 * Esquema para describir un lista de precio.
 */
const pricelistSchema: Schema = new Schema(
  {
    listName: {
      type: String,
      trim: true,
      required: true
    },
    validPeriod: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Period',
        required: true
      }
    ],
    priceListLine: [
      {
        type: Schema.Types.ObjectId,
        ref: 'priceListLine',
        required: true
      }
    ]
  },
  {
    collection: 'pricesLits'
  }
);

export const PriceListModel = connect.model('PriceList', pricelistSchema);
