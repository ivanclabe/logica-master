import { IUser } from './User';

export interface IAccount {
  UUID: string;
  codeID: string;
  displayName: string;
  ownerUser: IUser;
  _db: string;
}
