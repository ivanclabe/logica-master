import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

export const contractSchema: Schema = new Schema(
  {
    periodCode: {
      type: String,
      required: true,
      unique: true
    },
    startDate: {
      type: Date,
      required: true
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
