import { z } from "zod";

const signInSchema = z.object({
  email: z
    .string({
      message: "Email must be string",
    })
    .email({
      message: "Invalid email address",
    })
    .nonempty({
      message: "Email is required",
    }),
  password: z
    .string({
      message: "Password must be string",
    })
    .nonempty({
      message: "Password is requried",
    }),
});

export default {
  signInSchema,
};
