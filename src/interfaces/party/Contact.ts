import Base from '../extends/Base';

export interface IContact extends Base {
  name: string;
  email?: string;
  phone?: string;
  note?: string[];
}
