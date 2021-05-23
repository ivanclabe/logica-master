import Base from '../extends/Base';
import { IOrder } from './Order';

export interface IOrderCancellation extends Base {
  /**
   * El motivo general de anulación del pedido referenciado.
   */
  cancellationNote?: string[];

  /**
   * Una referencia a la cancelación del pedido.
   * Si bien se permiten múltiples referencias,
   * se considera una mejor práctica cancelar solo
   * un pedido en cada documento de cancelación de
   * pedidos.
   */
  orderReference: IOrder[];
}
