import { IAddress } from '../location/Address';
import { IContact } from './Contact';

export enum partyTypes {
  CUSTOMER = 'customer',
  SUPPLIER = 'supplier'
}

import Base from '../extends/Base';

export interface IPartyIdentification extends Base {
  identificationType: string;
  main: boolean;
}

export interface IParty extends Base {
  partyIdentification: IPartyIdentification[];
  organizationName: string[];
  name?: string;
  lastname?: string;
  location: {
    address: IAddress;
    description?: string[];
  };
  email: string;
  logo?: string;
  website?: string;
  contact?: IContact;
}
