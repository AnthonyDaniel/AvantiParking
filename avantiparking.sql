-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema avantiparking
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema avantiparking
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `avantiparking` DEFAULT CHARACTER SET latin1 ;
USE `avantiparking` ;

-- -----------------------------------------------------
-- Table `avantiparking`.`headquarter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`headquarter` (
  `id_headquarter` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_headquarter`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `avantiparking`.`parking_lot`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`parking_lot` (
  `id_parking_lot` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `headquarter` INT NOT NULL,
  PRIMARY KEY (`id_parking_lot`),
  INDEX `fk_parking_lot_headquarter_idx` (`headquarter` ASC) ,
  CONSTRAINT `fk_parking_lot_headquarter`
    FOREIGN KEY (`headquarter`)
    REFERENCES `avantiparking`.`headquarter` (`id_headquarter`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `avantiparking`.`zone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`zone` (
  `id_zone` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(10) NOT NULL,
  `parking_lot` INT NOT NULL,
  PRIMARY KEY (`id_zone`),
  INDEX `fk_zone_parking_lot1_idx` (`parking_lot` ASC) ,
  CONSTRAINT `fk_zone_parking_lot1`
    FOREIGN KEY (`parking_lot`)
    REFERENCES `avantiparking`.`parking_lot` (`id_parking_lot`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `avantiparking`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`user` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `role` TINYINT DEFAULT NULL,
  `registered`  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `provider` varchar(255) NOT NULL,
  `provider_id` varchar(255) DEFAULT NULL,
  `headquarter` INT,
  PRIMARY KEY (`id`),
    INDEX `fk_user_headquarter_idx` (`headquarter` ASC) ,
  CONSTRAINT `fk_user_headquarter`
    FOREIGN KEY (`headquarter`)
    REFERENCES `avantiparking`.`headquarter` (`id_headquarter`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `avantiparking`.`space`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`space` (
  `id_space` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `state` TINYINT NOT NULL,
  `user` INT,
  `zone` INT NOT NULL,
  PRIMARY KEY (`id_space`),
  INDEX `fk_space_zone1_idx` (`zone` ASC),
  INDEX `fk_space_user_idx` (`user` ASC),
  CONSTRAINT `fk_space_user`
    FOREIGN KEY (`user`)
    REFERENCES `avantiparking`.`user` (`id`)
	ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_space_zone1`
    FOREIGN KEY (`zone`)
    REFERENCES `avantiparking`.`zone` (`id_zone`)
	ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `avantiparking`.`vehicle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`vehicle` (
  `license_plate` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `user` INT NOT NULL,
  PRIMARY KEY (`license_plate`),
  INDEX `fk_vehicle_user1_idx` (`user` ASC) ,
  CONSTRAINT `fk_vehicle_user1`
    FOREIGN KEY (`user`)
    REFERENCES `avantiparking`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `avantiparking`.`reserve`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`reserve` (
  `id_reservation` INT NOT NULL,
  `date` DATE NOT NULL,
  `start_time` TIME NOT NULL,
  `end_time` TIME NOT NULL,
  `created_at` DATE NOT NULL,
  `user` INT NOT NULL,
  `vehicle` VARCHAR(45) NULL,
  `space` INT NOT NULL,
  PRIMARY KEY (`id_reservation`),
  INDEX `fk_reserve_user1_idx` (`user` ASC),
  INDEX `fk_reserve_vehicle1_idx` (`vehicle` ASC) ,
  INDEX `fk_reserve_space1_idx` (`space` ASC) ,
  CONSTRAINT `fk_reserve_user1`
    FOREIGN KEY (`user`)
    REFERENCES `avantiparking`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reserve_vehicle1`
    FOREIGN KEY (`vehicle`)
    REFERENCES `avantiparking`.`vehicle` (`license_plate`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reserve_space1`
    FOREIGN KEY (`space`)
    REFERENCES `avantiparking`.`space` (`id_space`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;