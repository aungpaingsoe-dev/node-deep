-- CreateIndex
CREATE INDEX `UserHaveRole_roleId_fkey` ON `UserHaveRole`(`roleId` ASC);

-- CreateIndex
CREATE INDEX `RoleHavePermission_permissionId_fkey` ON `RoleHavePermission`(`permissionId` ASC);

