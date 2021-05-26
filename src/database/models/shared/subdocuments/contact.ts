import { Schema } from 'mongoose';

import { BaseSchemaFields } from '../../shared/constants/BaseSchemaFields';

/**
 * @name contactSchema
 */
export const contactSchema: Schema = new Schema(
  {
    /** Base Properties */
    ...BaseSchemaFields,

    /** Interface Properties */
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, lowercase: true },
    phone: [String],
    note: [String]
  },
  {
    _id: false,
    timestamps: true
  }
);
