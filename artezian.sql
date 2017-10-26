-- MySQL Script generated by MySQL Workbench
-- Thu Oct 26 21:06:38 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema artezian
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema artezian
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `artezian` DEFAULT CHARACTER SET utf8 ;
USE `artezian` ;

-- -----------------------------------------------------
-- Table `artezian`.`menu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artezian`.`menu` (
  `id` INT(2) UNSIGNED NOT NULL,
  `alias` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artezian`.`about_text`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artezian`.`about_text` (
  `id` INT(2) UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` TEXT(65535) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artezian`.`rules_text`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artezian`.`rules_text` (
  `id` INT(2) UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` TEXT(65535) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artezian`.`article`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artezian`.`article` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `alias` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `intro` TEXT(65535) NULL,
  `content` MEDIUMBLOB NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artezian`.`gallery`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artezian`.`gallery` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `description` TEXT(65535) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artezian`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artezian`.`image` (
  `id` INT(10) NOT NULL,
  `gallery_id` INT(10) NOT NULL,
  `title` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_image_gallery1_idx` (`gallery_id` ASC),
  CONSTRAINT `fk_image_gallery1`
    FOREIGN KEY (`gallery_id`)
    REFERENCES `artezian`.`gallery` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
