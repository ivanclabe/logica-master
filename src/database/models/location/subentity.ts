import { Schema, model, Document } from 'mongoose';

import { ICountry, DOCUMENT_NAME as CountryModelName } from './country';
import { ICity, DOCUMENT_NAME as CityModelName } from './city';

export const DOCUMENT_NAME = 'Subentity';
export const COLLECTION_NAME = 'subentities';

export interface ISubentity extends Document {
  subentityCode: string;
  subentityName: string;
  country: ICountry['id'];
  cities?: ICity['id'][];
}

/**
 * Modelo para describir un departamento, condado,
 * provincia o estado.
 * @name Subentity
 * @return {object} - Returna modelo Subentity
 */
const subentitySchema: Schema = new Schema({
  subentityCode: {
    type: String,
    required: [true, 'entityCode field is required']
  },
  subentityName: {
    type: String,
    required: true
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: CountryModelName,
    required: true
  },
  cities: [
    {
      type: Schema.Types.ObjectId,
      ref: CityModelName
    }
  ]
});

export const SubentityModel = model<ISubentity>(
  DOCUMENT_NAME,
  subentitySchema,
  COLLECTION_NAME
);
