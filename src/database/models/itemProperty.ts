import { Schema } from 'mongoose';

import connect from '../../config/db.config';

/**
 * Un esquema para definir un propiedades
 * para los items
 *
 * @name ItemProperty
 */
const itemPropertySchema: Schema = new Schema(
  {
    propertyName: { type: String, required: true, trim: true },
    propertyType: {
      type: String,
      enum: ['Texto', 'Numero', 'Fecha', 'Condicional'],
      default: 'Texto'
    }
  },
  {
    collection: 'itemsProperties'
  }
);

export const ItemPropertyModel = connect.model(
  'ItemProperty',
  itemPropertySchema
);
