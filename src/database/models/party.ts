import { Schema, Document, model } from 'mongoose';

import { IAddress, addressSchema } from './subdocuments/address';
import { IContact, contactSchema } from './subdocuments/contact';

export const DOCUMENT_NAME = 'Party';
export const COLLECTION_NAME = 'parties';

export const enum partyTypes {
  CUSTOMER = 'customer',
  SUPPLIER = 'supplier'
}

export interface IPartyIdentification {
  identificationType: string;
  identificationCode: string;
  additionalCode: string;
  isMainIdentification: boolean;
}

export interface ILocation {
  address: IAddress;
  description: string[];
}

export interface IParty extends Document {
  partyIdentification: IPartyIdentification[];
  organizationName: string[];
  name: string;
  lastname: string;
  location: ILocation;
  email: string;
  logo: string;
  website: string;
  contact: IContact;
}

const partyIdentification: Schema = new Schema(
  {
    identificationType: {
      type: Schema.Types.ObjectId,
      ref: 'OperSetting',
      required: true
    },
    identificationCode: { type: String, trim: true, required: true },
    additionalCode: { type: String, trim: true },
    isMainIdentification: { type: Boolean, default: false }
  },
  {
    _id: false
  }
);

/**
 * Una modelo para describir una organización,
 * suborganización o individuo que cumple un rol
 * en un proceso empresarial.
 * @name Party
 * @return {object} - Retorna el modelo Party
 */
const partySchema: Schema = new Schema({
  /** Identificador para este party */
  identification: [
    {
      type: partyIdentification,
      required: true
    }
  ],
  organizationName: [
    {
      type: String,
      trim: true,
      required: true
    }
  ],
  name: { type: String, trim: true, required: true },
  lastname: { type: String, trim: true, required: true },
  location: {
    address: addressSchema,
    description: [String]
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  logo: String,
  website: String,
  contact: contactSchema,
  taxScheme: [
    {
      registrationName: String,
      taxLevelCode: String,
      taxScheme: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'TaxScheme'
      }
    }
  ],
  contracts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Contract'
    }
  ],
  __t: {
    type: String,
    required: true,
    enum: [partyTypes.CUSTOMER, partyTypes.SUPPLIER]
  }
});

export const PartyModel = model<IParty>(
  DOCUMENT_NAME,
  partySchema,
  COLLECTION_NAME
);
