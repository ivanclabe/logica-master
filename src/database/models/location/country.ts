import { Schema, model, Document } from 'mongoose';
import { ICountry } from '../../../interfaces/location/country';

import { BaseSchemaFields } from '../shared/constants/BaseSchemaFields';
import { DOCUMENT_NAME as SubentityModelName } from './subentity';

export const DOCUMENT_NAME = 'Country';
export const COLLECTION_NAME = 'countries';

export interface ICountryDoc extends ICountry, Document {}

const countrySchema = new Schema({
  /** Base Properties */
  ...{ BaseSchemaFields },

  /** Interface Properties */
  countryName: {
    type: String,
    required: [true, 'countryName field is required']
  },
  subentities: [
    {
      type: Schema.Types.ObjectId,
      ref: SubentityModelName
    }
  ]
});

export const CountryModel = model<ICountryDoc>(
  DOCUMENT_NAME,
  countrySchema,
  COLLECTION_NAME
);
