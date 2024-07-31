import prisma from "../../../../prisma/client";
import { RoleType } from "../../../types";

const createRole = async (
  name: string,
  permissions: any[],
  isActive: boolean
) => {
  const createRole = await prisma.role.create({
    data: {
      name,
      isActive,
      permissions: {
        create: permissions,
      },
    },
  });
  return createRole;
};

const updateRole = async (
  id: number,
  name: string,
  permissions: number[],
  isActive: boolean
) => {};

const getRoles = async () => {
  const roles = prisma.role.findMany({
    select: {
      id: true,
      name: true,
      isActive: true,
      permissions: {
        select: {
          permission: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
  return roles;
};

const getRoleById = async (id: number) => {
  const role = await prisma.role.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      isActive: true,
      permissions: {
        select: {
          permission: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
  return role;
};

const getRoleByName = async (name: string) => {
  const role = await prisma.role.findUnique({
    where: { name },
  });
  return role;
};

const deleteRole = async (id: number) => {
  await prisma.role.delete({
    where: {
      id,
    },
  });
};

export default {
  createRole,
  updateRole,
  getRoleById,
  deleteRole,
  getRoles,
  getRoleByName,
};
