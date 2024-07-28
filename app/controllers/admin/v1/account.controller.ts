import { Request, Response, NextFunction } from "express";
import response from "../../../helpers/response";
import prisma from "../../../../prisma/client";
import { User } from "@prisma/client";

const myProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.user as User;
    const getProfile = await prisma.user.findUnique({
      where: { email },
    });
    
    return response.successResponse(
      res,
      "Profile detail successfully",
      getProfile,
      200
    );
  } catch (error) {
    next(error);
  }
};

const updateProfile = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error: any) {
    next(error);
  }
};

const changePassword = (req: Request, res: Response) => {};

const deleteAccount = (req: Request, res: Response) => {};

export default {
  myProfile,
  updateProfile,
  changePassword,
  deleteAccount,
};
