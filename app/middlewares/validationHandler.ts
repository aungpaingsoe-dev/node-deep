import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
import response from "../helpers/response";
import exceptions from "../helpers/exceptions";

const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (result.error) {
      console.log(result.error.errors);

      const details = result?.error?.errors.map((error) => {
        return {
          field: error.path[0],
          issue: error.message,
        };
      });

      return response.errorResponse(
        res,
        "Validation error",
        exceptions.errorTypes.validationError,
        details,
        exceptions.statusCodes.BAD_REQUEST
      );
    } else {
      next();
    }
  };
};

const validateParam = (schema: ZodSchema) => {};

const validateQuery = (schema: ZodSchema) => {};

export default {
  validateBody,
  validateParam,
  validateQuery,
};
