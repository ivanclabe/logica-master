import { Schema } from 'mongoose';

import { PartyModel } from '../../domain/shared/discriminators/party';

/** Customer Party */
const customerSchema: Schema = new Schema({
  names: [{ type: String, trim: true, required: true }],
  lastnames: [{ type: String, trim: true, required: true }],
  contract: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Contract'
    }
  ]
});

export const CustomerPartyModel = PartyModel.discriminator(
  'CustomerParty',
  customerSchema
);
