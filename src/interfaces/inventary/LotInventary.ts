import Base from '../extends/Base';
import { IInventaryLine } from './InventaryLine';
import { ILotIdentification } from './LotIdentification';
import { IQuantity } from '../known/Quantity';

export interface ILotInventary extends Base {
  inventaryLine: IInventaryLine;
  lotIdentification: ILotIdentification;
  quantity: IQuantity;
}
