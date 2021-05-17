import { IAddress } from '../location/Address';
import { IContact } from './Contact';

export enum partyTypes {
  CUSTOMER = 'customer',
  SUPPLIER = 'supplier'
}

export interface IPartyIdentification {
  identificationType: string;
  identificationCode: string;
  additionalCode: string;
  isMainIdentification: boolean;
}

export interface ILocation {
  address: IAddress;
  description: string[];
}

export interface IParty {
  partyIdentification: IPartyIdentification[];
  organizationName: string[];
  name: string;
  lastname?: string;
  location: ILocation;
  email: string;
  logo?: string;
  website?: string;
  contact?: IContact;
}
