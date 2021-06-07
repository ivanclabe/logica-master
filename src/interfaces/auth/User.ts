import { IAccount } from './Account';

export interface IUser {
  displayName: string;
  firstname?: string;
  lastname?: string;
  email: string;
  phone: string;
  avatar?: string;
  accounts: IAccount[];
  admin?: boolean;
}
