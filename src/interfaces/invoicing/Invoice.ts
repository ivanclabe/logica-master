import Base from '../extends/Base';
import { IPartyReference } from '../party/PartyReference';
import { IAllowanceCharge } from '../known/AllowanceCharge';
import { ITax } from '../known/Tax';
import { IPayment } from '../known/Payment';
import { IMonetary } from '../known/Monetary';
import { IPaymentMean } from '../party/paymentMean';

import { IPeriod } from '../common/Period';
import { IInvoiceLine } from './InvoiceLine';

export enum invoiceTypes {
  INVOICE = 'invoice',
  ORDER = 'order'
}

/**
 * Interfaz que describe una factura
 */
export interface IInvoice extends Base {
  issueDate: Date;
  dueDate?: Date;
  currencyCode: string;
  sellerParty: IPartyReference;
  customerParty: IPartyReference;
  note?: string[];
  period?: IPeriod;
  orderReference?: string;
  contract?: string[];
  paymentMeans?: IPaymentMean[];

  /** Un pago prepago */
  prepaidPayment?: IPayment[];

  /**
   * Un descuento o cargo que se aplica a un componente
   * del precio.
   */
  allowanceCharge?: IAllowanceCharge[];

  /**
   * El monto total de un tipo específico de impuesto.
   */
  tax?: ITax[];

  /**
   * El monto total pagadero en la factura, incluidas
   * las asignaciones, los cargos y los impuestos.
   */
  monetaryTotal: IMonetary;
  invoiceLines: IInvoiceLine[];
  _type: invoiceTypes;
}
