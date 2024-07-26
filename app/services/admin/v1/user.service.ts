import prisma from "../../../../prisma/client";

const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
};

const findUserByName = async (name: string) => {
  const user = await prisma.user.findUnique({
    where: { name },
  });
  return user;
};

export default {
  findUserByEmail,
  findUserByName,
};
