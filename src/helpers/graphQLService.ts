import { ObjectId } from 'mongodb';
import graphQlPage, {
  fromCursor,
  validator
} from '../utils/graphqlPage';
import graphQlList from '../utils/graphqlList';
import buildQuery from '../utils/buildQuery';

const validateArgs = validator({ min: 5, max: 25 });
const defaultOptions = {
  baseFilter: {},
  loader: {
    foreignId: null
  },
  pagination: {
    first: 10,
    last: 0,
    before: null,
    after: null
  },
  list: {
    sortBy: 'id',
    sortOrder: 'DESC'
  }
};

const mergeObject = (defaultConfig, currentConfig) => {
  return { ...defaultConfig, ...currentConfig };
};

export default class GraphQLService {
  /**
   * @param {Model} model El objeto de modelo predeterminado
   * para el servicio. Será necesario crear una instancia del
   * controlador
   */
  constructor(model) {
    this.model = model;
  }

  async findById(id) {
    const record = await this.model.findById(id);
    if (record === null) {
      throw new Error('Not Found!');
    }
    return record;
  }

  async findAndPaginate(queryArray, options = {}) {
    const { baseFilter, params } = options;
    validateArgs(params);

    let filter = {};

    filter = baseFilter
      ? mergeObject(baseFilter, buildQuery(queryArray))
      : buildQuery(queryArray);

    const {
      first,
      last,
      after,
      before,
      sortBy,
      sortOrder
    } = mergeObject(defaultOptions.pagination, params);
    // const hasCursor = after || before;
    const count = first || last;

    // NOTA: El límite se incrementa en 1 para verificar
    // la página siguiente
    const limit =
      parseInt(count, 10) > 0 ? parseInt(count, 10) + 1 : 0;

    // Orden de control por primera o última dirección
    const order = { _id: `${last ? 'desc' : 'asc'}` };
    if (sortBy && sortOrder) {
      order[sortBy] = sortOrder;
    }

    // Use los cursores antes o después para mover la ventana
    // de consulta
    if (after) {
      filter._id.$gt = ObjectId(fromCursor(after));
    }

    if (before) {
      filter._id.$lt = ObjectId(fromCursor(before));
    }

    console.log(filter);
    const rows = await this.model
      .find(filter)
      .limit(limit)
      .sort(order)
      .exec();

    const hasPreviousPage = before || after;
    let hasNextPage = false;

    if (rows.length > count) {
      rows.pop();
      hasNextPage = true;
    }

    return graphQlPage(rows, {
      hasPreviousPage,
      hasNextPage
    });
  }

  async findAndList(queryArray, options = {}) {
    const { baseFilter, params } = options;

    let filter = {};
    filter = baseFilter
      ? mergeObject(baseFilter, buildQuery(queryArray))
      : buildQuery(queryArray);

    const { sortBy, sortOrder } = mergeObject(
      defaultOptions.list,
      params
    );

    const order = {};
    if (sortBy && sortOrder) {
      order[sortBy] = sortOrder;
    }
    const rows = await this.model.find(filter).sort(order).exet();
    return graphQlList(rows);
  }
}
