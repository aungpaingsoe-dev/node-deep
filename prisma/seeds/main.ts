import prisma from "../client";
import permissionSeeder from "./permissionSeeder";
import roleSeeder from "./roleSeeder";
import adminUserSeeder from "./adminUserSeeder";
import userSeeder from "./userSeeder";

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
