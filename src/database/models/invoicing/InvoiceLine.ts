import { Schema, Document, model } from 'mongoose';

import { allowanceChargeSchema } from '../shared/subdocuments/allowanceCharge';

import { taxSchema } from '../shared/subdocuments/tax';
import { priceSchema } from '../shared/subdocuments/price';
import { IInvoiceLine } from '../../../interfaces/invoicing/Invoice';
import { BaseMovLineSchemaFields } from '../shared/constants/BaseSchemaFields';

export const DOCUMENT_NAME = 'InvoiceLine';
export const COLLECTION_NAME = 'invoices_lines';

export interface IInvoiceLineDoc extends IInvoiceLine, Document {}

const invoiceLineSchema: Schema = new Schema(
  {
    ...BaseMovLineSchemaFields,
    orderLineReference: [
      {
        lineOrder: Number,
        lineStatus: String,
        OrderReference: {
          type: Schema.Types.ObjectId,
          ref: 'Order'
        }
      }
    ],
    allowanceCharge: [allowanceChargeSchema],
    tax: [taxSchema],
    price: priceSchema
  },
  { timestamps: true }
);

export const InvoiceLineModel = model<IInvoiceLineDoc>(
  DOCUMENT_NAME,
  invoiceLineSchema,
  COLLECTION_NAME
);
