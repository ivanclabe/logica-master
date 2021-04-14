import PartyModel from './party.model';
import { personSchema } from '../schemas';

export const Person = PartyModel.discriminator('PersonParty', personSchema);
