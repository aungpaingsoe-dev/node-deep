import { NextFunction, Request, Response } from "express";
import permissionService from "../../../services/admin/v1/permission.service";
import response from "../../../helpers/response";
import exceptions from "../../../helpers/exceptions";

const getPermissions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const permissions = await permissionService.getPermissions();

    return response.successResponse(
      res,
      "Permission list successfully",
      permissions,
      exceptions.statusCodes.OK
    );
  } catch (error) {
    next(error);
  }
};

const getPermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const existingPermission = await permissionService.getPermissionById(
      Number(id)
    );

    if (!existingPermission) {
      return response.errorException(
        res,
        exceptions.dataNotFound,
        "Permission not found"
      );
    }

    return response.successResponse(
      res,
      "Permission detail successfully",
      existingPermission,
      exceptions.statusCodes.OK
    );
  } catch (error) {
    next(error);
  }
};

export default {
  getPermissions,
  getPermission,
};
