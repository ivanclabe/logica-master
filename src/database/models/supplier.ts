import { Schema } from 'mongoose';

import PartyModel from '../../domain/shared/discriminators/party';
import { contactSchema, organizationSchema } from './subdocuments';

/** Customer Party */
const supplierSchema: Schema = new Schema({
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

export const SupplierPartyModel = PartyModel.discriminator(
  'SupplierParty',
  supplierSchema
);
