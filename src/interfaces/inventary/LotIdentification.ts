import Base from '../extends/Base';
import { IItemInstance } from './ItemInstance';

export interface ILotIdentification extends Base {
  lotNumber: string;
  /** La fecha de caducidad del lote. */
  expiryDate: Date;
  note?: [string];
  itemInstance: IItemInstance;
}
