import { ICode } from '../common/Code';

/**
 * Interfaz para describir un pago.
 */
export interface IPayment {
  paymentCode: ICode;
  paidDate: Date;
  paidAmount: number;
}
