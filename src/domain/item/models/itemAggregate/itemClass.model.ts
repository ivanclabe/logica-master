import { itemClassSchema } from '../schemas';
import connect from '../../../../config/db.config';

export default connect.model('ItemClass', itemClassSchema);
