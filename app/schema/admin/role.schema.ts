import { z } from "zod";

const createRoleSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must be string",
    required_error: "Name is required",
  }),
  permissions: z
    .number({
      required_error: "Permission is required",
      invalid_type_error: "Permission must be number array",
    })
    .array()
    .nonempty({
      message: "Permission can't not be empty",
    }),
  isActive: z.boolean({
    required_error: "Is active is required",
    invalid_type_error: "Is active must be boolean",
  }),
});

const updateRoleSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be string",
    })
    .optional(),
  permissions: z
    .number({
      required_error: "Permission is required",
      invalid_type_error: "Permission must be number array",
    })
    .array()
    .optional(),
  isActive: z
    .boolean({
      invalid_type_error: "Is active must be boolean",
    })
    .optional(),
});

export default {
  createRoleSchema,
  updateRoleSchema
};
