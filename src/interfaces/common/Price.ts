import { Amount } from '../extends/Base';
import { IPriceListLine } from '../inventary/PriceList';

/**
 * Interfaz para describir un precio
 */
export interface IPrice {
  amount: Amount;

  /**
   * información sobre una lista de linea
   * de precio aplicable a este precio.
   */
  priceReference?: IPriceListLine;
}
