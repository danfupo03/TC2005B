const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const csrf = require("csurf");
const isAuth = require("./util/is-auth");
const multer = require("multer");

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
app.use(bodyParser.json());

app.use(cookieParser());

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
  destination: (request, file, callback) => {
    //'uploads': Es el directorio del servidor donde se subirán los archivos
    callback(null, "public/uploads");
  },
  filename: (request, file, callback) => {
    //aquí configuramos el nombre que queremos que tenga el archivo en el servidor,
    //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
    callback(null, new Date().toISOString() + "-" + file.originalname);
  },
});

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir,
//pero hay diferentes opciones si se quieren subir varios archivos.
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).fields([{ name: "imagen", maxCount: 1 }, { name: "pdf", maxCount: 1 }]));


const csrfProtection = csrf();
//...Y después del código para inicializar la sesión...
app.use(csrfProtection);

const rutasUsers = require("./routes/users.routes");

app.use("/", rutasUsers);

const cymRoutes = require("./routes/cym.routes");

app.use("/", isAuth, cymRoutes);

app.use((request, response, next) => {
  response.status(404);
  response.send("ERROR 404: Page not found.");
});

app.listen(3333);
