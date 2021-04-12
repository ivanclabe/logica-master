import { Schema } from 'mongoose';

import BaseSchema from '../../schema/baseSchema';
import {
  organizationSchema,
  personSchema,
  contactSchema
} from '../../schema/nested';
import appConnect from '../../config/db.config';
import { collectionName } from '../../constants/collections';

const { PARTY_COLLECTION_NAME } = collectionName;

/**
 * Una modelo para describir una organización,
 * suborganización o individuo que cumple un rol
 * en un proceso empresarial.
 * @name Party
 * @return {object} - Retorna el modelo Party
 */
const partySchema = new BaseSchema(
  {
    /** Identificador para este party */
    partyIdentification: [
      {
        name: {
          type: Schema.Types.ObjectId,
          ref: 'OperSetting',
          required: true
        },
        value: { type: String, trim: true, required: true }
      }
    ]
  },
  {
    discriminatorKey: '__t',
    collection: PARTY_COLLECTION_NAME
  }
);

const PartyModel = appConnect.model('Party', partySchema);
