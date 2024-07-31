import { NextFunction, Request, Response } from "express";
import response from "../../../helpers/response";
import userService from "../../../services/admin/v1/user.service";
import helper from "../../../helpers/helper";
import exceptions from "../../../helpers/exceptions";
import { UserType } from "../../../types";
import prisma from "../../../../prisma/client";
import authService from "../../../services/admin/v1/auth.service";

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userService.getUserByEmail(email);

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

    const signInUser = (await userService.getUserById(
      existingUser.id
    )) as UserType;

    signInUser.token = helper.generateToken(existingUser.id, "30d");
    await authService.createOrUpdateToken(signInUser.id, signInUser.token);

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
