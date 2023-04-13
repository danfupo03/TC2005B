const Machine = require("../models/cym.model");

exports.get_buscar = (request, response, next) => {
  Machine.find(request.params.valor_busqueda)
    .then(([rows, fieldData]) => {
      response.status(200).json({ machines: rows });
    })
    .catch((error) => {
      console.log(error);
      response.status(500).json({ message: "Internal Server Error" });
    });
};

exports.get_lista = (request, response, next) => {
  let counter = request.cookies.counter || 0;

  // increment the counter and set the cookie
  counter++;
  response.cookie("counter", counter);

  const marca = request.params.marca || 0;

  Machine.fetch(marca)
    .then(([rows, fieldData]) => {
      response.render("lista", {
        machines: rows,
        ultimo_machine: request.session.ultimo_machine || "",
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || "",
        privilegios: request.session.privilegios || [],
      });
    })
    .catch((err) => console.log(err));
};

exports.get_nuevo = (request, response, next) => {
  response.render("nuevo", {
    isLoggedIn: request.session.isLoggedIn || false,
    nombre: request.session.nombre || "",
    csrfToken: request.csrfToken(),
  });
};

exports.post_nuevo = (request, response, next) => {
  const machine = new Machine({
    nombre: request.body.nombre,
    descripcion: request.body.descripcion,
    marca: request.body.marca,
    tipo: request.body.tipo,
    imagen: request.files.imagen[0].filename,
    pdf: request.files.pdf[0].filename,
  });
  machine.save().then(([rows, fieldData]) => {
    request.session.ultimo_machine = machine.nombre;
    response.status(300).redirect("/lista");
  });
};

exports.get_index = (request, response, next) => {
  response.render("index", {
    isLoggedIn: request.session.isLoggedIn || false,
    nombre: request.session.nombre || "",
  });
};

exports.get_apis = (request, response, next) => {
  response.render("apis", {
    isLoggedIn: request.session.isLoggedIn || false,
    nombre: request.session.nombre || "",
  });
};

exports.get_historia = (request, response, next) => {
  response.render("historia", {
    isLoggedIn: request.session.isLoggedIn || false,
    nombre: request.session.nombre || "",
  });
};

exports.get_laboratorio = (request, response, next) => {
  response.render("laboratorio", {
    isLoggedIn: request.session.isLoggedIn || false,
    nombre: request.session.nombre || "",
  });
};

exports.get_servicios = (request, response, next) => {
  response.render("servicios", {
    isLoggedIn: request.session.isLoggedIn || false,
    nombre: request.session.nombre || "",
  });
};
