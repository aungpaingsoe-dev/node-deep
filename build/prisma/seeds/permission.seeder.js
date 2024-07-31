"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../client"));
const permissions = [
    "role-list",
    "role-create",
    "role-update",
    "role-delete",
    "permission-list",
    "permission-detail",
    "user-list",
    "user-create",
    "user-update",
    "user-detail",
    "user-delete",
    "post-list",
    "post-create",
    "post-update",
    "post-detail",
    "post-delete",
];
const permissionSeeder = async () => {
    for (let permission of permissions) {
        await client_1.default.permission.upsert({
            where: { name: permission },
            create: {
                name: permission,
            },
            update: {},
        });
    }
    console.log("Permissions seeding successfully");
};
exports.default = permissionSeeder;
