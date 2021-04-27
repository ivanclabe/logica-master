import { Schema } from 'mongoose';

import { period } from '../subdocuments';
import connect from '../../../config/db.config';

/**
 * Describe un tipo de codigo
 *
 * @name identifierSchema
 * @return {mongoose.Model}
 */
const identifierSchema: Schema = new Schema(
  {
    identifierName: {
      type: String,
      trim: true,
      required: true
    },
    identifierCode: String,
    prefix: String,
    numeration: {
      startCode: { type: Number, required: true },
      endCode: { type: Number, required: true },
      currentCode: Number
    },
    description: [String],
    mainIdentifier: { type: Boolean, default: false },
    validPeriod: [period.schema]
  },
  {
    collection: 'sequences_identifiers',
    discriminatorKey: '__t'
  }
);

export const SequenceIdentifierModel = connect.model(
  'SequenceIdentifier',
  identifierSchema
);
