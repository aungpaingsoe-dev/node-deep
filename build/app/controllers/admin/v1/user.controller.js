"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../../../helpers/response"));
const exceptions_1 = __importDefault(require("../../../helpers/exceptions"));
const user_service_1 = __importDefault(require("../../../services/admin/v1/user.service"));
const helper_1 = __importDefault(require("../../../helpers/helper"));
const getUsers = async (req, res, next) => {
    const { page = 1, perPage = 10 } = req.query;
    try {
        const users = await user_service_1.default.getUsers(Number(page), Number(perPage));
        return response_1.default.successResponse(res, "User list successfully", users, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
const getUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await user_service_1.default.getUserById(Number(id));
        if (!user) {
            return response_1.default.errorException(res, exceptions_1.default.dataNotFound, "User not found");
        }
        return response_1.default.successResponse(res, "User detail successfully", user, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
const createUser = async (req, res, next) => {
    const { name, email, password, dob, bio, gender, isActive } = req.body;
    try {
        const existingEmail = await user_service_1.default.getUserByEmail(email);
        if (existingEmail) {
            return response_1.default.errorException(res, exceptions_1.default.duplicateEmail);
        }
        const existingName = await user_service_1.default.getUserByName(name);
        if (existingName) {
            return response_1.default.errorException(res, exceptions_1.default.duplicateName);
        }
        const createUser = await user_service_1.default.createUser(name, email, password, dob, bio, gender, isActive);
        const newUser = await user_service_1.default.getUserById(createUser.id);
        return response_1.default.successResponse(res, "User create successfully", newUser, exceptions_1.default.statusCodes.CREATED);
    }
    catch (error) {
        next(error);
    }
};
const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { name, email, password, dob, bio, gender, isActive } = req.body;
    try {
        const existingUser = await user_service_1.default.getUserById(Number(id));
        if (!existingUser) {
            return response_1.default.errorException(res, exceptions_1.default.dataNotFound, "User not found");
        }
        await user_service_1.default.updateUser(Number(id), name, email, helper_1.default.hashPassword(password), isActive, dob, bio, gender);
        const updateUser = await user_service_1.default.getUserById(Number(id));
        return response_1.default.successResponse(res, "User update successfully", updateUser, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const existingUser = await user_service_1.default.getUserById(Number(id));
        if (!existingUser) {
            return response_1.default.errorException(res, exceptions_1.default.dataNotFound, "User not found");
        }
        await user_service_1.default.deleteUser(Number(id));
        return response_1.default.successResponse(res, "User delete successfully", {}, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
exports.default = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
