import { Request, Response, NextFunction } from "express";
import response from "../../../helpers/response";
import { UserType } from "../../../types";
import exceptions from "../../../helpers/exceptions";
import userService from "../../../services/admin/v1/user.service";

const myProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.user as UserType;
    const getProfile = await userService.findUserByEmail(email, { profile : true });

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
