import { Schema, Types } from 'mongoose';

/**
 * @name AllowanceCharge
 * @return {object} - Returna el modelo City
 */
export const allowanceChargeSchema: Schema = new Schema({
  chargeId: {
    type: String,
    required: true
  },
  /**
   * Un indicador de que este AllowanceCharge describe un
   * cargo (verdadero) o un descuento (falso).
   */
  chargeIndicator: {
    type: Boolean,
    required: true
  },
  chargeReason: [String],
  /**
   * Un número por el cual la cantidad base se multiplica
   * para calcular la cantidad real de esta asignación o cargo.
   */
  multiplierFactor: Number,
  /**
   * Un número que indica el orden de esta asignación o
   * cargo en la secuencia de cálculos aplicados cuando hay
   * múltiples asignaciones o cargos. EJ: 1, 2, 3, 4, etc.
   */
  sequenceNumeric: {
    type: Number,
    min: 0
  },
  amount: {
    type: Types.Decimal128,
    required: true,
    default: 0,
    min: 0
  },
  /**
   * El monto monetario al que se aplica el factor multiplicador
   * al calcular el monto de esta asignación o cargo.
   */
  baseAmount: {
    type: Types.Decimal128,
    default: 0,
    min: 0
  },
  /**
   * La asignación o cargo por artículo; la asignación o cargo
   * total se calcula multiplicando el monto por unidad por la
   * cantidad de artículos, ya sea a nivel de la línea de
   * transacción individual o por el número total de artículos
   * en el documento, según el contexto en el que aparece.
   */
  perUnitAmount: {
    type: Types.Decimal128,
    min: 0
  }
});
