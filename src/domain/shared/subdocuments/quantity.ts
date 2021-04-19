import { Schema, Types } from 'mongoose';

/**
 *
 * Esquema para describir un conjunto de cantidades
 *
 * @name quantitySchema
 * @description Esquema para describir información
 * sobre un conjunto de cantidades
 * @returns {Schema}
 */
export default new Schema(
  {
    /**
     * Cantidad Recibida
     */
    receivedQuantity: { type: Types.Decimal128, min: 0 },
    /**
     * Cantidad Ordenada
     */
    onOrderQuantity: { type: Types.Decimal128, min: 0 },
    /**
     * Cantidad Enviada
     */
    shippedQuantity: { type: Types.Decimal128, min: 0 },
    /**
     * Cantidad asignada
     */
    allocatedQuantity: { type: Types.Decimal128, min: 0 },
    /**
     * Cantidad Pedido de vuelta
     */
    backOrderedQuantity: { type: Types.Decimal128, min: 0 },
    /**
     * Nivel Inicial
     */
    initLevelQuantity: { type: Types.Decimal128, min: 0 },
    /**
     * Cantidad En Fisico
     * onHand = initLevel + received - shipped
     */
    onHandQuantity: { type: Types.Decimal128, min: 0 },
    /**
     * Cantidad Disponible
     * available = initLevel + received - shipped - allocated
     */
    availableQuantity: { type: Types.Decimal128, min: 0 },
    /**
     * Nivel Actual
     * currentLevel = initLevel + onOrder + received - shipped - allocated - backOrdered
     */
    currentLevelQuantity: { type: Types.Decimal128, min: 0 }
  },
  {
    _id: false
  }
);
