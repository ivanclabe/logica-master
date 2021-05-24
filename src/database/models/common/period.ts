import { Schema, model, Document } from 'mongoose';
import { IPeriod } from '../../../interfaces/common/Period';

export const DOCUMENT_NAME = 'Period';
export const COLLECTION_NAME = 'periods';

export interface IPeriodDoc extends IPeriod, Document {}

const periodSchema: Schema = new Schema({
  sequence: Number,
  code:
  periodCode: {
    type: String,
    unique: true,
    required: true
  },
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
