import { Schema } from 'mongoose';

/**
 * Un esquema para definir un grupo
 * para los items
 *
 * @name ItemGroup
 */
const itemGroupSchema: Schema = new Schema(
  {
    groupName: { type: String, required: true, trim: true }
  },
  {
    collection: 'itemsGroups'
  }
);

export default itemGroupSchema;
