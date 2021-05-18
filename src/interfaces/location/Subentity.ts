import Base from '../extends/Base';
import { ICountry } from './country';
import { ICity } from './city';

export interface ISubentity extends Base {
  subentityName: string;
  country: ICountry;
  cities?: ICity[];
}
