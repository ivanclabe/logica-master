import { Schema } from 'mongoose';

/**
 * Un esquema para definir un propiedades
 * para los items
 *
 * @name ItemProperty
 */
const itemGroupSchema: Schema = new Schema(
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

export default itemGroupSchema;
