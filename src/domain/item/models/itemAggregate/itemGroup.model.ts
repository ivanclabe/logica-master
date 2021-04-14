import { itemGroupSchema } from '../schemas';
import connect from '../../../../config/db.config';

export default connect.model('ItemGroup', itemGroupSchema);
