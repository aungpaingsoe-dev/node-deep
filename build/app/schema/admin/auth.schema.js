"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const signInSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        message: "Email must be string",
    })
        .email({
        message: "Invalid email address",
    })
        .nonempty({
        message: "Email is required",
    }),
    password: zod_1.z
        .string({
        message: "Password must be string",
    })
        .nonempty({
        message: "Password is requried",
    }),
});
exports.default = {
    signInSchema,
};
