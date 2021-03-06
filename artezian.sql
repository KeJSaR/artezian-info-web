-- MySQL Script generated by MySQL Workbench
-- Wed 15 Nov 2017 09:43:16 PM MSK
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
  `id` INT(2) UNSIGNED NOT NULL AUTO_INCREMENT,
  `alias` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `info` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artezian`.`text`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artezian`.`text` (
  `id` INT(2) UNSIGNED NOT NULL AUTO_INCREMENT,
  `menu_id` INT(2) UNSIGNED NOT NULL,
  `content` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_text_menu_idx` (`menu_id` ASC),
  CONSTRAINT `fk_text_menu`
    FOREIGN KEY (`menu_id`)
    REFERENCES `artezian`.`menu` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artezian`.`author`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artezian`.`author` (
  `id` INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `info` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artezian`.`article`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artezian`.`article` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `menu_id` INT(2) UNSIGNED NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `author_id` INT(3) UNSIGNED NOT NULL,
  `intro` TEXT NOT NULL,
  `content` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_article_menu_idx` (`menu_id` ASC),
  INDEX `fk_article_author_idx` (`author_id` ASC),
  CONSTRAINT `fk_article_menu`
    FOREIGN KEY (`menu_id`)
    REFERENCES `artezian`.`menu` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_article_author`
    FOREIGN KEY (`author_id`)
    REFERENCES `artezian`.`author` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artezian`.`gallery`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artezian`.`gallery` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `image_id` INT(10) UNSIGNED NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `info` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artezian`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artezian`.`image` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `gallery_id` INT(10) UNSIGNED NOT NULL,
  `alias` INT(10) UNSIGNED NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_image_gallery_idx` (`gallery_id` ASC),
  CONSTRAINT `fk_image_gallery`
    FOREIGN KEY (`gallery_id`)
    REFERENCES `artezian`.`gallery` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
