import { Schema } from 'mongoose';

import { DocumentModel } from '../../../shared/discriminators/document';
import {
  allowanceCharge,
  monetary,
  payment,
  tax
} from '../../../shared/subdocuments';

const invoiceSchema: Schema = new Schema({
  invoiceNumber: [
    {
      /** Tipo de codigo de factura */
      invoiceSequenceIdentifier: {
        type: Schema.Types.ObjectId,
        ref: 'InvoiceNumber',
        required: true
      },
      /** Indica el codigo de factura */
      value: { type: String, required: true }
    }
  ],
  /** Vendedor que crea el documento */
  sellerParty: {
    type: Schema.Types.ObjectId,
    ref: 'EmployeeParty',
    required: true
  },
  customerParty: {
    type: Schema.Types.ObjectId,
    ref: 'CustomerParty',
    required: true
  },
  /** Medios de pago previstos */
  paymentMeans: {},
  /** Un pago prepago */
  prepaidPayment: [payment.schema],
  /**
   * Un descuento o cargo que se aplica a un componente
   * del precio.
   */
  allowanceCharge: [allowanceCharge.schema],
  /**
   * El monto total de un tipo específico de impuesto.
   */
  taxTotal: [tax.schema],
  /**
   * El monto total pagadero en la factura, incluidas
   * las asignaciones, los cargos y los impuestos.
   */
  legalMonetaryTotal: {
    type: monetary.schema,
    required: true
  },
  /** Describe un artículo de factura. */
  invoiceLine: [
    {
      type: Schema.Types.ObjectId,
      ref: 'InvoiceLine',
      required: true
    }
  ]
});

export const InvoiceModel = DocumentModel.discriminator(
  'Invoice',
  invoiceSchema
);
