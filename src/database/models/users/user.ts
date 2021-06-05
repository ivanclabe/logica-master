import {
  Schema,
  model,
  PassportLocalSchema,
  PassportLocalModel,
  PassportLocalDocument
} from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

export const DOCUMENT_NAME = 'User';
export const COLLECTION_NAME = 'users';

export interface IUserDoc extends PassportLocalDocument {
  firstname?: string;
  lastname?: string;
  admin?: boolean;
}

export type UserModel = PassportLocalModel<IUserDoc>;

const userSchema: Schema = new Schema({
  email: String,
  firstname: {
    type: String,
    default: ''
  },
  lastname: {
    type: String,
    default: ''
  },
  admin: {
    type: Boolean,
    default: false
  }
});

userSchema.plugin(passportLocalMongoose);

export const UserModel: PassportLocalModel<PassportLocalDocument> = model(
  DOCUMENT_NAME,
  userSchema as PassportLocalSchema,
  COLLECTION_NAME
);
