import express from 'express';
import passport from 'passport';

import { jwtPassport } from '../middlewares/passport';

const mainapp = express();

mainapp.use(passport.initialize());
passport.use(jwtPassport);

mainapp.use((req, res) => {
  res.status(200);
  res.send('mainapp!');
  res.end();
});

export default mainapp;
