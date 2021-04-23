import { Schema } from 'mongoose';

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
      ref: 'City',
      required: [true, 'City field is required']
    },
    postalZone: String
  },
  {
    _id: false
  }
);
