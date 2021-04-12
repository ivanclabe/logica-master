import { Schema } from 'mongoose';
import adddressSchema from './address.schema';
import { validateEmail, validatePhone } from '../../utils/validators';

/**
 *
 * Esquema para describir una persona
 *
 * @name personSchema
 * @description Esquema para describir información
 * sobre una persona
 * @returns {Schema}
 */
export default new Schema(
  {
    name: {
      first: {
        type: String,
        trim: true,
        required: true
      },
      second: { type: String, trim: true }
    },
    lastname: {
      first: {
        type: String,
        trim: true,
        required: true
      },
      second: { type: String, trim: true }
    },
    gender: { type: String, default: 'M' },
    address: adddressSchema,
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: validateEmail,
      required: [true, 'Email address is required']
    },
    phone: {
      type: String,
      validate: validatePhone,
      required: [true, 'User phone number required']
    }
  },
  {
    _id: false
  }
);
