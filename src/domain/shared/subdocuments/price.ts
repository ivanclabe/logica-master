import { Types, Schema } from 'mongoose';

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
      required: true
    },
    priceList: {
      type: Schema.Types.ObjectId,
      ref: 'PriceListLine'
    }
  },
  {
    _id: false
  }
);
