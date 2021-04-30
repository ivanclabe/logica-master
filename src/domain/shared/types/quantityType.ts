import { Decimal128, Schema, Types } from 'mongoose';

interface IQuantityType extends Document {
  unitCode?: string;
  value?: Decimal128;
}

/**
 * @name quantityTypeSchema
 */
export default new Schema(
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

export { IQuantityType };
