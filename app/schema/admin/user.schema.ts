import { z } from "zod";
import { dmyDate } from "./account.schema";

const createUserSchema = z
  .object({
    name: z.string({
      invalid_type_error: "Name must be string",
      required_error: "Name is required",
    }),
    email: z
      .string({
        invalid_type_error: "Email must be string",
        required_error: "Email is required",
      })
      .email({
        message: "Invalid email address",
      }),
    password: z
      .string({
        invalid_type_error: "Password must be string",
        required_error: "Password is requried",
      })
      .min(4, {
        message: "Password must be at least 4 characters",
      }),
    passwordConfirm: z.string(),
    dob: dmyDate,
    bio: z.string().max(20).optional(),
    gender: z
      .enum(["male", "female"], {
        message: "Gender mush be male or female",
      })
      .optional(),
    isActive: z.boolean({
      required_error: "Is active is required",
      invalid_type_error: "Is active must be boolean",
    }),
  })
  .refine((args) => args.password === args.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

const updateUserSchema = z
  .object({
    name: z
      .string({
        invalid_type_error: "Name must be string",
      })
      .optional(),
    email: z
      .string({
        invalid_type_error: "Email must be string",
      })
      .email({
        message: "Invalid email address",
      })
      .optional(),
    password: z
      .string({
        invalid_type_error: "Password must be string",
      })
      .min(4, {
        message: "Password must be at least 4 characters",
      })
      .optional(),
    passwordConfirm: z.string(),
    dob: dmyDate,
    bio: z.string().max(20).optional(),
    gender: z
      .enum(["male", "female"], {
        message: "Gender mush be male or female",
      })
      .optional(),
    isActive: z
      .boolean({
        required_error: "Is active is required",
      })
      .optional(),
  })
  .refine((args) => args.password === args.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

export default {
  createUserSchema,
  updateUserSchema,
};
