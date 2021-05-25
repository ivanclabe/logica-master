import { Schema, Types, Decimal128 } from 'mongoose';

/**
 * @name AllowanceCharge
 * @return {object} - Returna el modelo City
 */
export const allowanceChargeSchema: Schema = new Schema(
  {
    chargeType: {
      type: Schema.Types.ObjectId,
      ref: 'OptionType'
    },
    chargeCode: {
      type: String,
      required: true
    },
    chargeIndicator: {
      type: Boolean,
      required: true
    },
    chargeReason: [String],
    multiplierFactor: Number,
    sequenceNumeric: {
      type: Number,
      min: 0
    },
    amount: {
      type: Types.Decimal128,
      default: 0
    },
    baseAmount: {
      type: Types.Decimal128,
      default: 0
    },
    perUnitAmount: {
      type: Types.Decimal128,
      default: 0
    }
  },
  {
    _id: false,
    timestamps: true
  }
);
