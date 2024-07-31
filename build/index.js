"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
require("./app/middlewares/passport/local-strategy");
require("./app/middlewares/passport/jwt-strategy");
// Routes
const routes_1 = __importDefault(require("./routes"));
const errorHandler_1 = __importDefault(require("./app/middlewares/errorHandler"));
const response_1 = __importDefault(require("./app/helpers/response"));
const exceptions_1 = __importDefault(require("./app/helpers/exceptions"));
const port = process.env.PORT || 3030;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: "*" }));
app.use((0, express_session_1.default)({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/api", routes_1.default);
app.use(errorHandler_1.default);
app.get("/", (req, res) => {
    return res.sendFile(path_1.default.join(__dirname, "./public/index.html"));
});
app.get("/docs", (req, res) => {
    return res.sendFile(path_1.default.join(__dirname, "./public/docs.html"));
});
app.use((req, res, next) => {
    if (!req.route)
        return response_1.default.errorException(res, exceptions_1.default.pageNotFound);
    next();
});
server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
