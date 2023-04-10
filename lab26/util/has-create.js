module.exports = (request, response, next) => {
  if (!(request.session.privilegios.indexOf("añadir_productos") >= 0)) {
    return response.redirect("/lista");
  }
  next();
};
