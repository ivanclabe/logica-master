import partySchema from '../schemas/party';
import { IParty } from './party.interface';
import { Model } from '../../config/db.config';

const PartyModel = Model<IParty>('Party', partySchema);

export default PartyModel;
