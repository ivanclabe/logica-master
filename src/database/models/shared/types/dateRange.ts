import { Schema } from 'mongoose';
import { DateRange } from '../../../../interfaces/extends/Base';

const DateRangeSchemaFields: Record<keyof DateRange, any> = {
  startDate: { type: Date, default: Date.now },
  endDate: Date
};

export const DateRangeSchema: Schema = new Schema(DateRangeSchemaFields, {
  _id: false
});
