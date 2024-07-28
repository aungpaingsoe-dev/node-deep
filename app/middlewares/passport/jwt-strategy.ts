import {
  ExtractJwt,
  Strategy,
  StrategyOptions,
  VerifiedCallback,
} from "passport-jwt";
import passport from "passport";
import dotenv from "dotenv";
import prisma from "../../../prisma/client";
dotenv.config();

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "@secret123",
};

passport.use(
  new Strategy(opts, async (payload: any, done: VerifiedCallback) => {
    try {
      const findUser = await prisma.user.findUnique({
        where: {
          id: payload?.id,
        },
      });
      if (findUser) {
        return done(null, findUser);
      } else {
        return done(null, false, { message: "Unauthorized" });
      }
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
