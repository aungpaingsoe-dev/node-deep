-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_specificationId_fkey`;

-- DropForeignKey
ALTER TABLE `New` DROP FOREIGN KEY `New_coverPhotoId_fkey`;

-- DropForeignKey
ALTER TABLE `New` DROP FOREIGN KEY `New_authorId_fkey`;

-- DropIndex
DROP INDEX `Serie_name_key` ON `Serie`;

-- DropIndex
DROP INDEX `Category_name_key` ON `Category`;

-- DropIndex
DROP INDEX `Product_name_key` ON `Product`;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `specificationId`;

-- DropTable
DROP TABLE `Specification`;

-- DropTable
DROP TABLE `Tag`;

-- DropTable
DROP TABLE `New`;

-- CreateIndex
CREATE INDEX `UserHaveRole_roleId_fkey` ON `UserHaveRole`(`roleId` ASC);

-- CreateIndex
CREATE INDEX `RoleHavePermission_permissionId_fkey` ON `RoleHavePermission`(`permissionId` ASC);

-- CreateIndex
CREATE INDEX `Product_previewImageId_fkey` ON `Product`(`previewImageId` ASC);

