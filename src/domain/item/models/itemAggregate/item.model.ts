import { itemSchema } from '../schemas';
import connect from '../../../../config/db.config';

export default connect.model('Item', itemSchema);
