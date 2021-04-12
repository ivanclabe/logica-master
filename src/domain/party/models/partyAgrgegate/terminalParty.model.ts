import { Schema } from 'mongoose';
import PartyModel from './party.model';

/** Terminal Party */
const terminalSchema = new Schema({
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
