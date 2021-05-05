import { Schema, Types, Document, Decimal128 } from 'mongoose';

export interface IQuantity extends Document {
  receivedQuantity: Decimal128;
  onOrderQuantity: Decimal128;
  shippedQuantity: Decimal128;
  allocatedQuantity: Decimal128;
  backOrderedQuantity: Decimal128;
  initLevelQuantity: Decimal128;
  onHandQuantity: Decimal128;
  availableQuantity: Decimal128;
  currentLevelQuantity: Decimal128;
}

/**
 *
 * Esquema para describir un conjunto de cantidades
 *
 * @name quantitySchema
 * @description Esquema para describir información
 * sobre un conjunto de cantidades
 * @returns {Schema}
 */
const quantitySchema: Schema = new Schema(
  {
    /**
     * Cantidad Recibida
     */
    receivedQuantity: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * Cantidad Ordenada
     */
    onOrderQuantity: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * Cantidad Enviada
     */
    shippedQuantity: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * Cantidad asignada
     */
    allocatedQuantity: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * Cantidad Pedido de vuelta
     */
    backOrderedQuantity: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * Nivel Inicial
     */
    initLevelQuantity: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * Cantidad En Fisico
     * onHand = initLevel + received - shipped
     */
    onHandQuantity: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * Cantidad Disponible
     * available = initLevel + received - shipped - allocated
     */
    availableQuantity: {
      type: Types.Decimal128,
      default: 0
    },
    /**
     * Nivel Actual
     * currentLevel = initLevel + onOrder + received - shipped - allocated - backOrdered
     */
    currentLevelQuantity: {
      type: Types.Decimal128,
      default: 0
    }
  },
  {
    _id: false
  }
);

export default quantitySchema;
