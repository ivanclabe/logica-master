import { Schema } from 'mongoose';

import { SequenceIdentifierModel } from '../../../shared/discriminators/sequenceIdentifier';

const invoiceNumberSchema: Schema = new Schema({});

export const InvoiceNumberModel = SequenceIdentifierModel.discriminator(
  'InvoiceNumber',
  invoiceNumberSchema
);
