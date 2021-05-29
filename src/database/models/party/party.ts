import { Schema, Document, model } from 'mongoose';

import { BaseSchemaFields } from '../shared/constants/BaseSchemaFields';
import { IParty } from '../../../interfaces/party/Party';
import { addressSchema } from '../shared/subdocuments/address';
import { contactSchema } from '../shared/subdocuments/contact';
import { DOCUMENT_NAME as ContractModelName } from '../party/contract';

export const DOCUMENT_NAME = 'Party';
export const COLLECTION_NAME = 'parties';

export interface IPartyDoc extends IParty, Document {}

const partySchema: Schema = new Schema(
  {
    ...BaseSchemaFields,
    organizationName: [{ type: String, trim: true }],
    firstname: { type: String, trim: true },
    lastname: { type: String, trim: true },
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
    contracts: [
      {
        type: Schema.Types.ObjectId,
        ref: ContractModelName
      }
    ],
    contact: contactSchema
  },
  {
    timestamps: true
  }
);

export const PartyModel = model<IPartyDoc>(
  DOCUMENT_NAME,
  partySchema,
  COLLECTION_NAME
);
