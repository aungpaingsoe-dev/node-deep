-- CreateIndex
CREATE INDEX `UserHaveRoles_roleId_fkey` ON `UserHaveRoles`(`roleId` ASC);

-- CreateIndex
CREATE INDEX `RoleHavePermissions_permissionId_fkey` ON `RoleHavePermissions`(`permissionId` ASC);

