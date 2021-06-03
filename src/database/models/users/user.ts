import { model, Schema, Document } from 'mongoose';

export type IUserDoc = Document;

const userSchema: Schema = new Schema({
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

export const UserModel = model<IUserDoc>('users', userSchema);
