import { Schema, Document, model } from 'mongoose';

import { BaseMovSchemaFields } from '../shared/constants/BaseSchemaFields';
import { partyReferenceSchema } from '../shared/subdocuments/partyReference';
import { allowanceChargeSchema } from '../shared/subdocuments/allowanceCharge';
import { taxSchema } from '../shared/subdocuments/tax';

import { IInvoice, invoiceTypes } from '../../../interfaces/invoicing/Invoice';
import { COLLECTION_NAME as ContractModelName } from '../party/contract';
import { COLLECTION_NAME as PaymentModelName } from '../payment/payment';
import { COLLECTION_NAME as InvoiceLineModelName } from './invoiceLine';

export const DOCUMENT_NAME = 'Invoice';
export const COLLECTION_NAME = 'invoices';

export interface IInvoiceDoc extends IInvoice, Document {}

const invoiceSchema = new Schema(
  {
    ...BaseMovSchemaFields,
    dueDate: Date,
    sellerParty: partyReferenceSchema,
    customerParty: partyReferenceSchema,
    invoiceType: {
      type: String,
      enum: Object.values(invoiceTypes),
      required: true
    },
    contract: {
      type: Schema.Types.ObjectId,
      ref: ContractModelName
    },
    payments: [
      {
        type: Schema.Types.ObjectId,
        ref: PaymentModelName
      }
    ],
    allowanceCharge: [allowanceChargeSchema],
    tax: [taxSchema],
    invoiceLines: [
      {
        type: Schema.Types.ObjectId,
        ref: InvoiceLineModelName,
        required: true
      }
    ]
  },
  { timestamps: true }
);

export const InvoiceModel = model<IInvoiceDoc>(
  DOCUMENT_NAME,
  invoiceSchema,
  COLLECTION_NAME
);
