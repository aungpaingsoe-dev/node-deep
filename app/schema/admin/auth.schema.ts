import { z } from "zod";

const signInSchema = z.object({
  email: z
    .string({
      message: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  password: z.string({
    message: "Password is requried",
  }),
});

export default {
  signInSchema,
};
