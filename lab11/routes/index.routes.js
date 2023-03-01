const express = require('express');

const router = express.Router();

router.get('/home', (request, response, next) => {

    let index = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LAB_11</title>
    
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Noto+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
    
        <style>body{margin:0;box-sizing:border-box;font-family:"Noto Sans",sans-serif;background-color:#010f1e}h1,h2{font-family:"Fjalla One",sans-serif}.cover{height:400px;background-image:url(https://conceptoabc.com/wp-content/uploads/2020/03/Tecnolopedia-tecnologC3ADa-portada.jpg);color:#fff;background-size:cover;background-position:center;background-color:rgba(0,0,0,.5);background-blend-mode:darken}.foot,.nav-back{background-color:#010811}.cover-small{height:200px;background-blend-mode:normal}.justify-text{text-align:justify}.name{color:#2b073a}.foot{width:100%}.foot .group-1{width:100%;max-width:1200px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:50px;padding:45px 0}.foot .group-1 .box figure{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.foot .group-1 .box figure img{width:350px}.foot .group-1 .box h2{color:#fff;margin-bottom:25px;font-size:20px}.foot .group-1 .box p{color:#efefef;margin-bottom:10px}.foot .group-1 .social-media a{display:inline-block;text-decoration:none;width:45px;height:45px;line-height:45px;color:#fff;margin-right:10px;background-color:#0d2033;text-align:center;transition:.3s}.foot .group-1 .social-media a:hover{color:#0ff}.foot .group-2{background-color:#0a1a2a;padding:15px 10px;text-align:center;color:#fff}.foot .group-2 small{font-size:15px}@media screen and (max-width:800px){.foot .group-1{width:90%;grid-template-columns:repeat(1,1fr);grid-gap:30px;padding:35px 0}}.btn-scrolltop{position:fixed;bottom:20px;right:20px;padding:10px 15px;background:#00f;color:#fff;border:1px solid #00f;border-radius:100%;cursor:pointer;transform:scale(0);transition:.3s}.btn-scrolltop-on{transform:scale(1)}h1 span{position:relative;top:60px;left:10px;display:inline-block;color:#fff;font-family:Verdana;font-size:50px;text-shadow:0 1px 0 #ccc,0 2px 0 #ccc,0 3px 0 #ccc,0 4px 0 #ccc,0 5px 0 #ccc,0 6px 0 #ccc,0 7px 0 #ccc,0 8px 0 #ccc,0 9px 0 #ccc,0 10px 10px rgba(255,255,255,.4);animation:.9s infinite alternate jumpy}h1 span:nth-child(2){animation-delay:.1s}h1 span:nth-child(3){animation-delay:.2s}h1 span:nth-child(4){animation-delay:.3s}h1 span:nth-child(5){animation-delay:.4s}h1 span:nth-child(6){animation-delay:.5s}h1 span:nth-child(7){animation-delay:.6s}h1 span:nth-child(8){animation-delay:.7s}h1 span:nth-child(9){animation-delay:.8s}h1 span:nth-child(10){animation-delay:.9s}h1 span:nth-child(11){animation-delay:1s}h1 span:nth-child(12){animation-delay:1.1s}h1 span:nth-child(13){animation-delay:1.2s}h1 span:nth-child(14){animation-delay:1.3s}@keyframes jumpy{100%{top:-20px}}</style>
    
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
            <h1>
              <span>T</span>
              <span>e</span>
              <span>c</span>
              <span>h</span>
              <span></span>
              <span>S</span>
              <span>t</span>
              <span>o</span>
              <span>r</span>
              <span>e</span>
            </h1>
          </div>
        </header>
    
        <section>
          <div class="container mt-5 mb-5 d-flex">
            <img src="https://i.pinimg.com/736x/c2/81/6c/c2816c7efac6973a3ef401852f99bcfd.jpg" alt="" height="350" width="" class="me-5" />
            <p class="justify-text">
              <a href="/about">About us</a> ipsum dolor sit amet, consectetur adipisicing elit. 
              Ad iure, adipisci accusantium nesciunt magnam, ab rem iste 
              dolorum distinctio minima nemo saepe aut cupiditate, cumque 
              omnis dicta ipsum voluptates! Sapiente?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Ad quod quo recusandae quos odit laborum delectus nobis doloremque deserunt, 
              sunt at autem quae unde voluptas. Accusamus maiores est nam consequuntur.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Fugiat cumque quo cum harum nostrum deserunt reiciendis consequatur tempore delectus neque ipsam id, 
              accusantium laboriosam dolor amet dolore, 
              odio doloribus commodi ea perferendis quae unde magnam voluptatem. 
              Iure blanditiis ut illo, accusantium dolorem repellendus odit eveniet, 
              optio perferendis exercitationem perspiciatis placeat unde! 
              Quas quia sapiente eius commodi animi ipsa illum, 
              quibusdam magni velit obcaecati distinctio maxime mollitia natus blanditiis veritatis aspernatur atque porro ea reprehenderit eum minus, 
              tempore placeat? Quo illo debitis accusamus vero, veritatis eligendi. 
              Atque modi exercitationem, quibusdam officia molestiae ex, 
              vitae architecto nulla totam neque ipsa impedit quas laboriosam quo doloremque dignissimos rem magnam!
            <ul>
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <span>Querétaro, México</span>
              </li>
              <li>
                <i class="fas fa-calendar"></i>
                <span>Lun-Vier</span>
              </li>
              <li>
                <i class="fas fa-clock"></i>
                <span>9am - 7pm</span>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <span>techstore@gmail.com</span>
              </li>
            </ul>
          </div>
        </section>
    
        <section>
          <div class="container mt-5 mb-5">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card">
                  <img src="https://m.media-amazon.com/images/I/61IDSeQ6c+L._AC_SY355_.jpg"
                  class="card-img-top" alt="..." width="" height="400">
                  <div class="card-body">
                    <h5 class="card-title">Ratón Mouse de Juegos RGB Gaming, 7200 DPI Ajustable Ratón Ergonómico con Cable, 7 Botones Programables con 7 Modos de Retroiluminación RGB Cómodo, Mouse Gamer con 16.8 Millones de Colores RGB Retroiluminado para Computadora Portátil PC Gamer Chromebook</h5>
                    <p class="card-text justify-text">
                      <strong>Acerca de este artículo:</strong>
                      <br>- Iluminación RGB Brillante & Personalizable: El ratón para juegos con retroiluminación RGB con 7 modos de retroiluminación diferentes brinda excelentes efectos visuales, una iluminación notable, crea una atmósfera de juego intensa y brinda la mejor experiencia de juego. El mouse para juegos le ofrece una personalización total para su computadora y portátil de juegos. (La iluminación se puede cambiar y apagar presionando un botón)
                      <br>- Experiencia de Juego Profesional Los 7 botones programables permiten una productividad y eficiencia superiores para satisfacer todas sus necesidades de juego. 5 perfiles de memoria, cada uno con un color de luz dedicado para una identificación rápida y un LED RGB de retroiluminación de 16 millones de colores estilo “Respiración”, En comparación con otros ratones, se ha agregado el diseño de barra de luz RGB de dos capas en ambos lados, para ofrecerle una fantástica experiencia de juego nocturno.
                      <br>- SENSACIÓN A LA MANO EXTREMADAMENTE CÓMODA El mouse mide 11x6.5x3cm, el área de la palma posterior que se adapta perfectamente a la mano brinda mucho más control sobre ella. Y la forma aerodinámica y ergonómica ofrece la máxima comodidad y apoyo y con rueda de desplazamiento en goma y suave agarre lateral. El mouse SANGKEE perfecta para trabajar, estudiar o jugar. La forma simétrica es conveniente para usuarios zurdos o diestros.
                      <br>- 5 NIVELES AJUSTABLES HASTA 7200 DPI 7 Botones sensibles y con 5 DPI ajustables, cambia los niveles de DPI entre 1200, 2400, 3500, 5500 y 7200 para satisfacer sus necesidades especiales con tecnología de seguimiento óptico proporciona alta sensibilidad y seguimiento preciso en una amplia gama de superficies. Ayudarle a lograr un excelente rendimiento en los juegos.
                      <br>- Elección de Jugadores Extremos: Ya sea que esté apuntando, corriendo o atacando, ¡El ratón para juegos profesional es su arma básica! El ratón será tu compañero ideal. Compatible con sistemas Windows 2000 / ME / XP / 03 / VISTA / 7/8/10 para uso programable y Mac OS para uso normal.
                    </p>
                    <br><h5 class="card-subtitle">$231.20</h5>
                    <br><a href="/buy" class="btn btn-primary">Buy</a>
                  </div>
                </div>
              </div>
    
              <div class="col">
                <div class="card">
                  <img src="https://images.samsung.com/is/image/samsung/mx-ur55-lu28r550uqlxzx-frontblack-248668639?$650_519_PNG$"
                  class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">SAMSUNG LS24R350FZLXZX - Monitor Plano 24" sin bordes, Experiencia de Juego inmersiva, 1920 X 1080, 75Hz</h5>
                    <p class="card-text justify-text">
                      <strong>Acerca de este artículo</strong>
                      <br>- Diseño simple y sofisticación total en un monitor con estilo
                      <br>- Obtenga la ventaja en cada juego gracias a las configuraciones de color y contraste de imagen óptimos
                      <br>- Ahora, las escenas de acción lucen impecables. Ya sea que esté disfrutando de su programa televisivo favorito, de un video o videojuego, la frecuencia de actualización de 75 Hz le ofrece una imagen más suave, para un entretenimiento sin retrasos ni efecto fantasma.
                      <br>- La avanzada tecnología de confort ocular reduce la fatiga visual, permitiéndole utilizar el monitor por un mayor periodo de tiempo. Además, la tecnología Flicker Free elimina continuamente el agotador parpadeo de la pantalla
                    <br><h5 class="card-subtitle">$3,199.00</h5>
                    <br><a href="/buy" class="btn btn-primary">Buy</a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card">
                  <img src="https://m.media-amazon.com/images/I/61ThgSaAfqL._AC_SY355_.jpg"
                  class="card-img-top" alt="..." width="" height="400">
                  <div class="card-body">
                    <h5 class="card-title">SAMSUNG LS24R350FZLXZX - Monitor Plano 24" sin bordes, Experiencia de Juego inmersiva, 1920 X 1080, 75Hz</h5>
                    <p class="card-text justify-text">
                      <strong>Acerca de este artículo</strong>
                      <br>- [Compatibilidad Excelente Conecte] y use, no necesita controlador. Admite PlayStation 4, Nueva Xbox One, PC, Nintendo 3DS, Ordenador portátil, PSP, Tableta, iPad, Teléfono Móvil. Tenga en cuenta que necesita un Adaptador de Microsoft adicional (No incluido) para conectar con una versión anterior del controlador Xbox One y los auriculares no son compatibles con PS3 y Xbox360. Con un adaptador de 1 a 2 incluido, los auriculares son adecuados para diferentes escenas.
                      <br>- [Efecto de Sonido Extraordinario] Sintonizado estrictamente por un técnico profesional, la unidad del dispositivo de transmisión de 50 mm pone el énfasis en el rendimiento del sonido y crea un sonido estéreo potente, sentirá como si realmente estuviera en la escena del juego. Con efectos de sonido de bajos impactantes, claros y profundos, estos auriculares son una muy buena opción para juegos, películas y música.
                      <br>- [Micrófono Omnidireccional Actualizado] El micrófono omnidireccional suave con función de cancelación de ruidos se puede fijar en cualquier posición que desee, esto reduce los ruidos y asegura una recopilación y entrega de voz clara. El controlador en línea posee control de volumen y tecla de silencio, fácil de ajustar el volumen y encender / apagar el micrófono durante los juegos. Los auriculares son ideales para jugar, trabajar, estudiar, charlar y usar Skype, etc.
                      <br>- [Comodidad Extrema Auriculares] para juego profesional con diseño súper liviano, menos de 370g. Diadema para la cabeza y orejeras cómodas y suaves, no presionan ni provocan calor. Se garantiza gran confort incluso después de un largo tiempo de uso. La banda ajustable se adapta a cabezas de diferentes tamaños, adecuada para hombres, mujeres, adolescentes y otros grupos.
                      <br>- [Estilo de Juego Único] Son los primeros auriculares para juego Micolindun que brillan tanto en la parte frontal como lateral. La espléndida iluminación crea una maravillosa atmósfera para el juego. A diferencia de los auriculares comunes en el mercado, éste tiene un estilo guerrero más visual. ¡A triunfar con ellos!
                    <br><h5 class="card-subtitle">499.99</h5>
                    <br><a href="/buy" class="btn btn-primary">Buy</a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card">
                  <img src="https://m.media-amazon.com/images/I/619MHX-XijL._AC_SY355_.jpg"
                  class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">OCELOT GAMING Teclado Gamer Extendido OGEK01, Membrana, Cubierta metálica. Iluminación de 3 Colores, con Sujetador para el Smartphone</h5>
                    <p class="card-text justify-text">
                      <strong>Acerca de este artículo</strong>
                      <br>- Funcionamiento silencioso: Tecnología de membrana que otorgará la mejor precisión con el menor ruido posible. Para esas sesiones de juego que se extienden hasta la noche.
                      <br>- Inicia tus Streamings: Cuenta con soporte para smartphone que te permitirá realizar transmisiones mientras juegas o leer el chat de tus followers.
                      <br>- Iluminación arcoíris: Su gama de colores con tres modos de iluminación harán más llamativo tu Set Up.
                      <br>- Acabado mate: Fabricado en plástico de alta resistencia y cubierta metálica que te otorgará una gran experiencia de uso durante más tiempo.
                      <br>- Teclado extendido: Las 104 teclas te permitirán jugar y trabajar más cómodamente, gracias a su teclado numérico.
                      <br>- No te detengas: Sus 7 teclas anti-ghosting te resultarán muy útiles en esas partidas que requieren más de una mano
                      <br>- Durabilidad: Cuenta con cable de 1.5mts recubierto de nylon para asegurar su duración
                    <br><h5 class="card-subtitle">$280.00</h5>
                    <br><a href="/buy" class="btn btn-primary">Buy</a>
                    </p>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </section>
    
        <button class="btn-scrolltop" id="btn_scrolltop">
          <i class="fas fa-chevron-up"></i>
        </button>
        <script>
          const btn_scrolltop = document.getElementById("btn_scrolltop");
          btn_scrolltop.addEventListener("click", () => {
            window.scrollTo(0, 0);
          });
    
          window.onscroll = () => {
            if (window.scrollY < 300) {
              btn_scrolltop.classList.remove("btn-scrolltop-on");
            } else {
              btn_scrolltop.classList.add("btn-scrolltop-on");
            }
          };
        </script>
    
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
    response.send(index);
});

module.exports = router;