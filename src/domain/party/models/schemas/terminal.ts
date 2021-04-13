import { Schema } from 'mongoose';

import organizationSchema from './organization';

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

export default terminalSchema;
