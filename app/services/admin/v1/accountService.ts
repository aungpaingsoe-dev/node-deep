import prisma from "../../../../prisma/client";

const changePassword = async (userId: number, password: string) => {
  const updateUserPassword = await prisma.user.update({
    where: { id: userId },
    data: {
      password,
    },
    select: {
      id: true,
      name: true,
      email: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
      profile: true,
    },
  });
  return updateUserPassword;
};

export default {
  changePassword,
};
