import { Decimal128, Schema, Types } from 'mongoose';

export interface IQuantityType extends Document {
  unitCode?: string;
  value?: Decimal128;
}

export const quantityTypeSchema: Schema = new Schema(
  {
    unitCode: { type: String, default: '' },
    value: {
      type: Types.Decimal128,
      default: 0
    }
  },
  {
    _id: false
  }
);

export default quantityTypeSchema;
