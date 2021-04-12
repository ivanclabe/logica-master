import { Schema } from 'mongoose';
import PartyModel from './party.model';

/** Employee Party */
const employeeSchema = new Schema({
  party: personSchema,
  terminals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Terminal'
    }
  ],
  birthday: Date,
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role'
  },
  avatar: String,
  jobTitle: String,
  contact: contactSchema,
  //  Meta!
  isAdminUser: { type: Boolean, default: false },
  isAuthAccount: { type: Boolean, default: false }
});
export const Employee = PartyModel.discriminator(
  'EmployeeParty',
  employeeSchema
);
