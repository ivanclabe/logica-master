import { Schema, Types } from 'mongoose';

export const monetarySchema: Schema = new Schema(
  {
    lineExtensionAmount: {
      type: Types.Decimal128,
      required: true
    },
    taxTotalAmount: {
      type: Types.Decimal128,
      default: 0
    },
    allowanceTotalAmount: {
      type: Types.Decimal128,
      default: 0
    },
    chargeTotalAmount: {
      type: Types.Decimal128,
      default: 0
    },
    prepaidAmount: {
      type: Types.Decimal128,
      default: 0
    },
    totalAmount: {
      type: Types.Decimal128,
      required: true
    }
  },
  { _id: false }
);
