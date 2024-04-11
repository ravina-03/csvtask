-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2024 at 06:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `csvtask`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Mobile` varchar(255) NOT NULL,
  `Gender` varchar(255) NOT NULL DEFAULT 'M',
  `DOB` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Email_2` (`Email`),
  ADD UNIQUE KEY `Email_3` (`Email`),
  ADD UNIQUE KEY `Email_4` (`Email`),
  ADD UNIQUE KEY `Email_5` (`Email`),
  ADD UNIQUE KEY `Email_6` (`Email`),
  ADD UNIQUE KEY `Email_7` (`Email`),
  ADD UNIQUE KEY `Email_8` (`Email`),
  ADD UNIQUE KEY `Email_9` (`Email`),
  ADD UNIQUE KEY `Email_10` (`Email`),
  ADD UNIQUE KEY `Email_11` (`Email`),
  ADD UNIQUE KEY `Email_12` (`Email`),
  ADD UNIQUE KEY `Email_13` (`Email`),
  ADD UNIQUE KEY `Email_14` (`Email`),
  ADD UNIQUE KEY `Email_15` (`Email`),
  ADD UNIQUE KEY `Email_16` (`Email`),
  ADD UNIQUE KEY `Email_17` (`Email`),
  ADD UNIQUE KEY `Email_18` (`Email`),
  ADD UNIQUE KEY `Email_19` (`Email`),
  ADD UNIQUE KEY `Email_20` (`Email`),
  ADD UNIQUE KEY `Email_21` (`Email`),
  ADD UNIQUE KEY `Email_22` (`Email`),
  ADD UNIQUE KEY `Email_23` (`Email`),
  ADD UNIQUE KEY `Email_24` (`Email`),
  ADD UNIQUE KEY `Email_25` (`Email`),
  ADD UNIQUE KEY `Email_26` (`Email`),
  ADD UNIQUE KEY `Email_27` (`Email`),
  ADD UNIQUE KEY `Email_28` (`Email`),
  ADD UNIQUE KEY `Email_29` (`Email`),
  ADD UNIQUE KEY `Email_30` (`Email`),
  ADD UNIQUE KEY `Email_31` (`Email`),
  ADD UNIQUE KEY `Email_32` (`Email`),
  ADD UNIQUE KEY `Email_33` (`Email`),
  ADD UNIQUE KEY `Email_34` (`Email`),
  ADD UNIQUE KEY `Email_35` (`Email`),
  ADD UNIQUE KEY `Email_36` (`Email`),
  ADD UNIQUE KEY `Email_37` (`Email`),
  ADD UNIQUE KEY `Email_38` (`Email`),
  ADD UNIQUE KEY `Email_39` (`Email`),
  ADD UNIQUE KEY `Email_40` (`Email`),
  ADD UNIQUE KEY `Email_41` (`Email`),
  ADD UNIQUE KEY `Email_42` (`Email`),
  ADD UNIQUE KEY `Email_43` (`Email`),
  ADD UNIQUE KEY `Email_44` (`Email`),
  ADD UNIQUE KEY `Email_45` (`Email`),
  ADD UNIQUE KEY `Email_46` (`Email`),
  ADD UNIQUE KEY `Email_47` (`Email`),
  ADD UNIQUE KEY `Email_48` (`Email`),
  ADD UNIQUE KEY `Email_49` (`Email`),
  ADD UNIQUE KEY `Email_50` (`Email`),
  ADD UNIQUE KEY `Email_51` (`Email`),
  ADD UNIQUE KEY `Email_52` (`Email`),
  ADD UNIQUE KEY `Email_53` (`Email`),
  ADD UNIQUE KEY `Email_54` (`Email`),
  ADD UNIQUE KEY `Email_55` (`Email`),
  ADD UNIQUE KEY `Email_56` (`Email`),
  ADD UNIQUE KEY `Email_57` (`Email`),
  ADD UNIQUE KEY `Email_58` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
