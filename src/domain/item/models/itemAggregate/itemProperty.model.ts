import { itemPropertySchema } from '../schemas';
import connect from '../../../../config/db.config';

export default connect.model('ItemProperty', itemPropertySchema);
