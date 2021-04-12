import { Schema } from 'mongoose';
import PartyModel from './party.model';

/** Customer Party */
const customerSchema = new Schema({
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
export const Customer = PartyModel.discriminator(
  'CustomerParty',
  customerSchema
);
