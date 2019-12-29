const passport = require("passport");
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = passportJWT.Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const config = require("config");
const generator = require("generate-password");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Profile = require("../models/Profile");
const { generateUniqueUsername } = require("../utils/utils");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, cb) {
      //Assume there is a DB module pproviding a global UserModel
      return User.findOne({ email, password })
        .then(user => {
          if (!user) {
            return cb(null, false, { message: "Incorrect email or password." });
          }

          return cb(null, user, {
            message: "Logged In Successfully"
          });
        })
        .catch(err => {
          return cb(err);
        });
    }
  )
);

passport.use(
  "jwt",
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromHeader("x-auth-token"),
      secretOrKey: config.get("jwtSecret")
    },
    (jwtPayload, cb) => {
      return User.findOne({ _id: jwtPayload.user.id })
        .select("-password")
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
  "google",
  new GoogleStrategy(
    {
      clientID: config.get("GOOGLE_CLIENT_ID"),
      clientSecret: config.get("GOOGLE_CLIENT_SECRET"),
      callbackURL: "http://scobi.social/api/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, cb) => {
      const googleId = profile.id;
      const verifiedEmail = profile.emails.find(email => email.verified === true) || profile.emails[0];
      const email = verifiedEmail.value;

      try {
        let user = await User.findOneAndUpdate({ $or: [{ googleId }, { email }] }, { googleId });

        if (user !== null) return cb((err = null), user);

        const name = profile.displayName;
        const avatar = profile.photos[0].value;
        const password = await generator.generate({ length: 10, numbers: true });
        let username = email.substring(0, email.lastIndexOf("@"));
        username = await generateUniqueUsername(username);

        user = new User({
          googleId: profile.id,
          name,
          username,
          email,
          password,
          avatar
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        const profileDb = new Profile({
          user: user.id
        });

        await profileDb.save();

        await user.save();

        return cb((err = null), user);
      } catch (err) {
        console.log(err.message);
        return cb(err, (user = null));
      }
    }
  )
);

// @TODO: username register
passport.use(
  "facebook",
  new FacebookStrategy(
    {
      clientID: config.get("FACEBOOK_APP_ID"),
      clientSecret: config.get("FACEBOOK_APP_SECRET"),
      callbackURL: "https://scobi-social.herokuapp.com/api/auth/facebook/callback",
      profileFields: ["id", "emails", "name", "displayName", "photos", "username"] //This
    },
    async (accessToken, refreshToken, profile, cb) => {
      const facebookId = profile.id;
      console.log(profile);
      const email = profile.emails[0].value;

      try {
        let user = await User.findOneAndUpdate({ $or: [{ facebookId }, { email }] }, { facebookId });

        if (user !== null) return cb((err = null), user);

        const name = profile.displayName;
        const avatar = profile.photos[0].value;
        const password = generator.generate({ length: 10, numbers: true });
        const username = await generateUniqueUsername(email.substring(0, email.lastIndexOf("@")));

        user = new User({
          facebookId: profile.id,
          username,
          name,
          email,
          password,
          avatar
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        return cb((err = null), user);
      } catch (err) {
        console.log(err.message);
        return cb(err, (user = null));
      }
    }
  )
);
