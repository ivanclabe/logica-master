import { Schema, Document, model, Types } from 'mongoose';

import { BaseSchemaFields } from '../shared/constants/BaseSchemaFields';
import { IPriceList } from '../../../interfaces/inventary/PriceList';
import { allowanceChargeSchema } from '../shared/subdocuments/allowanceCharge';
import { DOCUMENT_NAME as PriceListModelName } from './priceList';
import { DOCUMENT_NAME as ItemModelName } from './item';

export const DOCUMENT_NAME = 'PriceListLine';
export const COLLECTION_NAME = 'pricesLists_lines';

export interface IPriceListLineDoc extends IPriceList, Document {}

const priceListLineSchema: Schema = new Schema(
  {
    ...BaseSchemaFields,
    priceList: {
      type: Schema.Types.ObjectId,
      ref: PriceListModelName,
      required: true
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: ItemModelName,
      required: true
    },
    baseAmount: {
      type: Types.Decimal128,
      default: 0
    },
    allowanceCharges: [allowanceChargeSchema],
    amount: {
      type: Types.Decimal128,
      required: true
    }
  },
  { timestamps: true }
);

export const PriceListLineModel = model<IPriceListLineDoc>(
  DOCUMENT_NAME,
  priceListLineSchema,
  COLLECTION_NAME
);
