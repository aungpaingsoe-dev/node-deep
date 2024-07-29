import { NextFunction, Request, Response } from "express";
import response from "../../../helpers/response";
import userService from "../../../services/admin/v1/userService";
import helper from "../../../helpers/helper";
import exceptions from "../../../helpers/exceptions";
import { UserType } from "../../../types/user";

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userService.findUserByEmail(email);

    if (!existingUser) {
      return response.errorException(res, exceptions.emailNotFound);
    }

    const comparePassword = helper.comparePassword(
      password,
      existingUser.password
    );

    if (!comparePassword) {
      return response.errorException(res, exceptions.incorrectPassword);
    }

    const signInUser = (await userService.findUserById(
      existingUser.id
    )) as UserType;
    signInUser.token = helper.generateToken(existingUser.id, "30d");

    return response.successResponse(
      res,
      "Sign in successfully",
      {
        signInUser,
      },
      exceptions.statusCodes.OK
    );
  } catch (error) {
    next(error);
  }
};

const signOut = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
};

export default {
  signIn,
  signOut,
};
