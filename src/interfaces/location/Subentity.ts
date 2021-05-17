import { ICountry } from './country';
import { ICity } from './city';
import { ICode } from '../common/Code';

export interface ISubentity {
  subentityCode: ICode;
  subentityName: string;
  country: ICountry;
  cities?: ICity[];
}
