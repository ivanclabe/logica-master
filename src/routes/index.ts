import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';

import { schema } from '../graphql';
// import { VerifyTokenAndGetUser } from '../middlewares/_auth';
// import * as graphQLHooks from '../helpers/graphQLHooks';

const logRouter = Router();
const rootRouter = Router();

// rootRouter.use(corsWithOptions);
// rootRouter.options((req: Request, res: Response) => res.sendStatus(200));

rootRouter.use(
  '/graphql',
  // VerifyTokenAndGetUser,
  graphqlHTTP({
    schema,
    graphiql: true,
    context: {
      // user: req.user,
      // graphQLHooks
    },
    pretty: true
  })
);

export { logRouter, rootRouter };
