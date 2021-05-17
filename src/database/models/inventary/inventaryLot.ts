import { Schema, Document, model } from 'mongoose';

import {
  IInventaryLine,
  DOCUMENT_NAME as InventaryLineModelName
} from './inventaryLine';
import { IQuantity, quantitySchema } from '../shared/subdocuments/quantity';

export const DOCUMENT_NAME = 'InventaryLot';
export const COLLECTION_NAME = 'inventaries_lots';

export interface IInventaryLot extends Document {
  inventaryLine: IInventaryLine['id'];
  lotName: string;
  dueDate: Date;
  note: [string];
  quantity: IQuantity;
}

/**
 * Esquema para describir un lote.
 */
const inventaryLotSchema: Schema = new Schema({
  inventaryLine: {
    type: Schema.Types.ObjectId,
    ref: InventaryLineModelName,
    required: true
  },
  lotName: { type: String, trim: true, required: true },
  dueDate: Date,
  note: [String],
  quantity: { type: quantitySchema, required: true }
});

export const InventaryLotModel = model<IInventaryLot>(
  DOCUMENT_NAME,
  inventaryLotSchema,
  COLLECTION_NAME
);
