import { IInventaryLine } from './InventaryLine';
import { ICode } from '../common/Code';
import { IQuantity } from '../known/Quantity';

export interface IInventaryLot {
  lotCode: ICode;
  inventaryLine: IInventaryLine;
  lotName: string;
  dueDate: Date;
  note?: [string];
  quantity: IQuantity;
}
