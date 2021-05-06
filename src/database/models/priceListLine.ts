import { Schema, Document, model, Types, Decimal128 } from 'mongoose';

import { IPriceList, DOCUMENT_NAME as PriceListModelName } from './priceList';
import {
  IAllowanceCharge,
  allowanceChargechema
} from './subdocuments/allowanceCharge';

export const DOCUMENT_NAME = 'PriceListLine';
export const COLLECTION_NAME = 'pricesListsLines';

export interface IPriceListLine extends Document {
  priceList: IPriceList['id'];
  item: string;
  baseAmount: Decimal128;
  allowanceCharges: IAllowanceCharge;
  amount: Decimal128;
}

const priceListLineSchema: Schema = new Schema({
  priceList: {
    type: Schema.Types.ObjectId,
    ref: PriceListModelName,
    required: true
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  },
  baseAmount: {
    type: Types.Decimal128,
    default: 0
  },
  /**
   * Una asignación o cargo asociado con este
   * precio.
   */
  allowanceCharges: [allowanceChargechema],
  amount: {
    type: Types.Decimal128,
    default: 0
  }
});

export const PriceListLineModel = model<IPriceListLine>(
  DOCUMENT_NAME,
  priceListLineSchema,
  COLLECTION_NAME
);
