import Base, { Amount, GroupOptionType } from './Base';
import { IItem } from '../inventary/Item';
import { IPeriod } from '../../database/models/common/period';

/**
 * Interfaz para definir un total monetario.
 */
export interface Monetary {
  /**
   * El monto monetario de una línea de transacción
   * extendida, neto de impuestos y descuentos de
   * liquidación, pero incluye cualquier monto de
   * redondeo aplicable.
   */
  lineExtensionAmount: Amount;

  /**
   * El monto monetario incluidos los impuestos
   */
  taxTotalAmount?: Amount;

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
  totalAmount: Amount;
}

export interface BaseMovLine extends Base {
  item: IItem;

  /**
   * La cantidad (de items) en esta línea de movimiento.
   */
  invoicedQuantity: number;

  /**
   * El monto total de esta línea de movimiento,
   * incluidos los cargos por asignación, pero
   * neto de impuestos.
   */
  lineAmount: Amount;

  note?: string[];
}

export interface BaseMov extends Base {
  /**
   * La fecha, asignada por el remitente, en la
   * que se emitió este documento.
   */
  documentDate: Date;

  /** Un período al que se aplica la factura. */
  documentPeriod?: IPeriod;

  /**
   * Un código que indica la moneda predeterminada
   * para este documento.
   */
  currencyCode: GroupOptionType;

  note?: string[];

  /**
   * El monto total pagadero en la factura, incluidas
   * las asignaciones, los cargos y los impuestos.
   */
  monetaryTotal: Monetary;
}