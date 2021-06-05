import express, { Request, Response, NextFunction } from 'express';
import { createServer } from 'http';
import passport from 'passport';
import vhost from 'vhost';
import createError from 'http-errors';
import cors from 'cors';
import morgan from 'morgan';

import { rootRouter } from './routes';

const mainapp = express();

// create app that will server user content from public/{username}/
const userapp = express();

userapp.use((req: any, res: Response, next: NextFunction) => {
  const username = req.vhost[0]; // username is the "*"

  // pretend request was for /{username}/* for file serving
  req.originalUrl = req.url;
  req.url = '/' + username + req.url;

  next();
});

// create main app
const app = express();
const port = process.env.PORT || '3000';

app.set('port', port);
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
passport.use(passportMiddleware);

// add vhost routing for main app
app.use(vhost('userpages.local', mainapp));
app.use(vhost('www.userpages.local', mainapp));

// listen on all subdomains for user pages
app.use(vhost('*.localhost', userapp));

// app.use('/api', rootRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

class HttpException extends Error {
  statusCode?: number;
  status?: number;
  message: string;
  error: string | null;

  constructor(statusCode: number, message: string, error?: string) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.error = error || null;
  }
}

// error handler
app.use(
  (err: HttpException, req: Request, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  }
);

const server = createServer(app);
server.listen(port, () => {
  console.log(`Server running at ${port}`);
});

//export default app;
