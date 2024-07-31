/*
  Warnings:

  - The values [other] on the enum `Profile_gender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Permission` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Profile` MODIFY `gender` ENUM('male', 'female') NULL;

-- AlterTable
ALTER TABLE `Role` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT false;
