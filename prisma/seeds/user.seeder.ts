import { faker } from "@faker-js/faker";
import prisma from "../client";
import helper from "../../app/helpers/helper";

const userSeeder = async () => {
  for (let i = 0; i < 50; i++) {
    const email = faker.internet.email();
    const name = faker.person.fullName();
    const password = helper.hashPassword("password");

    await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        name,
        email,
        password,
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
                  id: 2,
                },
              },
            },
          ],
        },
      },
    });
  }
  console.log("Users seeding successfully");
};

export default userSeeder;
