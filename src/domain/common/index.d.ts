import { IPeriod as BasePeriod, PeriodModel } from './models/period/period';

declare module 'common' {
  // imports go inside for augmentation

  export { PeriodModel };
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface IPPeriod extends BasePeriod {}
}
