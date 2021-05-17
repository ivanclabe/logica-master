import { Schema, Document, Types, Decimal128 } from 'mongoose';

export interface IMonetary extends Document {
  lineExtensionAmount: Decimal128;
  taxExclusiveAmount: Decimal128;
  taxInclusiveAmount: Decimal128;
  allowanceTotalAmount: Decimal128;
  chargeTotalAmount: Decimal128;
  prepaidAmount: Decimal128;
  payableRoundingAmount: Decimal128;
  payableAmount: Decimal128;
}

/**
 * @name monetarySchema
 * @description Esquema para describir información
 * sobre un precio
 * @returns {Schema}
 */
export const monetarySchema: Schema = new Schema(
  {
    /**
     * El monto monetario de una línea de transacción
     * extendida, neto de impuestos y descuentos de
     * liquidación, pero incluye cualquier monto de
     * redondeo aplicable.
     */
    lineExtensionAmount: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * El monto monetario de una línea de transacción
     * extendida, sin incluir impuestos.
     */
    taxExclusiveAmount: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * El monto monetario incluidos los impuestos;
     * la suma de la cantidad pagadera y la cantidad
     * prepaga.
     */
    taxInclusiveAmount: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * El monto monetario total de todas las asignaciones.
     */
    allowanceTotalAmount: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * El monto monetario total de todos los cargos.
     */
    chargeTotalAmount: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * El monto monetario prepago total.
     */
    prepaidAmount: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * El monto de redondeo (positivo o negativo)
     * agregado para producir el monto de extensión
     * de línea.
     */
    payableRoundingAmount: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * El monto del total monetario a pagar.
     */
    payableAmount: {
      type: Types.Decimal128,
      default: 0
    }
  },
  { _id: false }
);
