"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const role_service_1 = __importDefault(require("../../../services/admin/v1/role.service"));
const response_1 = __importDefault(require("../../../helpers/response"));
const exceptions_1 = __importDefault(require("../../../helpers/exceptions"));
const getRoles = async (req, res, next) => {
    try {
        const roles = await role_service_1.default.getRoles();
        return response_1.default.successResponse(res, "Role list successfully", roles, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
const getRole = async (req, res, next) => {
    const { id } = req.params;
    try {
        const role = await role_service_1.default.getRoleById(Number(id));
        if (!role) {
            return response_1.default.errorException(res, exceptions_1.default.dataNotFound, "Role not found");
        }
        return response_1.default.successResponse(res, "Role detail successfully", role, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
const createRole = async (req, res, next) => {
    const { name, permissions, isActive } = req.body;
    try {
        const existingRole = await role_service_1.default.getRoleByName(name);
        if (existingRole) {
            return response_1.default.errorException(res, exceptions_1.default.duplicateName);
        }
        const permissionObjArray = permissions.map((permission) => {
            return {
                permission: {
                    connect: {
                        id: permission,
                    },
                },
            };
        });
        const createRole = await role_service_1.default.createRole(name, permissionObjArray, isActive);
        const newRole = await role_service_1.default.getRoleById(createRole.id);
        return response_1.default.successResponse(res, "Role create successfully", newRole, exceptions_1.default.statusCodes.CREATED);
    }
    catch (error) {
        next(error);
    }
};
const updateRole = async (req, res, next) => {
    const { id } = req.params;
    const { name, permissions, isActive } = req.body;
    try {
        const existingRole = await role_service_1.default.getRoleById(Number(id));
        if (!existingRole) {
            return response_1.default.errorException(res, exceptions_1.default.dataNotFound, "Role not found");
        }
        const updateRole = await role_service_1.default.updateRole(Number(id), name, permissions, isActive);
    }
    catch (error) {
        next(error);
    }
};
const deleteRole = async (req, res, next) => {
    const { id } = req.params;
    try {
        const existingRole = await role_service_1.default.getRoleById(Number(id));
        if (!existingRole) {
            return response_1.default.errorException(res, exceptions_1.default.dataNotFound, "Role not found");
        }
        await role_service_1.default.deleteRole(Number(id));
        return response_1.default.successResponse(res, "Role delete successfully", {}, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
exports.default = {
    getRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole,
};
