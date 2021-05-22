import Base, { Amount, GroupOptionType } from '../extends/Base';
export interface ITaxSubTotal {
  /**
   * El importe neto al que se aplica el porcentaje
   * (tasa) de impuestos para calcular el importe del
   * impuesto.
   */
  taxableAmount?: Amount;

  /**
   * Base Imponible sobre la que se calcula el valor
   * del tributo
   */
  taxAmount: Amount;
  percent: number;
  taxCategory: GroupOptionType;
}

/**
 * Una interfaz para describir el impuesto total para
 * un esquema tributario particular.
 */
export interface ITax extends Base {
  /**
   * Lista de subtotales cuya suma es igual al monto
   * total de impuestos para un esquema de impuestos
   * particular.
   */
  taxSubtotals: ITaxSubTotal[];

  /**
   * El monto total de impuestos para un esquema de
   * impuestos particular, por ejemplo, IVA; La suma de
   * los subtotales de impuestos para cada categoría de
   * impuestos dentro del esquema de impuestos.
   * */
  taxAmount: () => Amount;
}
