import { Schema, Types } from 'mongoose';

import { BaseWithSequenceSchemaFields } from '../constants/BaseSchemaFields';
import { DOCUMENT_NAME as GroupOptionTypeModelName } from '../../common/groupOptionType';

export const taxSubtotalSchema: Schema = new Schema({
  taxableAmount: { type: Types.Decimal128, default: 0 },
  taxAmount: { type: Types.Decimal128, default: 0 },
  percent: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
    get: (v: number) => `${v}%`
  },
  taxCategory: {
    type: Types.ObjectId,
    ref: GroupOptionTypeModelName,
    required: true
  }
});

/**
 * Esquema que describe un esquema de impuestos
 * @name taxSchema
 */
export const taxSchema: Schema = new Schema({
  ...BaseWithSequenceSchemaFields,
  taxSubtotals: [taxSubtotalSchema]
});

/**
 * El monto total de impuestos para un esquema de
 * impuestos particular, por ejemplo, IVA; La suma de
 * los subtotales de impuestos para cada categoría de
 * impuestos dentro del esquema de impuestos.
 * */
taxSchema.virtual('taxAmount').get(function () {
  return 0;
});
