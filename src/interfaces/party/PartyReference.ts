import Base from '../extends/Base';
import { IParty } from './Party';

// export interface IAssignedIdentification extends Base {
//   identificationType: IOptionType;
// }

export interface IPartyReference extends Base {
  party: IParty;
}
