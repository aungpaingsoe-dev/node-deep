"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const permission_service_1 = __importDefault(require("../../../services/admin/v1/permission.service"));
const response_1 = __importDefault(require("../../../helpers/response"));
const exceptions_1 = __importDefault(require("../../../helpers/exceptions"));
const getPermissions = async (req, res, next) => {
    try {
        const permissions = await permission_service_1.default.getPermissions();
        return response_1.default.successResponse(res, "Permission list successfully", permissions, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
const getPermission = async (req, res, next) => {
    const { id } = req.params;
    try {
        const existingPermission = await permission_service_1.default.getPermissionById(Number(id));
        if (!existingPermission) {
            return response_1.default.errorException(res, exceptions_1.default.dataNotFound, "Permission not found");
        }
        return response_1.default.successResponse(res, "Permission detail successfully", existingPermission, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
exports.default = {
    getPermissions,
    getPermission,
};
