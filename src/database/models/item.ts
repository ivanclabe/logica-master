import { Schema, Document, model } from 'mongoose';

export const DOCUMENT_NAME = 'Item';
export const COLLECTION_NAME = 'items';

export interface IItem extends Document {
  itemName: [string];
  description?: [string];
  keyword?: [string];
}

/**
 * Modelo para describir de un Item
 *
 * @name Item
 * @return {object} - Return Item Model
 */
const itemSchema: Schema = new Schema(
  {
    itemName: [
      {
        type: String,
        trim: true,
        required: true
      }
    ],
    description: [String],
    /**
     * La unidad de cantidad de embalaje;
     * El número de subunidades que componen este elemento.
     */
    keyword: [String]
  },
  {
    discriminatorKey: '__t'
  }
);

export const ItemModel = model<IItem>(
  DOCUMENT_NAME,
  itemSchema,
  COLLECTION_NAME
);
