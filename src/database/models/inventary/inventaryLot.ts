import { Schema, Document, model } from 'mongoose';

import { DOCUMENT_NAME as InventaryLineModelName } from './inventaryLine';

export const DOCUMENT_NAME = 'InventaryLot';
export const COLLECTION_NAME = 'inventaries_lots';

export type IInventaryLotDoc = Document;

const inventaryLotSchema: Schema = new Schema({
  inventaryLine: {
    type: Schema.Types.ObjectId,
    ref: InventaryLineModelName,
    required: true
  },
  lotName: { type: String, trim: true, required: true },
  dueDate: Date,
  note: [String]
  // quantity: { type: quantitySchema, required: true }
});

export const InventaryLotModel = model<IInventaryLotDoc>(
  DOCUMENT_NAME,
  inventaryLotSchema,
  COLLECTION_NAME
);
