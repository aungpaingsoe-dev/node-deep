"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../../../prisma/client"));
const getPermissions = async () => {
    const permissions = await client_1.default.permission.findMany();
    return permissions;
};
const getPermissionById = async (id) => {
    const permission = await client_1.default.permission.findUnique({
        where: { id },
        include: {
            roles: {
                select: {
                    role: true
                }
            }
        }
    });
    return permission;
};
exports.default = {
    getPermissions,
    getPermissionById,
};
