const express = require('express');
const path = require('path');
const hasCreate = require("../util/has-create");

const router = express.Router();

const cymController = require('../controllers/cym.controller');

router.get('/index', cymController.get_index);

router.get('/lista/:marca', cymController.get_lista);

router.get('/lista', cymController.get_lista);

router.get('/buscar/:valor_busqueda', cymController.get_buscar);

router.get('/nuevo', cymController.get_nuevo);

router.post('/nuevo', cymController.post_nuevo);

router.get('/historia', cymController.get_historia);

router.get('/laboratorio', cymController.get_laboratorio);

router.get('/servicios', cymController.get_servicios);

module.exports = router;