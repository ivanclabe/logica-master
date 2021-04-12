import { Schema } from 'mongoose';
import PartyModel from './party.model';

/** Person Party */
const personSchemas = new Schema({
  party: personSchema,
  avatar: String,
  jobTitle: String,
  contact: contactSchema
});
export const Person = PartyModel.discriminator('PersonParty', personSchemas);
