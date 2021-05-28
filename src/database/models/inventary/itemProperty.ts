import { Schema, Document, model } from 'mongoose';

import { BaseSchemaFields } from '../shared/constants/BaseSchemaFields';
import {
  IItemProperty,
  itemPropertyTypes
} from '../../../interfaces/inventary/Item';

export const DOCUMENT_NAME = 'ItemProperty';
export const COLLECTION_NAME = 'items_properties';

export interface IItemPropertyDoc extends IItemProperty, Document {}

const itemPropertySchema: Schema = new Schema(
  {
    ...BaseSchemaFields,
    propertyType: {
      type: String,
      enum: Object.values(itemPropertyTypes),
      required: true
    },
    name: { type: String, trim: true, required: true },
    nameCode: String,
    value: String,
    valueCode: String
  },
  { timestamps: true }
);

export const ItemPropertyModel = model<IItemPropertyDoc>(
  DOCUMENT_NAME,
  itemPropertySchema,
  COLLECTION_NAME
);
