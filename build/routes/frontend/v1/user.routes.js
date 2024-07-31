"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../../../app/controllers/admin/v1/user.controller"));
const router = express_1.default.Router();
router.route("/").get(user_controller_1.default.getUsers).post(user_controller_1.default.createUser);
router
    .route("/:id")
    .get(user_controller_1.default.getUser)
    .put(user_controller_1.default.updateUser)
    .delete(user_controller_1.default.deleteUser);
exports.default = router;
