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
-- Table `avantiparking`.`headquarter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`headquarter` (
  `id_headquarter` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_headquarter`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `avantiparking`.`parking_lot`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`parking_lot` (
  `id_parking_lot` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `headquarter` INT(11) NOT NULL,
  PRIMARY KEY (`id_parking_lot`),
  INDEX `fk_parking_lot_headquarter_idx` (`headquarter` ASC),
  CONSTRAINT `fk_parking_lot_headquarter`
    FOREIGN KEY (`headquarter`)
    REFERENCES `avantiparking`.`headquarter` (`id_headquarter`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `avantiparking`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `image_url` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NOT NULL,
  `role` TINYINT(4) NULL DEFAULT NULL,
  `registered` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `provider` VARCHAR(255) NOT NULL,
  `provider_id` VARCHAR(255) NULL DEFAULT NULL,
  `headquarter` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC),
  INDEX `fk_user_headquarter_idx` (`headquarter` ASC),
  CONSTRAINT `fk_user_headquarter`
    FOREIGN KEY (`headquarter`)
    REFERENCES `avantiparking`.`headquarter` (`id_headquarter`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `avantiparking`.`zone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`zone` (
  `id_zone` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(10) NOT NULL,
  `parking_lot` INT(11) NOT NULL,
  `quantity` INT(11) NOT NULL,
  `start` INT(11) NOT NULL,
  PRIMARY KEY (`id_zone`),
  INDEX `fk_zone_parking_lot1_idx` (`parking_lot` ASC),
  CONSTRAINT `fk_zone_parking_lot1`
    FOREIGN KEY (`parking_lot`)
    REFERENCES `avantiparking`.`parking_lot` (`id_parking_lot`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `avantiparking`.`space`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`space` (
  `id_space` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `state` TINYINT(4) NOT NULL,
  `user` INT(11) NULL DEFAULT NULL,
  `zone` INT(11) NOT NULL,
  PRIMARY KEY (`id_space`),
  INDEX `fk_space_zone1_idx` (`zone` ASC),
  INDEX `fk_space_user_idx` (`user` ASC),
  CONSTRAINT `fk_space_user`
    FOREIGN KEY (`user`)
    REFERENCES `avantiparking`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_space_zone1`
    FOREIGN KEY (`zone`)
    REFERENCES `avantiparking`.`zone` (`id_zone`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `avantiparking`.`vehicle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`vehicle` (
  `license_plate` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `user` INT(11) NOT NULL,
  PRIMARY KEY (`license_plate`),
  INDEX `fk_vehicle_user1_idx` (`user` ASC),
  CONSTRAINT `fk_vehicle_user1`
    FOREIGN KEY (`user`)
    REFERENCES `avantiparking`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `avantiparking`.`reserve`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`reserve` (
  `id_reservation` INT(11) NOT NULL,
  `date` DATE NOT NULL,
  `start_time` TIME NOT NULL,
  `end_time` TIME NOT NULL,
  `created_at` DATE NOT NULL,
  `user` INT(11) NOT NULL,
  `vehicle` VARCHAR(45) NULL DEFAULT NULL,
  `space` INT(11) NOT NULL,
  PRIMARY KEY (`id_reservation`),
  INDEX `fk_reserve_user1_idx` (`user` ASC),
  INDEX `fk_reserve_vehicle1_idx` (`vehicle` ASC),
  INDEX `fk_reserve_space1_idx` (`space` ASC),
  CONSTRAINT `fk_reserve_space1`
    FOREIGN KEY (`space`)
    REFERENCES `avantiparking`.`space` (`id_space`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_reserve_user1`
    FOREIGN KEY (`user`)
    REFERENCES `avantiparking`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_reserve_vehicle1`
    FOREIGN KEY (`vehicle`)
    REFERENCES `avantiparking`.`vehicle` (`license_plate`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `avantiparking`.`email_notifications`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantiparking`.`email_notifications` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `to` VARCHAR(120) NOT NULL,
  `subject` VARCHAR(120) NOT NULL,
  `html` VARCHAR(800) NOT NULL,
  `user_id` INT(11) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_email_notifications_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_email_notifications_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `avantiparking`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
