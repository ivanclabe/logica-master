import { ISequenceIdentifier } from './sequenceIdentifier';

export interface ICode {
  identifier?: ISequenceIdentifier;
  codeID: string;
  extendedID?: string;
  isCodeMain?: boolean;
}
