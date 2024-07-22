import { Response } from "express";

const successResponse = (
  res: Response,
  message: string,
  data: {},
  code: number
) => {
  return res.status(code).json({
    status: true,
    message: message,
    data: data,
  });
};

const errorResponse = (
  res: Response,
  message: string,
  error: {},
  code: number
) => {
  return res.status(code).json({
    status: false,
    message: message,
    error: error,
  });
};

const messageResponse = (res: Response, message: string, code: number) => {
  return res.status(code).json({
    status: false,
    message: message,
  });
};

export default {
  successResponse,
  errorResponse,
  messageResponse,
};
