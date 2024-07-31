"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dmyDate = void 0;
const zod_1 = require("zod");
exports.dmyDate = zod_1.z
    .string({
    invalid_type_error: "Dob must be string",
})
    .refine((val) => {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    if (!regex.test(val))
        return false;
    const [day, month, year] = val.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return (date.getDate() === day &&
        date.getMonth() === month - 1 &&
        date.getFullYear() === year);
}, {
    message: "Invalid date format. Expected format: dd-mm-yyyy",
})
    .optional();
const updateProfileSchema = zod_1.z.object({
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
    isActive: zod_1.z
        .boolean({
        invalid_type_error: "Is active must be boolean",
    })
        .optional(),
    dob: exports.dmyDate,
    bio: zod_1.z
        .string({
        message: "Bio must be string",
    })
        .optional(),
    gender: zod_1.z
        .enum(["male", "female"], {
        message: "Gender mush be male or female",
    })
        .optional(),
});
const changePasswordSchema = zod_1.z
    .object({
    currentPassword: zod_1.z
        .string({
        invalid_type_error: "Current password must be string",
        required_error: "Current password is required",
    })
        .nonempty({
        message: "Current password is not be empty",
    }),
    newPassword: zod_1.z
        .string({
        invalid_type_error: "New password must be string",
        required_error: "Current password is required",
    })
        .nonempty({
        message: "New password is not be empty",
    }),
    newPasswordConfirm: zod_1.z
        .string({
        invalid_type_error: "New password confirm must be string",
        required_error: "New password confirm is required",
    })
        .nonempty({
        message: "New passwrod confirm is not be empty",
    }),
})
    .refine((args) => args.newPassword === args.newPasswordConfirm, {
    message: "New passwords do not match",
    path: ["newPasswordConfirm"],
});
exports.default = {
    updateProfileSchema,
    changePasswordSchema,
};
