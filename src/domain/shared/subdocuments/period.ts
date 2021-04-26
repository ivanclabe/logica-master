import { Schema } from 'mongoose';

export const schema: Schema = new Schema(
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
