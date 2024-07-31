"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const account_controller_1 = __importDefault(require("../../../app/controllers/admin/v1/account.controller"));
const passport_1 = __importDefault(require("passport"));
const validationHandler_1 = __importDefault(require("../../../app/middlewares/validationHandler"));
const account_schema_1 = __importDefault(require("../../../app/schema/admin/account.schema"));
const router = express_1.default.Router();
router.get("/my-profile", passport_1.default.authenticate("jwt", { session: false }), account_controller_1.default.myProfile);
router.put("/update-profile", validationHandler_1.default.validateBody(account_schema_1.default.updateProfileSchema), passport_1.default.authenticate("jwt", { session: false }), account_controller_1.default.updateProfile);
router.put("/change-password", validationHandler_1.default.validateBody(account_schema_1.default.changePasswordSchema), passport_1.default.authenticate("jwt", { session: false }), account_controller_1.default.changePassword);
router.delete("/delete-account", passport_1.default.authenticate("jwt", { session: false }), account_controller_1.default.deleteAccount);
exports.default = router;
