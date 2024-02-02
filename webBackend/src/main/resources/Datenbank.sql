-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 01. Feb 2024 um 18:36
-- Server-Version: 10.4.28-MariaDB
-- PHP-Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `webappuni` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `webappuni`;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `webappuni`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `album`
--

CREATE TABLE `album`
(
    `id`        int(10) UNSIGNED NOT NULL,
    `artist_id` int(10) UNSIGNED NOT NULL,
    `name`      varchar(50)      NOT NULL,
    `year`      int(10) UNSIGNED NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;

--
-- Daten für Tabelle `album`
--

INSERT INTO `album` (`id`, `artist_id`, `name`, `year`)
VALUES (1, 1, '...And Justice For All', 1988),
       (2, 1, 'Black Album', 1991),
       (3, 1, 'Master of Puppets', 1986),
       (4, 2, 'Endgame', 2009),
       (5, 2, 'Peace Sells', 1986),
       (6, 3, 'The Greater of 2 Evils', 2004),
       (7, 4, 'Reptile', 2001),
       (8, 4, 'Riding with the King', 2000),
       (9, 5, 'Greatest Hits', 1992),
       (10, 6, 'Greatest Hits', 2004),
       (11, 7, 'All-Time Greatest Hits', 1975),
       (12, 8, 'Greatest Hits', 2003),
       (13, 9, 'Sgt. Pepper\'s Lonely Hearts Club Band', 1967);

-- --------------------------------------------------------

--
-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `app_user`
--

CREATE TABLE `app_user`
(
    `id`         bigint(20)   NOT NULL,
    `first_name` varchar(100) NOT NULL,
    `last_name`  varchar(100) NOT NULL,
    `login`      varchar(100) NOT NULL,
    `password`   varchar(100) NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;

--
-- Daten für Tabelle `app_user`
--

INSERT INTO `app_user` (`id`, `first_name`, `last_name`, `login`, `password`)
VALUES (1, 'Anke', 'Langrehr', 'testUser', '$2a$10$kZD.jakgxn.ryOuqTur6ieLP35Q9fTC9I6hSSfuFvUJ76PItNxtpW');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `artist`
--

CREATE TABLE `artist`
(
    `id`              int(10) UNSIGNED NOT NULL,
    `record_label_id` int(10) UNSIGNED NOT NULL,
    `name`            varchar(50)      NOT NULL,
    `image_link`      varchar(255) DEFAULT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;

--
-- Daten für Tabelle `artist`
--

INSERT INTO `artist` (`id`, `record_label_id`, `name`, `image_link`)
VALUES (1, 1, 'Metallica', 'https://images.universal-music.de/img/assets/580/580155/195/metallicapng.png'),
       (2, 1, 'Megadeth', 'https://www.laut.de/Megadeth/megadeth-167223.jpg'),
       (3, 1, 'Anthrax',
        'https://www.rocks-magazin.de/sites/default/files/styles/header_gross_skaliert_489/public/articles/anthrax-band-2018-NYC-skyline-rocks-837x489.jpg?itok=i3POL-HS'),
       (4, 2, 'Eric Clapton', 'https://i0.web.de/image/346/37122346,pd=2,f=sdata11/eric-clapton.jpg'),
       (5, 2, 'ZZ Top',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/ZZ_Top_Live.jpg/1200px-ZZ_Top_Live.jpg'),
       (6, 2, 'Van Halen', 'https://m.media-amazon.com/images/I/71wB2hrmt0L._AC_UF894,1000_QL80_.jpg'),
       (7, 3, 'Lynyrd Skynyrd', 'https://www.laut.de/Lynyrd-Skynyrd/lynyrd-skynyrd-186430.jpg'),
       (8, 3, 'AC/DC',
        'https://www.swp.de/imgs/07/1/2/8/1/1/8/7/9/7/tok_934e63cfe1250cca59a6bfb1891f0aec/w1200_h675_x750_y474_53594149.jpg-0860cece8a0d2151.jpeg'),
       (9, 6, 'The Beatles', 'https://www1.wdr.de/radio/wdr5/beatles122~_v-gseaclassicxl.jpg');

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `playlist`
--

CREATE TABLE `playlist`
(
    `id`          int(11) NOT NULL,
    `owner_id`    int(11)      DEFAULT NULL,
    `name`        varchar(255) DEFAULT NULL,
    `description` varchar(255) DEFAULT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--


--
-- Tabellenstruktur für Tabelle `record_label`
--

CREATE TABLE `record_label`
(
    `id`   int(10) UNSIGNED NOT NULL,
    `name` varchar(50)      NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;

--
-- Daten für Tabelle `record_label`
--

INSERT INTO `record_label` (`id`, `name`)
VALUES (1, 'Blackened'),
       (6, 'Capitol'),
       (5, 'Elektra'),
       (4, 'MCA'),
       (3, 'Universal'),
       (2, 'Warner Bros');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `roles`
--

CREATE TABLE `roles`
(
    `id`   int(11) NOT NULL,
    `name` enum ('ROLE_ADMIN','ROLE_MODERATOR','ROLE_USER') DEFAULT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `song`
--

CREATE TABLE `song`
(
    `id`       int(11)    NOT NULL,
    `album_id` int(11)      DEFAULT NULL,
    `name`     varchar(255) DEFAULT NULL,
    `song_url` varchar(255) DEFAULT NULL,
    `duration` bigint(20) NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;

--
-- Daten für Tabelle `song`
--

INSERT INTO `song` (`id`, `album_id`, `name`, `song_url`, `duration`)
VALUES (1, 1, 'One', 'apK2jCrfnsk?si=US4wROGcF5Ot5jri', 7),
       (3, 2, 'Enter Sandman', 'CD-E-LDc384?si=_IfqkJws0RsFuyx5', 5.3),
       (5, 3, 'Master of Puppets', 'E0ozmU9cJDg?si=mA-yugl2KuvYdKuS', 8.35),
       (7, 4, 'Dialectic Chaos', 'Eq3QYXDyojE?si=BVRRLlnIN1OIf7Jt', 2.26),
       (9, 5, 'Peace Sells', 'LVhJy-CR64Q?si=FA0Vhzs5_kyqRsGt', 4.09),
       (11, 6, 'Madhouse', 'uGHsxMqpL0c?si=C39J6guXf-RokfIh', 4.26),
       (13, 7, 'Reptile', 'sJhhwve_3wc?si=2kNOtJHrkRIobiWe', 3.36),
       (15, 8, 'Riding with the King', 'RYJIc9bjENk?si=aCibuaAQF91vXqE4', 4.23),
       (17, 9, 'Sharp Dressed Man', '7wRHBLwpASw?si=PTMAIXbI7RsI58OJ', 4.15),
       (19, 10, 'Eruption', 'M4Czx8EWXb0?si=KB62IHjWYBcdiju6', 1.43),
       (21, 11, 'Sweet Home Alabama', '9bv-wPYRMDI?si=Q8fqGQok9A5eWIFW', 4.45),
       (23, 12, 'Thunderstruck', 'v2AC41dglnM?si=zyNRfv7f5zLlPAEr', 4.52),
       (25, 13, 'Sgt. Pepper''s Lonely Hearts Club Band', 'VtXl8xAPAtA?si=LUXqncXyX-v5B_aM', 2.0333),
       (26, 13, 'With a Little Help from My Friends', '', 2.7333),
       (27, 13, 'Lucy in the Sky with Diamonds', '0C58ttB2-Qg?si=o68_o8cnrMHhrIgg', 3.4666),
       (28, 13, 'Getting Better', 'EGlo9LzmOME?si=5LFQnIT7b3KN95Uc', 2.80),
       (29, 13, 'Fixing a Hole', 'UPBd8eHQqIw?si=gehvCp9zDJkiq5QS', 2.60),
       (30, 13, 'She''s Leaving Home', 'VaBPY78D88g?si=ouzSfcPa3ZAuPLTo', 3.5833),
       (31, 13, 'Being for the Benefit of Mr. Kite!', 'bJVWZy4QOy0?si=ytABDj3LcYfEw_PP', 2.6166),
       (32, 13, 'Within You Without You', 'HsffxGyY4ck?si=kwNI-U0-UCXFZsbm', 5.066),
       (33, 13, 'When I''m Sixty-Four', 'HCTunqv1Xt4?si=ZZksaKxtZyqd5tFX', 2.6166),
       (34, 13, 'Lovely Rita', 'ysDwR5SIR1Q?si=7Qhr2CV_Qgn2i_bH', 2.7),
       (35, 13, 'Good Morning Good Morning', 'sjb9AxDkwAQ?si=xzDO4cvulZM05yYh', 2.6833),
       (36, 13, 'Sgt. Pepper''s Lonely Hearts Club Band (Reprise)', 'VtXl8xAPAtA?si=keAMX4NjgR7Y_ybQ', 1.3166),
       (37, 13, 'A Day in the Life', 'YSGHER4BWME?si=-Eq2PdvCWL2JNmDq', 5.65);

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user`
(
    `id`        int(11) NOT NULL,
    `email`     varchar(255) DEFAULT NULL,
    `name`      varchar(255) DEFAULT NULL,
    `role`      tinyint(4)   DEFAULT NULL,
    `password`  varchar(255) DEFAULT NULL,
    `last_name` varchar(255) DEFAULT NULL,
    `login`     varchar(255) DEFAULT NULL,
    `username`  varchar(255) DEFAULT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`id`, `email`, `name`, `role`, `password`, `last_name`, `login`, `username`)
VALUES (202, 'testUser@test.de', NULL, NULL, '$2a$10$k5a5YvEL2m8eGdEH.sjkdOB3/cE/Dkt7XC/hchbM06c3fQFRvaHEW', NULL, NULL,
        'testUser@test.de'),
       (203, 'testUser@testuser.de', NULL, NULL, '$2a$10$Uze.HefpAGsr9jNBYpklyug7cYsMZEAMyAUXYdw2pImZyrRo7V5Tq', NULL,
        NULL, 'testUser@testuser.de');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user_details`
--

CREATE TABLE `user_details`
(
    `id`            int(11) NOT NULL,
    `access_token`  varchar(255) DEFAULT NULL,
    `ref_id`        varchar(255) DEFAULT NULL,
    `refresh_token` varchar(255) DEFAULT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--

-- Indizes für die Tabelle `album`
--
ALTER TABLE `album`
    ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `uk_name_in_album` (`artist_id`, `name`),
    ADD KEY `fk_artist_in_album` (`artist_id`);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT = @OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS = @OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION = @OLD_COLLATION_CONNECTION */;
