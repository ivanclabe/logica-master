import { Schema, model, Document } from 'mongoose';

export const DOCUMENT_NAME = 'Period';
export const COLLECTION_NAME = 'periods';

export interface IPeriod extends Document {
  periodCode: string;
  startDate?: Date;
  endDate?: Date;
  description?: [string];
}

const periodSchema: Schema = new Schema({
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
  // Una descripción de este período, expresada como texto.
  description: [String]
});

export const PeriodModel = model<IPeriod>(
  DOCUMENT_NAME,
  periodSchema,
  COLLECTION_NAME
);
