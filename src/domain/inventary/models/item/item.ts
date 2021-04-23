import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

/**
 * Modelo para describir de un Item
 *
 * @name Item
 * @return {object} - Return Item Model
 */
const itemSchema: Schema = new Schema(
  {
    longName: [
      {
        type: String,
        trim: true,
        required: [true, 'Name field is required']
      }
    ],
    shortName: [
      {
        type: String,
        trim: true,
        required: [true, 'Name field is required']
      }
    ],
    description: [String],
    measureUnit: { type: Schema.Types.ObjectId, ref: 'OperSetting' },
    /**
     * La unidad de cantidad de embalaje;
     * El número de subunidades que componen este elemento.
     */
    packQuantity: Number,
    sellersItemIdentification: { sellersItemCode: String },
    standardItemIdentification: [{ standardItemCode: String }],
    keyword: [String],
    brandName: [String],
    modelName: [String],
    itemGroup: {
      type: Schema.Types.ObjectId,
      ref: 'ItemGroup'
    },
    itemClass: {
      type: Schema.Types.ObjectId,
      ref: 'ItemClass'
    },
    itemCategories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ItemCategory'
      }
    ],
    additionalItemProperties: [
      {
        property: {
          type: Schema.Types.ObjectId,
          ref: 'ItemProperty'
        },
        value: String
      }
    ]
  },
  {
    collection: 'items'
  }
);

export const ItemModel = connect.model('Item', itemSchema);
