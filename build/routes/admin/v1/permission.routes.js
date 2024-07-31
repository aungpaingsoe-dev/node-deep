"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const permission_controller_1 = __importDefault(require("../../../app/controllers/admin/v1/permission.controller"));
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
router
    .route("/")
    .get(passport_1.default.authenticate("jwt", { session: false }), permission_controller_1.default.getPermissions);
router
    .route("/:id")
    .get(passport_1.default.authenticate("jwt", { session: false }), permission_controller_1.default.getPermission);
exports.default = router;
