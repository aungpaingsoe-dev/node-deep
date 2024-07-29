-- CreateTable
CREATE TABLE `AccessToken` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `token` VARCHAR(191) NULL,
    `expireAt` DATETIME(3) NOT NULL,

    INDEX `AccessToken_userId_fkey`(`userId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `UserHaveRole_roleId_fkey` ON `UserHaveRole`(`roleId` ASC);

-- CreateIndex
CREATE INDEX `RoleHavePermission_permissionId_fkey` ON `RoleHavePermission`(`permissionId` ASC);

-- AddForeignKey
ALTER TABLE `AccessToken` ADD CONSTRAINT `AccessToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

