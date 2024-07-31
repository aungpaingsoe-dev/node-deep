"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../helpers/response"));
const exceptions_1 = __importDefault(require("../helpers/exceptions"));
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    return response_1.default.errorException(res, exceptions_1.default.internalServerError);
};
exports.default = errorHandler;
