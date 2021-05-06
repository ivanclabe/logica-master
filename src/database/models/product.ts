import { Schema, Document, model } from 'mongoose';

import { IItem, ItemModel } from './item';

export const DOCUMENT_NAME = 'Product';
export const COLLECTION_NAME = 'products';

export interface IProduct extends IItem {
  productIdentification: [];
  packQuantity: number;
  brandName: [string];
  modelName: [string];
}

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

export const ProductModel = ItemModel.discriminator<IProduct>(
  'ProductItem',
  productSchema
);
