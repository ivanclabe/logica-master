import { Schema, model, Document } from 'mongoose';

import { ISubentity, DOCUMENT_NAME as SubentityModelName } from './subentity';

export const DOCUMENT_NAME = 'Country';
export const COLLECTION_NAME = 'countries';

export interface ICountry extends Document {
  countryCode: string;
  countryName: string;
  subentities?: ISubentity['id'][];
}

/**
 * Modelo para describir de un Pais
 * @name Country
 * @return {object} - Return Country Model
 */
const countrySchema = new Schema({
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
      ref: SubentityModelName
    }
  ]
});

export const CountryModel = model<ICountry>(
  DOCUMENT_NAME,
  countrySchema,
  COLLECTION_NAME
);
