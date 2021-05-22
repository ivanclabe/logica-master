import Base, { Amount } from '../extends/Base';

/**
 * Interfaz para describir un pago.
 */
export interface IPayment extends Base {
  paidDate: Date;
  paidAmount: Amount;
}
