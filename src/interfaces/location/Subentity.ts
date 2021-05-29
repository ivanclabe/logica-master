import Base from '../extends/Base';
import { ICity } from './city';

export interface ISubentity extends Base {
  subentityName: string;
  countryCode: string;
  cities?: ICity[];
}
