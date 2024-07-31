"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const client_1 = __importDefault(require("../client"));
const helper_1 = __importDefault(require("../../app/helpers/helper"));
const userSeeder = async () => {
    for (let i = 0; i < 50; i++) {
        const email = faker_1.faker.internet.email();
        const name = faker_1.faker.person.fullName();
        const password = helper_1.default.hashPassword("password");
        await client_1.default.user.upsert({
            where: { email },
            update: {},
            create: {
                name,
                email,
                password,
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
                                    id: 2,
                                },
                            },
                        },
                    ],
                },
            },
        });
    }
    console.log("Users seeding successfully");
};
exports.default = userSeeder;
