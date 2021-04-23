import { Schema, Types } from 'mongoose';

export const taxSubtotalSchema: Schema = new Schema({
  /**
   * El importe neto al que se aplica el porcentaje
   * (tasa) de impuestos para calcular el importe del
   * impuesto.
   */
  taxableAmount: {
    type: Types.Decimal128,
    min: 0
  },
  /**
   * Base Imponible sobre la que se calcula el valor
   * del tributo
   */
  taxAmount: {
    type: Types.Decimal128,
    default: 0,
    min: 0
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
export const taxSchema: Schema = new Schema({
  /**
   * Lista de subtotales cuya suma es igual al monto
   * total de impuestos para un esquema de impuestos
   * particular.
   */
  tax_subtotals: [taxSubtotalSchema]
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
