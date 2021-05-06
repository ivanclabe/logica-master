import { Schema, Document, model } from 'mongoose';

import { IPeriod, periodSchema } from './subdocuments/period';

export const DOCUMENT_NAME = 'SequenceIdentifier';
export const COLLECTION_NAME = 'sequences_identifiers';

interface INumeration {
  startCode: number;
  endCode: number;
  currentCode: number;
}

export interface ISequenceIdentifier extends Document {
  identifierCode?: string;
  identifierName: string;
  prefix?: string;
  description?: [string];
  numeration: INumeration;
  isMainIdentifier?: boolean;
  validPeriod: [IPeriod];
}

/**
 * Describe un tipo de codigo
 *
 * @name identifierSchema
 * @return {mongoose.Model}
 */
const identifierSchema: Schema = new Schema(
  {
    identifierCode: {
      type: String,
      trim: true
    },
    identifierName: {
      type: String,
      trim: true,
      required: true
    },
    prefix: String,
    numeration: {
      startCode: { type: Number, required: true },
      endCode: { type: Number, required: true },
      currentCode: Number
    },
    description: [String],
    isMainIdentifier: { type: Boolean, default: false },
    validPeriod: [periodSchema]
  },
  {
    discriminatorKey: '__t'
  }
);

export const SequenceIdentifierModel = model<ISequenceIdentifier>(
  DOCUMENT_NAME,
  identifierSchema,
  COLLECTION_NAME
);
