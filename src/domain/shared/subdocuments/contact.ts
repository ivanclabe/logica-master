import { Schema } from 'mongoose';
// import { validateEmail, validatePhone } from '../../utils/validators';

/**
 *
 * Esquema para describir un contacto
 *
 * @name contactSchema
 * @description Esquema para describir información
 * sobre un contacto
 * @returns {Schema}
 */
export default new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
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
    // Texto de forma libre que transmite información
    // que no está contenida explícitamente en las
    // otras propiedades.
    note: [String]
  },
  {
    _id: false
  }
);
