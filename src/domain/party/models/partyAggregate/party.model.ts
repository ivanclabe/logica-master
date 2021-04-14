import { partySchema } from '../schemas';
import { IParty } from './party.interface';
import connect from '../../../../config/db.config';

const PartyModel = connect.model<IParty>('Party', partySchema);

export default PartyModel;
