import { Schema } from 'mongoose';

import { statusCodeType } from '../../../../interfaces/extends/Base';
import { codeSchema } from '../subdocuments/code';
import { DOCUMENT_NAME as PeriodModelName } from '../../common/period';
import { DOCUMENT_NAME as GroupOptionTypeModelName } from '../../common/groupOptionType';
import { monetarySchema } from '../subdocuments/monetary';

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

export const BaseMovSchemaFields = {
  ...BaseSchemaFields,
  documentDate: { type: Date, default: Date.now },
  documentPeriod: {
    type: Schema.Types.ObjectId,
    ref: PeriodModelName
  },
  currencyCode: {
    type: Schema.Types.ObjectId,
    ref: GroupOptionTypeModelName,
    required: true
  },
  note: [String],
  monetaryTotal: {
    type: monetarySchema,
    required: true
  }
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
