import { Schema } from 'mongoose';

import { PartyModel } from '../../../shared/discriminators/party';

/** Customer Party */
const supplierSchema: Schema = new Schema({
  names: [{ type: String, trim: true, required: true }],
  lastnames: [{ type: String, trim: true, required: true }]
});

export const SupplierPartyModel = PartyModel.discriminator(
  'SupplierParty',
  supplierSchema
);
