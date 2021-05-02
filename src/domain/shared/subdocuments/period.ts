import { Schema, Document } from 'mongoose';

export interface IPeriod extends Document {
  startDate?: Date;
  endDate: Date;
}

const periodSchema: Schema = new Schema(
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

export default periodSchema;
