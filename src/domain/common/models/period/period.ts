import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

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
    endDate: {
      type: Date,
      required: true
    },
    // Una descripción de este período, expresada como texto.
    description: [String]
  },
  {
    collection: 'period'
  }
);

export const PeriodModel = connect.model('Period', periodSchema);
