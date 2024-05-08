-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sgwrm
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sgwrm
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sgwrm` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema sgwrm
-- -----------------------------------------------------
USE `sgwrm` ;

-- -----------------------------------------------------
-- Table `sgwrm`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgwrm`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `imageUrl` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgwrm`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgwrm`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `fullName` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgwrm`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgwrm`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `imageUrl` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgwrm`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgwrm`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `fullName` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
