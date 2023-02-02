-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ads
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ads
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ads` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ads` ;

-- -----------------------------------------------------
-- Table `ads`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ads`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `phone` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ads`.`adposted`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ads`.`adposted` (
  `idads` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  `authorId` INT NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `imageurl` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idads`),
  INDEX `userid_idx` (`authorId` ASC) VISIBLE,
  CONSTRAINT `userid`
    FOREIGN KEY (`authorId`)
    REFERENCES `ads`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
