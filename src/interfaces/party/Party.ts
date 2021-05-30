import Base from '../extends/Base';
import { IAddress } from '../location/Address';
import { IContract } from './Contract';

export enum partyTypes {
  CUSTOMER = 'customer',
  SUPPLIER = 'supplier'
}

export interface IPartyReference extends Base {
  party: IParty;
}

export interface IContact extends Base {
  name: string;
  email?: string;
  phone?: string[];
  note?: string[];
}

export interface IParty extends Base {
  organizationName: string[];
  firstname?: string;
  lastname?: string;
  contracts?: IContract[];
  location?: {
    address: IAddress;
    description?: string[];
  };
  phone: string;
  email: string;
  logo?: string;
  website?: string;

  /** El contacto principal de este party. */
  contact?: IContact;
}
