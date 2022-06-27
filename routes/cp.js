//hacer las peticiones post, get , delete
/*
path : api/usuarios
*/
const { Router } = require('express');
const { getCodigos } = require('../controllers/codioPostal/buscarCp');
const router = Router();
router.get('/', getCodigos);
module.exports = router;