import { Schema, Document, model } from 'mongoose';

export const DOCUMENT_NAME = 'Inventary';
export const COLLECTION_NAME = 'inventaries';

export interface IInventary extends Document {
  inventaryPeriod: string;
  note: [string];
}

/**
 * Esquema para describir un inventario.
 */
const inventarySchema: Schema = new Schema({
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

export const InventaryModel = model<IInventary>(
  DOCUMENT_NAME,
  inventarySchema,
  COLLECTION_NAME
);
