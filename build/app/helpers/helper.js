"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const hashPassword = (password) => bcrypt_1.default.hashSync(password, 10);
const comparePassword = (password, hashPassword) => bcrypt_1.default.compareSync(password, hashPassword);
const generateToken = (userId, expiresIn) => {
    return jsonwebtoken_1.default.sign({
        id: userId,
    }, process.env.JWT_SECRET, { expiresIn: expiresIn || "30d" });
};
exports.default = {
    hashPassword,
    comparePassword,
    generateToken
};
