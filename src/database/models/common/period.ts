import { Schema, model, Document } from 'mongoose';

import { BaseSchemaFields } from '../shared/constants/BaseSchemaFields';
import { IPeriod } from '../../../interfaces/common/Period';

export const DOCUMENT_NAME = 'Period';
export const COLLECTION_NAME = 'periods';

export interface IPeriodDoc extends IPeriod, Document {}

const periodSchema: Schema = new Schema({
  ...{ BaseSchemaFields },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: Date,
  description: [String]
});

export const PeriodModel = model<IPeriodDoc>(
  DOCUMENT_NAME,
  periodSchema,
  COLLECTION_NAME
);
