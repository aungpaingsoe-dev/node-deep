-- AlterTable
ALTER TABLE `Profile` MODIFY `gender` enum('male','female','other') NULL;

-- AlterTable
ALTER TABLE `Role` DROP COLUMN `isActive`;

-- AlterTable
ALTER TABLE `Permission` DROP COLUMN `isActive`;

-- CreateIndex
CREATE INDEX `UserHaveRole_roleId_fkey` ON `UserHaveRole`(`roleId` ASC);

-- CreateIndex
CREATE INDEX `RoleHavePermission_permissionId_fkey` ON `RoleHavePermission`(`permissionId` ASC);

