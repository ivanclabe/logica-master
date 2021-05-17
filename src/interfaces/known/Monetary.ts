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
  lineExtensionAmount: number;
  /**
   * El monto monetario de una línea de transacción
   * extendida, sin incluir impuestos.
   */
  taxExclusiveAmount?: number;
  /**
   * El monto monetario incluidos los impuestos; la
   * suma de la cantidad pagadera y la cantidad prepaga.
   */
  taxInclusiveAmount?: number;
  /**
   * El monto monetario total de todas las asignaciones.
   */
  allowanceTotalAmount?: number;
  /**
   * El monto monetario total de todos los cargos.
   */
  chargeTotalAmount?: number;
  /**
   * El monto monetario prepago total.
   */
  prepaidAmount?: number;
  /**
   * El monto del total monetario a pagar.
   */
  payableAmount: number;
}
