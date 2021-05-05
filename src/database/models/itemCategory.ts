import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

/**
 * Modelo para describir de una Categoria para items
 * @name ItemCategory
 * @return {mongoose.Model}
 */
const itemCategorySchema: Schema = new Schema(
  {
    categoryCode: { type: String, required: true },
    categoryName: { type: String, required: true },
    description: [String]
  },
  {
    collection: 'itemsCategories'
  }
);

export const ItemCategoryModel = connect.model(
  'ItemCategory',
  itemCategorySchema
);
