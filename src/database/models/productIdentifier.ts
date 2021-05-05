import { Schema } from 'mongoose';

import { SequenceIdentifierModel } from '../../../shared/discriminators/sequenceIdentifier';

const productIdentifierSchema: Schema = new Schema({});

export const ProductIdentifierModel = SequenceIdentifierModel.discriminator(
  'ProductIdentifier',
  productIdentifierSchema
);
