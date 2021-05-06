import { Schema, Document, model } from 'mongoose';

export const DOCUMENT_NAME = 'PriceListType';
export const COLLECTION_NAME = 'pricesListsTypes';

export interface IPriceListType extends Document {
  listTypeName: string;
}

/**
 * Esquema para describir un lista de precio.
 */
const priceListTypeSchema: Schema = new Schema({
  listTypeName: { type: String, required: true }
});

export const PriceTypeModel = model<IPriceListType>(
  DOCUMENT_NAME,
  priceListTypeSchema,
  COLLECTION_NAME
);
