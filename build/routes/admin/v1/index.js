"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const account_routes_1 = __importDefault(require("./account.routes"));
const role_routes_1 = __importDefault(require("./role.routes"));
const permission_routes_1 = __importDefault(require("./permission.routes"));
const router = express_1.default.Router();
router.use("/auth", auth_routes_1.default);
router.use("/users", user_routes_1.default);
router.use("/account", account_routes_1.default);
router.use("/roles", role_routes_1.default);
router.use("/permissions", permission_routes_1.default);
exports.default = router;
