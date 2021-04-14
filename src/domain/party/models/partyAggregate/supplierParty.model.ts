import PartyModel from './party.model';
import { supplierSchema } from '../schemas';

export const Supplier = PartyModel.discriminator(
  'SupplierParty',
  supplierSchema
);
