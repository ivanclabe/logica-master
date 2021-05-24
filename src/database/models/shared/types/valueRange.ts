import { Schema } from 'mongoose';
import { ValueRange } from '../../../../interfaces/extends/Base';

const ValueRangeSchemaFields: Record<keyof ValueRange, any> = {
  max: Number,
  min: Number
};

export const ValueRangeSchema: Schema = new Schema(ValueRangeSchemaFields, {
  _id: false
});
