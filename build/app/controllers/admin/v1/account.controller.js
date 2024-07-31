"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../../../helpers/response"));
const exceptions_1 = __importDefault(require("../../../helpers/exceptions"));
const user_service_1 = __importDefault(require("../../../services/admin/v1/user.service"));
const client_1 = __importDefault(require("../../../../prisma/client"));
const helper_1 = __importDefault(require("../../../helpers/helper"));
const account_service_1 = __importDefault(require("../../../services/admin/v1/account.service"));
const myProfile = async (req, res, next) => {
    try {
        const { id } = req.user;
        const getProfile = await user_service_1.default.getUserById(id);
        return response_1.default.successResponse(res, "Profile detail successfully", getProfile, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
const updateProfile = async (req, res, next) => {
    const user = req.user;
    const { name, email, isActive, dob, gender, bio } = req.body;
    try {
        const authUser = (await user_service_1.default.getUserByEmail(user.email, {
            profile: true,
        }));
        await client_1.default.user.upsert({
            where: { id: authUser.id },
            update: {
                name,
                email,
                isActive,
                profile: {
                    update: {
                        dob,
                        bio,
                        gender,
                    },
                },
            },
            create: {
                name: authUser.name,
                email: authUser.name,
                password: authUser.password,
                isActive: authUser.isActive,
                profile: {
                    create: {
                        dob: authUser.profile.dob,
                        bio: authUser.profile.bio,
                        gender: authUser.profile.gender,
                    },
                },
            },
        });
        const updateProfile = await user_service_1.default.getUserById(user.id);
        return response_1.default.successResponse(res, "Profile update successfully", updateProfile, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
const changePassword = async (req, res, next) => {
    const user = req.user;
    const { currentPassword, newPassword } = req.body;
    try {
        const comparePassword = helper_1.default.comparePassword(currentPassword, user.password);
        if (!comparePassword) {
            return response_1.default.errorException(res, exceptions_1.default.incorrectPassword);
        }
        const updateUserPassword = await account_service_1.default.changePassword(user.id, helper_1.default.hashPassword(newPassword));
        return response_1.default.successResponse(res, "Change user password successfully", updateUserPassword, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
const deleteAccount = (req, res, next) => {
    try {
    }
    catch (error) {
        next(error);
    }
};
exports.default = {
    myProfile,
    updateProfile,
    changePassword,
    deleteAccount,
};
