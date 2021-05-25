import { Schema } from 'mongoose';

import { TraceRoute } from '../../../../interfaces/extends/Base';
import { codeSchema } from '../subdocuments/code';

const TraceRouteSchemaFields: Record<keyof TraceRoute, any> = {
  traceCode: { type: codeSchema, required: true },
  traceAt: { type: Date, default: Date.now },
  referencedUUID: { type: String, required: true },
  associatedModel: { type: String, required: true }
};

export const traceRouteSchema: Schema = new Schema(TraceRouteSchemaFields, {
  _id: false
});
