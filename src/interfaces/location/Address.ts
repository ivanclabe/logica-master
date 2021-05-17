import { ICity } from './City';

export interface IAddressLine {
  line: string;
}

export interface IAddress {
  streetName: string;
  addressLine?: IAddressLine;
  city: ICity;
  postalZone?: string;
}
