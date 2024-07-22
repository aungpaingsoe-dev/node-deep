import { Request, Response } from "express";
import response from "../../../../app/helpers/utils/response";

const signIn = (req: Request, res: Response) => {
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

const signOut = (req: Request, res: Response) => {
  const { name, email, password } = req.body;
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
