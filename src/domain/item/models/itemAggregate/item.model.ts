import { itemSchema } from '../schemas';
import connect from '../../../../config/db.config';

export const IItem = {};

export default connect.model('Item', itemSchema);
