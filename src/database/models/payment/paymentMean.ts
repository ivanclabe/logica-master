import { Schema, Document } from 'mongoose';

import { BaseSchemaFields } from '../shared/constants/BaseSchemaFields';
import { IPaymentMean } from '../../../interfaces/payment/PaymentMean';

export const DOCUMENT_NAME = 'PaymentMean';
export const COLLECTION_NAME = 'payments_means';

export interface IPaymentMeanDoc extends IPaymentMean, Document {}

const paymentMeanSchema: Schema = new Schema({
  ...BaseSchemaFields,
  dueDate: Date
});
