import { Schema } from 'mongoose';

import connect from '../../../../config/db.config';

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

export const ItemGroupModel = connect.model('ItemGroup', itemGroupSchema);
