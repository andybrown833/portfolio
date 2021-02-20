-- DOWNSOUTHRP INTERFACE --

CREATE TABLE `accounts` (
	`id` INT(20) NOT NULL AUTO_INCREMENT,
	`displayName` VARCHAR(100),
	`email` VARCHAR(500),
	`password` VARCHAR(500),
	`communityTitle` VARCHAR(100),
	`communityRank` VARCHAR(100),
	`recruitmentRank` VARCHAR(100),
	`profileBanner` VARCHAR(100),
	`steamID` VARCHAR(100),
	`discordID` VARCHAR(100),
	`tsID` VARCHAR(100),
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `accactive` (
    `id` int(20) NOT NULL AUTO_INCREMENT,
    `userID` int(20) DEFAULT NULL,
	`link` VARCHAR(100),
	`displayName` VARCHAR(50),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `ranks` (
	`id` INT(20) NOT NULL AUTO_INCREMENT,
	`rankName` VARCHAR(100),
	PRIMARY KEY (`id`)
);

INSERT INTO `roles` (`rankName`, `rankLevel`) VALUES
('Core Administration', 'A'),
('Senior Administration', 'A'),
('Administration', 'A'),
('Junior Administration', 'A'),
('Senior Staff', 'S'),
('Staff', 'S'),
('Junior Staff', 'M'),
('Member', 'M');

CREATE TABLE `patrolactivitylogs` (
	`id` INT(20) NOT NULL AUTO_INCREMENT,
	`startDate` DATE,
	`startTime` TIME,
	`endDate` DATE,
	`endTime` TIME,
	`durCal` VARCHAR(50),
	`durDisplay` VARCHAR(50),
	`notes` VARCHAR(500),
	`civLog` VARCHAR(1000),
	`department` VARCHAR(100),
	`division` VARCHAR(100),
	`userID` VARCHAR(20),
	`palMonth` VARCHAR(20),
	`palYear` VARCHAR(20),
	`palStatus` VARCHAR(50),
	PRIMARY KEY (`id`)
);

CREATE TABLE `departments` (
	`id` INT(20) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(100),
	`abbreviation` VARCHAR(10),
	`logo` VARCHAR(500),
	`banner` VARCHAR(500),
	`type` VARCHAR(50),
	PRIMARY KEY (`id`)
);

INSERT INTO `departments` (`name`, `abbreviation`, `type`) VALUES
('Los Santos Police Department', 'LSPD', 'LEO'),
('Blaine County Sheriffs Office', 'BCSO', 'LEO'),
('San Andreas State Police', 'SASP', 'LEO'),
('San Andreas Fire Department', 'SAFD', 'FIRE'),
('Communications Department', 'COMMS', 'DISPATCH'),
('Civilian Operations', 'CIV', 'CIV');

CREATE TABLE `department_users` (
	`id` INT(20) NOT NULL AUTO_INCREMENT,
	`userID` VARCHAR(20),
	`deptID` VARCHAR(20),
	PRIMARY KEY (`id`)
);

INSERT INTO `department_users` (`userID`, `deptID`) VALUES
('1','1');