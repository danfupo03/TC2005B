const express = require('express');
const path = require('path');

const router = express.Router();

const perros = [
    {
        nombre: "Pug",
        imagen: "https://img.freepik.com/foto-gratis/perro-pug-aislado-fondo-blanco_2829-11416.jpg?w=2000",
        descripcion: "Pug es una raza de perro de tamaño pequeño, de origen chino, que se caracteriza por su hocico corto y su pelaje tupido y liso.",
        handle: "@pug",
        precio: "1000",
    },
    {
        nombre: "Bulldog",
        imagen: "https://cdn.pixabay.com/photo/2020/07/20/06/42/english-bulldog-5422018_1280.jpg",
        descripcion: "El bulldog inglés es una raza de perro de tamaño pequeño, de tipo moloso, con un carácter fuerte y valiente.",
        handle: "@bulldog",
        precio: "2000",
    },
    {
        nombre: "Pitbull",
        imagen: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/10/31161633/1155.jpg",
        descripcion: "El pitbull es una raza de perro de tamaño mediano, de tipo moloso, con un carácter fuerte y valiente.",
        handle: "@pitbull",
        precio: "3000",
    },
    {
        nombre: "Chihuahua",
        imagen: "https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0034_chihuahua_smooth.jpg",
        descripcion: "El chihuahua es una raza de perro de tamaño pequeño, de origen mexicano, que se caracteriza por su hocico corto y su pelaje tupido y liso.",
        handle: "@chihuahua",
        precio: "4000",
    },
    {
        nombre: "Golden Retriever",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_995116-MLM53769715896_022023-O.jpg",
        descripcion: "El golden retriever es una raza de perro de tamaño mediano, de origen británico, que se caracteriza por su hocico corto y su pelaje tupido y liso.",
        handle: "@golden",
        precio: "5000",
    },
    {
        nombre: "Labrador",
        imagen: "https://www.zooplus.es/magazine/wp-content/uploads/2019/04/labrador-3-Farben.jpg",
        descripcion: "El labrador es una raza de perro de tamaño mediano, de origen británico, que se caracteriza por su hocico corto y su pelaje tupido y liso.",
        handle: "@labrador",
        precio: "6000",
    },
    {
        nombre: "Poodle",
        imagen: "https://purina.com.mx/sites/default/files/styles/webp/public/2022-10/purina-que-sabes-de-los-perros-poodle_0.jpg.webp?itok=Kv2tbJf6",
        descripcion: "El poodle es una raza de perro de tamaño mediano, de origen británico, que se caracteriza por su hocico corto y su pelaje tupido y liso.",
        handle: "@poodle",
        precio: "7000",
    },
    {
        nombre: "Beagle",
        imagen: "https://i0.wp.com/blog.mascotaysalud.com/wp-content/uploads/2019/05/CACHORRO-BEAGLE.jpg?fit=865%2C540&ssl=1",
        descripcion: "El beagle es una raza de perro de tamaño mediano, de origen británico, que se caracteriza por su hocico corto y su pelaje tupido y liso.",
        handle: "@beagle",
        precio: "8000",
    },
    {
        nombre: "Dalmata",
        imagen: "https://images.hola.com/imagenes/estar-bien/20200828174216/razas-perro-dalmata-gt/0-859-148/dalmata-t.jpg",
        descripcion: "El dalmata es una raza de perro de tamaño mediano, de origen británico, que se caracteriza por su hocico corto y su pelaje tupido y liso.",
        handle: "@dalmata",
        precio: "9000",
    },
    {
        nombre: "Pastor Aleman",
        imagen: "https://images.unsplash.com/photo-1656191166912-297d52280911?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVycm8lMjBwYXN0b3IlMjBhbGVtYW58ZW58MHx8MHx8&w=1000&q=80",
        descripcion: "El pastor aleman es una raza de perro de tamaño mediano, de origen británico, que se caracteriza por su hocico corto y su pelaje tupido y liso.",
        handle: "@pastor",
        precio: "10000",
    },
];

router.get('/lista', (request, response, next) => {
    response.render('lista', {perros: perros});
});

router.get('/home', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;