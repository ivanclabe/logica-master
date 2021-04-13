import { Schema } from 'mongoose';

import organizationSchema from './organization';

export const Supplier = PartyModel.discriminator(
  'SupplierParty',
  supplierSchema
);
