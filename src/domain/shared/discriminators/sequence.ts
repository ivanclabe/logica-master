import { Schema } from 'mongoose';

import { period } from '../subdocuments';
import connect from '../../../config/db.config';

/**
 * Describe un tipo de codigo
 *
 * @name Sequence
 * @extends BaseSchema
 * @return {mongoose.Model}
 */
const sequenceSchema: Schema = new Schema(
  {
    sequenceName: {
      type: String,
      trim: true,
      required: true
    },
    sequencePrefix: { type: String, trim: true },
    numeration: {
      startCode: { type: Number, required: true },
      endCode: { type: Number, required: true },
      currentCode: Number
    },
    description: [String],
    validPeriod: [period.schema],
    sequence: { type: Boolean, default: false },
    codeProperties: [
      {
        propertyName: String,
        propertyValue: String
      }
    ]
  },
  {
    collection: 'sequences'
  }
);

export default connect.model('Sequence', sequenceSchema);
