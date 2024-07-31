"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../../../app/controllers/admin/v1/auth.controller"));
const auth_schema_1 = __importDefault(require("../../../app/schema/admin/auth.schema"));
const validationHandler_1 = __importDefault(require("../../../app/middlewares/validationHandler"));
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
router.post("/sign-in", validationHandler_1.default.validateBody(auth_schema_1.default.signInSchema), auth_controller_1.default.signIn);
router.post("/sign-out", passport_1.default.authenticate("jwt", { session: false }), auth_controller_1.default.signOut);
exports.default = router;
