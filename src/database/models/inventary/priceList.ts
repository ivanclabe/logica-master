import { Schema, Document, model } from 'mongoose';

import { BaseSchemaFields } from '../shared/constants/BaseSchemaFields';
import { IPriceList } from '../../../interfaces/inventary/PriceList';
import { dateRangeSchema } from '../shared/types/dateRange';

export const DOCUMENT_NAME = 'PriceList';
export const COLLECTION_NAME = 'pricesLists';

export interface IPriceListDoc extends IPriceList, Document {}

const pricelistSchema: Schema = new Schema(
  {
    ...BaseSchemaFields,
    listName: { type: String, required: true },
    validPeriod: [dateRangeSchema],
    pricelistLine: [
      {
        type: Schema.Types.ObjectId,
        ref: 'priceListLine',
        required: true
      }
    ]
  },
  {
    timestamps: true
  }
);

export const PriceListModel = model<IPriceListDoc>(
  DOCUMENT_NAME,
  pricelistSchema,
  COLLECTION_NAME
);
