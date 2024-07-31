"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../../../app/controllers/admin/v1/user.controller"));
const passport_1 = __importDefault(require("passport"));
const validationHandler_1 = __importDefault(require("../../../app/middlewares/validationHandler"));
const user_schema_1 = __importDefault(require("../../../app/schema/admin/user.schema"));
const router = express_1.default.Router();
router
    .route("/")
    .get(passport_1.default.authenticate("jwt", { session: false }), user_controller_1.default.getUsers)
    .post(passport_1.default.authenticate("jwt", { session: false }), validationHandler_1.default.validateBody(user_schema_1.default.createUserSchema), user_controller_1.default.createUser);
router
    .route("/:id")
    .get(passport_1.default.authenticate("jwt", { session: false }), user_controller_1.default.getUser)
    .put(passport_1.default.authenticate("jwt", { session: false }), validationHandler_1.default.validateBody(user_schema_1.default.updateUserSchema), user_controller_1.default.updateUser)
    .delete(passport_1.default.authenticate("jwt", { session: false }), user_controller_1.default.deleteUser);
exports.default = router;
