import Base from '../extends/Base';
import { IItem, IItemProperty } from './Item';

export interface ILotIdentification extends Base {
  lotNumber: string;
  /** La fecha de caducidad del lote. */
  expiryDate: Date;
  note?: string[];
  itemInstance: IItemInstance;
}

/**
 * Una interfaz para describir una instancia específica
 * y rastreable de un artículo.
 * */
export interface IItemInstance extends Base {
  productTraceID: string;
  item: IItem;
  /** La fecha en la que se fabricó esta instancia de artículo. */
  manufactureDate?: Date;
  additionalItemProperty?: IItemProperty[];
  lotIdentification: ILotIdentification;
}
