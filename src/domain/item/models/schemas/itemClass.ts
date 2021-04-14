import { Schema } from 'mongoose';

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

export default itemClassSchema;
