import { Schema } from 'mongoose';

import { amountType } from '../types';

/**
 *
 * Esquema para describir una precio
 *
 * @name priceSchema
 * @description Esquema para describir información
 * sobre un precio
 * @returns {Schema}
 */
export const schema: Schema = new Schema(
  {
    amount: {
      type: amountType.schema,
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
