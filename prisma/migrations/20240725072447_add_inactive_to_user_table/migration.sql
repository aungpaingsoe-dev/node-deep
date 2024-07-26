/*
  Warnings:

  - You are about to drop the column `isActive` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Role` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Permission` DROP COLUMN `isActive`;

-- AlterTable
ALTER TABLE `Role` DROP COLUMN `isActive`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT false;
