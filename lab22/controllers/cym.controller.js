const Machine = require("../models/cym.model");

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

  console.log(request.file);

  const machine = new Machine({
    nombre: request.body.nombre,
    descripcion: request.body.descripcion,
    marca: request.body.marca,
    tipo: request.body.tipo,
    imagen: request.file.filename,
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
