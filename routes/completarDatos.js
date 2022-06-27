//hacer las peticiones post, get , delete
/*
path : api/usuarios
*/

const { Router } = require('express');
const { completarDatos } = require('../controllers/completardatos/completardatos');

const router = Router();
router.get('/', completarDatos);
module.exports = router;