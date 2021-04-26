import { Schema } from 'mongoose';

import { amountType } from '../types';

/**
 * @name monetarySchema
 * @description Esquema para describir información
 * sobre un precio
 * @returns {Schema}
 */
export const schema: Schema = new Schema(
  {
    /**
     * El monto monetario de una línea de transacción
     * extendida, neto de impuestos y descuentos de
     * liquidación, pero incluye cualquier monto de
     * redondeo aplicable.
     */
    lineExtensionAmount: {
      type: amountType.schema,
      required: true
    },
    /**
     * El monto monetario de una línea de transacción
     * extendida, sin incluir impuestos.
     */
    taxExclusiveAmount: {
      type: amountType.schema,
      required: true
    },
    /**
     * El monto monetario incluidos los impuestos;
     * la suma de la cantidad pagadera y la cantidad
     * prepaga.
     */
    taxInclusiveAmount: {
      type: amountType.schema,
      required: true
    },
    /**
     * El monto monetario total de todas las asignaciones.
     */
    allowanceTotalAmount: {
      type: amountType.schema,
      required: true
    },
    /**
     * El monto monetario total de todos los cargos.
     */
    chargeTotalAmount: {
      type: amountType.schema,
      required: true
    },
    /**
     * El monto monetario prepago total.
     */
    prepaidAmount: {
      type: amountType.schema,
      required: true
    },
    /**
     * El monto de redondeo (positivo o negativo)
     * agregado para producir el monto de extensión
     * de línea.
     */
    payableRoundingAmount: {
      type: amountType.schema,
      required: true
    },
    /**
     * El monto del total monetario a pagar.
     */
    payableAmount: {
      type: amountType.schema,
      required: true
    }
  },
  { _id: false }
);
