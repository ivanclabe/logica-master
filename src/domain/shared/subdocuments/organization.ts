import { Schema } from 'mongoose';

import { addressSchema } from './address';

/**
 *
 * Esquema para describir una organización
 *
 * @name OrganizationSchema
 * @description Esquema para describir una organización o
 * suborganización que cumple un rol
 * en un proceso de negoco.
 * @returns {Schema}
 */
export const OrganizationSchema: Schema = new Schema(
  {
    /**
     * Grupo con información sobre el nombre
     * de la organizacion.
     */
    organizationName: [
      {
        type: String,
        trim: true,
        required: true
      }
    ],
    location: {
      address: { type: addressSchema, required: true },
      description: [String]
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      // validate: validateEmail,
      required: [true, 'Email address is required']
    },
    phone: {
      type: String,
      // validate: validatePhone,
      required: [true, 'User phone number required']
    },
    logo: String,
    website: String
  },
  {
    _id: false
  }
);
