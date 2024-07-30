import { Request, Response, NextFunction } from "express";
import response from "../../../helpers/response";
import exceptions from "../../../helpers/exceptions";
import userService from "../../../services/admin/v1/user.service";
import prisma from "../../../../prisma/client";
import { UserType } from "../../../types";
import helper from "../../../helpers/helper";
import accountService from "../../../services/admin/v1/account.service";

const myProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user as UserType;
    const getProfile = await userService.getUserById(id);

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
  const user = req.user as UserType;
  const { name, email, isActive, dob, gender, bio } = req.body;

  try {
    const authUser = (await userService.getUserByEmail(user.email, {
      profile: true,
    })) as UserType;

    await prisma.user.upsert({
      where: { id: authUser.id },
      update: {
        name,
        email,
        isActive,
        profile: {
          update: {
            dob,
            bio,
            gender,
          },
        },
      },
      create: {
        name: authUser.name,
        email: authUser.name,
        password: authUser.password,
        isActive: authUser.isActive,
        profile: {
          create: {
            dob: authUser.profile.dob,
            bio: authUser.profile.bio,
            gender: authUser.profile.gender,
          },
        },
      },
    });

    const updateProfile = await userService.getUserById(user.id);

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

const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as UserType;
  const { currentPassword, newPassword } = req.body;
  try {
    const comparePassword = helper.comparePassword(
      currentPassword,
      user.password
    );
    
    if (!comparePassword) {
      return response.errorException(res, exceptions.incorrectPassword);
    }

    const updateUserPassword = await accountService.changePassword(
      user.id,
      helper.hashPassword(newPassword)
    );

    return response.successResponse(
      res,
      "Change user password successfully",
      updateUserPassword,
      exceptions.statusCodes.OK
    );
  } catch (error: any) {
    next(error);
  }
};

const deleteAccount = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error: any) {
    next(error);
  }
};

export default {
  myProfile,
  updateProfile,
  changePassword,
  deleteAccount,
};
