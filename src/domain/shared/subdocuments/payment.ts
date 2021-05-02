import { Schema, Document, Types, Decimal128 } from 'mongoose';

import amountTypeSchema, { IAmountType } from '../types/amountType';

export interface IPayment extends Document {
  paymentId?: string;
  paidDate: Date;
  paidAmount: Decimal128;
}

/**
 * Esquema que describe una ciudad
 * @name Payment
 * @return {object} - Returna el modelo City
 */
const paymentSchema: Schema = new Schema({
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
    type: Types.Decimal128,
    required: true
  }
});

export default paymentSchema;
