import { Document } from 'mongoose';

type Identification = {
  name: string;
  value: string;
};

export interface IParty extends Document {
  partyIdentification?: Identification[];
}
