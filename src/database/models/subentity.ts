import { Schema } from 'mongoose';

import connect from '../../config/db.config';

/**
 * Modelo para describir un departamento, condado,
 * provincia o estado.
 * @name Subentity
 * @return {object} - Returna modelo Subentity
 */
const subentitySchema: Schema = new Schema(
  {
    subentityCode: {
      type: String,
      required: [true, 'entityCode field is required']
    },
    subentityName: {
      type: String,
      required: [true, 'entityName field is required']
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: 'Country',
      required: true
    },
    cities: [
      {
        type: Schema.Types.ObjectId,
        ref: 'City',
        required: true
      }
    ]
  },
  {
    collection: 'subentities'
  }
);

export const Subentity = connect.model('Subentity', subentitySchema);
