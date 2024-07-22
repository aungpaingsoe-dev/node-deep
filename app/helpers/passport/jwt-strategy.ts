import {
  ExtractJwt,
  Strategy,
  StrategyOptions,
  VerifiedCallback,
} from "passport-jwt";
import passport from "passport";
import { mockUsers } from "../../../mocks/data";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string,
};

passport.use(
  new Strategy(opts, async (payload: any, done: VerifiedCallback) => {
    try {
      const findUser = mockUsers.find((user) => user.id === payload.id);
      if (findUser) return done(null, findUser);
    } catch (error) {
      return done(error);
    }
  })
);

// Example used

// index.ts
// import "./app/helpers/passport/jwt-strategy";
// app.use(passport.initialize());
// app.use(passport.session());

// router.ts
// router.get("/users", passport.authenticate("local"), userController.getUsers);
