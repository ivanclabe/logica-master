import Base from '../extends/Base';
import { IAddress } from '../location/Address';
import { IContact } from './Contact';

export enum partyTypes {
  CUSTOMER = 'customer',
  SUPPLIER = 'supplier'
}

export interface IParty extends Base {
  organizationName: string[];
  name?: string;
  lastname?: string;
  location?: {
    address: IAddress;
    description?: string[];
  };
  email: string;
  logo?: string;
  website?: string;
  contact?: IContact;
}
