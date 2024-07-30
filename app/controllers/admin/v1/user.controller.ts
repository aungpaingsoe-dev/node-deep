import { NextFunction, Request, Response } from "express";
import response from "../../../helpers/response";
import exceptions from "../../../helpers/exceptions";
import userService from "../../../services/admin/v1/userService";
import prisma from "../../../../prisma/client";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const { page = 1, perPage = 10 } = req.query;

  try {
    const users = await userService.getUsers(Number(page), Number(perPage));

    return response.successResponse(
      res,
      "User list successfully",
      users,
      exceptions.statusCodes.OK
    );
  } catch (error: any) {
    next(error);
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(Number(id));
    if (!user) {
      return response.errorException(
        res,
        exceptions.dataNotFound,
        "User not found"
      );
    }
    return response.successResponse(
      res,
      "User detail successfully",
      user,
      exceptions.statusCodes.OK
    );
  } catch (error) {
    next(error);
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password, dob, bio, gender, isActive } = req.body;
  try {
    const existingEmail = await userService.getUserByEmail(email);

    if (existingEmail) {
      return response.errorException(res, exceptions.duplicateEmail);
    }

    const existingName = await userService.getUserByName(name);

    if (existingName) {
      return response.errorException(res, exceptions.duplicateName);
    }

    const createUser = await userService.createUser(
      name,
      email,
      password,
      dob,
      bio,
      gender,
      isActive
    );

    const newUser = await userService.getUserById(createUser.id);

    return response.successResponse(
      res,
      "User create successfully",
      newUser,
      exceptions.statusCodes.CREATED
    );
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { name, email, password, dob, bio, gender, isActive } = req.body;
  try {
    const updateUser = await userService.updateUser(
      Number(id),
      name,
      email,
      password,
      dob,
      bio,
      gender,
      isActive
    );
    return response.successResponse(
      res,
      "User update successfully",
      updateUser,
      exceptions.statusCodes.OK
    );
  } catch (error) {
    next(error);
  }
};

const deleteUser = (req: Request, res: Response) => {};

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
