const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);

    if(request.url === "/") {

        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"><style>.form-container,body{background-color:#f9f9f9}a.button,body{font-size:16px}body,ul{margin:0;padding:0}a.button,li{padding:10px 20px}body{font-family:Arial,sans-serif;line-height:1.5}.form-container{border-radius:5px;padding:20px}a.button{display:inline-block;background-color:#007bff;color:#fff;text-decoration:none;border-radius:5px;border:none;cursor:pointer}a.button:hover{background-color:#3e8e41}ul{list-style:none}li{margin-bottom:10px;border-radius:5px;background-color:#f0f0f0;box-shadow:0 2px 2px rgba(0,0,0,.1);transition:background-color .3s}li:hover{background-color:#e0e0e0}</style></head><body>');
        
        let index = `
        <header>
            <h1 style="margin-left: 24px">Tienda de computadoras</h1>
        </header>
        <main>
            <div class="form-container">
                <div class="row">
                    <div class="col-12">
                        <h2>Productos</h2>
                        <ul>
                            <li>Monitor - $3499.99 mxn</a></li>
                            <li>Teclado - $3499.99 mxn</a></li>
                            <li>Mouse - $3499.99 mxn</a></li>
                            <li>Audífonos - $3499.99 mxn</a></li>
                            <li>Disco duro - $3499.99 mxn</a></li>
                            <li>Memoria RAM - $3499.99 mxn</a></li>
                            <li>Procesador - $3499.99 mxn</a></li>
                            <li>Tarjeta de video - $3499.99 mxn</a></li>
                            <li>Tarjeta madre - $3499.99 mxn</a></li>
                            <li>Fuente de poder - $3499.99 mxn</a></li>
                        </ul>
                        <a href="/buy" class="button">Comprar</a>
                    </div>
                </div>
            </div>
        </main>
        `;

        response.write(index);

        response.write("</body></html>");
        response.end();

    } else if(request.url === "/buy" && request.method === "GET") {

        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"><style>.form-container,body{background-color:#f9f9f9}body,fieldset{margin:0;padding:0}h1,legend{font-weight:700}body{font-family:Arial,sans-serif;font-size:16px;line-height:1.5}h1{font-size:36px;margin:30px 0}.form-container{border-radius:5px;padding:20px}fieldset{border:none}legend{font-size:24px;margin-bottom:20px}label{display:block;font-size:16px;margin-bottom:10px}input[type=number]{background-color:#f0f0f0;border:none;border-radius:5px;box-shadow:inset 0 0 5px rgba(0,0,0,.2);color:#333;font-size:16px;padding:10px;width:100%}input[type=submit]{background-color:#007bff;border:none;border-radius:5px;color:#fff;cursor:pointer;font-size:18px;margin-top:20px;padding:10px 20px;transition:background-color .3s}input[type=submit]:hover{background-color:#0062cc}</style></head><body>');

        let header1 = `
        <header>
            <h1 style="margin-left: 24px">Añadir al carrito</h1>
        </header>
        `;

        response.write(header1)

        response.write('<form action="/buy" method="POST">');

        let form = `
        <div class="form-container">
            <fieldset class="fieldset-container">
                <legend>Selecciona la cantidad del producto</legend>
                <div class="form-container">
                    <form>
                        <div class="form-field">
                            <label for="monitor">Monitor - $3199.99 mxn</label>
                            <input type="number" id="monitor" name="monitor" value="0" min="0" required>
                        </div>
                        <div class="form-field">
                            <label for="teclado">Teclado - $319.99 mxn</label>
                            <input type="number" id="teclado" name="teclado" value="0" min="0" required>
                        </div>
                        <div class="form-field">
                            <label for="mouse">Mouse - $259.99 mxn</label>
                            <input type="number" id="mouse" name="mouse" value="0" min="0" required>
                        </div>
                        <div class="form-field">
                            <label for="mouse">Mouse - $259.99 mxn</label>
                            <input type="number" id="mouse" name="mouse" value="0" min="0" required>
                        </div>
                        <div class="form-field">
                            <label for="audifonos">Audífonos - $169.99 mxn</label>
                            <input type="number" id="audifonos" name="audifonos" value="0" min="0" required>
                        </div>
                        <div class="form-field">
                            <label for="disco_duro">Disco duro - $1359.99 mxn</label>
                            <input type="number" id="disco_duro" name="disco_duro" value="0" min="0" required>
                        </div>
                        <div class="form-field">
                            <label for="memoria_ram">Memoria Ram - $459.99 mxn</label>
                            <input type="number" id="memoria-ram" name="memoria-ram" value="0" min="0" required>
                        </div>
                        <div class="form-field">
                            <label for="tarjeta-video">Tarjeta Video - $8599.99 mxn</label>
                            <input type="number" id="tarjeta-video" name="tarjeta-video" value="0" min="0" required>
                        </div>
                        <div class="form-field">
                            <label for="tarjeta-madre">Tarjeta Madre - $2459.99 mxn</label>
                            <input type="number" id="tarjeta-madre" name="tarjeta-madre" value="0" min="0" required>
                        </div>
                        <div class="form-field">
                            <label for="fuente-de-poder">Fuente de Poder - $1059.99 mxn</label>
                            <input type="number" id="mouse" name="mouse" value="0" min="0" required>
                        </div>
                        <input type="submit" value="Pedir">
                    </form>
                </div>
            </fieldset>
        </div>   
        `;

        response.write(form);
        response.write("</form>");
        response.write("</body></html>");
        response.end();

    } else if(request.url === "/buy" && request.method === "POST") {

        const datos = [];
        
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);

            response.setHeader('Content-Type', 'text/html');
            response.write("<!DOCTYPE html>");
            response.write("<html>");
            response.write('<head><meta charset="utf-8"><style>.form-container,body{background-color:#f9f9f9}body,ul{margin:0;padding:0}body{font-family:Arial,sans-serif;font-size:16px;line-height:1.5}.form-container{border-radius:5px;padding:20px}ul{list-style:none}li{padding:10px 20px;margin-bottom:10px;border-radius:5px;background-color:#f0f0f0;box-shadow:0 2px 2px rgba(0,0,0,.1);transition:background-color .3s}li:hover{background-color:#e0e0e0}</style></head><body>');
            
            let header2 = `
            <header>
                <h1 style="margin-left: 20px">Total de tu compra</h1>
            </header>
            `;

            response.write(header2)

            response.write('<div class="form-container">');
            let respuesta = "<ul>";
            let total = 0;

            let data = {}
            let elementos = datos_completos.split('&');
            for (elemento of elementos) {
                let temp = elemento.split('=');
                data[temp[0]] = temp[1];
            }
            
            let nMonitor = Number(data['monitor']);
            let nTeclado = Number(data['teclado']);
            let nMouse = Number(data['mouse']);
            let nAudifonos = Number(data['audifonos']);
            let nDiscoDuro = Number(data['disco_duro']);
            let nMemoriaRam = Number(data['memoria-ram']);
            let nTarjetaVideo = Number(data['tarjeta-video']);
            let nTarjetaMadre = Number(data['tarjeta-madre']);
            let nFuentePoder = Number(data['fuente-de-poder']);

            if (nMonitor > 0) {
                respuesta += "<li>" + 3499.99 * nMonitor + " mxn x" + nMonitor + " monitor/es</li>";
                total += 3499.99 * nMonitor;
            }
            if (nTeclado > 0) {
                respuesta += "<li>" + 3499.99 * nTeclado + " mxn x" + nTeclado + " teclado/s</li>";
                total += 3499.99 * nTeclado;
            }
            if (nMouse > 0) {
                respuesta += "<li>" + 3499.99 * nMouse + " mxn x" + nMouse + " mouse/s</li>";
            }
            if (nAudifonos > 0) {
                respuesta += "<li>" + 169.99 * nAudifonos + " mxn x" + nAudifonos + " audifono/s</li>";
                total += 169.99 * nAudifonos;
            }
            if (nDiscoDuro > 0) {
                respuesta += "<li>" + 1359.99 * nDiscoDuro + " mxn x" + nDiscoDuro + " disco/s duro/s</li>";
                total += 1359.99 * nDiscoDuro;
            }
            if (nMemoriaRam > 0) {
                respuesta += "<li>" + 459.99 * nMemoriaRam + " mxn x" + nMemoriaRam + " memoria/s ram</li>";
                total += 459.99 * nMemoriaRam;
            }
            if (nTarjetaVideo > 0) {
                respuesta += "<li>" + 8599.99 * nTarjetaVideo + " mxn x" + nTarjetaVideo + " tarjeta/s video</li>";
                total += 8599.99 * nTarjetaVideo;
            }
            if (nTarjetaMadre > 0) {
                respuesta += "<li>" + 2459.99 * nTarjetaMadre + " mxn x" + nTarjetaMadre + " tarjeta/s madre</li>";
                total += 2459.99 * nTarjetaMadre;
            }
            if (nFuentePoder > 0) {
                respuesta += "<li>" + 1059.99 * nFuentePoder + " mxn x" + nFuentePoder + " fuente/s poder</li>";
                total += 1059.99 * nFuentePoder;
            }
            
            respuesta += "</ul>";

            let roundedTotal = total.toFixed(2);

            response.write(respuesta);
            response.write("<h2 style='margin-left: 10px'>Valor total: " + roundedTotal + " mxn</h2>");
            response.write("</div>");

            return response.end();
        });
        
    } else {

        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');

        let header3 = `
            <header>
                <h1 style="margin-left: 10px">404 La página que estás buscando no existe :(</h1>
            </header>
            `;

            response.write(header3)

        response.write("</body></html>");
        response.end();

    }
    
});

server.listen(3333);