import { Schema, Types } from 'mongoose';

import connect from '../../../../config/db.config';

export const contractSchema: Schema = new Schema(
  {
    referenceId: {
      type: String,
      required: true
    },
    issueDate: {
      type: Date,
      required: true
    },
    description: [String],
    validityPeriod: [
      {
        startDate: { type: Date, default: Date.now },
        endDate: { type: Date, required: true }
      }
    ],
    currencyCode: { type: String },
    /** El monto de esta asignado a este contrato. */
    baseAmount: { type: Types.Decimal128, default: 0 },
    /** El monto consumido de este contrato */
    amount: { type: Types.Decimal128, default: 0 },
    /**
     * La parte que emitió el documento de referencia.
     */
    issuerParty: {
      type: Schema.Types.ObjectId,
      ref: 'OrganizationParty',
      required: true
    },
    customersParties: [
      {
        type: Schema.Types.ObjectId,
        ref: 'CustomerParty'
      }
    ]
  },
  {
    collection: 'contrats'
  }
);

export const Contract = connect.model('Contract', contractSchema);
