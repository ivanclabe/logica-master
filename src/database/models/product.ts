import { Schema } from 'mongoose';

import { ItemModel } from '../../domain/shared/discriminators/item';

/**
 * Modelo para describir de un Item
 *
 * @name Item
 * @return {object} - Return Item Model
 */
const productSchema: Schema = new Schema({
  productIdentification: [
    {
      productSequenceIdentifier: {
        type: Schema.Types.ObjectId,
        ref: 'ProductIdentifier',
        required: true
      },
      productIdentifierCode: { type: String, required: true }
    }
  ],
  measureUnit: { type: Schema.Types.ObjectId, ref: 'OperSetting' },
  /**
   * La unidad de cantidad de embalaje;
   * El número de subunidades que componen este elemento.
   */
  packQuantity: Number,
  brandName: [String],
  modelName: [String],
  productsGroups: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ItemGroup'
    }
  ],
  productsClasses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ItemClass'
    }
  ],
  productsCategories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ItemCategory'
    }
  ]
});

export const ProductModel = ItemModel.discriminator(
  'ProductItem',
  productSchema
);
