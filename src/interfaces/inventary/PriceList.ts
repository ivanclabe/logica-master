import Base from '../extends/Base';
import { IPeriod } from '../common/Period';

/**
 * Una clase para describir una lista de precios.
 */
export interface IPriceList extends Base {
  listName: string;
  /**
   * Un período durante el cual esta lista de
   * precios es válida.
   */
  validPeriod?: IPeriod[];
}