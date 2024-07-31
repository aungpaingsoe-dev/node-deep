import prisma from "../../../../prisma/client";

const getPermissions = async () => {
  const permissions = await prisma.permission.findMany();
  return permissions;
};

const getPermissionById = async (id: number) => {
  const permission = await prisma.permission.findUnique({
    where: { id },
    include: {
      roles: {
        select: {
          role : true
        }
      }
    }
  });
  return permission;
};

export default {
  getPermissions,
  getPermissionById,
};
