import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

/**
 * Modelo para describir de un Pais
 * @name Country
 * @return {object} - Return Country Model
 */
const countrySchema = new Schema(
  {
    countryCode: {
      type: String,
      required: [true, 'countryCode field is required']
    },
    countryName: {
      type: String,
      required: [true, 'countryName field is required']
    },
    subentities: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Subentity',
        required: true
      }
    ]
  },
  {
    collection: 'countries'
  }
);

export const Country = connect.model('Country', countrySchema);
