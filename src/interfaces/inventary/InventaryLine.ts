import Base from '../extends/Base';
import { IInventary } from './inventary';
import { IQuantity } from '../known/Quantity';

export interface IInventaryLine extends Base {
  inventary: IInventary;
  quantity: IQuantity;
}
