-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `Products_usersId_fkey`;

-- AlterTable
ALTER TABLE `products` MODIFY `usersId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
