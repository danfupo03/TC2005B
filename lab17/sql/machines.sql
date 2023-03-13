-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 12-03-2023 a las 17:20:22
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `machines`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `durometros`
--

CREATE TABLE `durometros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `imagen` varchar(512) DEFAULT NULL,
  `descripcion` varchar(512) DEFAULT NULL,
  `handle` varchar(20) DEFAULT NULL,
  `pdf` varchar(512) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `durometros`
--

INSERT INTO `durometros` (`id`, `nombre`, `imagen`, `descripcion`, `handle`, `pdf`, `created_at`) VALUES
(1, 'Máquina probadora de durezas Vickers y MicroVickers 0.005kgf-62.5kgf KB 30 S FA', 'https://image.jimcdn.com/app/cms/image/transf/dimension=384x10000:format=png/path/s09cbab276dc8a8fd/image/i2aa11e23e2b46b45/version/1512605484/image.png', 'Máquina totalmente automática Vickers KB 30 S FA.\r\n\r\nLa nueva generación de máquinas de prueba de dureza micro / macro de KB Prüftechnik GmbH convence por su extraordinaria precisión y reproducibilidad.', '@KB', NULL, '2023-03-12 17:14:04'),
(2, 'Máquina probadora de durezas Vickers y MicroVickers 0,01 kgf-62,5 kgf KB 30 SR', 'https://image.jimcdn.com/app/cms/image/transf/dimension=384x10000:format=png/path/s09cbab276dc8a8fd/image/i52debb27af1c48ed/version/1520446905/image.png', 'Intervalo de prueba en diferentes etapas de extensión 30 y 62,5 kgf. Las máquinas probadoras de durezas KB se adaptan de manera óptima a las necesidades del usuario.', '@KB', NULL, '2023-03-12 17:19:22'),
(3, 'Medidor de espesor de pared', 'https://image.jimcdn.com/app/cms/image/transf/dimension=314x10000:format=png/path/s09cbab276dc8a8fd/image/i8f34e17a567ff6c6/version/1596649492/image.png', '• Patente UA202002129 por MICROTECH\r\n\r\n• Para medir paredes de tubos\r\n\r\n• Indicador analógico, digital o computarizado.\r\n\r\n• Punto de contacto estándar con un diámetro de 6 mm (modificaciones disponibles con otros dimetros)\r\n\r\n• Modificación con transferencia inalámbrica de datos a dispositivos Windows, Android, iOS con una distancia de hasta 50 m\r\n\r\n• Control metrológico al 100% en laboratorio acreditado por ISO17025 (Ilac MRA)', '@MICROTECH', NULL, '2023-03-12 17:19:22');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `durometros`
--
ALTER TABLE `durometros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `durometros`
--
ALTER TABLE `durometros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
