import { Schema, Document, model } from 'mongoose';

import { BaseSchemaFields } from '../shared/constants/BaseSchemaFields';
import { IInventary } from '../../../interfaces/inventary/Inventary';

export const DOCUMENT_NAME = 'Inventary';
export const COLLECTION_NAME = 'inventaries';

export interface IInventaryDoc extends IInventary, Document {}

const inventarySchema: Schema = new Schema({
  ...BaseSchemaFields,
  inventaryPeriod: {
    type: Schema.Types.ObjectId,
    ref: 'Period',
    required: true
  },
  note: [String],
  inventaryLine: [
    {
      type: Schema.Types.ObjectId,
      ref: 'InventaryLine',
      required: true
    }
  ]
});

export const InventaryModel = model<IInventaryDoc>(
  DOCUMENT_NAME,
  inventarySchema,
  COLLECTION_NAME
);
