import { IOptionType } from '../common/OptionType';
import { IParty } from './Party';

export interface IAssignedIdentification {
  identificationType: IOptionType;
  identificationValue: string;
  extendedValue?: string;
}

export interface IPartyReference {
  assignedIdentification: IAssignedIdentification;
  party: IParty;
}
