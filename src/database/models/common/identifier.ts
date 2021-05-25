import { Schema, model, Document } from 'mongoose';

import { Identifier } from '../../../interfaces/extends/Base';
import { DOCUMENT_NAME as GroupOptionTypeModelModelName } from './groupOptionType';
import { dateRangeSchema } from '../shared/types/dateRange';
import { valueRangeSchema } from '../shared/types/valueRange';

export const DOCUMENT_NAME = 'Identifier';
export const COLLECTION_NAME = 'sequences_identifiers';

export interface IdentifierDoc extends Identifier, Document {}

const IdentifierSchemaFields: Record<keyof Identifier, any> = {
  identifierCode: { type: String },
  identifierName: { type: String },
  optionType: {
    type: Schema.Types.ObjectId,
    ref: GroupOptionTypeModelModelName
  },
  prefix: { type: String },
  description: [String],
  sequenceNumeric: {
    valueRange: { type: valueRangeSchema, required: true },
    currentValue: Number
  },
  validity: dateRangeSchema,
  main: { type: Boolean, default: false }
};

const identifierSchema: Schema = new Schema(IdentifierSchemaFields);

export const IdentifierModel = model<IdentifierDoc>(
  DOCUMENT_NAME,
  identifierSchema,
  COLLECTION_NAME
);
