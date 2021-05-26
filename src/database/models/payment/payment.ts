import { Schema, Document, Types, model } from 'mongoose';

import { BaseWithSequenceSchemaFields } from '../shared/constants/BaseSchemaFields';
import { IPayment } from '../../../interfaces/payment/Payment';

export const DOCUMENT_NAME = 'Payment';
export const COLLECTION_NAME = 'payments';

export interface IPaymentDoc extends IPayment, Document {}

const paymentSchema: Schema = new Schema(
  {
    ...BaseWithSequenceSchemaFields,
    paidDate: { type: Date, default: Date.now },
    paidAmount: { type: Types.Decimal128, default: 0 }
  },
  {
    timestamps: true
  }
);

export const PaymentModel = model<IPaymentDoc>(
  DOCUMENT_NAME,
  paymentSchema,
  COLLECTION_NAME
);
