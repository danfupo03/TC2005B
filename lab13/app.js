const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const cymRoutes = require('./routes/cym.routes');

app.use('/', cymRoutes);

app.use((request, response, next) => {
    response.status(404);
    response.send('ERROR 404: Page not found.'); 
});

app.listen(3333);