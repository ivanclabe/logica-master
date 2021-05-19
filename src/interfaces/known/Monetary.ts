import { Amount } from '../extends/Base';

/**
 * Interfaz para definir un total monetario.
 */
export interface IMonetary {
  /**
   * El monto monetario de una línea de transacción
   * extendida, neto de impuestos y descuentos de
   * liquidación, pero incluye cualquier monto de
   * redondeo aplicable.
   */
  lineExtensionAmount: Amount;

  /**
   * El monto monetario de una línea de transacción
   * extendida, sin incluir impuestos.
   */
  taxExclusiveAmount?: Amount;

  /**
   * El monto monetario incluidos los impuestos; la
   * suma de la cantidad pagadera y la cantidad prepaga.
   */
  taxInclusiveAmount?: Amount;

  /**
   * El monto monetario total de todas las asignaciones.
   */
  allowanceTotalAmount?: Amount;

  /**
   * El monto monetario total de todos los cargos.
   */
  chargeTotalAmount?: Amount;

  /**
   * El monto monetario prepago total.
   */
  prepaidAmount?: Amount;

  /**
   * El monto del total monetario a pagar.
   */
  payableAmount: Amount;
}
