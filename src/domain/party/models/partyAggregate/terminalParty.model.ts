import PartyModel from './party.model';
import { terminalSchema } from '../schemas';

export const Terminal = PartyModel.discriminator(
  'TerminalParty',
  terminalSchema
);
