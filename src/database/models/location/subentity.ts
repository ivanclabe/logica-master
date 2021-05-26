import { Schema, model, Document } from 'mongoose';

import { BaseSchemaFields } from '../shared/constants/BaseSchemaFields';
import { DOCUMENT_NAME as CountryModelName } from './country';
import { DOCUMENT_NAME as CityModelName } from './city';
import { ISubentity } from '../../../interfaces/location/Subentity';

export const DOCUMENT_NAME = 'Subentity';
export const COLLECTION_NAME = 'subentities';

export interface ISubentityDoc extends ISubentity, Document {}

const subentitySchema: Schema = new Schema({
  /** Base Properties */
  ...BaseSchemaFields,

  /** Interface Properties */
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

export const SubentityModel = model<ISubentityDoc>(
  DOCUMENT_NAME,
  subentitySchema,
  COLLECTION_NAME
);
