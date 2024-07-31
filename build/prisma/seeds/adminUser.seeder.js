"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = __importDefault(require("../../app/helpers/helper"));
const client_1 = __importDefault(require("../client"));
const users = [
    {
        name: "Super Admin",
        email: "superadmin@gmail.com",
        password: helper_1.default.hashPassword("@dminPass"),
    },
    {
        name: "User",
        email: "user@gmail.com",
        password: helper_1.default.hashPassword("@dminPass"),
    }
];
const adminUserSeeder = async () => {
    for (let user of users) {
        await client_1.default.user.upsert({
            where: { email: user.email },
            create: {
                name: user.name,
                email: user.email,
                password: user.password,
                profile: {
                    create: {
                        dob: null,
                        gender: null,
                        bio: null,
                    },
                },
                roles: {
                    create: [
                        {
                            role: {
                                connect: {
                                    id: user.email === "superadmin@gmail.com" ? 1 : 2,
                                },
                            },
                        },
                    ],
                },
            },
            update: {},
        });
    }
    console.log("Admin users seeding successfully");
};
exports.default = adminUserSeeder;
