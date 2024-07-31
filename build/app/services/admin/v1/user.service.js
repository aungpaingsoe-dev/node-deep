"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../../../prisma/client"));
const paginate_1 = __importDefault(require("../../../helpers/paginate"));
const getUsers = async (page, perPage) => {
    const users = await client_1.default.user.findMany({
        skip: paginate_1.default.currentPage(page, perPage),
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
        orderBy: {
            id: "desc",
        },
    });
    const totalCount = await client_1.default.user.count();
    return paginate_1.default.result(users, totalCount, page, perPage);
};
const getUserByEmail = async (email, include) => {
    const user = await client_1.default.user.findUnique({
        where: { email },
        include,
    });
    return user;
};
const getUserByName = async (name, include) => {
    const user = await client_1.default.user.findUnique({
        where: { name },
        include,
    });
    return user;
};
const getUserById = async (id) => {
    const user = await client_1.default.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,
            profile: true,
            roles: {
                select: {
                    role: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            },
        },
    });
    return user;
};
const createUser = async (name, email, password, dob, bio, gender, isActive) => {
    const createUser = await client_1.default.user.create({
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
const updateUser = async (userId, name, email, password, isActive, dob, bio, gender) => {
    const updateUser = await client_1.default.user.upsert({
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
const deleteUser = async (userId) => {
    await client_1.default.user.delete({
        where: {
            id: userId,
        },
    });
};
exports.default = {
    getUserByEmail,
    getUserByName,
    getUserById,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};
