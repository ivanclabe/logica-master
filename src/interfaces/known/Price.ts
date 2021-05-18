import { Amount } from '../extends/Base';

/**
 * Interfaz para describir un precio
 */
export interface IPrice {
  amount: Amount;

  /**
   * información sobre una lista de linea
   * de precio aplicable a este precio.
   */
  priceReference?: string;
}
