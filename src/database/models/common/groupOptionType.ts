import { Schema, Document, model } from 'mongoose';

import {
  groupOptionsTypesType,
  GroupOptionType
} from '../../../interfaces/extends/Base';

export const DOCUMENT_NAME = 'GroupOptionType';
export const COLLECTION_NAME = 'groups_options_types';

export interface IGroupOptionTypeDoc extends GroupOptionType, Document {}

const GroupOptionTypeSchemaFields: Record<keyof GroupOptionType, any> = {
  index: { type: Number, min: 0 },
  groupType: {
    type: String,
    enum: Object.values(groupOptionsTypesType),
    required: true
  },
  optionCode: { type: String, trim: true },
  optionName: { type: String, trim: true, required: true },
  description: [String],
  main: { type: Boolean, default: true }
};

const groupOptionTypeSchema: Schema = new Schema(GroupOptionTypeSchemaFields);

export const GroupOptionTypeModel = model<IGroupOptionTypeDoc>(
  DOCUMENT_NAME,
  groupOptionTypeSchema,
  COLLECTION_NAME
);
