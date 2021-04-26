import { Schema } from 'mongoose';

import { amountType } from '../types';

/**
 * Esquema que describe una ciudad
 * @name Payment
 * @return {object} - Returna el modelo City
 */
export const schema: Schema = new Schema({
  paymentId: String,
  /**
   * La fecha en la que se realizó este pago.
   */
  paidDate: {
    type: Date,
    required: true
  },
  /** El monto de este pago. */
  paidAmount: {
    type: amountType.schema,
    required: true
  }
});
