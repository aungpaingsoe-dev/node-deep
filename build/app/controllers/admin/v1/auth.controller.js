"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../../../helpers/response"));
const user_service_1 = __importDefault(require("../../../services/admin/v1/user.service"));
const helper_1 = __importDefault(require("../../../helpers/helper"));
const exceptions_1 = __importDefault(require("../../../helpers/exceptions"));
const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await user_service_1.default.getUserByEmail(email);
        if (!existingUser) {
            return response_1.default.errorException(res, exceptions_1.default.emailNotFound);
        }
        const comparePassword = helper_1.default.comparePassword(password, existingUser.password);
        if (!comparePassword) {
            return response_1.default.errorException(res, exceptions_1.default.incorrectPassword);
        }
        const signInUser = (await user_service_1.default.getUserById(existingUser.id));
        signInUser.token = helper_1.default.generateToken(existingUser.id, "30d");
        return response_1.default.successResponse(res, "Sign in successfully", {
            signInUser,
        }, exceptions_1.default.statusCodes.OK);
    }
    catch (error) {
        next(error);
    }
};
const signOut = async (req, res, next) => {
    try {
    }
    catch (error) {
        next(error);
    }
};
exports.default = {
    signIn,
    signOut,
};
