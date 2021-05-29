import { Schema, Document, Types, Decimal128 } from 'mongoose';

export interface IPrice extends Document {
  amount?: Decimal128;
  priceReference: string;
}

export const priceSchema: Schema = new Schema(
  {
    amount: {
      type: Types.Decimal128,
      default: 0
    },
    priceReference: {
      type: Schema.Types.ObjectId,
      ref: 'PriceListLine'
    }
  },
  {
    _id: false
  }
);
