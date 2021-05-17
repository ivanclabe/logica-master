/**
 * Interfaz para describir un precio
 */
export interface IPrice {
  amount: number;
  /**
   * información sobre una lista de linea
   * de precio aplicable a este precio.
   */
  priceReference?: string;
}
