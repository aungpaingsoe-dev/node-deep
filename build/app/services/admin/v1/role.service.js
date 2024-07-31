"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../../../prisma/client"));
const createRole = async (name, permissions, isActive) => {
    const createRole = await client_1.default.role.create({
        data: {
            name,
            isActive,
            permissions: {
                create: permissions,
            },
        },
    });
    return createRole;
};
const updateRole = async (id, name, permissions, isActive) => { };
const getRoles = async () => {
    const roles = client_1.default.role.findMany({
        select: {
            id: true,
            name: true,
            isActive: true,
            permissions: {
                select: {
                    permission: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            },
        },
    });
    return roles;
};
const getRoleById = async (id) => {
    const role = await client_1.default.role.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            isActive: true,
            permissions: {
                select: {
                    permission: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            },
        },
    });
    return role;
};
const getRoleByName = async (name) => {
    const role = await client_1.default.role.findUnique({
        where: { name },
    });
    return role;
};
const deleteRole = async (id) => {
    await client_1.default.role.delete({
        where: {
            id,
        },
    });
};
exports.default = {
    createRole,
    updateRole,
    getRoleById,
    deleteRole,
    getRoles,
    getRoleByName,
};
