"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const role_controller_1 = __importDefault(require("../../../app/controllers/admin/v1/role.controller"));
const passport_1 = __importDefault(require("passport"));
const validationHandler_1 = __importDefault(require("../../../app/middlewares/validationHandler"));
const role_schema_1 = __importDefault(require("../../../app/schema/admin/role.schema"));
const router = express_1.default.Router();
router
    .route("/")
    .get(passport_1.default.authenticate("jwt", { session: false }), role_controller_1.default.getRoles)
    .post(passport_1.default.authenticate("jwt", { session: false }), validationHandler_1.default.validateBody(role_schema_1.default.createRoleSchema), role_controller_1.default.createRole);
router
    .route("/:id")
    .get(role_controller_1.default.getRole)
    .put(passport_1.default.authenticate("jwt", { session: false }), validationHandler_1.default.validateBody(role_schema_1.default.updateRoleSchema), role_controller_1.default.updateRole)
    .delete(passport_1.default.authenticate("jwt", { session: false }), role_controller_1.default.deleteRole);
exports.default = router;
