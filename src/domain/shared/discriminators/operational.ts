import { Schema } from 'mongoose';

import connect from '../../../config/db.config';

/**
 * Modelo para discriminar recursos
 * operacionales
 */
const operationalResourceSchema = new Schema(
  {
    index: { type: Number, min: 0 },
    name: {
      type: String,
      trim: true,
      required: true
    },
    description: String,
    operationalCode: String,
    active: { type: Boolean, default: true },
    deleted: { type: Boolean, default: false }
  },
  {
    collection: 'operationalsResources',
    discriminatorKey: '__t'
  }
);

export default connect.model('OperationalResource', operationalResourceSchema);
