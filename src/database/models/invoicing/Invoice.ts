import { Schema, Document, model } from 'mongoose';

import {
  BaseMovSchemaFields,
  BaseSchemaFields
} from '../shared/constants/BaseSchemaFields';
import {
  IPartyReference,
  partyReferenceSchema
} from '../shared/subdocuments/partyReference';
import { ICode, codeSchema } from '../shared/subdocuments/code';
import {
  IAllowanceCharge,
  allowanceChargeSchema
} from '../shared/subdocuments/allowanceCharge';
import { ITax, taxSchema } from '../shared/subdocuments/tax';
import { IPayment, paymentSchema } from '../payment/payment';
import { IMonetary, monetarySchema } from '../shared/subdocuments/monetary';
import { IPaymentMean, paymentMeanSchema } from '../payment/paymentMean';

import { COLLECTION_NAME as PeriodModelName, IPeriod } from '../common/period';
import { COLLECTION_NAME as OptionTypeModelName } from '../common/groupOptionType';
import {
  IInvoiceLine,
  COLLECTION_NAME as InvoiceLineModelName
} from './InvoiceLine';
import { IInvoice } from '../../../interfaces/invoicing/Invoice';

export const DOCUMENT_NAME = 'Invoice';
export const COLLECTION_NAME = 'invoices';

export interface IInvoiceDoc extends IInvoice, Document {}

const invoiceSchema = new Schema({
  ...BaseMovSchemaFields,
  dueDate: Date,

  /** Vendedor que crea el documento */
  sellerParty: partyReferenceSchema,

  customerParty: partyReferenceSchema,

  // paymentMeans: [paymentMeanSchema],
  prepaidPayment: [paymentSchema],
  allowanceCharge: [allowanceChargeSchema],
  tax: [taxSchema],
  /** Describe un artículo de factura. */
  invoiceLines: [
    {
      type: Schema.Types.ObjectId,
      ref: InvoiceLineModelName,
      required: true
    }
  ],
  _type: {
    type: String,
    enum: Object.values(documentTypes),
    required: true
  }
});

export const InvoiceModel = model<IInvoice>(
  DOCUMENT_NAME,
  invoiceSchema,
  COLLECTION_NAME
);
