import { ICode } from '../common/Code';
import { IOptionType } from '../common/OptionType';
import { IPeriod } from '../common/Period';

export interface IContract {
  contractCode: ICode;
  ContractType: IOptionType;
  issueDate: Date;
  currencyCode: string;
  description?: string[];
  validityPeriod: IPeriod[];
  baseAmount: number;
  amount: number;
}
