import { Request, Response, NextFunction } from "express";
import response from "../../../helpers/response";
import exceptions from "../../../helpers/exceptions";
import userService from "../../../services/admin/v1/userService";
import { User } from "@prisma/client";
import prisma from "../../../../prisma/client";

const myProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user as User;
    const getProfile = await userService.findUserById(id);

    return response.successResponse(
      res,
      "Profile detail successfully",
      getProfile,
      exceptions.statusCodes.OK
    );
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user as User;
  const { name, email, isActive, dob, gender, bio } = req.body;
  try {
    const authUser = (await userService.findUserByEmail(user.email, {
      profile: true,
    })) as User;

    const updateProfile = await prisma.user.upsert({
      where: { id: authUser.id },
      update: { name, email, isActive },
      create: {
        name: authUser.name,
        email: authUser.name,
        password: authUser.password,
        isActive: authUser.isActive,
        profile: {
          create: {
          
          }
        }
      },
    });

    return response.successResponse(
      res,
      "Profile update successfully",
      updateProfile,
      exceptions.statusCodes.OK
    );
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
