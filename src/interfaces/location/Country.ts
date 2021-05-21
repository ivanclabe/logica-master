import Base from '../extends/Base';
import { ISubentity } from './Subentity';

export interface ICountry extends Base {
  countryName: string;
  subentities?: ISubentity[];
}
