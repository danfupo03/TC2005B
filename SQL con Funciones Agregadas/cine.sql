/*
Película (título, año, duración, encolor, presupuesto, nomestudio, idproductor)
Elenco (título, año, nombre, sueldo)
Actor (nombre, dirección, telefono, fechanacimiento, sexo)
Productor (idproductor, nombre, dirección, teléfono)
Estudio (nomestudio, dirección)
*/

-- 1. El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado. --
SELECT nombre, SUM(sueldo) AS IngresoTotal
FROM Actor, Elenco
WHERE Actor.nombre = Elenco.nombre
GROUP BY nombre
ORDER BY IngresoTotal DESC;

-- 2. El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's. -- 
SELECT Estudio.nomestudio, SUM(Pelicula.presupuesto) as Total Presupuestos
FROM Estudio, Película
WHERE Estudio.nomestudio = Pelicula.nomestudio 
AND Pelicula.año >= 1980 AND Pelicula.año <= 1989
GROUP BY Estudio.nomestudio
ORDER BY Total Presupuestos DESC

-- 3. Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones de dolares por película. --
SELECT Actor.nombre, AVG(Elenco.sueldo) as 5 million dollar Club
FROM Actor, Elenco
WHERE Actor.nombre = Elenco.nombre 
AND Actor.sexo = M
HAVING AVG(sueldo) >= 5000000
GROUP BY Actor.nombre
ORDER BY 5 million dollar Club DESC

-- 4. Título y año de producción de las películas con menor presupuesto. (Por ejemplo, la película de Titanic se ha producido en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue filmada con menor presupuesto). --
SELECT Pelicula.titulo, Pelicula.año, MIN(Pelicula.presupuesto) AS Menor Presupuesto
FROM Pelicula
GROUP BY Pelicula.titulo, Pelicula.año
ORDER BY Menor Presupuesto ASC

-- 5. Mostrar el sueldo de la actriz mejor pagada. --
SELECT Actor.nombre, MAX(Elenco.sueldo) as 'Mejor Pagada'
FROM Actor, Elenco
WHERE Actor.nombre = Elenco.nombre
AND Actor.sexo = F
GROUP BY Actor.nombre
ORDER BY 'Mejor Pagada' DESC