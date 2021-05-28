import { Schema } from 'mongoose';

import { DOCUMENT_NAME as CityModelName } from '../../location/city';

/**
 * @name addressSchema
 */
export const addressSchema: Schema = new Schema(
  {
    streetName: String,
    addressLine: {
      line: { type: String, required: true }
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: CityModelName,
      required: true
    },
    postalZone: String
  },
  {
    _id: false
  }
);
