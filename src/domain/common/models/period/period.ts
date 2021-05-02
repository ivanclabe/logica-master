import { Schema, Document } from 'mongoose';

import connect from '../../../../config/db.config';

export interface IPeriod extends Document {
  periodCode: string;
  startDate?: Date;
  endDate?: Date;
  description?: [string];
}

const periodSchema: Schema = new Schema(
  {
    periodCode: {
      type: String,
      required: true,
      unique: true
    },
    startDate: {
      type: Date,
      default: Date.now
    },
    endDate: Date,
    // Una descripción de este período, expresada como texto.
    description: [String]
  },
  {
    collection: 'period'
  }
);

export const PeriodModel = connect.model<IPeriod>('Period', periodSchema);
