import { Response } from "express";

interface errorDetail {
  field: string;
  issue: string;
}

export interface errorResponseType {
  status: boolean;
  message: string;
  type: string;
  details?: errorDetail[];
  code: number;
}

export interface successResponseType {
  status: boolean;
  message: string;
  data: any;
  code: number;
}

const successResponse = (
  res: Response,
  message: string,
  data: any,
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
  type: any,
  details: object[],
  code: number
) => {
  return res.status(code).json({
    status: false,
    message: message,
    type: type,
    details: details,
  });
};

const errorException = (
  res: Response,
  exception: errorResponseType,
  message?: string,
  details?: errorDetail
) => {
  return res.status(exception.code).json({
    status: exception.status,
    message: message || exception.message,
    type: exception.type,
    details: details || exception.details,
  });
};

export default {
  successResponse,
  errorResponse,
  errorException,
};
