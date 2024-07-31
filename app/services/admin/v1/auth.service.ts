import prisma from "../../../../prisma/client";

const createOrUpdateToken = async (userId: number, token: string) => {
  const now = new Date();
  const expirationDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
  const iosExpirationDate = expirationDate.toISOString();
  await prisma.token.upsert({
    where: { userId: userId },
    create: {
      userId: userId,
      token: token,
      expiredAt: iosExpirationDate,
    },
    update: {
      token: token,
      expiredAt: iosExpirationDate,
    },
  });
};

export default {
  createOrUpdateToken,
};
