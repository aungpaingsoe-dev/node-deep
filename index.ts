import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import path from "path";
import passport from "passport";
import session from "express-session";
import "./app/middlewares/passport/local-strategy";
import "./app/middlewares/passport/jwt-strategy";
// Routes
import router from "./routes";
import errorHandler from "./app/middlewares/errorHandler";
const port = process.env.PORT || 3030;
const app = express();

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/api", router);
app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
