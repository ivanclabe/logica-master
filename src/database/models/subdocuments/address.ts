import { Schema, Document } from 'mongoose';

import { ICity, DOCUMENT_NAME as CityModelName } from '../city';

export interface IAddressLine extends Document {
  line: string;
}

export interface IAddress extends Document {
  streetName: string;
  addressLine?: IAddressLine;
  city: ICity['id'];
  postalZone?: string;
}

/**
 *
 * Esquema para describir una dirección
 *
 * @name addressSchema
 * @description Esquema para describir información
 * sobre una dirección
 * @returns {Schema}
 */
export const addressSchema: Schema = new Schema(
  {
    streetName: String,
    addressLine: {
      /**
       * Elemento de texto libre, que el agente puede elegir
       * utilizar para poner todas las información de su
       * dirección.
       */
      line: {
        type: String,
        required: true
      }
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: CityModelName,
      required: [true, 'City field is required']
    },
    postalZone: String
  },
  {
    _id: false
  }
);
