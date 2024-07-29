import prisma from "../../../../prisma/client";

const findUserByEmail = async (email: string, include? : object) => {
  const user = await prisma.user.findUnique({
    where: { email },
    include
  });
  return user;
};

const findUserByName = async (name: string, include : object) => {
  const user = await prisma.user.findUnique({
    where: { name },
    include
  });
  return user;
};

const findUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id : true,
      name : true,
      email : true,
      isActive : true,
      createdAt: true,
      updatedAt: true,
      profile : {
        select: {
          id : true,
          dob: true,
          gender: true,
          createdAt: true,
          updatedAt: true
        }
      }
    }
  });
  return user;
}

export default {
  findUserByEmail,
  findUserByName,
  findUserById,
};
