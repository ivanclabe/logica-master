import { Schema } from 'mongoose';

import { BaseSchemaFields } from '../constants/BaseSchemaFields';
import { DOCUMENT_NAME as PartyModelName } from '../../party/party';

export const partyReferenceSchema: Schema = new Schema(
  {
    ...BaseSchemaFields,
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
