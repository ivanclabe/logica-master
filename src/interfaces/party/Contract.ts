import Base from '../extends/Base';
import { IOptionType } from '../common/OptionType';
import { IPeriod } from '../common/Period';

export interface IContract extends Base {
  ContractType: IOptionType;
  issueDate: Date;
  currencyCode: string;
  description?: string[];
  validityPeriod: IPeriod[];
  baseAmount: number;
  amount: number;
}
