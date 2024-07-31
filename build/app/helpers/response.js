"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const successResponse = (res, message, data, code) => {
    return res.status(code).json({
        status: true,
        message: message,
        data: data,
    });
};
const errorResponse = (res, message, type, details, code) => {
    return res.status(code).json({
        status: false,
        message: message,
        type: type,
        details: details,
    });
};
const errorException = (res, exception, message) => {
    return res.status(exception.code).json({
        status: exception.status,
        message: message || exception.message,
        type: exception.type,
        details: exception.details,
    });
};
exports.default = {
    successResponse,
    errorResponse,
    errorException
};
