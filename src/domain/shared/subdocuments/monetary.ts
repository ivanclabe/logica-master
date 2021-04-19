import { Types, Schema } from 'mongoose';

/**
 *
 * Esquema para describir una precio
 *
 * @name monetarySchema
 * @description Esquema para describir información
 * sobre un precio
 * @returns {Schema}
 */
export default new Schema(
  {
    /**
     * El monto monetario de una línea de transacción
     * extendida, neto de impuestos y descuentos de
     * liquidación, pero incluye cualquier monto de
     * redondeo aplicable.
     */
    lineExtensionAmount: {
      type: Types.Decimal128,
      min: 0
    },
    /**
     * El monto monetario de una línea de transacción
     * extendida, sin incluir impuestos.
     */
    taxExclusiveAmount: {
      type: Types.Decimal128,
      min: 0
    },
    /**
     * El monto monetario incluidos los impuestos;
     * la suma de la cantidad pagadera y la cantidad
     * prepaga.
     */
    taxInclusiveAmount: {
      type: Types.Decimal128,
      min: 0
    },
    /**
     * El monto monetario total de todas las asignaciones.
     */
    allowanceTotalAmount: {
      type: Types.Decimal128,
      min: 0
    },
    /**
     * El monto monetario total de todos los cargos.
     */
    chargeTotalAmount: {
      type: Types.Decimal128,
      min: 0
    },
    /**
     * El monto monetario prepago total.
     */
    prepaidAmount: {
      type: Types.Decimal128,
      min: 0
    },
    /**
     * El monto de redondeo (positivo o negativo)
     * agregado para producir el monto de extensión
     * de línea.
     */
    payableRoundingAmount: {
      type: Types.Decimal128,
      min: 0
    },
    /**
     * El monto del total monetario a pagar.
     */
    payableAmount: {
      type: Types.Decimal128,
      min: 0,
      required: true
    }
  },
  { _id: false }
);
