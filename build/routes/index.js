"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_1 = __importDefault(require("./admin/v1"));
const v1_2 = __importDefault(require("./frontend/v1"));
const router = express_1.default.Router();
router.use("/admin/v1", v1_1.default);
router.use("/frontend/v1", v1_2.default);
exports.default = router;
