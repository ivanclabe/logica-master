import {
  Schema,
  model,
  PassportLocalSchema,
  PassportLocalModel,
  PassportLocalDocument
} from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import { IUser } from '../../../interfaces/auth/User';

export const DOCUMENT_NAME = 'User';
export const COLLECTION_NAME = 'users';

export interface IUserDoc extends IUser, Document {}

const userSchema: Schema = new Schema(
  {
    displayName: { type: String, trim: true, required: true },
    firstname: {
      type: String,
      default: ''
    },
    lastname: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'email requerido'],
      lowercase: true
    },
    phone: {
      // Validation succeeds! Phone number is defined
      // and fits `DDD-DDD-DDDD`
      type: String,
      validate: {
        validator: function (v: any) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: (props: any) => `${props.value} is not a valid phone number!`
      }
      // required: [true, 'User phone number required']
    },
    avatar: String,
    accounts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Account'
      }
    ],
    admin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: { createdAt: 'dateJoined', updatedAt: 'lastLogin' } }
);

userSchema.plugin(passportLocalMongoose);

// UserModel: PassportLocalModel<PassportLocalDocument>
export const UserModel: PassportLocalModel<PassportLocalDocument> = model(
  DOCUMENT_NAME,
  userSchema as PassportLocalSchema,
  COLLECTION_NAME
);
