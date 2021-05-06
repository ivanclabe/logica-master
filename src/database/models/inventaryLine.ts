import { Schema, Document, model, Types, Decimal128 } from 'mongoose';

import { IInventary, DOCUMENT_NAME as InventaryModelName } from './inventary';

export const DOCUMENT_NAME = 'InventaryLine';
export const COLLECTION_NAME = 'inventaries_lines';

export interface IInventaryLine extends Document {
  inventary: IInventary['id'];
  quantity: Decimal128;
}

/**
 * Esquema para describir un inventario.
 */
const inventaryLineSchema: Schema = new Schema({
  inventary: {
    type: Schema.Types.ObjectId,
    ref: InventaryModelName,
    required: true
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  },
  quantity: {
    type: Types.Decimal128,
    default: 0
  },
  inventariesLots: [
    {
      type: Schema.Types.ObjectId,
      ref: 'InventaryLot'
    }
  ]
});

export const InventaryLineModel = model<IInventaryLine>(
  DOCUMENT_NAME,
  inventaryLineSchema,
  COLLECTION_NAME
);
