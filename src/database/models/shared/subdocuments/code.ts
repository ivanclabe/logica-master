import { Schema } from 'mongoose';

import { Code } from '../../../../interfaces/extends/Base';
import { DOCUMENT_NAME as IdentifierModelModelName } from '../../common/identifier';
import { DOCUMENT_NAME as GroupOptionTypeModelName } from '../../common/groupOptionType';

const CodeSchemaFields: Record<keyof Code, any> = {
  index: { type: Number, min: 0 },
  identifier: {
    type: Schema.Types.ObjectId,
    ref: IdentifierModelModelName
  },
  codeType: { type: Schema.Types.ObjectId, ref: GroupOptionTypeModelName },
  codeID: { type: String, trim: true, required: true },
  extendedID: { type: String, trim: true },
  main: { type: Boolean, default: false }
};

/**
 * @name codeSchema
 * @returns {Schema}
 */
export const codeSchema: Schema = new Schema(CodeSchemaFields, { _id: false });
