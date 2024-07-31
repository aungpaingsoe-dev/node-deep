"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const data_1 = require("../../../mocks/data");
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((id, done) => {
    try {
        const findUser = data_1.mockUsers.find((user) => user.id === id);
        if (!findUser)
            throw new Error("User not found");
        done(null, findUser);
    }
    catch (error) {
        done(error, null);
    }
});
exports.default = passport_1.default.use(new passport_local_1.Strategy((username, password, done) => {
    try {
        const findUser = data_1.mockUsers.find((user) => user.username === username);
        if (!findUser)
            throw new Error("User not found");
        if (findUser.password !== password)
            throw new Error("Invalid Credential");
        done(null, findUser);
    }
    catch (error) {
        done(error);
    }
}));
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
