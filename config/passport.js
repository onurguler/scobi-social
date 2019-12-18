const passport = require('passport');
const passportJWT = require('passport-jwt');

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const config = require('config');
const generator = require('generate-password');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
        .select('-password')
        .then(user => {
          return cb(null, user);
        })
        .catch(err => {
          return cb(err);
        });
    }
  )
);

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: config.get('GOOGLE_CLIENT_ID'),
      clientSecret: config.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: 'http://localhost:5000/api/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, cb) => {
      const googleId = profile.id;
      const verifiedEmail = profile.emails.find(email => email.verified === true) || profile.emails[0];
      const email = verifiedEmail.value;

      try {
        let user = await User.findOneAndUpdate({ $or: [{ googleId }, { email }] }, { googleId });
        let payload, token;

        if (user !== null) {
          payload = {
            user: { id: user.id }
          };

          token = jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 });
          return cb((err = null), { token });
        }

        const name = profile.displayName;
        const avatar = profile.photos[0].value;
        const password = generator.generate({ length: 10, numbers: true });

        user = new User({ googleId: profile.id, name, email, password, avatar });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        payload = {
          user: { id: user.id }
        };

        token = jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 });
        return cb((err = null), { token });
      } catch (err) {
        console.log(err.message);
        return cb(err, (user = null));
      }
    }
  )
);
