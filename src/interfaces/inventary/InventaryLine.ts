import { IInventary } from './inventary';
import { ICode } from '../common/Code';
import { IQuantity } from '../known/Quantity';

export interface IInventaryLine {
  lineCode: ICode;
  inventary: IInventary;
  quantity: IQuantity;
}
