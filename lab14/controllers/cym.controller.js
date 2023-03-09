const Machine = require("../models/cym.model");

exports.get_lista = (request, response, next) => {
  let counter = request.cookies.counter || 0;

  // increment the counter and set the cookie
  counter++;
  response.cookie("counter", counter);

  response.render("lista", {
    machines: Machine.fetchAll(),
    ultimo_machine: request.session.ultimo_machine || "",
    counter: counter,
  });
};

exports.get_nuevo = (request, response, next) => {
  response.render("nuevo");
};

exports.post_nuevo = (request, response, next) => {
  const machine = new Machine({
    nombre: request.body.nombre,
    imagen: request.body.imagen,
    descripcion: request.body.descripcion,
    handle: request.body.handle,
  });
  machine.save();

  request.session.ultimo_machine = machine.nombre;

  response.status(300).redirect("/lista");
};

exports.get_index = (request, response, next) => {
  response.render("index");
};

exports.get_historia = (request, response, next) => {
  response.render("historia");
};

exports.get_laboratorio = (request, response, next) => {
  response.render("laboratorio");
};

exports.get_servicios = (request, response, next) => {
  response.render("servicios");
};
