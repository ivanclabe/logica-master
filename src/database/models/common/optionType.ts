import { Schema, Document, model } from 'mongoose';

import { ICode, codeSchema } from '../shared/subdocuments/code';

export const DOCUMENT_NAME = 'OptionType';
export const COLLECTION_NAME = 'options_types';

export enum optionTypesType {
  CHARGE_TYPE = 'chargeType',
  CURRENCY_TYPE = 'currencyType',
  DOCUMENT_TYPE = 'documentType',
  IDENTIFICATION_TYPE = 'identificationType',
  PAYMENT_MEAN = 'paymentMean',
  PAYMENT_METHOD = 'paymentMethod',
  PRICELIST_TYPE = 'priceListType',
  TAX_TYPE = 'taxType',
  TAX_LEVEL = 'taxLevel',
  TAX_RATE = 'taxRate',
  MEASURE_UNIT = 'measureUnit'
}

export interface IOptionType extends Document {
  order: number;
  optionCode: ICode;
  optionName: string;
  description: string[];
  defaultValue: boolean;
  _type: optionTypesType;
}

/**
 * Modelo para discriminar recursos
 * operacionales
 */
const optionTypeSchema = new Schema({
  order: { type: Number, min: 0 },
  optionCode: codeSchema,
  optionName: {
    type: String,
    trim: true,
    required: true
  },
  description: [String],
  defaultValue: { type: Boolean, default: false },
  _type: {
    type: String,
    enum: Object.values(optionTypesType),
    required: true
  }
});

export const OptionTypeModel = model<IOptionType>(
  DOCUMENT_NAME,
  optionTypeSchema,
  COLLECTION_NAME
);
