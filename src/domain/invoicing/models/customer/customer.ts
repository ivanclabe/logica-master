import { Schema } from 'mongoose';

import PartyModel from '../../../shared/discriminators/party';
import {
  contactSchema,
  organizationSchema
} from '../../../shared/subdocuments';

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

export const CustomerPartyModel = PartyModel.discriminator(
  'CustomerParty',
  customerSchema
);
