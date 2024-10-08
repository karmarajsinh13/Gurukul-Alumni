-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2024 at 08:04 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gurukulalumni`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` bigint(4) NOT NULL,
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(10) NOT NULL,
  `email` varchar(20) DEFAULT NULL,
  `username` varchar(15) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `confirm_password` varchar(20) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `number` varchar(10) DEFAULT NULL,
  `photo` varchar(255) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `dob` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `firstname`, `lastname`, `email`, `username`, `password`, `confirm_password`, `address`, `number`, `photo`, `gender`, `dob`) VALUES
(1, 'Karmarajsinh', 'Gohil', 'karmaraj130@gmail.co', 'karmaraj_13', '123', '123', '', '7265992371', 'karmarajsinh.jpg1713935223270', 'Male', '2004-05-19'),
(2, 'Vrunda', 'Jasoliya', 'vrundesh@gmail.com', 'vrunda.art', '123', '123', 'Bhojapra', '7265992371', 'vrundesh.jpg1712775686155', 'Female', '2004-03-25');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `contact_id` int(4) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_phone` bigint(10) NOT NULL,
  `user_email` varchar(20) NOT NULL,
  `description` varchar(255) NOT NULL,
  `entry_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`contact_id`, `user_name`, `user_phone`, `user_email`, `description`, `entry_date`) VALUES
(2, 'Karmarajsinhh', 7265992371, 'karma@gmail.com', 'Jay Mataji', '2024-04-13 14:42:01'),
(3, 'Karmarajsinhh', 7265992371, 'karma@gmail.com', 'Maaa Khodiyar', '2024-04-13 14:42:39'),
(4, 'Karmarajsinhh', 7265992371, 'karma@gmail.com', 'My name is chinki', '2024-04-13 19:08:38'),
(5, 'Khushi ', 7572839608, 'kpatel@gmail.com', 'Hello I am Alumni', '2024-04-24 17:59:50');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `event_id` bigint(4) NOT NULL,
  `ename` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `locationn` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `start_time` varchar(50) NOT NULL,
  `end_time` varchar(50) NOT NULL,
  `entry_date` date NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`event_id`, `ename`, `date`, `locationn`, `image`, `description`, `start_time`, `end_time`, `entry_date`, `status`) VALUES
(1, 'Grand Alumni Gathering of Crystal Jubilee of Gurukul', '2024-04-19', 'Bhavnagar', '123', 'The wait is over. The Grand Alumni Gathering on Crystal Jubilee of Gurukul !!!\r\n\r\nWe would be immensely delighted to invite you to the alumni meet on Apr 19 2024 at 03:00 pm at SSCCS Campus. Let\'s catch up on the old times & walk down memory lane. \r\n\r\nWe ', '09:29:16', '03:08:16', '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event_id` bigint(4) NOT NULL,
  `ename` varchar(100) NOT NULL,
  `date` datetime NOT NULL,
  `locationn` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `entry_date` datetime NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `ename`, `date`, `locationn`, `image`, `description`, `start_time`, `end_time`, `entry_date`, `status`) VALUES
(3, 'Grand Alumni Gathering of Crystal Jubilee of Gyanmanjari', '2023-05-24 00:00:00', ' Shree Swaminarayan College of Computer Science                             Gurukul Campus , Sardarnagar , Bhavnagar', 'event1.jpg1712688910790', '<p>The wait is over. The&nbsp;<strong>Grand Alumni Gathering on Crystal Jubilee of GURUKUL</strong>!!!</p><p><br></p><p>We would be immensely&nbsp;<strong>delighted to invite you to the alumni meet</strong>&nbsp;on&nbsp;19<strong> Apr 2024 at 09:00 AM</strong>&nbsp;at&nbsp;<strong>SSCCS Campus</strong>. Let\'s catch up on the old times &amp; walk down memory lane.&nbsp;</p><p><br></p><p>We would certainly want your continued and valued association with our esteemed institute.&nbsp;</p><p><br></p><p>Book Your Seat Nowww.....</p>', '09:00:00', '18:00:00', '2024-04-24 21:08:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `event_participate`
--

CREATE TABLE `event_participate` (
  `ep_id` bigint(4) NOT NULL,
  `user_id` bigint(4) NOT NULL,
  `event_id` bigint(4) NOT NULL,
  `ep_name` varchar(20) NOT NULL,
  `ep_email` varchar(20) NOT NULL,
  `number` bigint(10) NOT NULL,
  `invite` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event_participate`
--

INSERT INTO `event_participate` (`ep_id`, `user_id`, `event_id`, `ep_name`, `ep_email`, `number`, `invite`) VALUES
(16, 9, 3, 'Karmarajsinhh', 'karma@gmail.com', 7265992371, 3),
(17, 24, 3, 'Krushnakumarsinh', 'Krushnakumarsinh@gma', 6355246819, 3);

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(4) NOT NULL,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) NOT NULL,
  `image3` varchar(255) NOT NULL,
  `image4` varchar(255) NOT NULL,
  `image5` varchar(255) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `entry_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `image1`, `image2`, `image3`, `image4`, `image5`, `title`, `description`, `entry_date`) VALUES
(1, 'vrundesh.jpg1712580818464', 'vrundesh.jpg1712580818464', 'vrundesh.jpg1712580818464', 'vrundesh.jpg1712580818464', 'vrundesh.jpg1712580818464', 'Mega Celebration of G U R U K U L Alumni by karma', 'First Alumnis', '2024-04-08 18:23:38'),
(2, 'karma.jpeg1712687093827', 'karma.jpeg1712687093827', 'karma.jpeg1712687093827', 'karma.jpeg1712687093827', 'karma.jpeg1712687093827', 'KARMARAJSINH', 'MAAA Khodiyar', '2024-04-09 23:54:53');

-- --------------------------------------------------------

--
-- Table structure for table `gallerys`
--

CREATE TABLE `gallerys` (
  `img_id` bigint(4) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `des` varchar(255) NOT NULL,
  `entry_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallerys`
--

INSERT INTO `gallerys` (`img_id`, `img`, `title`, `des`, `entry_date`) VALUES
(1, 'WhatsApp Image 2024-04-23 at 4.48.43 PM.jpeg1713871234870', 'Flash 2022 ', 'Flash 2022 Event Winner In Wordpress Group', '2024-04-24'),
(2, 'WhatsApp Image 2024-04-23 at 4.49.50 PM.jpeg1713871347873', 'Navrantri', 'Garba Event 2023 Sem 6 B class boys', '2024-04-24'),
(3, 'WhatsApp Image 2024-04-23 at 4.48.43 PM (1).jpeg1713871391405', 'Kuda', 'Sem 6 B Class 2023 In Picnic', '2024-04-24'),
(4, 'peakpx.jpg1713964652577', 'Testing', 'Testing DESCRIPTION', '2024-04-24'),
(5, 'wallpaperflare.com_wallpaper.jpg1713872610830', 'Testing', 'Testing DESCRIPTION', '2024-04-24'),
(6, 'github.jpg1713872628191', 'Testing', 'Testing DESCRIPTION', '2024-04-24');

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `job_id` bigint(4) NOT NULL,
  `title` varchar(20) NOT NULL,
  `description` varchar(2555) NOT NULL,
  `salary` varchar(50) NOT NULL,
  `locationn` varchar(255) NOT NULL,
  `deadline` date NOT NULL,
  `status` int(1) NOT NULL,
  `entry_by` varchar(20) NOT NULL,
  `entry_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`job_id`, `title`, `description`, `salary`, `locationn`, `deadline`, `status`, `entry_by`, `entry_date`) VALUES
(1, 'Marketing Executive', '<p><strong>Job Details</strong></p><p><strong>Job Description</strong></p><p>Responsibility:</p><ul><li>Conduct market research and analysis to evaluate trends, brand awareness, and&nbsp;competition ventures</li><li>Write copy for diverse marketing distributions (brochures, press releases, website material, etc.)</li><li>Monitor progress of campaigns using various metrics and submit reports of performance</li><li>Organize and oversee advertising/communication campaigns and promotional events</li></ul><p>Requirements and Skills:</p><ul><li>Proven experience as a&nbsp;<strong>marketing executive</strong>&nbsp;or similar role</li><li>Good understanding of market research techniques, data analysis, and statistics methods</li><li>Thorough knowledge of strategic planning principles and marketing best practices</li><li>Proficient in MS Office and marketing software (e.g. CRM)</li><li>Familiarity with social media and web analytics (e.g. WebTrends)</li><li>Excellent communication and people skills</li><li>Strong organizational and time-management abilities</li><li>Creativity and commercial awareness</li><li>BSc/BA in marketing, business administration or relevant discipline</li></ul><p><strong>About Gurukul College</strong></p><p><strong>Gurukul College</strong> ardently believes education is a process, not a product. <strong>Gurukul College</strong> started its historic journey in 2006. Since its inception, over the past 16 years, <strong>Gurukul College</strong> has served its students with its core values as guiding principles. Our values have been the key to our success and are the basis for everything we do. These values foster an environment that keeps our performance focused on the students. Serving our students is our solitary priority.</p><p><br></p><p>Salary</p><p>As per Candidate\'s Experience</p><p><br></p>', ' As per Candidate\'s Experience', 'Bhavnagar', '2024-05-28', 1, 'Karmarajsinh', '2024-04-24'),
(4, 'Marketing Executive ', '<p><strong>Job Details</strong></p><p><strong>Job Description</strong></p><p>Responsibility:</p><ul><li>Conduct market research and analysis to evaluate trends, brand awareness, and&nbsp;competition ventures</li><li>Write copy for diverse marketing distributions (brochures, press releases, website material, etc.)</li><li>Monitor progress of campaigns using various metrics and submit reports of performance</li><li>Organize and oversee advertising/communication campaigns and promotional events</li></ul><p>Requirements and Skills:</p><ul><li>Proven experience as a&nbsp;<strong>marketing executive</strong>&nbsp;or similar role</li><li>Good understanding of market research techniques, data analysis, and statistics methods</li><li>Thorough knowledge of strategic planning principles and marketing best practices</li><li>Proficient in MS Office and marketing software (e.g. CRM)</li><li>Familiarity with social media and web analytics (e.g. WebTrends)</li><li>Excellent communication and people skills</li><li>Strong organizational and time-management abilities</li><li>Creativity and commercial awareness</li><li>BSc/BA in marketing, business administration or relevant discipline</li></ul><p><strong>About Gurukul College</strong></p><p><strong>Gurukul College</strong> ardently believes education is a process, not a product. <strong>Gurukul College</strong> started its historic journey in 2006. Since its inception, over the past 16 years, <strong>Gurukul College</strong> has served its students with its core values as guiding principles. Our values have been the key to our success and are the basis for everything we do. These values foster an environment that keeps our performance focused on the students. Serving our students is our solitary priority.</p><p><br></p><p>Salary</p><p>As per Candidate\'s Experience</p><p><br></p>', 'As per Candidate\'s E', 'Gurukul Campus , Sardarnagar , Bhavnagar', '2024-04-12', 0, 'Karmarajsinh', '2024-03-20');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` bigint(4) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(10) NOT NULL,
  `phone` bigint(10) NOT NULL,
  `username` varchar(15) DEFAULT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `passing_year` int(9) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `dob` datetime NOT NULL,
  `photo` varchar(255) NOT NULL,
  `city` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `entry_date` datetime NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `firstname`, `lastname`, `phone`, `username`, `email`, `password`, `passing_year`, `gender`, `dob`, `photo`, `city`, `state`, `address`, `entry_date`, `status`) VALUES
(9, 'Karmarajsinhh', 'Gohil', 7265992371, '2122091', 'karma@gmail.com', '2122091', 2024, 'Male', '2023-05-04 00:00:00', 'karmarajsinh.jpg1712504920235', 'Bhavnagar', 'Gujarat', '41 Neelkanth Residency', '2024-04-24 20:09:02', 1),
(13, 'Vrunda', 'Jasoliya', 7265992372, '2122254', 'vrundajasoliya@gmail', '2122254', 2024, '1', '2026-03-04 00:00:00', 'vrundesh.jpg1712866678419', 'Surat', 'Bhavnagar', 'Sardar Patel Socity , Surat 364002', '2024-04-24 20:10:24', 1),
(14, 'Kuldipsinh', 'Gohil', 6353220031, '2122125', 'kuldipsinh0031@gmail', '2122125', 2024, 'Male', '2006-05-03 00:00:00', 'kuldipsinh.jpg1713038908252', 'Bhavnagar', 'Gujarat', 'Chitra GIDC', '2024-04-24 20:10:38', 1),
(16, 'Khushi ', 'Patel', 7572839608, '2122106', 'kpatel@gmail.com', '2122106', 0, 'Female', '2004-07-05 00:00:00', 'PHD.jpeg1713623941852', 'Bhavnagar', 'Gujarat', '', '2024-04-20 20:09:01', 1),
(22, 'Jaypal', 'Sarvaiya', 7046245404, '2122083', 'Jaypal@gmail.com', '2122083', 2024, 'Male', '2004-09-09 00:00:00', 'WhatsApp Image 2024-04-24 at 8.14.55 PM.jpeg1713970506160', 'Bhavnagar', 'Gujarat', 'Akhlol , Bhavnagar', '2024-04-24 20:25:06', 1),
(23, 'Jainish', 'Patel', 9104780101, '2122074', 'Jainish@gmail.com', '2122074', 2024, 'Male', '2003-11-28 00:00:00', 'WhatsApp Image 2024-04-24 at 8.17.35 PM.jpeg1713970604228', 'Bhavnagar', 'Gujarat', 'Near Bhagavati Circle Bhavnagar', '2024-04-24 20:26:44', 1),
(24, 'Krushnakumarsinh', 'Zala', 6355246819, '2122120', 'Krushnakumarsinh@gma', '2122120', 2024, 'Male', '2019-07-04 00:00:00', 'WhatsApp Image 2024-04-24 at 8.22.25 PM.jpeg1713971149114', 'Surendranagar', 'Gujarat', 'Surendranagar,Gujarat', '2024-04-24 20:35:49', 1),
(25, 'Imran', 'Malek', 9104709087, '2122071', 'Imranmalek@gmail.com', '2122071', 2024, 'Male', '2004-10-20 00:00:00', 'WhatsApp Image 2024-04-24 at 8.22.25 PM (3).jpeg1713970710684', 'Bhavnagar', 'Gujarat', 'Kumbharvada, Bhavnagar', '2024-04-24 20:28:30', 1),
(26, 'Karan', 'Kotar', 9664787228, '2122090', 'Karankotar@gmail.com', '2122090', 2024, 'Male', '2004-07-19 00:00:00', 'WhatsApp Image 2024-04-24 at 8.22.25 PM (1).jpeg1713970800526', 'Surat', 'Gujarat', 'Mota Varchha Surat', '2024-04-24 20:30:00', 1),
(27, 'Keval', 'Chavda', 8511478171, '2122098', 'ck@gmail.com', '2122098', 2024, 'Male', '2004-07-16 00:00:00', 'WhatsApp Image 2024-04-24 at 8.22.24 PM (2).jpeg1713970902848', 'Bhavnagar', 'Gujarat', 'Chitra GIDC Bhavnagar', '2024-04-24 20:31:42', 1),
(28, 'Keval', 'Vanani', 9429172304, '2122097', 'kevalvanani@gmail.co', '2122097', 2024, 'Male', '0000-00-00 00:00:00', 'WhatsApp Image 2024-04-24 at 8.22.24 PM (1).jpeg1713970990970', 'Bhavnagar', 'Gujarat', 'Desainagar Near Chitra', '2024-04-24 20:33:10', 1),
(29, 'Jay', 'Kevadiya', 9889798431, '2122083', 'Jaykevadiya@gmail.co', '2122083', 2024, 'Male', '2024-03-29 00:00:00', 'WhatsApp Image 2024-04-24 at 8.22.24 PM.jpeg1713971072701', 'Bhavnagar', 'Gujarat', 'Bhavnagar', '2024-04-24 20:34:32', 1),
(30, 'Kiran', 'Maru', 9875641238, '2122112', 'kiranmaru@gmail.com', '2122112', 2024, 'Male', '2004-10-27 00:00:00', 'WhatsApp Image 2024-04-24 at 8.22.25 PM (2).jpeg1713971138692', 'Bhavnagar', 'Gujarat', 'Kumbharvad Bhavnagar', '2024-04-24 20:35:38', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `event_participate`
--
ALTER TABLE `event_participate`
  ADD PRIMARY KEY (`ep_id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallerys`
--
ALTER TABLE `gallerys`
  ADD PRIMARY KEY (`img_id`);

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`job_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` bigint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `contact_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `event_id` bigint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` bigint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `event_participate`
--
ALTER TABLE `event_participate`
  MODIFY `ep_id` bigint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `gallerys`
--
ALTER TABLE `gallerys`
  MODIFY `img_id` bigint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `job_id` bigint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` bigint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
