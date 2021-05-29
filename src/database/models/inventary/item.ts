import { Schema, Document, model } from 'mongoose';

import { BaseSchemaFields } from '../shared/constants/BaseSchemaFields';
import { IItem, itemTypes } from '../../../interfaces/inventary/Item';
import { DOCUMENT_NAME as ItemPropertyModelName } from './itemProperty';
import { DOCUMENT_NAME as GroupOptionTypeModelName } from '../common/groupOptionType';

export const DOCUMENT_NAME = 'Item';
export const COLLECTION_NAME = 'items';

export interface IItemDoc extends IItem, Document {}

const itemSchema: Schema = new Schema(
  {
    ...BaseSchemaFields,
    name: {
      type: String,
      trim: true,
      required: true
    },
    shortName: String,
    description: [String],
    measureUnit: String,
    packQuantity: Number,
    brandName: [String],
    keyword: [String],
    taxCategory: {
      type: Schema.Types.ObjectId,
      ref: GroupOptionTypeModelName
    },
    additionalProperty: [
      {
        type: Schema.Types.ObjectId,
        ref: ItemPropertyModelName
      }
    ],
    _type: {
      type: String,
      enum: Object.values(itemTypes),
      required: true
    }
  },
  { timestamps: true }
);

export const ItemModel = model<IItemDoc>(
  DOCUMENT_NAME,
  itemSchema,
  COLLECTION_NAME
);
