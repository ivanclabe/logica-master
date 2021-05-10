import { Schema, Document, model } from 'mongoose';

import { ICode, codeSchema } from './subdocuments/code';

export const DOCUMENT_NAME = 'ItemProperty';
export const COLLECTION_NAME = 'items_properties';

export enum propertyTypes {
  CATEGORY = 'category',
  GROUP = 'group',
  CLASS = 'class'
}

export interface IItemProperty extends Document {
  propertyCode: ICode;
  propertyType?: propertyTypes;
  propertyName: string;
  description?: string[];
}

/**
 * Un esquema para definir un propiedades
 * para los items
 *
 * @name ItemProperty
 */
const itemPropertySchema: Schema = new Schema({
  propertyCode: codeSchema,
  propertyType: {
    type: String,
    enum: Object.values(propertyTypes),
    required: true
  },
  propertyName: { type: String, trim: true, required: true },
  description: [String]
});

export const ItemPropertyModel = model<IItemProperty>(
  DOCUMENT_NAME,
  itemPropertySchema,
  COLLECTION_NAME
);
