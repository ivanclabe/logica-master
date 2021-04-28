import { Schema } from 'mongoose';

import connect from '../../../config/db.config';

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
    collection: 'items',
    discriminatorKey: '__t'
  }
);

export const ItemModel = connect.model('Item', itemSchema);
