import { Schema } from 'mongoose';

import personSchema from './person';
import contactSchema from './contact';

/** Employee Party */
const employeeSchema: Schema = new Schema({
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

export default employeeSchema;
