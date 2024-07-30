import prisma from "../../../../prisma/client";
import paginate from "../../../helpers/paginate";

const getUsers = async (page: number, perPage: number) => {
  const users = await prisma.user.findMany({
    skip: paginate.currentPage(page, perPage),
    take: perPage,
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

  const totalCount = await prisma.user.count();
  return paginate.result(users, totalCount, page, perPage);
};

const getUserByEmail = async (email: string, include?: object) => {
  const user = await prisma.user.findUnique({
    where: { email },
    include,
  });
  return user;
};

const getUserByName = async (name: string, include?: object) => {
  const user = await prisma.user.findUnique({
    where: { name },
    include,
  });
  return user;
};

const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id },
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
  return user;
};

const createUser = async (
  name: string,
  email: string,
  password: string,
  dob?: string,
  bio?: string,
  gender?: "male" | "female",
  isActive?: boolean
) => {
  const createUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
      isActive,
      profile: {
        create: {
          dob,
          bio,
          gender,
        },
      },
    },
  });
  return createUser;
};

const updateUser = async (
  userId: number,
  name: string,
  email: string,
  password: string,
  isActive: boolean,
  dob: string,
  bio: string,
  gender: "male" | "female"
) => {
  const updateUser = await prisma.user.upsert({
    where: { id: userId },
    update: {
      name,
      email,
      isActive,
      password,
      profile: {
        update: {
          dob,
          bio,
          gender,
        },
      },
    },
    create: {
      name,
      email,
      password,
      isActive,
      profile: {
        create: {
          dob,
          bio,
          gender,
        },
      },
    },
  });

  return updateUser;
};

export default {
  getUserByEmail,
  getUserByName,
  getUserById,
  getUsers,
  createUser,
  updateUser,
};
