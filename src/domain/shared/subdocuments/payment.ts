import { Schema, Types } from 'mongoose';

/**
 * Esquema que describe una ciudad
 * @name Payment
 * @return {object} - Returna el modelo City
 */
export const paymentSchema: Schema = new Schema({
  paymentId: String,
  /** El monto de este pago. */
  paidAmount: {
    type: Types.Decimal128,
    min: 0
  },
  /**
   * La fecha en la que se realizó este pago.
   */
  paidDate: {
    type: Date,
    required: true
  }
});
