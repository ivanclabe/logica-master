import express, { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';

import { schema } from '../graphql/schema';

const userapp = express();
const router = Router();

router.param('id', function (req, res, next, id) {
  console.log('CALLED ONLY ONCE');
  next();
});

router.use(
  '/:id/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
);

userapp.use('/', router);

export default userapp;
