import { Schema, Document, model } from 'mongoose';

import { IPeriod, periodSchema } from '../shared/subdocuments/period';

export const DOCUMENT_NAME = 'SequenceIdentifier';
export const COLLECTION_NAME = 'sequences_identifiers';

export interface IRange {
  minimumValue: number;
  maximumValue: number;
}

export interface ISequenceIdentifier extends Document {
  identifierCode?: string;
  identifierName: string;
  prefix?: string;
  description?: string[];
  valueRange: IRange;
  isMainIdentifier?: boolean;
  validPeriod?: IPeriod[];
}

const rangeSchema: Schema = new Schema(
  {
    minimumValue: { type: Number, required: true },
    maximumValue: { type: Number, required: true }
  },
  {
    _id: false
  }
);

/**
 * Describe un tipo de codigo
 *
 * @name identifierSchema
 * @return {mongoose.Model}
 */
const identifierSchema: Schema = new Schema({
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
  valueRange: {
    range: { type: rangeSchema, required: true },
    currentValue: Number
  },
  description: [String],
  isMainIdentifier: { type: Boolean, default: false },
  validPeriod: [periodSchema]
});

export const SequenceIdentifierModel = model<ISequenceIdentifier>(
  DOCUMENT_NAME,
  identifierSchema,
  COLLECTION_NAME
);
