-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2018 at 12:41 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `everydjay`
--

-- --------------------------------------------------------

--
-- Table structure for table `alldjays`
--

CREATE TABLE `alldjays` (
  `djNo` varchar(10) NOT NULL,
  `firstName` varchar(25) DEFAULT NULL,
  `lastName` varchar(25) DEFAULT NULL,
  `userName` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `alldjays`
--

INSERT INTO `alldjays` (`djNo`, `firstName`, `lastName`, `userName`) VALUES
('janeDoe555', 'Jane', 'Doe', 'janed'),
('oreFam66', 'Oreoluwa', 'Fambegbe', 'orefam');

-- --------------------------------------------------------

--
-- Table structure for table `djplaylist`
--

CREATE TABLE `djplaylist` (
  `inviteID` varchar(50) DEFAULT NULL,
  `djID` varchar(50) DEFAULT NULL,
  `songList` text,
  `otherThings` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='PK is inviteID';

--
-- Dumping data for table `djplaylist`
--

INSERT INTO `djplaylist` (`inviteID`, `djID`, `songList`, `otherThings`) VALUES
('christmas12345', 'dj12345', '\"Alright by Kendrick lamar\", \"Thriller by Michael Jackson\", \"Pakurumo by Wizkid\"', '\"No comments\"');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alldjays`
--
ALTER TABLE `alldjays`
  ADD PRIMARY KEY (`djNo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
