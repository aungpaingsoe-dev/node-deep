import prisma from "../client";

const permissions = [
  "role-list",
  "role-create",
  "role-update",
  "role-delete",
  "permission-list",
  "permission-detail",
  "user-list",
  "user-create",
  "user-update",
  "user-detail",
  "user-delete",
  "post-list",
  "post-create",
  "post-update",
  "post-detail",
  "post-delete",
];

const permissionSeeder = async () => {
  for (let permission of permissions) {
    await prisma.permission.upsert({
      where: { name: permission },
      create: {
        name: permission,
      },
      update: {},
    });
  }

  console.log("Permissions seeding successfully");
};

export default permissionSeeder;