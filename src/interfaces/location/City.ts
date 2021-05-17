import { ISubentity } from './Subentity';
import { ICode } from '../common/Code';

export interface ICity {
  cityCode: ICode;
  cityName: string;
  subentity: ISubentity;
}
