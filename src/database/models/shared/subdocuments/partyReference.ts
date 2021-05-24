import { Schema, Document } from 'mongoose';

import {
  IOptionType,
  DOCUMENT_NAME as OptionTypeModelName
} from '../../common/groupOptionType';
import { IParty, DOCUMENT_NAME as PartyModelName } from '../../party/party';

export interface IAssignedIdentification extends Document {
  identificationType: IOptionType['id'];
  identificationValue: string;
  extendedValue?: string;
}

export interface IPartyReference extends Document {
  assignedIdentification: IAssignedIdentification;
  party: IParty['id'];
}

/**
 * @name assignedIdentificationSchema
 * @description Esquema para describir información
 * sobre un codigo
 * @returns {Schema}
 */
export const assignedIdentificationSchema: Schema = new Schema(
  {
    identificationType: {
      type: Schema.Types.ObjectId,
      ref: OptionTypeModelName,
      required: true
    },
    identificationValue: { type: String, trim: true, required: true },
    extendedValue: { type: String, trim: true }
  },
  {
    _id: false
  }
);

/**
 * @name partyReferenceSchema
 * @description Esquema para describir información
 * sobre un codigo
 * @returns {Schema}
 */
export const partyReferenceSchema: Schema = new Schema(
  {
    assignedIdentification: {
      type: assignedIdentificationSchema,
      required: true
    },
    party: {
      type: Schema.Types.ObjectId,
      ref: PartyModelName,
      required: true
    }
  },
  {
    _id: false
  }
);
