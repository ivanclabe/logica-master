import { Schema } from 'mongoose';

import PartyModel from '../../../shared/discriminators/party';
import { organizationSchema } from '../../../shared/subdocuments';

/** Terminal Party */
const terminalSchema: Schema = new Schema({
  party: organizationSchema,
  responsableParty: {
    type: Schema.Types.ObjectId,
    ref: 'Person',
    required: true
  },
  logo: String
});

export const Terminal = PartyModel.discriminator(
  'TerminalParty',
  terminalSchema
);
