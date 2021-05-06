import { Schema, Document } from 'mongoose';

export interface IPaymentMean extends Document {
  paymentMeansCode: string;
  paymentDueDate: Date;
}

export const paymentMeanSchema: Schema = new Schema({
  /** Un código que indica el tipo de este medio de pago. */
  paymentMeansCode: {
    type: String,
    required: true
  },
  /** La fecha en la que vence el pago de este medio de pago. */
  paymentDueDate: Date
});
