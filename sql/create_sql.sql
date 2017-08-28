-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 ?08 ?28 ?10:21
-- 服务器版本: 5.5.40
-- PHP 版本: 5.6.25

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `cloudmusic`
--
DROP DATABASE `cloudmusic`;
CREATE DATABASE `cloudmusic` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `cloudmusic`;

-- --------------------------------------------------------

--
-- 表的结构 `user_comment`
--

DROP TABLE IF EXISTS `user_comment`;
CREATE TABLE IF NOT EXISTS `user_comment` (
  `auto_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `id` int(20) NOT NULL,
  `song_id` int(11) DEFAULT NULL COMMENT '歌曲ID',
  `name` text NOT NULL,
  `comment` text NOT NULL,
  `top100_visible` tinyint(4) NOT NULL DEFAULT '1' COMMENT '排行100: 不可见0 可见1',
  PRIMARY KEY (`auto_id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=28049 ;

-- --------------------------------------------------------

--
-- 表的结构 `user_love_songs`
--

DROP TABLE IF EXISTS `user_love_songs`;
CREATE TABLE IF NOT EXISTS `user_love_songs` (
  `auto_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `id` int(20) NOT NULL COMMENT '用户ID',
  `song_id` int(11) DEFAULT NULL COMMENT '歌曲ID',
  `name` varchar(200) NOT NULL COMMENT '昵称',
  `sex` char(4) DEFAULT '0' COMMENT '性别',
  `birthday` date DEFAULT NULL COMMENT '生日',
  `total` int(11) DEFAULT '0' COMMENT '累计听歌',
  `province` varchar(50) DEFAULT '0' COMMENT '省份',
  `city` varchar(50) DEFAULT '0' COMMENT '城市',
  `status` tinyint(4) DEFAULT '0' COMMENT '用户信息写入状态',
  `1` text NOT NULL,
  `2` text NOT NULL,
  `3` text NOT NULL,
  `4` text NOT NULL,
  `5` text NOT NULL,
  `6` text NOT NULL,
  `7` text NOT NULL,
  `8` text NOT NULL,
  `9` text NOT NULL,
  `10` text NOT NULL,
  `11` text NOT NULL,
  `12` text NOT NULL,
  `13` text NOT NULL,
  `14` text NOT NULL,
  `15` text NOT NULL,
  `16` text NOT NULL,
  `17` text NOT NULL,
  `18` text NOT NULL,
  `19` text NOT NULL,
  `20` text NOT NULL,
  `21` text NOT NULL,
  `22` text NOT NULL,
  `23` text NOT NULL,
  `24` text NOT NULL,
  `25` text NOT NULL,
  `26` text NOT NULL,
  `27` text NOT NULL,
  `28` text NOT NULL,
  `29` text NOT NULL,
  `30` text NOT NULL,
  `31` text NOT NULL,
  `32` text NOT NULL,
  `33` text NOT NULL,
  `34` text NOT NULL,
  `35` text NOT NULL,
  `36` text NOT NULL,
  `37` text NOT NULL,
  `38` text NOT NULL,
  `39` text NOT NULL,
  `40` text NOT NULL,
  `41` text NOT NULL,
  `42` text NOT NULL,
  `43` text NOT NULL,
  `44` text NOT NULL,
  `45` text NOT NULL,
  `46` text NOT NULL,
  `47` text NOT NULL,
  `48` text NOT NULL,
  `49` text NOT NULL,
  `50` text NOT NULL,
  `51` text NOT NULL,
  `52` text NOT NULL,
  `53` text NOT NULL,
  `54` text NOT NULL,
  `55` text NOT NULL,
  `56` text NOT NULL,
  `57` text NOT NULL,
  `58` text NOT NULL,
  `59` text NOT NULL,
  `60` text NOT NULL,
  `61` text NOT NULL,
  `62` text NOT NULL,
  `63` text NOT NULL,
  `64` text NOT NULL,
  `65` text NOT NULL,
  `66` text NOT NULL,
  `67` text NOT NULL,
  `68` text NOT NULL,
  `69` text NOT NULL,
  `70` text NOT NULL,
  `71` text NOT NULL,
  `72` text NOT NULL,
  `73` text NOT NULL,
  `74` text NOT NULL,
  `75` text NOT NULL,
  `76` text NOT NULL,
  `77` text NOT NULL,
  `78` text NOT NULL,
  `79` text NOT NULL,
  `80` text NOT NULL,
  `81` text NOT NULL,
  `82` text NOT NULL,
  `83` text NOT NULL,
  `84` text NOT NULL,
  `85` text NOT NULL,
  `86` text NOT NULL,
  `87` text NOT NULL,
  `88` text NOT NULL,
  `89` text NOT NULL,
  `90` text NOT NULL,
  `91` text NOT NULL,
  `92` text NOT NULL,
  `93` text NOT NULL,
  `94` text NOT NULL,
  `95` text NOT NULL,
  `96` text NOT NULL,
  `97` text NOT NULL,
  `98` text NOT NULL,
  `99` text NOT NULL,
  `100` text NOT NULL,
  PRIMARY KEY (`auto_id`),
  KEY `status` (`status`),
  KEY `sex` (`sex`,`province`,`city`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13706 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
