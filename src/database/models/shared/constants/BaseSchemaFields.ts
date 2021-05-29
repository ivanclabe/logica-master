import { Schema, Types } from 'mongoose';

import { statusCodeType } from '../../../../interfaces/extends/Base';
import { codeSchema } from '../subdocuments/code';
import { DOCUMENT_NAME as PeriodModelName } from '../../common/period';
import { DOCUMENT_NAME as ItemModelName } from '../../inventary/item';

export const BaseSchemaFields = {
  code: codeSchema,
  statusCode: {
    type: String,
    enum: Object.values(statusCodeType),
    required: true
  },
  UUID: String
};

export const BaseWithSequenceSchemaFields = {
  sequence: { type: Number, min: 0 },
  ...BaseSchemaFields
};

export const BaseMovLineSchemaFields = {
  ...BaseSchemaFields,
  item: {
    type: Schema.Types.ObjectId,
    ref: ItemModelName,
    required: true
  },
  note: [String],
  quantity: { type: Types.Decimal128, required: true },
  lineAmount: { type: Types.Decimal128, required: true }
};

export const BaseMovSchemaFields = {
  ...BaseSchemaFields,
  documentDate: { type: Date, default: Date.now },
  documentPeriod: {
    type: Schema.Types.ObjectId,
    ref: PeriodModelName
  },
  currencyCode: String,
  note: [String]
};

export const BaseQuantitySchemaFields = {
  /** Cantidad Recibida */
  receivedQuantity: { type: Number, min: 0 },

  /** Cantidad Ordenada */
  onOrderQuantity: { type: Number, min: 0 },

  /** Cantidad Enviada */
  shippedQuantity: { type: Number, min: 0 },

  /** Cantidad asignada */
  allocatedQuantity: { type: Number, min: 0 },

  /** Cantidad Pedido de vuelta */
  backOrderedQuantity: { type: Number, min: 0 },

  /** Nivel Inicial */
  initLevelQuantity: { type: Number, min: 0 }
};
