const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/buy', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'buy.html'));
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