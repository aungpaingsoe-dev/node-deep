import helper from "../../app/helpers/helper";
import prisma from "../client";

const users = [
  {
    name: "Super Admin",
    email: "superadmin@gmail.com",
    password: helper.hashPassword("@dminPass"),
  },
  {
    name: "User",
    email: "user@gmail.com",
    password: helper.hashPassword("@dminPass"),
  }
];

const adminUserSeeder = async () => {
  for (let user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      create: {
        name: user.name,
        email: user.email,
        password: user.password,
        profile: {
          create: {
            dob: null,
            gender: null,
            bio: null,
          },
        },
        roles: {
          create: [
            {
              role: {
                connect: {
                  id: user.email === "superadmin@gmail.com" ? 1 : 2,
                },
              },
            },
          ],
        },
      },
      update: {},
    });
  }

  console.log("Admin users seeding successfully");
};

export default adminUserSeeder;