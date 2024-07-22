import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../../../mocks/data";
import { VerifiedCallback } from "passport-jwt";

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done: VerifiedCallback) => {
  try {
    const findUser = mockUsers.find((user) => user.id === id);
    if (!findUser) throw new Error("User not found");
    done(null, findUser);
  } catch (error) {
    done(error, null);
  }
});

export default passport.use(
  new Strategy((username, password, done) => {
    try {
      const findUser = mockUsers.find((user) => user.username === username);
      if (!findUser) throw new Error("User not found");
      if (findUser.password !== password) throw new Error("Invalid Credential");
      done(null, findUser);
    } catch (error) {
      done(error);
    }
  })
);

// Example Used

// index.ts
// import "./app/passport/local-strategy";
// app.use(
//   session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: true,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// router.ts
// router.post("/sign-in", passport.authenticate("local"), authController.signIn);

// controller.ts
// const getUsers = (req, res) => {
// if(!req.user) return throw new Error("Unauthoualized");
//}

// req.logout((error) => {
//   if (error) return res.sendStatus(400);
//   res.send(200);
// });