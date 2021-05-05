import { Schema, Types, Document } from 'mongoose';

import amountTypeSchema, { IAmountType } from '../types/amountType';

export interface ITaxSubTotal extends Document {
  taxableAmount: IAmountType;
  taxAmount: IAmountType;
  percent?: number;
  taxCategory: string;
}

export interface ITax extends Document {
  taxSubtotals: [ITaxSubTotal];
}

const taxSubtotalSchema: Schema = new Schema({
  /**
   * El importe neto al que se aplica el porcentaje
   * (tasa) de impuestos para calcular el importe del
   * impuesto.
   */
  taxableAmount: {
    type: amountTypeSchema,
    required: true
  },
  /**
   * Base Imponible sobre la que se calcula el valor
   * del tributo
   */
  taxAmount: {
    type: amountTypeSchema,
    required: true
  },
  percent: {
    type: Number,
    min: 0,
    max: 100,
    get: (v: number) => `${v}%`
  },
  taxCategory: {
    type: Types.ObjectId,
    ref: 'TaxCategory',
    required: true
  }
});

/**
 * Esquema que describe una ciudad
 * @name Tax
 * @return {object} - Returna el modelo City
 */
const taxSchema: Schema = new Schema({
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

export default taxSchema;
