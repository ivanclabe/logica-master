import { Schema, Document, Types, model } from 'mongoose';

import { BaseSchemaFields } from '../shared/constants/BaseSchemaFields';
import { IContact } from '../../../interfaces/party/Party';
import { DOCUMENT_NAME as GroupOptionTypeModelName } from '../common/groupOptionType';
import { partyReferenceSchema } from '../shared/subdocuments/partyReference';
import { dateRangeSchema } from '../shared/types/dateRange';
import { allowanceChargeSchema } from '../shared/subdocuments/allowanceCharge';

export const DOCUMENT_NAME = 'Contract';
export const COLLECTION_NAME = 'contracts';

export interface IContractDoc extends IContact, Document {}

export const contractSchema: Schema = new Schema(
  {
    ...BaseSchemaFields,
    contractType: {
      type: Schema.Types.ObjectId,
      ref: GroupOptionTypeModelName,
      required: true
    },
    contractDate: {
      type: Date,
      default: Date.now()
    },
    party: { type: partyReferenceSchema, required: true },
    currencyCode: {
      type: Schema.Types.ObjectId,
      ref: GroupOptionTypeModelName,
      required: true
    },
    description: [String],
    validityPeriod: [dateRangeSchema],
    baseAmount: { type: Types.Decimal128, required: true },
    allowanceCharge: [allowanceChargeSchema],
    spentAmount: { type: Types.Decimal128, required: true }
  },
  {
    timestamps: true
  }
);

export const Contract = model<IContractDoc>(
  DOCUMENT_NAME,
  contractSchema,
  COLLECTION_NAME
);
