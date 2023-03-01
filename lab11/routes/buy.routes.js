const express = require('express');

const router = express.Router();

router.get('/buy', (request, response, next) => {

    let buy = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LAB_1</title>

        <link
        href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Noto+Sans:wght@300&display=swap"
        rel="stylesheet"
        />

        <style>.form-container,body{background-color:#f9f9f9}body,fieldset{margin:0;padding:0}h1,legend{font-weight:700}body{font-family:Arial,sans-serif;font-size:16px;line-height:1.5}h1{font-size:36px;margin:30px 0}.form-container{border-radius:5px;padding:20px}fieldset{border:none}legend{font-size:24px;margin-bottom:20px}label{display:block;font-size:16px;margin-bottom:10px}input[type=number]{background-color:#f0f0f0;border:none;border-radius:5px;box-shadow:inset 0 0 5px rgba(0,0,0,.2);color:#333;font-size:16px;padding:10px;width:100%}input[type=submit]{background-color:#007bff;border:none;border-radius:5px;color:#fff;cursor:pointer;font-size:18px;margin-top:20px;padding:10px 20px;transition:background-color .3s}input[type=submit]:hover{background-color:#0062cc}.cover{height:400px;background-image:url(https://conceptoabc.com/wp-content/uploads/2020/03/Tecnolopedia-tecnologC3ADa-portada.jpg);color:#fff;background-size:cover;background-position:center;background-color:rgba(0,0,0,.5);background-blend-mode:darken}.foot,.nav-back{background-color:#010811}.foot{width:100%}.foot .group-1{width:100%;max-width:1200px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:50px;padding:45px 0}.foot .group-1 .box figure{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.foot .group-1 .box figure img{width:350px}.foot .group-1 .box h2{color:#fff;margin-bottom:25px;font-size:20px}.foot .group-1 .box p{color:#efefef;margin-bottom:10px}.foot .group-1 .social-media a{display:inline-block;text-decoration:none;width:45px;height:45px;line-height:45px;color:#fff;margin-right:10px;background-color:#0d2033;text-align:center;transition:.3s}.foot .group-1 .social-media a:hover{color:#0ff}.foot .group-2{background-color:#0a1a2a;padding:15px 10px;text-align:center;color:#fff}.foot .group-2 small{font-size:15px}@media screen and (max-width:800px){.foot .group-1{width:90%;grid-template-columns:repeat(1,1fr);grid-gap:30px;padding:35px 0}}</style>

        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
        />

        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
        ></script>

        <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
        />

        <script
        src="https://kit.fontawesome.com/87b5cb0a2b.js"
        crossorigin="anonymous"
        ></script>
    </head>

    <body>
        <header>
        <nav class="navbar navbar-light nav-back">
            <div class="container-fluid">
            <a href="/" class="navbar-brand">
                <img
                src="https://www.pngmart.com/files/11/Technology-PNG-Free-Download.png"
                alt="Logo de tecnológico de Monterrey"
                height="100"
                width="175"
                />
            </a>
            </div>
        </nav>

        <div
            class="cover d-flex justify-content-center align-items-center flex-column"
        >
            <h1>Compra</h1>
        </div>
        </header>

        <section>
            <div class="container mt-5 mb-5">
                <form class="form-container" action="/buy" method="POST">
                    <fieldset class="fieldset-container">
                        <legend>Selecciona la cantidad del producto</legend>
                        <div class="form-container">
                        <form>
                            <div class="form-field">
                            <label for="mouse">Mouse - $231.20 mxn</label>
                            <input
                                type="number"
                                id="mouse"
                                name="mouse"
                                value="0"
                                min="0"
                                required
                            />
                            </div>
                            <div class="form-field">
                            <label for="monitor">Monitor - $3199.99 mxn</label>
                            <input
                                type="number"
                                id="monitor"
                                name="monitor"
                                value="0"
                                min="0"
                                required
                            />
                            </div>
                            <div class="form-field">
                            <label for="audifonos">Audífonos - $499.99 mxn</label>
                            <input
                                type="number"
                                id="audifonos"
                                name="audifonos"
                                value="0"
                                min="0"
                                required
                            />
                            </div>
                            <div class="form-field">
                            <label for="teclado">Teclado - $259.99 mxn</label>
                            <input
                                type="number"
                                id="teclado"
                                name="teclado"
                                value="0"
                                min="0"
                                required
                            />
                            </div>
                            <input type="submit" value="Pedir"/>
                        </form>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>

        <section>
        <footer class="foot">
            <div class="group-1">
            <div class="box">
                <figure>
                <a href="/">
                    <img
                    src="https://www.pngmart.com/files/11/Technology-PNG-Free-Download.png"
                    alt="..."
                    />
                </a>
                </figure>
            </div>
            <div class="box">
                <h2>Síguenos</h2>
                <div class="social-media">
                <a
                    href="https://github.com/danfupo03/TC2005B"
                    class="fa fa-github"
                    target="_blank"
                    rel="noopener noreferrer"
                ></a>
                </div>
            </div>
            </div>
            <div class="group-2">
            <small
                >&copy; 2022 <b>Daniel Fuentes</b> - Todos los Derechos
                Reservados.</small
            >
            </div>
        </footer>
        </section>
    </body>
    </html>
    `;
    response.send(buy);
});

router.post('/buy', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write('<head><meta charset="utf-8"><style>.form-container,body{background-color:#f9f9f9}body,ul{margin:0;padding:0}body{font-family:Arial,sans-serif;font-size:16px;line-height:1.5}.form-container{border-radius:5px;padding:20px}ul{list-style:none}li{padding:10px 20px;margin-bottom:10px;border-radius:5px;background-color:#f0f0f0;box-shadow:0 2px 2px rgba(0,0,0,.1);transition:background-color .3s}li:hover{background-color:#e0e0e0}</style></head><body>');
    
    let header2 = `
    <header>
        <h1 style="margin-left: 20px">Total de tu compra</h1>
    </header>
    `;

    let nMonitor = request.body.monitor
    let nTeclado = request.body.teclado
    let nMouse = request.body.mouse
    let nAudifonos = request.body.audifonos

    response.write(header2)

    response.write('<div class="form-container">');
    let respuesta = "<ul>";
    let total = 0;

    if (nMonitor > 0) {
        respuesta += "<li>" + 3199.99 * nMonitor + " mxn x" + nMonitor + " monitor/es</li>";
        total += 3199.99 * nMonitor;
    }
    if (nTeclado > 0) {
        respuesta += "<li>" + 259.99 * nTeclado + " mxn x" + nTeclado + " teclado/s</li>";
        total += 259.99 * nTeclado;
    }
    if (nMouse > 0) {
        respuesta += "<li>" + 231.20 * nMouse + " mxn x" + nMouse + " mouse/s</li>";
        total += 231.20 * nMouse;
    }
    if (nAudifonos > 0) {
        respuesta += "<li>" + 169.99 * nAudifonos + " mxn x" + nAudifonos + " audifono/s</li>";
        total += 169.99 * nAudifonos;
    }
    
    respuesta += "</ul>";

    let roundedTotal = total.toFixed(2);

    response.write(respuesta);
    response.write("<h2 style='margin-left: 10px'>Valor total: " + roundedTotal + " mxn</h2>");
    response.write("</div>");

    return response.end();
});

module.exports = router;