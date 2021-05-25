import { Schema, Document, model } from 'mongoose';

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
import { IPayment, paymentSchema } from '../common/payment';
import { IMonetary, monetarySchema } from '../shared/subdocuments/monetary';
import {
  IPaymentMean,
  paymentMeanSchema
} from '../shared/subdocuments/paymentMean';

import { COLLECTION_NAME as PeriodModelName, IPeriod } from '../common/period';
import { COLLECTION_NAME as OptionTypeModelName } from '../common/groupOptionType';
import {
  IInvoiceLine,
  COLLECTION_NAME as InvoiceLineModelName
} from './InvoiceLine';

export const DOCUMENT_NAME = 'Document';
export const COLLECTION_NAME = 'documents';

export enum documentTypes {
  INVOICE = 'invoice',
  ORDER = 'order'
}

export interface IInvoice extends Document {
  invoiceCode: ICode;
  issueDate: Date;
  dueDate?: Date;
  currencyCode: string;
  sellerParty: IPartyReference;
  customerParty: IPartyReference;
  note?: string[];
  period?: IPeriod['id'];
  orderReference?: string;
  contract?: string[];
  paymentMeans?: IPaymentMean[];
  prepaidPayment?: IPayment[];
  allowanceCharge?: IAllowanceCharge[];
  tax?: ITax[];
  monetaryTotal: IMonetary;
  invoiceLines: IInvoiceLine['id'][];
  _type: documentTypes;
}

/**
 * Modelo para describir de un documento
 * @name Document
 * @return {object} - Return Documento Model
 */
const invoiceSchema = new Schema({
  invoiceCode: {
    type: codeSchema,
    required: true
  },
  issueDate: {
    type: Date,
    required: true
  },
  dueDate: Date,
  currencyCode: {
    type: Schema.Types.ObjectId,
    ref: OptionTypeModelName
  },
  /** Vendedor que crea el documento */
  sellerParty: partyReferenceSchema,
  customerParty: partyReferenceSchema,
  note: [String],
  period: {
    type: Schema.Types.ObjectId,
    ref: PeriodModelName
  },
  /** Medios de pago previstos */
  paymentMeans: [paymentMeanSchema],
  /** Un pago prepago */
  prepaidPayment: [paymentSchema],
  /**
   * Un descuento o cargo que se aplica a un componente
   * del precio.
   */
  allowanceCharge: [allowanceChargeSchema],
  /**
   * El monto total de un tipo específico de impuesto.
   */
  tax: [taxSchema],
  /**
   * El monto total pagadero en la factura, incluidas
   * las asignaciones, los cargos y los impuestos.
   */
  monetaryTotal: {
    type: monetarySchema,
    required: true
  },
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
