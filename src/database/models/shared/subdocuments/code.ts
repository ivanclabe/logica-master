import { Schema, Document } from 'mongoose';

import {
  ISequenceIdentifier,
  DOCUMENT_NAME as SequenceIdentifierModelName
} from '../../common/sequenceIdentifier';

export interface ICode extends Document {
  identifier?: ISequenceIdentifier['id'];
  codeID: string;
  extendedID?: string;
  isCodeMain?: boolean;
}

/**
 *
 * Esquema para describir una precio
 *
 * @name codeSchema
 * @description Esquema para describir información
 * sobre un codigo
 * @returns {Schema}
 */
export const codeSchema: Schema = new Schema(
  {
    identifier: {
      type: Schema.Types.ObjectId,
      ref: SequenceIdentifierModelName
    },
    codeID: { type: String, trim: true, required: true },
    extendedID: { type: String, trim: true },
    isCodeMain: { type: Boolean, default: false }
  },
  {
    _id: false
  }
);
