"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../client"));
const roles = ["admin", "user"];
const roleSeeder = async () => {
    const adminPermissions = await client_1.default.permission.findMany();
    const userPermissions = await client_1.default.permission.findMany({
        where: {
            id: {
                in: [7, 10, 12, 13, 14, 15, 16],
            },
        },
    });
    const adminPermissionsObj = adminPermissions.map((permission) => {
        return {
            permission: {
                connect: {
                    id: permission.id,
                },
            },
        };
    });
    const userPermissionsObj = userPermissions.map((permission) => {
        return {
            permission: {
                connect: {
                    id: permission.id,
                },
            },
        };
    });
    for (let role of roles) {
        await client_1.default.role.upsert({
            where: { name: role },
            create: {
                name: role,
                permissions: {
                    create: role === "admin" ? adminPermissionsObj : userPermissionsObj,
                },
            },
            update: {},
        });
    }
    console.log("Roles seeding successfully");
};
exports.default = roleSeeder;
