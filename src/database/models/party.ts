import { Schema, Document, model } from 'mongoose';

import { IAddress, addressSchema } from './subdocuments/address';
import { IContact, contactSchema } from './subdocuments/contact';

export const DOCUMENT_NAME = 'Party';
export const COLLECTION_NAME = 'parties';

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
    discriminatorKey: '__t'
  }
);

export const PartyModel = model<IParty>(
  DOCUMENT_NAME,
  partySchema,
  COLLECTION_NAME
);
