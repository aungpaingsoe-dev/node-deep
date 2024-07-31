"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../client"));
const permission_seeder_1 = __importDefault(require("./permission.seeder"));
const role_seeder_1 = __importDefault(require("./role.seeder"));
const adminUser_seeder_1 = __importDefault(require("./adminUser.seeder"));
const user_seeder_1 = __importDefault(require("./user.seeder"));
const main = async () => {
    try {
        await (0, permission_seeder_1.default)();
        await (0, role_seeder_1.default)();
        await (0, adminUser_seeder_1.default)();
        await (0, user_seeder_1.default)();
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
    finally {
        await client_1.default.$disconnect();
    }
};
main();
