import { Request, Response } from "express";
import response from "../../../helpers/response";
import prisma from "../../../../prisma/client";

const myProfile = async (req: Request, res: Response) => {
  try {
    
    const getProfile = await prisma.user.findUnique({
      where: {},
    });

  } catch (error: any) {
    return response.errorResponse(
      res,
      "Internal server error",
      { error: error.message },
      500
    );
  }
};

const updateProfile = (req: Request, res: Response) => {};

const changePassword = (req: Request, res: Response) => {};

const deleteAccount = (req: Request, res: Response) => {};

export default {
  myProfile,
  updateProfile,
  changePassword,
  deleteAccount,
};
