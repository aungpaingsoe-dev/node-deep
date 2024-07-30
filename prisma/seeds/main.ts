import prisma from "../client";
import permissionSeeder from "./permission.seeder";
import roleSeeder from "./role.seeder";
import adminUserSeeder from "./adminUser.seeder";
import userSeeder from "./user.seeder";

const main = async () => {
  try {
    await permissionSeeder();
    await roleSeeder();
    await adminUserSeeder();
    await userSeeder();
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main();
