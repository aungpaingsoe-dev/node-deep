import { NextFunction, Request, Response } from "express";
import roleService from "../../../services/admin/v1/role.service";
import response from "../../../helpers/response";
import exceptions from "../../../helpers/exceptions";

const getRoles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const roles = await roleService.getRoles();

    return response.successResponse(
      res,
      "Role list successfully",
      roles,
      exceptions.statusCodes.OK
    );
  } catch (error) {
    next(error);
  }
};

const getRole = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const role = await roleService.getRoleById(Number(id));

    if (!role) {
      return response.errorException(
        res,
        exceptions.dataNotFound,
        "Role not found"
      );
    }

    return response.successResponse(
      res,
      "Role detail successfully",
      role,
      exceptions.statusCodes.OK
    );
  } catch (error) {
    next(error);
  }
};

const createRole = async (req: Request, res: Response, next: NextFunction) => {
  const { name, permissions, isActive } = req.body;

  try {
    const existingRole = await roleService.getRoleByName(name);

    if (existingRole) {
      return response.errorException(res, exceptions.duplicateName);
    }

    const permissionObjArray = permissions.map((permission: number) => {
      return {
        permission: {
          connect: {
            id: permission,
          },
        },
      };
    });

    const createRole = await roleService.createRole(
      name,
      permissionObjArray,
      isActive
    );

    const newRole = await roleService.getRoleById(createRole.id);

    return response.successResponse(
      res,
      "Role create successfully",
      newRole,
      exceptions.statusCodes.CREATED
    );
  } catch (error) {
    next(error);
  }
};

const updateRole = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { name, permissions, isActive } = req.body;

  try {
    const existingRole = await roleService.getRoleById(Number(id));

    if (!existingRole) {
      return response.errorException(
        res,
        exceptions.dataNotFound,
        "Role not found"
      );
    }

    const updateRole = await roleService.updateRole(
      Number(id),
      name,
      permissions,
      isActive
    );
  } catch (error) {
    next(error);
  }
};

const deleteRole = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const existingRole = await roleService.getRoleById(Number(id));

    if (!existingRole) {
      return response.errorException(
        res,
        exceptions.dataNotFound,
        "Role not found"
      );
    }

    await roleService.deleteRole(Number(id));

    return response.successResponse(
      res,
      "Role delete successfully",
      {},
      exceptions.statusCodes.OK
    );
  } catch (error) {
    next(error);
  }
};

export default {
  getRoles,
  getRole,
  createRole,
  updateRole,
  deleteRole,
};
