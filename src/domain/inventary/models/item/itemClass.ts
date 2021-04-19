import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

/**
 * Un esquema para definir una clasificacion
 * para los items
 *
 * @name ItemClass
 */
const itemClassSchema: Schema = new Schema(
  {
    className: { type: String, required: true, trim: true }
  },
  {
    collection: 'itemsClasses'
  }
);

export const ItemClassModel = connect.model('ItemClass', itemClassSchema);
