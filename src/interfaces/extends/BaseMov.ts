import Base, { Amount } from './Base';
import { IItem } from '../inventary/Item';
import { IPeriod } from '../common/Period';

export interface BaseMovLine extends Base {
  item: IItem;

  note?: string[];

  /**
   * La cantidad (de items) en esta línea de movimiento.
   */
  quantity: number;

  /**
   * El monto total de esta línea de movimiento,
   * incluidos los cargos por asignación, pero
   * neto de impuestos.
   */
  lineAmount: Amount;
}

export interface BaseMov extends Base {
  /**
   * La fecha, asignada por el remitente, en la
   * que se emitió este documento.
   */
  documentDate: Date;

  /** Un período al que se aplica el movimiento. */
  documentPeriod?: IPeriod;

  /**
   * Un código que indica la moneda predeterminada
   * para este documento.
   */
  currencyCode?: string;

  note?: string[];
}
