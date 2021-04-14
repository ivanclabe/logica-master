import { itemCategorySchema } from '../schemas';
import connect from '../../../../config/db.config';

export default connect.model('ItemCategory', itemCategorySchema);
