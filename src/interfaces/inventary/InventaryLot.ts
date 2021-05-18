import Base from '../extends/Base';
import { IInventaryLine } from './InventaryLine';
import { IQuantity } from '../known/Quantity';

export interface IInventaryLot extends Base {
  inventaryLine: IInventaryLine;
  lotName: string;
  dueDate: Date;
  note?: [string];
  quantity: IQuantity;
}
