import express from 'express';
import createError from 'http-errors';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import mainapp from './subapp/main.app';
import userapp from './subapp/user.app';

// // import setClientDB from './middlewares/setclientdb';
// import HttpException from './helpers/HttpException';
// import { schema } from './graphql/schema';

// create main app
const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);
app.use(morgan('combined'));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/main', mainapp);
app.use('/user', userapp);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req, res: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
