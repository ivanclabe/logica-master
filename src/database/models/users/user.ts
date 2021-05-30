import { model, Schema, Document } from 'mongoose';

import { DOCUMENT_NAME as PartyModelName } from '../party/party';

export type IUserDoc = Document;

const userSchema: Schema = new Schema({
  party: {
    type: Schema.Types.ObjectId,
    ref: PartyModelName,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  }
});

export const UserModel = model<IUserDoc>('users', userSchema);
