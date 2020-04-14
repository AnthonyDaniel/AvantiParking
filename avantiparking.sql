-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-03-2020 a las 05:38:01
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `avantiparking`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `email_notifications`
--

CREATE TABLE `email_notifications` (
  `id` int(11) NOT NULL,
  `to_email` varchar(120) DEFAULT NULL,
  `subject` varchar(120) DEFAULT NULL,
  `text` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `viewed` tinyint(1) DEFAULT 0,
  `date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `email_notifications`
--

INSERT INTO `email_notifications` (`id`, `to_email`, `subject`, `text`, `user_id`, `viewed`, `date`) VALUES
(3, 'anthony.marin@decimoinc.com', 'Prueba de notificaciones', 'Este es el 1', 3, 0, '0000-00-00 00:00:00'),
(4, 'anthonymmarinbolivar@gmail.com', 'Prueba de notificaciones', 'Este es el 1', 3, 0, '0000-00-00 00:00:00'),
(5, 'anthonymmarinbolivar@gmail.com', 'Prueba de notificaciones', 'Este es el 1', 3, 0, '0000-00-00 00:00:00'),
(6, 'anthony.marin@decimoinc.com', 'Prueba de notificaciones', 'Este es el 1', 3, 0, '0000-00-00 00:00:00'),
(7, 'anthonymmarinbolivar@gmail.com', 'Prueba de notificaciones', 'Este es el 1', 3, 0, '0000-00-00 00:00:00'),
(8, 'anthonymmarinbolivar@gmail.com', 'Prueba de notificaciones', 'Este es el 1', 3, 0, '0000-00-00 00:00:00'),
(9, 'anthonymmarinbolivar@gmail.com', 'Prueba de notificaciones', 'Este es el 1', 3, 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `headquarter`
--

CREATE TABLE `headquarter` (
  `id_headquarter` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parking_lot`
--

CREATE TABLE `parking_lot` (
  `id_parking_lot` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `headquarter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserve`
--

CREATE TABLE `reserve` (
  `id_reservation` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `user` int(11) NOT NULL,
  `vehicle` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserve_detail`
--

CREATE TABLE `reserve_detail` (
  `id_reserve_detail` int(11) NOT NULL,
  `date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `reserve_state` tinyint(4) NOT NULL,
  `end_date_extend` date,
  `space` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `space`
--

CREATE TABLE `space` (
  `id_space` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `state` tinyint(4) NOT NULL,
  `user` int(11) DEFAULT NULL,
  `zone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `role` tinyint(4) DEFAULT NULL,
  `registered` datetime NOT NULL DEFAULT current_timestamp(),
  `provider` varchar(255) NOT NULL,
  `provider_id` varchar(255) DEFAULT NULL,
  `headquarter` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `email`, `image_url`, `name`, `role`, `registered`, `provider`, `provider_id`, `headquarter`) VALUES
(3, 'anthonymmarinbolivar@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14Gi37ow_5wX2aUf0OGn0PCQzAjHRXr2XORty2uk4lUs', 'Anthony M', 0, '2020-03-12 19:39:30', 'google', '104381904823282008651', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehicle`
--

CREATE TABLE `vehicle` (
  `increment` int(11) NOT NULL,
  `license_plate` varchar(45) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `model` varchar(45) NOT NULL,
  `user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zone`
--

CREATE TABLE `zone` (
  `id_zone` int(11) NOT NULL,
  `name` varchar(10) NOT NULL,
  `parking_lot` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `start` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `email_notifications`
--
ALTER TABLE `email_notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_email_notifications_user1_idx` (`user_id`);

--
-- Indices de la tabla `headquarter`
--
ALTER TABLE `headquarter`
  ADD PRIMARY KEY (`id_headquarter`);

--
-- Indices de la tabla `parking_lot`
--
ALTER TABLE `parking_lot`
  ADD PRIMARY KEY (`id_parking_lot`),
  ADD KEY `fk_parking_lot_headquarter_idx` (`headquarter`);

--
-- Indices de la tabla `reserve`
--
ALTER TABLE `reserve`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `fk_reserve_user1_idx` (`user`),
  ADD KEY `fk_reserve_vehicle1_idx` (`vehicle`);

--
-- Indices de la tabla `reserve_detail`
--

--
-- Indices de la tabla `space`
--
ALTER TABLE `space`
  ADD PRIMARY KEY (`id_space`),
  ADD KEY `fk_space_zone1_idx` (`zone`),
  ADD KEY `fk_space_user_idx` (`user`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_user_headquarter_idx` (`headquarter`);

--
-- Indices de la tabla `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`increment`),
  ADD UNIQUE KEY `license_plate` (`license_plate`),
  ADD KEY `fk_vehicle_user1_idx` (`user`);

--
-- Indices de la tabla `zone`
--
ALTER TABLE `zone`
  ADD PRIMARY KEY (`id_zone`),
  ADD KEY `fk_zone_parking_lot1_idx` (`parking_lot`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `email_notifications`
--
ALTER TABLE `email_notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `headquarter`
--
ALTER TABLE `headquarter`
  MODIFY `id_headquarter` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `parking_lot`
--
ALTER TABLE `parking_lot`
  MODIFY `id_parking_lot` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reserve`
--
ALTER TABLE `reserve`
  MODIFY `id_reservation` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reserve_detail`
--
ALTER TABLE `reserve_detail`
  MODIFY `id_reserve_detail` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `space`
--
ALTER TABLE `space`
  MODIFY `id_space` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `increment` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zone`
--
ALTER TABLE `zone`
  MODIFY `id_zone` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `email_notifications`
--
ALTER TABLE `email_notifications`
  ADD CONSTRAINT `FKd86c7fpsvwwnxq215gspj8dg6` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `parking_lot`
--
ALTER TABLE `parking_lot`
  ADD CONSTRAINT `FKioqp07pvsr26gwpfjfys1uslq` FOREIGN KEY (`headquarter`) REFERENCES `headquarter` (`id_headquarter`);

--
-- Filtros para la tabla `reserve`
--
ALTER TABLE `reserve`
  ADD CONSTRAINT `FK9p0j7pl3dqli4q1pa0d0gu7om` FOREIGN KEY (`vehicle`) REFERENCES `vehicle` (`license_plate`),
  ADD CONSTRAINT `FKgy7m20tr83hy2grolgcjem5m7` FOREIGN KEY (`user`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `reserve_detail`
--
ALTER TABLE `reserve_detail`
  ADD CONSTRAINT `fk_reserveDetail_space1` FOREIGN KEY (`space`) REFERENCES `space` (`id_space`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `space`
--
ALTER TABLE `space`
  ADD CONSTRAINT `FKht2b1xbdmbsufqijafwuvvix8` FOREIGN KEY (`zone`) REFERENCES `zone` (`id_zone`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FKmfioxmifjm40a1j0t54vo2r7s` FOREIGN KEY (`headquarter`) REFERENCES `headquarter` (`id_headquarter`);

--
-- Filtros para la tabla `vehicle`
--
ALTER TABLE `vehicle`
  ADD CONSTRAINT `FKafmyw13bui0mea0w4d3css2sr` FOREIGN KEY (`user`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `zone`
--
ALTER TABLE `zone`
  ADD CONSTRAINT `FKdf15k78mv3n5pt2214c63ohnc` FOREIGN KEY (`parking_lot`) REFERENCES `parking_lot` (`id_parking_lot`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
