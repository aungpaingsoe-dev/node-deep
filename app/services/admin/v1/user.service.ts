import prisma from "../../../../prisma/client";

const findUserByEmail = async (email: string, include?: object) => {
  const user = await prisma.user.findUnique({
    where: { email },
    include : include,
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
