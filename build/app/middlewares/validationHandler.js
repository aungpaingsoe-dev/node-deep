"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../helpers/response"));
const exceptions_1 = __importDefault(require("../helpers/exceptions"));
const validateBody = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (result.error) {
            const details = result?.error?.errors.map((error) => {
                return {
                    field: error.path[0],
                    issue: error.message,
                };
            });
            return response_1.default.errorResponse(res, "Validation error", exceptions_1.default.errorTypes.validationError, details, exceptions_1.default.statusCodes.BAD_REQUEST);
        }
        else {
            next();
        }
    };
};
const validateParam = (schema) => { };
const validateQuery = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.query);
        if (result.error) {
            const details = result?.error?.errors.map((error) => {
                return {
                    field: error.path[0],
                    issue: error.message,
                };
            });
            return response_1.default.errorResponse(res, "Validation error", exceptions_1.default.errorTypes.validationError, details, exceptions_1.default.statusCodes.BAD_REQUEST);
        }
        else {
            next();
        }
    };
};
exports.default = {
    validateBody,
    validateParam,
    validateQuery,
};
