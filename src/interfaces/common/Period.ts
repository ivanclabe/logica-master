import Base from '../extends/Base';

export interface IPeriod extends Base {
  startDate?: Date;
  endDate?: Date;
  description?: [string];
}
