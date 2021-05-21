import Base, { OptionType, Amount } from '../extends/Base';
import { IPeriod } from '../common/Period';

export interface IContract extends Base {
  ContractType: OptionType;
  issueDate: Date;
  currencyCode: string;
  description?: string[];
  validityPeriod: IPeriod[];
  baseAmount: Amount;
  amount: Amount;
}
