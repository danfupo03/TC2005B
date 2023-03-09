const Machine = require("../models/cym.model");

exports.get_lista = (request, response, next) => {

  const cookies = request.get("Cookie") || "";

  let consultas = cookies.split("=")[1] || 0;

  consultas++;

  response.setHeader("Set-Cookie", "consultas=" + consultas + "; HttpOnly");

  response.render("lista", { machines: 
    Machine.fetchAll(),
    ultimo_machine: request.session.ultimo_machine || "", 
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
