import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import path from "path";
import http from "http";
import passport from "passport";
import session from "express-session";
import "./app/middlewares/passport/local-strategy";
import "./app/middlewares/passport/jwt-strategy";

// Routes
import router from "./routes";
import errorHandler from "./app/middlewares/errorHandler";
import response from "./app/helpers/response";
import exceptions from "./app/helpers/exceptions";

const port = process.env.PORT || 3030;
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin : "*" }));

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

app.get("/docs", (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, "./public/docs.html"));
});

app.use((req: Request, res: Response, next: NextFunction) => {
  if (!req.route) return response.errorException(res,exceptions.pageNotFound);
  next();
});

server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
