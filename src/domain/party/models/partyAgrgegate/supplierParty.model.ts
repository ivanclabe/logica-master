import { Schema } from 'mongoose';
import PartyModel from './party.model';

/** Supplier Party */
const supplierSchema = new Schema({
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
export const Supplier = PartyModel.discriminator(
  'SupplierParty',
  supplierSchema
);
