import PartyModel from './party.model';
import { customerSchema } from '../schemas';

export const Customer = PartyModel.discriminator(
  'CustomerParty',
  customerSchema
);
