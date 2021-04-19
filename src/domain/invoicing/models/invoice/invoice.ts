import { Schema } from 'mongoose';

import DocumentModel from '../../../shared/discriminators/document';
import { monetarySchema } from '../../../shared/subdocuments';

const invoiceSchema: Schema = new Schema({
  invoiceCode: [
    {
      /** Tipo de codigo de factura */
      sequenceCode: {
        type: Schema.Types.ObjectId,
        ref: 'Sequence',
        required: true
      },
      /** Indica el codigo de factura */
      sequenceValue: { type: String, required: true }
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
  prepaidPayment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Payment'
    }
  ],
  /**
   * Un descuento o cargo que se aplica a un componente
   * del precio.
   */
  allowanceCharge: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Charge'
    }
  ],
  /**
   * El monto total de un tipo específico de impuesto.
   */
  taxTotal: [
    {
      type: Schema.Types.ObjectId,
      ref: 'TaxTotal'
    }
  ],
  /**
   * El monto total pagadero en la factura, incluidas
   * las asignaciones, los cargos y los impuestos.
   */
  legalMonetaryTotal: {
    type: monetarySchema,
    required: true
  },
  /** Describe un artículo de factura. */
  invoiceLine: {
    type: Schema.Types.ObjectId,
    ref: 'InvoiceLine',
    required: true
  }
});

export const InvoiceModel = DocumentModel.discriminator(
  'Invoice',
  invoiceSchema
);