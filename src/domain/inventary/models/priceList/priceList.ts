// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../common"/>

import { Schema, Document } from 'mongoose';

import {} from '../../../common';
import connect from '../../../../config/db.config';

// const { PeriodModel,IPP } = models.PeriodAggregate;

export interface IPriceList extends Document {
  listName: string;
  validPeriod: [];
}

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
