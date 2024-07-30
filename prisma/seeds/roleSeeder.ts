import prisma from "../client";

const roles = ["admin", "user"];

const roleSeeder = async () => {
  const adminPermissions = await prisma.permission.findMany();
  const userPermissions = await prisma.permission.findMany({
    where: {
      id: {
        in: [7, 10, 12, 13, 14, 15, 16],
      },
    },
  });

  const adminPermissionsObj = adminPermissions.map((permission) => {
    return {
      permission: {
        connect: {
          id: permission.id,
        },
      },
    };
  });

  const userPermissionsObj = userPermissions.map((permission) => {
    return {
      permission: {
        connect: {
          id: permission.id,
        },
      },
    };
  });

  for (let role of roles) {
    await prisma.role.upsert({
      where: { name: role },
      create: {
        name: role,
        permissions: {
          create: role === "admin" ? adminPermissionsObj : userPermissionsObj,
        },
      },
      update: {},
    });
  }

  console.log("Roles seeding successfully");
};

export default roleSeeder;
