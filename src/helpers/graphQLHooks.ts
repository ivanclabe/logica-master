import { ObjectId } from 'mongodb';
import Base64URL from 'base64-url';

const paginationOptions = {
  first: 10,
  last: 0,
  before: null,
  after: null
};

const pageCustomLabels = {
  // Page
  totalCount: 'totalCount',
  edges: 'edges',
  pageInfo: 'pageInfo',
  // pageInfo
  hasPreviousPage: 'hasPreviousPage',
  hasNextPage: 'hasNextPage',
  startCursor: 'startCursor',
  endCursor: 'endCursor'
};

const listCustomLabels = {
  totalCount: 'totalCount',
  nodes: 'nodes',
  successful: 'successful'
};

/**
 * Una función de carga una matriz de claves y devuelve un
 * objecto estructurando para consultas.
 */
const _buildFilter = array => {
  const buildFilterLine = (operator, value) => {
    switch (operator) {
      // Logical Query Operators
      case 'AND':
        // (a = 5) AND (b = 6)
        return { $and: [] };
      case 'NOT':
        return { $not: [] };
      case 'NOR':
        return { $nor: [] };
      case 'OR':
        // # (someAttribute = 5) OR (someAttribute = 6)
        return { $or: [] };
      // # Comparison Query Operators
      case 'EQ':
        // # = 3
        return { $eq: value };
      case 'NE':
        // # != 20
        return { $ne: value };
      case 'GT':
        // # > 6
        return { $gt: value };
      case 'GTE':
        // # >= 6
        return { $gte: value };
      case 'LT':
        // # < 10
        return { $lt: value };
      case 'LTE':
        // # <= 10
        return { $lte: value };
      case 'IN':
        //  # IN [1, 2]
        return { $in: value };
      case 'NIN':
        // # NOT IN [1, 2]
        return { $nin: value };
      case 'BTW':
        // # BETWEEN 6 AND 10
        // eslint-disable-next-line no-case-declarations
        const [startValue, endValue] = value;
        return { $gte: startValue, $lte: endValue };
      case 'NBW':
        //  # NOT BETWEEN 11 AND 15
        // eslint-disable-next-line no-case-declarations
        const [lowerThanValue, greaterThanValue] = value;
        return { $lt: lowerThanValue, $gt: greaterThanValue };
      // # Other operators
      case 'LIKE':
        // # LIKE '/hat/'
        return `/${value}/`;
      case 'NOT_LIKE':
        // # NOT LIKE '/hat/'
        return `/${value}/`;
      case 'STARTS_WITH':
        // # STARTS_WITH '/^hat/'
        return `/^${value}/`;
      case 'ENDS_WITH':
        // # ENDS_WITH '/hat^/'
        return `/${value}^/`;
      case 'SUBSTRING':
        // # SUBSTRING '/hat/i'
        return `/${value}/i`;
      default:
        throw new Error('Operator not found');
    }
  };
  return array.reduce((queryMap, { field, operator, value }) => {
    const queryLine = buildFilterLine(operator, value);
    if (field) {
      /**
       * [
       *   { field: "someAttribute", operator: "ne", value: "ok!" },
       *   { field: "otherAttribute", operator: "gt", value: 2 },
       *   ...
       *   {}
       * ]
       */
      if (!(field in Object(queryMap))) {
        queryMap[field] = queryLine;
        /**
         * Finally,
         * {
         *   someAttribute: { [Op.ne]: "ok!" },
         *   otherAttribute: { [Op.gt]: 2 }
         * }
         */
      } else {
        queryMap[field] = {
          ...queryMap[field],
          ...queryLine
        };
        /**
         * Finally,
         * {
         *   someAttribute: { [Op.ne]: "ok!", [Op.gt]: 2 }
         * }
         */
      }
    } else {
      /**
       * If, field => null
       * then,
       * [
       *   {
       *     operator: "AND",
       *     value: [ {}, {}, ...{} ]
       *   },
       *   {}
       *   ...
       * ]
       */
      if (operator !== 'AND' || operator !== 'OR') {
        throw new Error('"Operator" must be AND or OR');
      }

      const [keyObject] = Object.keys(queryLine);
      queryMap[keyObject] = _buildFilter(queryLine[keyObject]);

      /**
       * If, field => null
       * then,
       * [
       *   {
       *     operator: "AND",
       *     value: [ {}, {}, ...{} ]
       *   },
       *   {}
       *   ...
       * ]
       */
    }
    return queryMap;
  }, {});
};

/**
 * Convierte un objecto a formato JSON
 */
const _toJSON = record => {
  return typeof record.toJSON === 'function'
    ? record.toJSON()
    : record;
};

/** Utils */
export const toCursor = value => {
  return Base64URL.encode(value.toString());
};

export const fromCursor = string => {
  const value = Base64URL.decode(string);
  if (value) {
    return value;
  } else {
    return null;
  }
};

/*  Main Functions */
export const setQueryOptions = (filterArray, params) => {
  const filter = _buildFilter(filterArray) || {};
  const { first, last, after, before, sortBy, sortOrder } = {
    ...paginationOptions,
    ...params
  };

  // NOTA: El límite se incrementa en 1 para verificar
  // la página siguiente
  const count = first || last;
  const limit = parseInt(count, 10) > 0 ? parseInt(count, 10) + 1 : 0;

  // Orden de control por primera o última dirección
  const order = { _id: `${last ? 'desc' : 'asc'}` };
  if (sortBy) {
    order[sortBy] = sortOrder || 'desc';
  }

  // Use los cursores antes o después para mover la ventana
  // de consulta
  if (after) {
    filter._id.$gt = ObjectId(fromCursor(after));
  }

  if (before) {
    filter._id.$lt = ObjectId(fromCursor(before));
  }

  return { filter, count, limit, order };
};

export const useList = items => {
  const list = {};

  list[listCustomLabels.totalCount] = items.length;
  list[listCustomLabels.nodes] = items;
  list[listCustomLabels.successful] = true;

  return list;
};

export const useCursorPagination = (
  items,
  { count, before, after }
) => {
  const hasPreviousPage = before || after;
  let hasNextPage = false;

  if (items.length > count) {
    items.pop();
    hasNextPage = true;
  }

  const page = {};

  page[pageCustomLabels.totalCount] = items.length;
  page[pageCustomLabels.edges] = items.map(node => {
    return {
      node: node,
      cursor: toCursor(_toJSON(node).id)
    };
  });

  const firstItem = items[0];
  const lastItem = items[items.length - 1];
  const pageInfo = {};

  pageInfo[pageCustomLabels.hasNextPage] = !!hasNextPage;
  pageInfo[pageCustomLabels.hasPreviousPage] = !!hasPreviousPage;
  pageInfo[pageCustomLabels.startCursor] = firstItem
    ? toCursor(_toJSON(firstItem).id)
    : null;
  pageInfo[pageCustomLabels.endCursor] = lastItem
    ? toCursor(_toJSON(lastItem).id)
    : null;

  page[pageCustomLabels.pageInfo] = pageInfo;

  return page;
};

export const useOne = item => {
  if (item === null) {
    throw new Error('Not Found!');
  }
  return item;
};
