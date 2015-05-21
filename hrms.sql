-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2015 at 03:47 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hrms`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `sn` int(3) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`sn`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`sn`, `username`, `password`, `name`) VALUES
(1, 'jaguar', 'punch8', 'Femi Lasisi');

-- --------------------------------------------------------

--
-- Table structure for table `leave`
--

CREATE TABLE IF NOT EXISTS `leave` (
  `sn` int(4) NOT NULL AUTO_INCREMENT,
  `staff_id` int(4) NOT NULL,
  `leave_type` varchar(30) NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `reason` mediumtext NOT NULL,
  `status` int(5) NOT NULL,
  PRIMARY KEY (`sn`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `leave`
--

INSERT INTO `leave` (`sn`, `staff_id`, `leave_type`, `start`, `end`, `reason`, `status`) VALUES
(1, 1, 'Annual Leave', '2015-05-11', '2015-05-25', 'Tired', 1),
(2, 1, 'Sick Leave', '2015-03-02', '2015-03-06', 'Typhoid Fever', 1),
(9, 1, 'Study Leave', '2015-05-11', '2015-05-12', '', 1),
(10, 8, 'Annual Leave', '2015-05-11', '2015-05-30', '', 1),
(11, 12, 'Annual Leave', '2015-05-12', '2015-05-30', '<p>Personal</p>', 1);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE IF NOT EXISTS `staff` (
  `sn` int(4) NOT NULL AUTO_INCREMENT,
  `surname` varchar(20) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `middle_name` varchar(20) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `state` varchar(30) NOT NULL,
  `lga` varchar(30) NOT NULL,
  `cadre` varchar(30) NOT NULL,
  `designation` varchar(20) NOT NULL,
  `conraiss` varchar(5) NOT NULL,
  `date_birth` date NOT NULL,
  `date_confirmation` date NOT NULL,
  `date_first_app` date NOT NULL,
  `date_present_app` date NOT NULL,
  `date_last_promotion` date NOT NULL,
  `qualifications` text NOT NULL,
  `remarks` text NOT NULL,
  `img` varchar(30) NOT NULL,
  PRIMARY KEY (`sn`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`sn`, `surname`, `first_name`, `middle_name`, `sex`, `state`, `lga`, `cadre`, `designation`, `conraiss`, `date_birth`, `date_confirmation`, `date_first_app`, `date_present_app`, `date_last_promotion`, `qualifications`, `remarks`, `img`) VALUES
(1, 'Lasisi', 'Olufemi', 'Paul', 'Male', 'Osun', 'Ijebu North-East', 'IT Unit', 'Programmer', '8', '1992-11-26', '2015-03-02', '2015-03-10', '2015-03-02', '2015-05-23', '', '<p>Good Programmer</p>', '1.jpg'),
(8, 'Felix', 'Kenneth', 'Issi', 'Male', 'Yobe', 'Yombe', 'IT Unit', 'Researcher', '8', '2015-05-04', '2015-05-12', '2015-05-05', '2015-05-05', '2015-05-04', '<p>Bsc Mech Engineering</p>', '', '8.jpg'),
(9, 'Ezeh', 'Joice', 'Ruth', 'Female', 'Rivers', 'Port-Harcourt', 'SPIS', 'Researcher', '6', '1991-02-20', '2015-04-26', '2015-04-26', '2015-04-26', '2015-01-08', '<p>BSc Microbiology,</p>\r\n<p>Msc Botanical Arrangement,</p>\r\n<p>PhD Plants</p>', '<p>Highly Underpaid</p>', '9.jpg'),
(12, 'Awoyemi', 'Michael', 'Mayokun', 'Male', 'Ondo', 'Akoko East', 'Planner', 'Planning Officer I', '7', '1985-02-01', '1970-01-01', '2009-12-01', '2009-12-01', '2014-12-01', '<p>B.Sc Chem Engr.</p>', '<p>No remarks</p>', '12.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
