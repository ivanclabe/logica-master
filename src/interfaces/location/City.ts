import Base from '../extends/Base';
import { ISubentity } from './Subentity';

export interface ICity extends Base {
  cityName: string;
  subentity: ISubentity;
}
