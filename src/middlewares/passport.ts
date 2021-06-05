// import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jsonwebtoken';

import { UserModel } from '../database/models/users/user';
import configConstants from '../config/constants';

passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getToken = (user: string | Buffer) => {
  return jwt.sign(user, configConstants.secretKey, { expiresIn: 3600 });
};

const strategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: configConstants.secretKey
};

export const jwtPassport = passport.use(
  new JwtStrategy(strategyOptions, async (jwtPayload, done) => {
    console.log('JWT payload: ', jwtPayload);
    try {
      const user = await UserModel.findById(jwtPayload._id);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (error) {
      done(error, false);
    }
  })
);

export const verifyUser = passport.authenticate('jwt', { session: false });

// export const verifyAdmin = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   if (req.user.admin) {
//     next();
//   } else {
//     const err = new Error('You are not authorized to perform this operation!');
//     err.status = 403;
//     return next(err);
//   }
// };
