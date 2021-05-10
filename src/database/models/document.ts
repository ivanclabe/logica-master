import { Schema, Document, model } from 'mongoose';

import {
  IPartyReference,
  partyReferenceSchema
} from './subdocuments/partyReference';
import { ICode, codeSchema } from './subdocuments/code';
import {
  IAllowanceCharge,
  allowanceChargeSchema
} from './subdocuments/allowanceCharge';
import { ITax, taxSchema } from './subdocuments/tax';
import { IPayment, paymentSchema } from './subdocuments/payment';
import { IMonetary, monetarySchema } from './subdocuments/monetary';
import { IPaymentMean, paymentMeanSchema } from './subdocuments/paymentMean';

import { COLLECTION_NAME as PeriodModelName, IPeriod } from './period';
import { COLLECTION_NAME as OptionTypeModelName } from './optionType';
import { IDocumentLine } from './documentLine';

export const DOCUMENT_NAME = 'Document';
export const COLLECTION_NAME = 'documents';

export enum documentTypes {
  INVOICE = 'invoice',
  ORDER = 'order'
}

export interface IDocument extends Document {
  documentCode: ICode;
  issueDate: Date;
  dueDate?: Date;
  currencyCode: string;
  providerParty: IPartyReference;
  sellerParty: IPartyReference;
  customerParty: IPartyReference;
  note: [string];
  documentPeriod: IPeriod['id'];
  paymentMeans?: IPaymentMean;
  prepaidPayment?: IPayment;
  allowanceCharge?: IAllowanceCharge;
  taxTotal?: ITax;
  legalMonetaryTotal: IMonetary;
  documentLines: IDocumentLine['id'];
  _type: documentTypes;
}

/**
 * Modelo para describir de un documento
 * @name Document
 * @return {object} - Return Documento Model
 */
const documentSchema = new Schema({
  documentCode: {
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
  providerParty: partyReferenceSchema,
  /** Vendedor que crea el documento */
  sellerParty: partyReferenceSchema,
  customerParty: partyReferenceSchema,
  note: [String],
  documentPeriod: [
    {
      type: Schema.Types.ObjectId,
      ref: PeriodModelName
    }
  ],
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
  taxTotal: [taxSchema],
  /**
   * El monto total pagadero en la factura, incluidas
   * las asignaciones, los cargos y los impuestos.
   */
  legalMonetaryTotal: {
    type: monetarySchema,
    required: true
  },
  /** Describe un artículo de factura. */
  documentLines: [
    {
      type: Schema.Types.ObjectId,
      ref: 'InvoiceLine',
      required: true
    }
  ],
  _type: {
    type: String,
    enum: Object.values(documentTypes),
    required: true
  }
});

export const DocumentModel = model<IDocument>(
  DOCUMENT_NAME,
  documentSchema,
  COLLECTION_NAME
);
