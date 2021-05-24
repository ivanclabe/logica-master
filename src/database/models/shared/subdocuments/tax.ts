import { Schema, Types, Document, Decimal128 } from 'mongoose';

import {
  IOptionType,
  DOCUMENT_NAME as OptionTypeModelName
} from '../../common/groupOptionType';

export interface ITaxSubTotal extends Document {
  taxableAmount?: Decimal128;
  taxAmount: Decimal128;
  percent: number;
  taxCategory: IOptionType;
}

export interface ITax extends Document {
  taxSubtotals: [ITaxSubTotal];
}

export const taxSubtotalSchema: Schema = new Schema({
  /**
   * El importe neto al que se aplica el porcentaje
   * (tasa) de impuestos para calcular el importe del
   * impuesto.
   */
  taxableAmount: {
    type: Types.Decimal128,
    default: 0
  },
  /**
   * Base Imponible sobre la que se calcula el valor
   * del tributo
   */
  taxAmount: {
    type: Types.Decimal128,
    default: 0,
    required: true
  },
  percent: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
    get: (v: number) => `${v}%`
  },
  taxCategory: {
    type: Types.ObjectId,
    ref: OptionTypeModelName,
    required: true
  }
});

/**
 * Esquema que describe un esquema de impuestos
 * @name taxSchema
 * @return {object} - Retorna un Schema
 */
export const taxSchema: Schema = new Schema({
  /**
   * Lista de subtotales cuya suma es igual al monto
   * total de impuestos para un esquema de impuestos
   * particular.
   */
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
