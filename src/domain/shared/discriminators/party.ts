import { Schema, Document } from 'mongoose';

import addressSchema, { IAddress } from '../subdocuments/address';
import contactSchema, { IContact } from '../subdocuments/contact';

import connect from '../../../config/db.config';

export interface IPartyIdentification {
  identificationType: string;
  identificationCode: string;
  additionalCode: string;
}

export interface ILocation {
  address: IAddress;
  description: [string];
}

export interface IParty extends Document {
  partyIdentification: [IPartyIdentification];
  location: ILocation;
  email: string;
  contact: IContact;
}

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
        identificationType: {
          type: Schema.Types.ObjectId,
          ref: 'OperSetting',
          required: true
        },
        identificationCode: { type: String, trim: true, required: true }
      }
    ],
    location: {
      address: addressSchema,
      description: [String]
    },
    email: {
      type: String,
      trim: true,
      lowercase: true
      // validate: validateEmail,
    },
    contact: contactSchema
  },
  {
    collection: 'parties',
    discriminatorKey: '__t'
  }
);

export const PartyModel = connect.model<IParty>('Party', partySchema);
