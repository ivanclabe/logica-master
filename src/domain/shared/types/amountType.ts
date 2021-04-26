import { Schema, Types } from 'mongoose';

/**
 * @name amountTypeSchema
 */
export const schema: Schema = new Schema(
  {
    currencyCode: { type: String, default: 'COP' },
    value: {
      type: Types.Decimal128,
      default: 0
    }
  },
  {
    _id: false
  }
);
