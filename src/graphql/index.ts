import { makeExecutableSchema } from '@graphql-tools/schema';
// import { addResolversToSchema } from '@graphql-tools/schema';
// import { schema as abc } from './schemas';
import resolvers from './resolvers';
import typeDefs from './types';

// Add resolvers to the schema
// export const schemaWithResolvers = addResolversToSchema({
//   schema,
//   resolvers
// });

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
