const passport = require('passport');
const passportJWT = require('passport-jwt');

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;

const config = require('config');

const User = require('../models/User');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    function(email, password, cb) {
      //Assume there is a DB module pproviding a global UserModel
      return User.findOne({ email, password })
        .then(user => {
          if (!user) {
            return cb(null, false, { message: 'Incorrect email or password.' });
          }

          return cb(null, user, {
            message: 'Logged In Successfully'
          });
        })
        .catch(err => {
          return cb(err);
        });
    }
  )
);

passport.use(
  'jwt',
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromHeader('x-auth-token'),
      secretOrKey: config.get('jwtSecret')
    },
    (jwtPayload, cb) => {
      return User.findOne({ _id: jwtPayload.user.id })
        .then(user => {
          return cb(null, user);
        })
        .catch(err => {
          return cb(err);
        });
    }
  )
);
