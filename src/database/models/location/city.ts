import { Schema, model, Document, Model } from 'mongoose';

import { BaseSchemaFields } from '../shared/constants/BaseSchemaFields';
import { ICity } from '../../../interfaces/location/City';
import { DOCUMENT_NAME as SubentityModelName } from './subentity';

export const DOCUMENT_NAME = 'City';
export const COLLECTION_NAME = 'cities';

export interface ICityDoc extends ICity, Document {}

const citySchema: Schema = new Schema(
  {
    /** Base Properties */
    ...{ BaseSchemaFields },
    /** Interface Properties */
    cityName: { type: String, required: true },
    subentity: {
      type: Schema.Types.ObjectId,
      ref: SubentityModelName,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const CityModel: Model<ICityDoc> = model<ICityDoc>(
  DOCUMENT_NAME,
  citySchema,
  COLLECTION_NAME
);
