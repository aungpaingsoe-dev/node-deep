"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const account_schema_1 = require("./account.schema");
const createUserSchema = zod_1.z
    .object({
    name: zod_1.z.string({
        invalid_type_error: "Name must be string",
        required_error: "Name is required",
    }),
    email: zod_1.z
        .string({
        invalid_type_error: "Email must be string",
        required_error: "Email is required",
    })
        .email({
        message: "Invalid email address",
    }),
    password: zod_1.z
        .string({
        invalid_type_error: "Password must be string",
        required_error: "Password is requried",
    })
        .min(4, {
        message: "Password must be at least 4 characters",
    }),
    passwordConfirm: zod_1.z.string(),
    dob: account_schema_1.dmyDate,
    bio: zod_1.z.string().max(20).optional(),
    gender: zod_1.z
        .enum(["male", "female"], {
        message: "Gender mush be male or female",
    })
        .optional(),
    isActive: zod_1.z.boolean({
        required_error: "Is active is required",
        invalid_type_error: "Is active must be boolean",
    }),
})
    .refine((args) => args.password === args.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
});
const updateUserSchema = zod_1.z
    .object({
    name: zod_1.z
        .string({
        invalid_type_error: "Name must be string",
    })
        .optional(),
    email: zod_1.z
        .string({
        invalid_type_error: "Email must be string",
    })
        .email({
        message: "Invalid email address",
    })
        .optional(),
    password: zod_1.z
        .string({
        invalid_type_error: "Password must be string",
    })
        .min(4, {
        message: "Password must be at least 4 characters",
    })
        .optional(),
    passwordConfirm: zod_1.z.string(),
    dob: account_schema_1.dmyDate,
    bio: zod_1.z.string().max(20).optional(),
    gender: zod_1.z
        .enum(["male", "female"], {
        message: "Gender mush be male or female",
    })
        .optional(),
    isActive: zod_1.z
        .boolean({
        required_error: "Is active is required",
    })
        .optional(),
})
    .refine((args) => args.password === args.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
});
exports.default = {
    createUserSchema,
    updateUserSchema,
};
