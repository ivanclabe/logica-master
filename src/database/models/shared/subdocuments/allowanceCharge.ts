import { Schema, Types } from 'mongoose';

import { BaseWithSequenceSchemaFields } from '../constants/BaseSchemaFields';
import { DOCUMENT_NAME as GroupOptionTypeModelName } from '../../common/groupOptionType';

export const allowanceChargeSchema: Schema = new Schema(
  {
    ...BaseWithSequenceSchemaFields,

    chargeType: {
      type: Schema.Types.ObjectId,
      ref: GroupOptionTypeModelName
    },
    chargeIndicator: { type: Boolean, default: true },
    chargeReason: [String],
    multiplierFactor: Number,
    amount: {
      type: Types.Decimal128,
      default: 0
    },
    baseAmount: {
      type: Types.Decimal128,
      default: 0,
      required: true
    }
  },
  {
    _id: false,
    timestamps: true
  }
);
