"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createRoleSchema = zod_1.z.object({
    name: zod_1.z.string({
        invalid_type_error: "Name must be string",
        required_error: "Name is required",
    }),
    permissions: zod_1.z
        .number({
        required_error: "Permission is required",
        invalid_type_error: "Permission must be number array",
    })
        .array()
        .nonempty({
        message: "Permission can't not be empty",
    }),
    isActive: zod_1.z.boolean({
        required_error: "Is active is required",
        invalid_type_error: "Is active must be boolean",
    }),
});
const updateRoleSchema = zod_1.z.object({
    name: zod_1.z
        .string({
        invalid_type_error: "Name must be string",
    })
        .optional(),
    permissions: zod_1.z
        .number({
        required_error: "Permission is required",
        invalid_type_error: "Permission must be number array",
    })
        .array()
        .optional(),
    isActive: zod_1.z
        .boolean({
        invalid_type_error: "Is active must be boolean",
    })
        .optional(),
});
exports.default = {
    createRoleSchema,
    updateRoleSchema
};
