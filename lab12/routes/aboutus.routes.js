const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/about', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'aboutus.html'));
});

module.exports = router;