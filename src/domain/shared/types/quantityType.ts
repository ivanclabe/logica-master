import { Schema, Types } from 'mongoose';

/**
 * @name quantityTypeSchema
 */
export const schema: Schema = new Schema(
  {
    unitCode: { type: String, default: 'COP' },
    value: {
      type: Types.Decimal128,
      default: 0
    }
  },
  {
    _id: false
  }
);
