import { Schema, Types, Document, Decimal128 } from 'mongoose';

export interface IAmountType extends Document {
  currencyCode?: string;
  value?: Decimal128;
}

const amountTypeSchema: Schema = new Schema(
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

export default amountTypeSchema;
