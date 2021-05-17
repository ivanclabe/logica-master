import { IPeriod } from './Period';

export interface IRange {
  minimumValue: number;
  maximumValue: number;
}

export interface ISequenceIdentifier {
  identifierCode?: string;
  identifierName: string;
  prefix?: string;
  description?: string[];
  valueRange: IRange;
  isMainIdentifier?: boolean;
  validPeriod?: IPeriod[];
}
