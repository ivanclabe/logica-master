import { Schema, Document, Types, Decimal128 } from 'mongoose';

export interface IPrice extends Document {
  amount?: Decimal128;
  priceReference: string;
}

/**
 *
 * Esquema para describir una precio
 *
 * @name priceSchema
 * @description Esquema para describir información
 * sobre un precio
 * @returns {Schema}
 */
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
