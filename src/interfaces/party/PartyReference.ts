import Base from '../extends/Base';
import { IOptionType } from '../common/OptionType';
import { IParty } from './Party';

export interface IAssignedIdentification extends Base {
  identificationType: IOptionType;
}

export interface IPartyReference {
  assignedIdentification: IAssignedIdentification;
  party: IParty;
}
