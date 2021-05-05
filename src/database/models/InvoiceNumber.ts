import { Schema } from 'mongoose';

import { SequenceIdentifierModel } from '../../domain/shared/discriminators/sequenceIdentifier';

const invoiceNumberSchema: Schema = new Schema({});

export const InvoiceNumberModel = SequenceIdentifierModel.discriminator(
  'InvoiceNumber',
  invoiceNumberSchema
);
