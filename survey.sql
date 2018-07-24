/*
 Navicat MySQL Data Transfer

 Source Server         : homework
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : survey

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 21/07/2018 13:32:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for survey_results
-- ----------------------------
DROP TABLE IF EXISTS "survey_results";
CREATE TABLE "survey_results" (
  "ID" int(11) unsigned NOT NULL AUTO_INCREMENT,
  "user_key"  int(11) unsigned NOT NULL,
  "question1" int(11) NOT NULL,
  "question2" int(11) NOT NULL,
  "question3" int(11) NOT NULL,
  "question4" int(11) NOT NULL,
  "question5" int(11) NOT NULL,
  "question6" int(11) NOT NULL,
  "question7" int(11) NOT NULL,
  "question8" int(11) NOT NULL,
  "question9" int(11) NOT NULL,
  "question10" int(11) NOT NULL,
  PRIMARY KEY ("ID","user_key") USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS "user_table";
CREATE TABLE "user_table" (
  "ID" int(11) unsigned NOT NULL AUTO_INCREMENT,
  "user_name" varchar(255) NOT NULL,
  "user_url" varchar(255) NOT NULL,
  PRIMARY KEY ("ID")
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
