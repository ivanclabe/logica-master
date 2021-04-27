import { Schema } from 'mongoose';

import { address, contact } from '../subdocuments';
import connect from '../../../config/db.config';

/**
 * Una modelo para describir una organización,
 * suborganización o individuo que cumple un rol
 * en un proceso empresarial.
 * @name Party
 * @return {object} - Retorna el modelo Party
 */
const partySchema: Schema = new Schema(
  {
    /** Identificador para este party */
    partyIdentification: [
      {
        identificationName: {
          type: Schema.Types.ObjectId,
          ref: 'OperSetting',
          required: true
        },
        identificationCode: { type: String, trim: true, required: true }
      }
    ],
    location: {
      address: address.schema,
      description: [String]
    },
    email: {
      type: String,
      trim: true,
      lowercase: true
      // validate: validateEmail,
    },
    contact: contact.schema
  },
  {
    collection: 'parties',
    discriminatorKey: '__t'
  }
);

export const PartyModel = connect.model('Party', partySchema);
