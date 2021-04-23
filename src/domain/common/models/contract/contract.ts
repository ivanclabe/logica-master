import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

export const contractSchema: Schema = new Schema(
  {
    reference_id: {
      type: String,
      required: true
    },
    issueDate: {
      type: Date,
      required: true
    },
    description: [String],
    validityPeriod: PeriodSchema.schema,
    /**
     * La parte que emitió el documento de referencia.
     */
    issuer_party: PartySchema.schema
  },
  {
    collection: Constant.NameCollections.docReferenceCollection
  }
);
