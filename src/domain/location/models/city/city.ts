import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

/**
 * Esquema que describe una ciudad
 * @name City
 * @return {object} - Returna el modelo City
 */
const citySchema: Schema = new Schema(
  {
    cityCode: {
      type: String,
      required: [true, 'cityCode field is required']
    },
    cityName: {
      type: String,
      required: [true, 'cityName field is required']
    },
    subentity: {
      type: Schema.Types.ObjectId,
      ref: 'Subentity',
      required: true
    }
  },
  {
    collection: 'cities'
  }
);

export const City = connect.model('City', citySchema);
