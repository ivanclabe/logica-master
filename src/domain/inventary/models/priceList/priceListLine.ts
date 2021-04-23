import { Schema, Types } from 'mongoose';

import { allowanceChargeSchema } from '../../../shared/subdocuments';
import connect from '../../../../config/db.config';

const priceListLineSchema: Schema = new Schema({
  priceList: {
    type: Schema.Types.ObjectId,
    ref: 'PriceList',
    required: true
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  },
  baseAmount: {
    type: Types.Decimal128,
    required: true
  },
  /**
   * Una asignación o cargo asociado con este
   * precio.
   */
  allowanceCharges: [allowanceChargeSchema],
  amount: {
    type: Types.Decimal128,
    required: true
  }
});

export const PriceListLineModel = connect.model(
  'PriceListLine',
  priceListLineSchema
);
