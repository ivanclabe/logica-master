import { Schema } from 'mongoose';

import contactSchema from './contact';
import organizationSchema from './organization';

/** Customer Party */
const customerSchema: Schema = new Schema({
  party: organizationSchema,
  /**
   * Grupo de información tributarias del
   * cliente.
   */
  taxScheme: [
    {
      registrationName: String,
      taxLevelCode: String,
      taxScheme: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'TaxScheme'
      }
    }
  ],
  contact: contactSchema,
  buyerContact: contactSchema
});

export default customerSchema;
