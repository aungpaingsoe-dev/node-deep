import { NextFunction, Request, Response } from "express";
import response from "../../../helpers/response";
import exceptions from "../../../helpers/exceptions";

const getMedias = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error: any) {
    return response.errorException(res, exceptions.internalServerError);
  }
};

const getMedia = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error: any) {
    return response.errorException(res, exceptions.internalServerError);
  }
};

const createMedia = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error: any) {
    return response.errorException(res, exceptions.internalServerError);
  }
};

const updateMedia = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error: any) {
    return response.errorException(res, exceptions.internalServerError);
  }
};

const deleteMedia = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error: any) {
    return response.errorException(res, exceptions.internalServerError);
  }
};

export default {
  getMedias,
  getMedia,
  deleteMedia,
  createMedia,
  updateMedia,
};
