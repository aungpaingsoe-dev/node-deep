"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../../../prisma/client"));
const changePassword = async (userId, password) => {
    const updateUserPassword = await client_1.default.user.update({
        where: { id: userId },
        data: {
            password,
        },
        select: {
            id: true,
            name: true,
            email: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,
            profile: true,
        },
    });
    return updateUserPassword;
};
exports.default = {
    changePassword,
};
