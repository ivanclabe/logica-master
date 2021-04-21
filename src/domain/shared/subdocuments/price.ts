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
export default new Schema(
  {
    priceAmount: {
      type: Types.Decimal128,
      required: true
    },
    /**
     * La cantidad a la que se aplica este precio.
     */
    baseQuantity: Types.Decimal128,
    priceChangeReason: [String],
    priceType: {
      type: Schema.Types.ObjectId,
      ref: 'PriceType'
    },
    priceList: {
      type: Schema.Types.ObjectId,
      ref: 'PriceList'
    },
    /**
     * Una asignación o cargo asociado con este precio.
     */
    allowanceCharges: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Charge'
      }
    ]
  },
  {
    _id: false
  }
);
