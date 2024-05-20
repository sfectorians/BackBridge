/*
  Warnings:

  - Made the column `usersId` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `Products_usersId_fkey`;

-- AlterTable
ALTER TABLE `products` MODIFY `usersId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
