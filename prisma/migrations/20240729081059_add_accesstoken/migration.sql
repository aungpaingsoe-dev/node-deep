/*
  Warnings:

  - You are about to drop the `RoleHavePermissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserHaveRoles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `RoleHavePermissions` DROP FOREIGN KEY `RoleHavePermissions_permissionId_fkey`;

-- DropForeignKey
ALTER TABLE `RoleHavePermissions` DROP FOREIGN KEY `RoleHavePermissions_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `UserHaveRoles` DROP FOREIGN KEY `UserHaveRoles_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `UserHaveRoles` DROP FOREIGN KEY `UserHaveRoles_userId_fkey`;

-- DropTable
DROP TABLE `RoleHavePermissions`;

-- DropTable
DROP TABLE `UserHaveRoles`;

-- CreateTable
CREATE TABLE `UserHaveRole` (
    `userId` INTEGER NOT NULL,
    `roleId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoleHavePermission` (
    `roleId` INTEGER NOT NULL,
    `permissionId` INTEGER NOT NULL,

    PRIMARY KEY (`roleId`, `permissionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AccessToken` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `token` VARCHAR(191) NULL,
    `expireAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserHaveRole` ADD CONSTRAINT `UserHaveRole_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserHaveRole` ADD CONSTRAINT `UserHaveRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoleHavePermission` ADD CONSTRAINT `RoleHavePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoleHavePermission` ADD CONSTRAINT `RoleHavePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `Permission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AccessToken` ADD CONSTRAINT `AccessToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
