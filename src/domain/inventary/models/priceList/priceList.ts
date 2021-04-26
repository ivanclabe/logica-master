import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

/**
 * Esquema para describir un lista de precio.
 */
const pricelistSchema: Schema = new Schema(
  {
    listName: { type: String, required: true },
    validPeriod: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Period'
      }
    ],
    priceType: [
      {
        type: Schema.Types.ObjectId,
        ref: 'PriceType'
      }
    ],
    listLine: [
      {
        type: Schema.Types.ObjectId,
        ref: 'priceListLine',
        required: true
      }
    ]
  },
  {
    collection: 'pricesLists'
  }
);

export const PriceListModel = connect.model('PriceList', pricelistSchema);
