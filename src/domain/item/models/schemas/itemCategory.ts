import { Schema } from 'mongoose';

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

export default itemCategorySchema;
