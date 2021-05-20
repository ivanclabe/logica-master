import Base from '../extends/Base';
import { IItem } from './Item';
import { ILotIdentification } from './LotIdentification';
import { IItemProperty } from './ItemProperty';

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
