import { Schema, Document } from 'mongoose';

export interface IPeriod extends Document {
  startDate?: Date;
  endDate: Date;
}

export const periodSchema: Schema = new Schema(
  {
    startDate: {
      type: Date,
      default: Date.now
    },
    endDate: {
      type: Date,
      required: true
    }
  },
  { _id: false }
);
