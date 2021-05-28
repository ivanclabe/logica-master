import { Schema, Document, model } from 'mongoose';

import {
  BaseQuantitySchemaFields,
  BaseSchemaFields
} from '../shared/constants/BaseSchemaFields';
import { IInventaryLine } from '../../../interfaces/inventary/Inventary';
import { DOCUMENT_NAME as InventaryModelName } from './inventary';
import { DOCUMENT_NAME as ItemModelName } from './item';

export const DOCUMENT_NAME = 'InventaryLine';
export const COLLECTION_NAME = 'inventaries_lines';

export interface IInventaryLineDoc extends IInventaryLine, Document {}

const inventaryLineSchema: Schema = new Schema(
  {
    ...BaseSchemaFields,
    ...BaseQuantitySchemaFields,
    inventary: {
      type: Schema.Types.ObjectId,
      ref: InventaryModelName,
      required: true
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: ItemModelName,
      required: true
    }
  },
  { timestamps: true }
);

export const InventaryLineModel = model<IInventaryLineDoc>(
  DOCUMENT_NAME,
  inventaryLineSchema,
  COLLECTION_NAME
);
