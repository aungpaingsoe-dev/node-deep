import { Request, Response } from "express";
import response from "../../../helpers/response";
import userService from "../../../services/admin/v1/user.service";
import helper from "../../../helpers/helper";
import jwt from "jsonwebtoken";

const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userService.findUserByEmail(email);
    
    if (!existingUser) {
      return response.errorResponse(
        res,
        "Unauthorized",
        { email: "User is not exist" },
        401
      );
    }

    const comparePassword = helper.comparePassword(
      password,
      existingUser.password
    );

    if (!comparePassword) {
      return res.status(400).json({
        status: false,
        message: "Unauthorized",
        error: {
          password: "Password does not match",
        },
      });
    }

    return response.successResponse(
      res,
      "Sign in successfully",
      {
        token: jwt.sign(
          {
            id: existingUser.id,
          },
          process.env.JWT_SECRET as string,
          { expiresIn: "30d" }
        ),
      },
      200
    );
  } catch (error: any) {
    return response.errorResponse(
      res,
      "Internal server error",
      { error: error.message },
      500
    );
  }
};

const signOut = (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    return response.errorResponse(
      res,
      "Internal server error",
      { error: error.message },
      500
    );
  }
};

export default {
  signIn,
  signOut,
};
