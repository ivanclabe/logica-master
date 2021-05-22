import Base, { GroupOptionType, Amount } from '../extends/Base';
import { IPeriod } from '../common/Period';
import { IPartyReference } from './Party';
import { IAllowanceCharge } from '../common/AllowanceCharge';

export interface IContract extends Base {
  contractType: GroupOptionType;
  contractDate: Date;

  party: IPartyReference;

  /**
   * Un código que indica la moneda predeterminada
   * para este documento.
   */
  currencyCode: GroupOptionType;
  description?: string[];
  validityPeriod?: IPeriod[];

  /**
   * El monto monetario al inicial.
   */
  baseAmount: Amount;

  /**
   * Un descuento o cargo que se aplica a un componente
   * del precio.
   */
  allowanceCharge?: IAllowanceCharge[];

  /**
   * EL monto monetario gastado
   */
  spentAmount: Amount;
}
