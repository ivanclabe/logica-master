import { statusCodeType } from '../../../../interfaces/extends/Base';
import { codeSchema } from '../subdocuments/code';

export const BaseSchemaFields = {
  code: codeSchema,
  statusCode: {
    type: String,
    enum: Object.values(statusCodeType),
    required: true
  },
  UUID: String
};

export const BaseWithSequenceSchemaFields = {
  sequence: { type: Number, min: 0 },
  ...{ BaseSchemaFields }
};
