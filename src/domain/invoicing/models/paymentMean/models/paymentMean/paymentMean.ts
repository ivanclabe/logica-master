import { Schema } from 'mongoose';

export const paymentMeanSchema: Schema = new Schema({
  /** Un código que indica el tipo de este medio de pago. */
  PaymentMeansCode: {
    type: String,
    required: true
  },
  /** La fecha en la que vence el pago de este medio de pago. */
  PaymentDueDate: Date
});
