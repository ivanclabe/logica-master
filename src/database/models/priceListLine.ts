import { Schema } from 'mongoose';

import { allowanceCharge } from '../../../shared/subdocuments';
import { amountType } from '../../../shared/types';
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
    type: amountType.schema,
    required: true
  },
  /**
   * Una asignación o cargo asociado con este
   * precio.
   */
  allowanceCharges: [allowanceCharge.schema],
  amount: {
    type: amountType.schema,
    required: true
  }
});

export const PriceListLineModel = connect.model(
  'PriceListLine',
  priceListLineSchema
);
