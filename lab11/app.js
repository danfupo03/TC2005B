const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const indexRoutes = require('./routes/index.routes');
const buyRoutes = require('./routes/buy.routes'); 
const aboutusRoutes = require('./routes/aboutus.routes');

app.use('/', indexRoutes);
app.use('/', buyRoutes);
app.use('/', aboutusRoutes);

app.use((request, response, next) => {

    response.status(404); //Cambia el código de estado de la respuesta

    response.send('404 La página que buscas no existe :('); //Manda la respuesta
});

app.listen(3000);