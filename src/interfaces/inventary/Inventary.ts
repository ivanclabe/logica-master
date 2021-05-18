import Base from '../extends/Base';
import { IPeriod } from '../common/Period';

export interface IInventary extends Base {
  inventaryPeriod: IPeriod;
  note?: string[];
}
