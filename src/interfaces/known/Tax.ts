import { ICode } from '../common/Code';
import { IOptionType } from '../common/OptionType';

export interface ITaxSubTotal {
  /**
   * El importe neto al que se aplica el porcentaje
   * (tasa) de impuestos para calcular el importe del
   * impuesto.
   */
  taxableAmount?: number;
  /**
   * Base Imponible sobre la que se calcula el valor
   * del tributo
   */
  taxAmount: number;
  percent: number;
  taxCategory: IOptionType;
}

/**
 * Una interfaz para describir el impuesto total para
 * un esquema tributario particular.
 */
export interface ITax {
  taxCode: ICode;
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
  taxAmount: () => number;
}
