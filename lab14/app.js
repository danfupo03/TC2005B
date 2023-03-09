const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(
  session({
    secret:
      "mi string secreto que debe ser un string aleatorio muy largo, no como éste",
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

const rutasUsers = require("./routes/users.routes");

app.use("/users", rutasUsers);

const cymRoutes = require("./routes/cym.routes");

app.use("/", cymRoutes);

app.use((request, response, next) => {
  response.status(404);
  response.send("ERROR 404: Page not found.");
});

app.listen(3333);
