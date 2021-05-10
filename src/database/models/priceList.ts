import { Schema, Document, model } from 'mongoose';

import { periodSchema, IPeriod } from './subdocuments/period';

export const DOCUMENT_NAME = 'PriceList';
export const COLLECTION_NAME = 'pricesLists';

export interface IPriceList extends Document {
  listName: string;
  validPeriod?: [IPeriod];
}

/**
 * Esquema para describir un lista de precio.
 */
const pricelistSchema: Schema = new Schema({
  listName: { type: String, required: true },
  validPeriod: [periodSchema],
  listLine: [
    {
      type: Schema.Types.ObjectId,
      ref: 'priceListLine',
      required: true
    }
  ]
});

export const PriceListModel = model<IPriceList>(
  DOCUMENT_NAME,
  pricelistSchema,
  COLLECTION_NAME
);
