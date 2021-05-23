import { Amount } from '../extends/Base';
import { BaseMov, BaseMovLine } from '../extends/BaseMov';
import { IPartyReference } from '../party/Party';
import { IAllowanceCharge } from '../common/AllowanceCharge';
import { ITax } from '../common/Tax';
import { IPayment } from '../common/Payment';
import { IPaymentMean } from '../common/PaymentMean';
import { IPriceListLine } from '../inventary/PriceList';
import { IOrder, IOrderLine } from '../ordering/Order';
import { IContract } from '../party/Contract';

export enum invoiceTypes {
  INVOICE = 'invoice',
  ORDER = 'order'
}

/**
 * Interfaz para describir un precio
 */
export interface Price {
  amount: Amount;

  /**
   * información sobre una lista de linea
   * de precio aplicable a este precio.
   */
  priceReference?: IPriceListLine;
}

/** Interfaz que describe una linea de factura. */
export interface IInvoiceLine extends BaseMovLine {
  invoice: IInvoice;

  /**
   * Una referencia a una línea de pedido asociada
   * con esta línea de factura.
   */
  orderLineReference?: IOrderLine[];

  /**
   * Una asignación o cargo asociado con esta línea
   * de factura
   */
  allowanceCharge?: IAllowanceCharge[];

  /**
   * Un monto total de impuestos de un tipo particular
   * aplicable a esta línea de factura.
   */
  tax?: ITax[];

  /**
   * El precio del artículo o servicio asociado con esta
   * línea de factura.
   */
  price?: Price;
}

/**
 * Interfaz que describe una factura
 */
export interface IInvoice extends BaseMov {
  /** La fecha en la que vence la factura */
  dueDate?: Date;

  sellerParty: IPartyReference;

  customerParty: IPartyReference;

  invoiceType: invoiceTypes;

  /**
   * Una referencia al Pedido al que está asociada esta
   * Factura.
   */
  orderReference?: IOrder[];

  contract?: IContract[];

  /** Medios de pago previstos. */
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

  invoiceLines: IInvoiceLine[];
}
