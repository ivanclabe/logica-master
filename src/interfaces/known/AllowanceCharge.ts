import Base, { amountType } from '../extends/Base';
import { IOptionType } from '../common/OptionType';

/**
 * Interfaz para describir información sobre un cargo o
 * descuento aplicado a un componente de precio.
 */
export interface IAllowanceCharge extends Base {
  chargeType?: IOptionType;

  /**
   * Un número que indica el orden de esta asignación o
   * cargo en la secuencia de cálculos aplicados cuando hay
   * múltiples asignaciones o cargos. EJ: 1, 2, 3, 4, etc.
   */
  sequence?: number;

  /**
   * Un indicador que describe un cargo (verdadero) o un
   * descuento (falso).
   */
  chargeIndicator: boolean;

  chargeReason?: string[];

  /**
   * Un número por el cual se multiplica el monto base para
   * calcular el monto real de esta asignación o cargo.
   */
  multiplierFactor?: number;

  /**
   * El monto monetario de esta asignación o cargo que se
   * aplicará.
   */
  amount: amountType;

  /**
   * El monto monetario al que se aplica el factor multiplicador
   * al calcular el monto de esta asignación o cargo.
   */
  baseAmount?: amountType;

  /** }
   * La asignación o cargo por artículo; la asignación o cargo
   * total se calcula multiplicando el monto por unidad por la
   * cantidad de artículos, ya sea a nivel de la línea de
   * transacción individual o por el número total de artículos
   * en el documento, según el contexto en el que aparece.
   */
  perUnitAmount: () => number;
}
