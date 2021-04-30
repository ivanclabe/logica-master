import { Schema, Types, Document, Decimal128 } from 'mongoose';

interface IAmountType extends Document {
  currencyCode?: string;
  value?: Decimal128;
}

/**
 * @name amountTypeSchema
 */
export default new Schema(
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

export { IAmountType };
