"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../../../prisma/client"));
const createOrUpdateToken = async (userId, token) => {
    const now = new Date();
    const expirationDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    const iosExpirationDate = expirationDate.toISOString();
    await client_1.default.token.upsert({
        where: { userId: userId },
        create: {
            userId: userId,
            token: token,
            expiredAt: iosExpirationDate,
        },
        update: {
            token: token,
            expiredAt: iosExpirationDate,
        },
    });
};
exports.default = {
    createOrUpdateToken,
};
