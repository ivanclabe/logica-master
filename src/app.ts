import express from 'express';
import connect from 'connect';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import vhost from 'vhost';
import createError from 'http-errors';

import { jwtPassport } from './middlewares/passport';
// import setClientDB from './middlewares/setclientdb';
import HttpException from './helpers/HttpException';
import { schema } from './graphql/schema';

const vhostt = (hostname: any, app: any) => (req: any, res: any, next: any) => {
  const host = req.headers.host.split('.')[0];
  if (host === hostname) {
    return app(req, res, next);
  } else {
    next();
  }
};

const mainapp = express();

// create app that will server user content from public/{username}/
const app = express();
// userapp.use((req: any, res, next) => {
//   const username = req.vhost[0]; // username is the "*"

//   console.log(username);

//   // pretend request was for /{username}/* for file serving
//   req.originalUrl = req.url;
//   req.url = '/' + username + req.url;

//   next();
// });

const server = new ApolloServer({ schema });
server.applyMiddleware({ app, path: '/:user/graphql' });

// create main app
// const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);
app.use(morgan('combined'));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
passport.use(jwtPassport);

// app.use(setClientDB);

// add vhost routing for main app
app.use(vhost('userpages.local', mainapp));
app.use(vhost('www.userpages.local', mainapp));

// listen on all subdomains for user pages
// app.use(vhost('*.localhost', userapp));

// app.use('/', (req, res) => {
//   res.status(200);
//   res.send('Hello!');
//   res.end();
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((err: HttpException, req: any, res: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const httpServer = createServer(app);
httpServer.listen({ port: PORT }, (): void => {
  console.log(
    `🚀 Server ready at http://test.localhost:${PORT}${server.graphqlPath}`
  );
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
