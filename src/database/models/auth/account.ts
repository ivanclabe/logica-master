import { Schema, Document, model } from 'mongoose';

import { IAccount } from '../../../interfaces/auth/Account';

export const DOCUMENT_NAME = 'Account';
export const COLLECTION_NAME = 'accounts';

export interface IAccountDoc extends IAccount, Document {}

const accountSchema: Schema = new Schema(
  {
    UUID: String,
    codeID: String,
    displayName: { type: String, trim: true, required: true },
    ownerUser: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    _db: String
  },
  { timestamps: true }
);

export const AccountModel = model<IAccountDoc>(
  DOCUMENT_NAME,
  accountSchema,
  COLLECTION_NAME
);
