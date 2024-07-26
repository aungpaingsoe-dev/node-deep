/*
  Warnings:

  - The primary key for the `UserHaveRoles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `UserHaveRoles` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `UserHaveRoles` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `UserHaveRoles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `UserHaveRoles` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `id`,
    DROP COLUMN `updatedAt`,
    ADD PRIMARY KEY (`userId`, `roleId`);
