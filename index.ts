import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import path from "path";
import passport from "passport";
import session from "express-session";
import "./app/helpers/passport/local-strategy";
import "./app/helpers/passport/jwt-strategy";
// Routes
import router from "./routes";
const prisma = new PrismaClient();
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

app.get("/", (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
