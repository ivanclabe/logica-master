import { Schema, Document } from 'mongoose';

export interface IAddressLine extends Document {
  line: string;
}

export interface IAddress extends Document {
  streetName: string;
  addressLine?: IAddressLine;
  city: string;
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
const addressSchema: Schema = new Schema(
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
      ref: 'City',
      required: [true, 'City field is required']
    },
    postalZone: String
  },
  {
    _id: false
  }
);

export default addressSchema;
