import { makeExecutableSchema } from 'graphql-tools';
import { buildSchema } from 'graphql';

// // Construct a schema, using GraphQL schema language
// export const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // The root provides a resolver function for each API endpoint
// export const root = {
//   hello: () => {
//     return 'Hello world!';
//   }
// };

// The GraphQL schema
export const typeDefs = `
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
export const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world!';
    }
  }
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
