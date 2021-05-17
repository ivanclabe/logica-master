import { IPeriod } from '../common/Period';
import { ICode } from '../common/Code';

export interface IInventary {
  inventaryCode: ICode;
  inventaryPeriod: IPeriod;
  note?: string[];
}
