import { NextFunction, Request, Response } from "express";
import response from "../helpers/response";
import exceptions from "../helpers/exceptions";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  return response.errorException(res, exceptions.internalServerError);
};

export default errorHandler;
