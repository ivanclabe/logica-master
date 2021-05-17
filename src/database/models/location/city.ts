import { Schema, model, Document } from 'mongoose';

import { ISubentity, DOCUMENT_NAME as SubentityModelName } from './subentity';

export const DOCUMENT_NAME = 'City';
export const COLLECTION_NAME = 'cities';

export interface ICity extends Document {
  cityCode: string;
  cityName: string;
  subentity: ISubentity['id'];
}

/**
 * Esquema que describe una ciudad
 * @name City
 * @return {object} - Returna el modelo City
 */
const citySchema: Schema = new Schema({
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
    ref: SubentityModelName,
    required: true
  }
});

export const CityModel = model<ICity>(
  DOCUMENT_NAME,
  citySchema,
  COLLECTION_NAME
);
