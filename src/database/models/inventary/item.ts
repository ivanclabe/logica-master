import { Schema, Document, model } from 'mongoose';

import { ICode, codeSchema } from '../shared/subdocuments/code';
import {
  IItemProperty,
  DOCUMENT_NAME as ItemPropertyModelName
} from './itemProperty';

export const DOCUMENT_NAME = 'Item';
export const COLLECTION_NAME = 'items';

export enum itemTypes {
  PRODUCT = 'product',
  SERVICE = 'service'
}

export interface IItem extends Document {
  itemCode: ICode[];
  itemName: string[];
  description?: string[];
  measureUnit: string;
  packQuantity: number;
  brandName: string[];
  keyword?: string[];
  additionalProperty: IItemProperty[];
}

/**
 * Modelo para describir de un Item
 *
 * @name Item
 * @return {object} - Return Item Model
 */
const itemSchema: Schema = new Schema({
  itemCode: [
    {
      type: codeSchema,
      required: true
    }
  ],
  itemName: [
    {
      type: String,
      trim: true,
      required: true
    }
  ],
  description: [String],
  measureUnit: { type: Schema.Types.ObjectId, ref: 'OperSetting' },
  /**
   * La unidad de cantidad de embalaje;
   * El número de subunidades que componen este elemento.
   */
  packQuantity: Number,
  brandName: [String],

  /**
   * La unidad de cantidad de embalaje;
   * El número de subunidades que componen este elemento.
   */
  keyword: [String],
  additionalProperty: [
    {
      type: Schema.Types.ObjectId,
      ref: ItemPropertyModelName
    }
  ],
  __t: {
    type: String,
    enum: Object.values(itemTypes)
  }
});

export const ItemModel = model<IItem>(
  DOCUMENT_NAME,
  itemSchema,
  COLLECTION_NAME
);
