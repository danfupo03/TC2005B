const express = require('express');

const router = express.Router();

router.get('/about', (request, response, next) => {

    let buy = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>About Us</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>body,p{line-height:1.5}body,ul{margin:0;padding:0}footer,p{color:#666}footer,header{text-align:center}body{font-family:Arial,sans-serif;font-size:16px}header{background-color:#333;color:#fff;padding:20px}main{margin:20px}section{margin-bottom:40px}h2{color:#333;font-size:24px;margin-top:0}p{font-size:16px}ul{list-style:none}li{margin-bottom:20px}img{display:block;margin-bottom:10px;max-width:100%}footer{background-color:#eee;border-top:1px solid #ccc;padding:10px}.justify-text{text-align:justify}</style>
    </head>
    <body>
        <header>
        <h1>About Us</h1>
        </header>
        
        <main>
        <section>
            <h2>Our Mission</h2>
            <p class="justify-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Nulla at volutpat diam ut venenatis tellus in. Blandit turpis cursus in hac habitasse platea. 
                Diam vulputate ut pharetra sit amet aliquam id. Et ultrices neque ornare aenean euismod elementum nisi quis. 
                Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Quis blandit turpis cursus in hac. 
                Dui sapien eget mi proin sed libero enim. In cursus turpis massa tincidunt. Nulla facilisi morbi tempus iaculis. 
                Tincidunt ornare massa eget egestas purus viverra accumsan. Sem fringilla ut morbi tincidunt. 
                Fusce id velit ut tortor pretium viverra suspendisse potenti. Proin nibh nisl condimentum id venenatis.
                Tristique senectus et netus et malesuada fames ac turpis. Nunc mi ipsum faucibus vitae aliquet. 
                Sit amet cursus sit amet dictum. Velit sed ullamcorper morbi tincidunt. 
                Ac tortor dignissim convallis aenean. Etiam erat velit scelerisque in dictum. 
                Ipsum nunc aliquet bibendum enim facilisis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. 
                Tempus egestas sed sed risus. 
                Quisque id diam vel quam elementum pulvinar etiam.
            </p>
        </section>
        
        <section>
            <h2>Our Story</h2>
            <p class="justify-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Mattis enim ut tellus elementum sagittis. Vitae turpis massa sed elementum tempus. 
            Morbi tristique senectus et netus et malesuada. 
            Vitae turpis massa sed elementum tempus egestas sed sed risus. 
            Venenatis tellus in metus vulputate eu scelerisque. 
            Vulputate enim nulla aliquet porttitor lacus luctus. 
            Nec nam aliquam sem et tortor consequat id porta nibh. 
            Lectus magna fringilla urna porttitor. Convallis convallis tellus id interdum velit laoreet id donec ultrices. 
            Vitae congue eu consequat ac felis donec. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. 
            Blandit aliquam etiam erat velit scelerisque in dictum non. Commodo viverra maecenas accumsan lacus vel. 
            Faucibus purus in massa tempor nec feugiat. Eget gravida cum sociis natoque penatibus et magnis dis parturient. 
            Eu consequat ac felis donec et. Interdum velit euismod in pellentesque massa. Quisque sagittis purus sit amet volutpat. 
            Lacus sed viverra tellus in hac.
            </p>
        </section>
        
        <section>
            <h2>Our Team</h2>
            <ul>
            <li>Pedro</li>
            <li>Aldo</li>
            <li>Verónica</li>
            </ul>
        </section>
        
        <section>
            <h2>Contact Us</h2>
            <a href="https://github.com/danfupo03/TC2005B">https://github.com/danfupo03/TC2005B</a>
        </section>
        </main>
        
        <footer>
        <p>&copy; 2022 <b>Daniel Fuentes</b> - Todos los Derechos Reservados.</p>
        </footer>
    </body>
    </html>

    `;
    response.send(buy);
});

module.exports = router;