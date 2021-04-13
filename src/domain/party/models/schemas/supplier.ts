import { Schema } from 'mongoose';

import organizationSchema from './organization';
import contactSchema from './contact';

/** Supplier Party */
const supplierSchema: Schema = new Schema({
  party: organizationSchema,
  /**
   * Grupo de información tributarias del
   * proveedor.
   */
  taxScheme: [
    {
      registrationName: String,
      taxLevelCode: String,
      taxScheme: {
        type: Schema.Types.ObjectId,
        ref: 'OperSetting',
        required: true
      }
    }
  ],
  contact: contactSchema,
  sellerContact: contactSchema
});

export default supplierSchema;
