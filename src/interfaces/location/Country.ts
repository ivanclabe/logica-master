import { ISubentity } from './Subentity';
import { ICode } from '../common/Code';

export interface ICountry {
  countryCode: ICode;
  countryName: string;
  subentities?: ISubentity;
}
